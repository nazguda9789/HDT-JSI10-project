const registerForm = document.getElementById('sign-up')


registerForm.addEventListener("submit", function (event) {
  event.preventDefault(); // giải quyết vđề tự động reload web

  const data = {
    email: registerForm.email.value,
    password: registerForm.password.value,
    confirmPassword: registerForm.confirmPassword.value
  }

  console.log(data);

  const register = async (data) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
      firebase.auth().currentUser.sendEmailVerification();
      alert("The email has been registered, please check your email");
    }
    catch (err) {
      console.log(err);
      alert(err.message);
    }
  }

  register(data);


  registerForm.email.value = ""
  registerForm.password.value = ""
  registerForm.confirmPassword.value = ""

  // location.href = "./login.htm l"
  // controller.register(data);
  // Kiểm tra lỗi người dùng type tại trang đăng ký
})