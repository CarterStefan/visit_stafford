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

function getTableHeaders(obj) {
  let tableHeaders = [];

  Object.keys(obj).forEach(function (key) {
    tableHeaders.push(`<td>${key}</td>`);
  });

  return `<tr>${tableHeaders}</tr>`;
}

function writeToDocument() {
  let tableRows = [];
  let el = document.getElementById("data");
  el.innerHTML = "";
  getWeather(function (weather) {
    weather = weather.data;
    let tableHeaders = getTableHeaders(weather[0]);

    weather.forEach(function (item) {
      let weatherRow = [];

      Object.keys(item).forEach(function (key) {
        let rowData = item[key];

        weatherRow.push(`<td>${rowData}</td>`);
      });
      tableRows.push(`<tr>${weatherRow}</tr>`);
    });

    el.innerHTML = `<table>${tableHeaders}${tableRows}</table>`.replace(/,/g, "");
  });
}
