let weather;
let city;
let st;
let appid;

appid = "d108e2cfc3dc7b43eb551b30afdf1f82";

function getApi() {
  var requestUrl = "https://openweathermap.org/api/one-call-api";
}

// getCity();
// get current date

function curDate() {
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
}

let dateTest = (getElementById("curDate").innerHTML = "data data");
// $(q).click(function (event) {
//   city = $(search - input).val();
//   alldata(event);
// });

document.getElementById("curDate").innerHTML = Date();
document.getElementById("curCity").addEventListener("click", getCity);

fetch(
  requestUrl +
    `https://api.openweathermap.org/geo/1.0/direct?q="${city},${st},"US"=&appid=${appid}&units=imperial`
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
          // lon = data.coord.lon;
          // lat = data.coord.lat;

          // $(".curDate").text(
          //   new Date(data.dt * 1000).toLocaleDateString("en-US", {
          //     weekday: "long",
          //   }) +
          //     ", " +
          //     new Date(data.dt * 1000).toLocaleDateString("en-US", {
          //       day: "numeric",
          //     })
          // );

          var temp = document.createElement(current.temp.daily);
        }
      })
      .catch((err) => {
        console.log();
      })
);
