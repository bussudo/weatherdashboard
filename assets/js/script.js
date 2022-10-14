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
      document.getElementById("temp").innerHTML = data.current.temp;
      document.getElementById("wind_speed").innerHTML = data.current.wind_speed;
      document.getElementById("humidity").innerHTML = data.current.humidity;
      // document.getElementById("dateValue").innerHTML = Date();

      // console.log(data.current.temp);
      // console.log(data.current.wind_speed);
      // console.log(data.current.humidity);
      var dateValue = moment.unix(data.current.dt).format("MM/DD/YYYY");
      // var dateValue = moment
      //   .unix(data.current.dt)
      //   .toLocaleDateString("en-US", { weekday: "long" });
      // console.log(dateValue);
      document.getElementById("dateValue").innerHTML = dateValue;
      // document.getElementById("dateValue").innerHTML = data.current.dt;
    })
    .catch((err) => {
      console.log(err);
    });
}

startBtnEl.addEventListener("click", function (e) {
  city(e);
});
