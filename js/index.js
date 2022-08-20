// Call API ở đây
const APP_ID = '651daf0af47eb49a9b65a0007afcce53';
const DEFAULT_VALUE = '_ _';
// bọc nó dưới dạng chỗi nhé các em.
const searchInput = document.querySelector("#search-input");

const cityName = document.querySelector('.city-name')
const weatherState = document.querySelector(".weather-state");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");

const sunrise = document.querySelector(".sunrise");
const sunset = document.querySelector(".sunset");

const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");



// bắt sự kiện tại thẻ input
searchInput.addEventListener("change", function (event) {
  // console.log(event.target.value);
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&appid=${APP_ID}&lang=vi&units=metric`)
    .then(
      async function (res) {
        const data = await res.json();

        console.log(data);// in ra dữ liệu được gửi về từ trang openweather
        cityName.innerHTML = data.name || DEFAULT_VALUE;
        weatherState.innerHTML = data.weather[0].description || DEFAULT_VALUE;
        weatherIcon.src =
          `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` || DEFAULT_VALUE
        temperature.innerHTML = data.main.temp || DEFAULT_VALUE



        sunrise.innerHTML = miliseconToHour(data.sys.sunrise)
        sunset.innerHTML = miliseconToHour(data.sys.sunset)

        // sunset.innerHTML = moment.unix(data.sys.sunset).format('HH:mm');

        humidity.innerHTML = data.main.humidity;
        windSpeed.innerHTML = (data.wind.speed * 3.6);

        searchInput.value = '';
      }
    )
})



function miliseconToHour(time) {
  // Thuật toán quy đổi từ ms (mili giây) -> hh:mm:ss
  var sec = time;
  var date = new Date(sec * 1000);
  var timestr = date.toLocaleTimeString();
  return timestr;
}



// let city = "hanoi"
// // call API với fetch trong Javascript:
// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APP_ID}`)
//   .then(
//     async function (res) {
//       const data = await res.json();

//       console.log(data);// in ra dữ liệu được gửi về từ trang openweather
//     }
//   )


