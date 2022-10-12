let weather;
let lat;
let lon;
let q;
let appid;
let startBtnEl = document.getElementById("btn");

appid = "d108e2cfc3dc7b43eb551b30afdf1f82";

function getApi() {
  var requestUrl = "https://openweathermap.org/api/one-call-api";
}

function city(e) {
  e.preventDefault();
  console.log("hello");
  let cityEl = document.getElementById("query");
  console.log(cityEl.value);
  // city = cityEl.value;
}
// get current date

// function curDate() {
//   var today = new Date();
//   var date =
//     today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
// }

// $(".curDate").text(
function curDate() {
  var today = new Date();

  new Date(data.dt * 1000).toLocaleDateString("en-US", {
    weekday: "long",
  }) +
    ", " +
    new Date(data.dt * 1000).toLocaleDateString("en-US", {
      day: "numeric",
    });
}

// $(q).click(function (event) {
//   city = $(search - input).val();
//   alldata(event);
// });

document.getElementById("curDate").innerHTML = Date();

// document.getElementById("tomorrow").innerHTML = Date();
// document.getElementById("day2").innerHTML = Date();
// document.getElementById("day3").innerHTML = Date();
// document.getElementById("day4").innerHTML = Date();
// document.getElementById("day5").innerHTML = Date();

document.querySelector(".curWeather").style.backgroundImage =
  "url('./assets/img/weather.png');";

// document.getElementById("city").addEventListener("click", getCity);

fetch(
  `https://api.openweathermap.org/geo/1.0/direct?q="${city}&appid=${appid}&units=imperial`
)
  .then(function () {
    return response.json();
  })
  .then(function (data) {
    let myarray = data.daily;
    myarray.unshift(data.current);
    return myarray;
  })
  .then(function (data) {
    //Using console.log to examine the data
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      console.log(data[i]);
      lon = data.coord.lon;
      lat = data.coord.lat;

      $("curDate").text(
        new Date(data.dt * 1000).toLocaleDateString("en-US", {
          weekday: "long",
        }) +
          ", " +
          new Date(data.dt * 1000).toLocaleDateString("en-US", {
            day: "numeric",
          })
      );

      //var temp = document.createElement(current.temp.daily);
      var temp = document.createElement(data.current.daily.temp);
    }
  })
  .catch((err) => {
    console.log();
  });

// Set Dates
// const tomorrow = new Date();
// const day2 = new Date();
// const day3 = new Date();
// const day4 = new Date();
// const day5 = new Date();

// tomorrow.setDate(curDate.getDate() + 1);
// day2.setDate(today.getDate() + 2);
// day3.setDate(today.getDate() + 3);
// day4.setDate(today.getDate() + 4);
// day5.setDate(today.getDate() + 5);

startBtnEl.addEventListener("click", function (e) {
  city(e);
});
