// example data (marker and infowindow data)
var restaurants = [
  {
    position: { lat: 52.807589, lng: -2.117275 },
    image: { url: "assets/img/marker1.png" },
    content: { html: "<h1>Pizza Express</h1><p>Book a Table</p>" },
  },
  {
    position: { lat: 52.806043, lng: -2.116994 },
    image: { url: "assets/img/marker1.png" },
    content: { html: "<h1>The Swan</h1><p>Book a Table</p>" },
  },
  {
    position: { lat: 52.80706, lng: -2.116824 },
    image: { url: "assets/img/marker1.png" },
    content: { html: "<h1>The Market Vaults</h1><p>Book a Table</p>" },
  },
  {
    position: { lat: 52.80589, lng: -2.118329 },
    image: { url: "assets/img/marker1.png" },
    content: { html: "<h1>The Soup Kitchen</h1><p>Book a Table</p>" },
  },
  {
    position: { lat: 52.806442, lng: -2.116837 },
    image: { url: "assets/img/marker1.png" },
    content: { html: "<h1>The Bear</h1><p>Book a Table</p>" },
  },
  {
    position: { lat: 52.803788, lng: -2.11429 },
    image: { url: "assets/img/marker1.png" },
    content: { html: "<h1>The Sun</h1><p>Book a Table</p>" },
  },
];

// Declare Global Variable
var image;
var markers = [];
var map;
var infowindow;

// Initialization Google Map
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: { lat: 52.8072076, lng: -2.1173127 },
  });
}

// Function Read data to Pre-Plot Marker
function drop() {
  clearMarkers();
  for (var i = 0; i < restaurants.length; i++) {
    addMarkerWithTimeout(
      restaurants[i].position,
      restaurants[i].image,
      i * 400,
      restaurants[i].content.html
    );
  }
}

// Function Plot Marker with animation
function addMarkerWithTimeout(position, image, timeout, content) {
  var marker;
  
  window.setTimeout(function () {
    marker = new google.maps.Marker({
      position: position,
      map: map,
      icon: image,
      animation: google.maps.Animation.DROP,
    });
    google.maps.event.addListener(marker, "click", function () {
      // Add listener on click to marker
      infowindow.open(map, marker); // Show Infowindow
      infowindow.setContent(content); // Set Content to Infowindow
    });
    markers.push(marker);
  }, timeout);
}

// Function Clear All Marker in map
function clearMarkers() {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
}
