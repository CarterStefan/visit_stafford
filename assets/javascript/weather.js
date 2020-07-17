function getData(cb) {
  var xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    "https://api.weatherbit.io/v2.0/forecast/daily?postal_code=ST162RP&days=7&key=8adc9c07736e467cb1e8ef7497ddc0f8"
  );

  xhr.send();

  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      cb(JSON.parse(this.responseText));
    }
  };
}

function printDataToConsole(data){
    console.log(data);
}

getData(printDataToConsole);