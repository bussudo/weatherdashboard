let weather;
let lat;
let lon;
let q;
let appid;
let startBtnEl = document.getElementById("btn");
let current;

appid = "d108e2cfc3dc7b43eb551b30afdf1f82";

function getApi() {
  var requestUrl = "https://openweathermap.org/api/one-call-api";
}

function city(e) {
  e.preventDefault();
  let cityEl = document.getElementById("query");
  getWeather(cityEl.value);
  document.getElementById("city").innerHTML = cityEl.value;
}

// document.getElementById("tomorrow").innerHTML = Date();
// document.getElementById("day2").innerHTML = Date();
// document.getElementById("day3").innerHTML = Date();
// document.getElementById("day4").innerHTML = Date();
// document.getElementById("day5").innerHTML = Date();

document.querySelector(".curWeather").style.backgroundImage =
  "url('./assets/img/weather.png');";

function getWeather(city) {
  console.log(city);
  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q="${city}&appid=${appid}&units=imperial`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("This is my geolocation ", data);
      getOneCallAPI(data[0].lat, data[0].lon);
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

function getOneCallAPI(lat, lon) {
  fetch(
    `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${appid}&units=imperial&exclude=hourly,minutely,alerts`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("this is onecall API", data);
      document.getElementById("temp").innerHTML = "Temp:  " + data.current.temp;
      document.getElementById("wind_speed").innerHTML =
        "Wind Speed:  " + data.current.wind_speed;
      document.getElementById("humidity").innerHTML =
        "Humidity:  " + data.current.humidity;
      var dateValue = moment.unix(data.current.dt).format("MM/DD/YYYY");
      // var dateValue = moment
      //   .unix(data.current.dt)
      //   .toLocaleDateString("en-US", { weekday: "long" });
      // console.log(dateValue);
      // document.getElementById("dateValue").innerHTML = dateValue;
      //fields for tomorrow

      console.log(data.daily[1]);
      var day1 = moment.unix(data.daily[1].dt).format("MM/DD/YYYY");
      document.getElementById("temp1").innerHTML =
        "Temp:  " + data.daily[1].temp;
      document.getElementById("wind_speed1").innerHTML =
        "Wind Speed:  " + data.daily[1].wind_speed;
      document.getElementById("humidity1").innerHTML =
        "Humidity:  " + data.daily[1].humidity;

      var day2 = moment.unix(data.daily[2].dt).format("MM/DD/YYYY");
      document.getElementById("temp2").innerHTML =
        "Temp:  " + data.daily[2].temp;
      document.getElementById("wind_speed2").innerHTML =
        "Wind Speed:  " + data.daily[2].wind_speed;
      document.getElementById("humidity2").innerHTML =
        "Humidity:  " + data.daily[2].humidity;
    })
    .catch((err) => {
      console.log(err);
    });
}

// var dateTomorrow = moment.unix(data.daily.dt).format("MM/DD/YYYY");
// console.log(dateTomorrow);
// Printing data to forecast day 1
// $(".1date").text(
//   new Date(data.daily[1].dt * 1000).toLocaleDateString("en-US", {
//     weekday: "long",
//   }) +
//     ", " +
//     new Date(data.daily[1].dt * 1000).toLocaleDateString("en-US", {
//       day: "numeric",
//     })
// );
// $(".tempTomorrow").text(Math.round(data.daily[1].temp.day));
// document.querySelector(".Oneicon").src =
//   "https://openweathermap.org/img/wn/" + data.daily[1].weather[0].icon + ".png";
// $(".1windV").text(Math.round(data.daily[1].wind_speed) + "mph");
// $(".1humidityV").text(Math.round(data.daily[1].humidity) + "%");

startBtnEl.addEventListener("click", function (e) {
  city(e);
});
