let weather;
let el;
let item;

const baseURL =
  "https://api.weatherbit.io/v2.0/forecast/daily?postal_code=ST162RP&days=8&key=8adc9c07736e467cb1e8ef7497ddc0f8";

function getWeather(cb) {
  var xhr = new XMLHttpRequest();

  xhr.open("GET", baseURL);

  xhr.send();

  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      cb(JSON.parse(this.responseText));
    }
  };
}

function writeToDocument() {
  let el = document.getElementById("data");
  el.innerHTML = "";
  getWeather(function (weather) {
    weather = weather.data;

    weather.forEach(function (item) {
      Object.keys(item).forEach(function (key) {});

      if (item.weather.code == 803) {
        msg = "you may need sunglasses";
      } else if (item.weather.code == 804) {
        msg = "no sun today";
      } else {
        msg = "Enjoy Your Day";
      }

      el.innerHTML +=
        '<div class="col-12 col-md-3 weatherbox"><p> Date: ' +
        item.valid_date +
        "</p>" +
        item.weather.description +
        "</p>" +
        "<p>Temperature: " +
        item.temp +
        "</p>" +
        '<img src="assets/img/weather_icons/' +
        item.weather.icon +
        '.png">' +
        '<p>' + msg + '</p>';      
    });
  });
}

writeToDocument();
