const init = () => {
    console.log("Window loaded");
    // Import the functions you need from the SDKs you need
  
    // import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
  
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    let firebaseConfig = {
        apiKey: "AIzaSyBmIe91vdSrSPvcQXXvkpglXmAans1_-D8",
        authDomain: "web-du-lich-37979.firebaseapp.com",
        projectId: "web-du-lich-37979",
        storageBucket: "web-du-lich-37979.appspot.com",
        messagingSenderId: "518898065343",
        appId: "1:518898065343:web:df3379daf16fa905544b0a"
    };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)
    // const app = initializeApp(firebaseConfig);
    console.log(firebase.app().name); //DEFAULT
    // console.log(firebase.app().name);
  
  
    // Chạy hàm này
    // firestoreFunction();
  
  }
  
  
  
  window.onload = init;
  
  
  
  ///// Viết hàm riêng thao tác thử với firebase Database
  // const firestoreFunction = async () => {
  
  //   // get one document
  //   const documentId = "ycpwtMNJmhMtPo6l0h5W";
  //   const response = await firebase.firestore().collection('users').doc(documentId).get();
  //   console.log("response: ", response);
  
  //   const user = getDataFromDoc(response);
  //   console.log("user: ", user);
  // }
  
  
  // const getDataFromDoc = (doc) => {
  //   const data = doc.data();
  //   data.id = doc.id;
  //   return data;
  // }