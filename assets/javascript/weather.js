const baseURL =
  "https://api.weatherbit.io/v2.0/forecast/daily?postal_code=ST162RP&days=7&key=8adc9c07736e467cb1e8ef7497ddc0f8";

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

    weather.forEach(function(item) {
        Object.keys(item).forEach(function(key){
            console.log(key);
        })
      el.innerHTML += "<p>" + item.weather.description + "</p>";
    });
  });
}
