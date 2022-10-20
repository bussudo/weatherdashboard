let weather;
let lat;
let lon;
let q;
let appid;
let startBtnEl = document.getElementById("btn");
let current;
const recentSearchList = [];

appid = "d108e2cfc3dc7b43eb551b30afdf1f82";

function getApi() {
  var requestUrl = "https://openweathermap.org/api/one-call-api";
}

function city(e) {
  e.preventDefault();
  let cityEl = document.getElementById("query");
  getWeather(cityEl.value);
  document.getElementById("city").innerHTML = cityEl.value;
  addtoRecentSearch(cityEl.value);
}

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
      // console.log("This is my geolocation ", data);
      getOneCallAPI(data[0].lat, data[0].lon);
      // console.log(data);
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
      document.getElementById("temp").innerHTML =
        "Temp:  " + Math.floor(data.current.temp);
      document.getElementById("wind_speed").innerHTML =
        "Wind Speed:  " + Math.floor(data.current.wind_speed);
      document.getElementById("humidity").innerHTML =
        "Humidity:  " + data.current.humidity;
      var dateValue = moment.unix(data.current.dt).format("MM/DD/YYYY");
      document.getElementById("dateValue").innerHTML = dateValue;

      //forecast data - Day 1
      // console.log(data.daily[1]);
      var date1 = moment.unix(data.daily[1].dt).format("MM/DD/YYYY");
      document.getElementById("date1").innerHTML = date1;
      document.getElementById("temp1").innerHTML =
        "Temp:  " + Math.floor(data.daily[1].temp.day);
      document.getElementById("wind_speed1").innerHTML =
        "Wind Speed:  " + Math.floor(data.daily[1].wind_speed);
      document.getElementById("humidity1").innerHTML =
        "Humidity:  " + data.daily[1].humidity;

      //Day 2
      var date2 = moment.unix(data.daily[2].dt).format("MM/DD/YYYY");
      document.getElementById("date2").innerHTML = date2;
      document.getElementById("temp2").innerHTML =
        "Temp:  " + Math.floor(data.daily[2].temp.day);
      document.getElementById("wind_speed2").innerHTML =
        "Wind Speed:  " + Math.floor(data.daily[2].wind_speed);
      document.getElementById("humidity2").innerHTML =
        "Humidity:  " + data.daily[2].humidity;

      //Day 3
      var date3 = moment.unix(data.daily[3].dt).format("MM/DD/YYYY");
      document.getElementById("date3").innerHTML = date3;
      document.getElementById("temp3").innerHTML =
        "Temp:  " + Math.floor(data.daily[2].temp.day);
      document.getElementById("wind_speed3").innerHTML =
        "Wind Speed:  " + Math.floor(data.daily[3].wind_speed);
      document.getElementById("humidity3").innerHTML =
        "Humidity:  " + data.daily[3].humidity;

      //Day 4
      var date4 = moment.unix(data.daily[4].dt).format("MM/DD/YYYY");
      document.getElementById("date4").innerHTML = date4;
      document.getElementById("temp4").innerHTML =
        "Temp:  " + Math.floor(data.daily[4].temp.day);
      document.getElementById("wind_speed4").innerHTML =
        "Wind Speed:  " + Math.floor(data.daily[4].wind_speed);
      document.getElementById("humidity4").innerHTML =
        "Humidity:  " + data.daily[4].humidity;
      //Day 5
      var date5 = moment.unix(data.daily[5].dt).format("MM/DD/YYYY");
      document.getElementById("date5").innerHTML = date5;
      document.getElementById("temp5").innerHTML =
        "Temp:  " + Math.floor(data.daily[5].temp.day);
      document.getElementById("wind_speed5").innerHTML =
        "Wind Speed:  " + Math.floor(data.daily[5].wind_speed);
      document.getElementById("humidity5").innerHTML =
        "Humidity:  " + data.daily[5].humidity;
    })
    .catch((err) => {
      console.log(err);
    });
}

