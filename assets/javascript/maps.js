function initMap() {
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: {
      lat: 52.8072076,
      lng: -2.1173127,
    },
  });

  var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var markers = locations.map(function (location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });

  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
var locations = [
  { lat: 52.807482, lng: -2.117249 },
  { lat: 52.807495, lng: -2.116476 },
  { lat: 52.806918, lng: -2.116646 },
];