function addtoRecentSearch(cityName) {
  let recentSearch = document.querySelector(".recentSearch");
  console.log(recentSearch);
  var cityBtn = document.createElement("button");
  cityBtn.classList.add("savedCity");
  cityBtn.textContent = cityName;
  cityBtn.addEventListener("click", () => {
    console.log("click");
  });
  var divElement = document.createElement("div");
  divElement.classList.add("column-item");
  divElement.appendChild(cityBtn);
  recentSearch.prepend(divElement);
  console.log(cityBtn);
  renderLastSearched(cityName);
}

const lastSearch = localStorage.getItem("city");
function renderLastSearched(city) {
  recentSearchList.push(city);
  console.log(recentSearchList);
  localStorage.setItem("searched", JSON.stringify(recentSearchList));
}

function getSearchedList(cityName) {
  let list = JSON.parse(localStorage.getItem("searched"));
  console.log(list);
  for (i = 0; i < list.length; i++) {
    addtoRecentSearch(list[i]);

    console.log(list[i]);
  }
}

function getOneCallCity(lat, lon) {
  fetch(
    `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${appid}&units=imperial&exclude=hourly,minutely,alerts`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("this is onecall City", data);
      document.getElementById("temp").innerHTML =
        "Temp:  " + Math.floor(data.current.temp);
      document.getElementById("wind_speed").innerHTML =
        "Wind Speed:  " + Math.floor(data.current.wind_speed);
      document.getElementById("humidity").innerHTML =
        "Humidity:  " + data.current.humidity;
      var dateValue = moment.unix(data.current.dt).format("MM/DD/YYYY");
      document.getElementById("dateValue").innerHTML = dateValue;

      //forecast data - Day 1
      console.log(data.daily[1]);
      var date1 = moment.unix(data.daily[1].dt).format("MM/DD/YYYY");
      document.getElementById("date1").innerHTML = date1;
      document.getElementById("temp1").innerHTML =
        "Temp:  " + Math.floor(data.daily[1].temp.day);
      document.getElementById("wind_speed1").innerHTML =
        "Wind Speed:  " + Math.floor(data.daily[1].wind_speed);
      document.getElementById("humidity1").innerHTML =
        "Humidity:  " + data.daily[1].humidity;

      //Day 2
      var date2 = moment.unix(data.daily[2].dt).format("MM/DD/YYYY");

      document.getElementById("date2").innerHTML = date2;
      document.getElementById("temp2").innerHTML =
        "Temp:  " + Math.floor(data.daily[2].temp.day);

      document.getElementById("wind_speed2").innerHTML =
        "Wind Speed:  " + Math.floor(data.daily[2].wind_speed);
      document.getElementById("humidity2").innerHTML =
        "Humidity:  " + data.daily[2].humidity;

      //Day 3
      var date3 = moment.unix(data.daily[3].dt).format("MM/DD/YYYY");
      document.getElementById("date3").innerHTML = date3;
      document.getElementById("temp3").innerHTML =
        "Temp:  " + Math.floor(data.daily[2].temp.day);
      document.getElementById("wind_speed3").innerHTML =
        "Wind Speed:  " + Math.floor(data.daily[3].wind_speed);
      document.getElementById("humidity3").innerHTML =
        "Humidity:  " + data.daily[3].humidity;

      //Day 4
      var date4 = moment.unix(data.daily[4].dt).format("MM/DD/YYYY");
      document.getElementById("date4").innerHTML = date4;
      document.getElementById("temp4").innerHTML =
        "Temp:  " + Math.floor(data.daily[4].temp.day);
      document.getElementById("wind_speed4").innerHTML =
        "Wind Speed:  " + Math.floor(data.daily[4].wind_speed);
      document.getElementById("humidity4").innerHTML =
        "Humidity:  " + data.daily[4].humidity;
      //Day 5
      var date5 = moment.unix(data.daily[5].dt).format("MM/DD/YYYY");
      document.getElementById("date5").innerHTML = date5;
      document.getElementById("temp5").innerHTML =
        "Temp:  " + Math.floor(data.daily[5].temp.day);
      document.getElementById("wind_speed5").innerHTML =
        "Wind Speed:  " + Math.floor(data.daily[5].wind_speed);
      document.getElementById("humidity5").innerHTML =
        "Humidity:  " + data.daily[5].humidity;
    })
    .catch((err) => {
      console.log(err);
    });
}

startBtnEl.addEventListener("click", function (e) {
  city(e);
});

getSearchedList();
