// INITIALISE GOOGLE MAP
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: { lat: 52.8072076, lng: -2.1173127 },
  });
  infowindow = new google.maps.InfoWindow();
}

// RESTAURANTS
var restaurants = [
  {
    position: { lat: 52.807589, lng: -2.117275 },
    image: { url: "assets/img/food.png" },
    content: { html: "<h1>Pizza Express</h1><p>Book a Table</p>" },
  },
  {
    position: { lat: 52.806043, lng: -2.116994 },
    image: { url: "assets/img/food.png" },
    content: { html: "<h1>The Swan</h1><p>Book a Table</p>" },
  },
  {
    position: { lat: 52.80706, lng: -2.116824 },
    image: { url: "assets/img/food.png" },
    content: { html: "<h1>The Market Vaults</h1><p>Book a Table</p>" },
  },
  {
    position: { lat: 52.80589, lng: -2.118329 },
    image: { url: "assets/img/food.png" },
    content: { html: "<h1>The Soup Kitchen</h1><p>Book a Table</p>" },
  },
  {
    position: { lat: 52.806442, lng: -2.116837 },
    image: { url: "assets/img/food.png" },
    content: { html: "<h1>The Bear</h1><p>Book a Table</p>" },
  },
  {
    position: { lat: 52.803788, lng: -2.11429 },
    image: { url: "assets/img/food.png" },
    content: { html: "<h1>The Sun</h1><p>Book a Table</p>" },
  },
];

// ATTRACTIONS 

var attractions = [
  {
    position: { lat: 52.806302, lng: -2.117101 },
    image: { url: "assets/img/see.png" },
    content: { html: "<h1>Ancient High House</h1><p>See Website</p>" },
  },
  {
    position: { lat: 52.798038, lng: -2.147365 },
    image: { url: "assets/img/see.png" },
    content: { html: "<h1>Stafford Castle</h1><p>See Website</p>" },
  },
  {
    position: { lat: 52.804004, lng: -2.120334 },
    image: { url: "assets/img/see.png" },
    content: { html: "<h1>Victoria Park</h1><p>See Webiste</p>" },
  },
  {
    position: { lat: 52.820263, lng: -2.145788 },
    image: { url: "assets/img/see.png" },
    content: { html: "<h1>Doxey Marshes</h1><p>See Website</p>" },
  },
  {
    position: { lat: 52.807201, lng: -2.11675 },
    image: { url: "assets/img/see.png" },
    content: { html: "<h1>Shire Hall Gallery</h1><p>See Website</p>" },
  },
  {
    position: { lat: 52.807243, lng: -2.115737 },
    image: { url: "assets/img/see.png" },
    content: { html: "<h1>Gatehouse Theatre</h1><p>See Website</p>" },
  },
];

// HOTELS

var hotels = [
  {
    position: { lat: 52.806075, lng: -2.116975 },
    image: { url: "assets/img/hotel.png" },
    content: { html: "<h1>The Swan Hotel</h1><p>Book A Room</p>" },
  },
  {
    position: { lat: 52.808092, lng: -2.116838 },
    image: { url: "assets/img/hotel.png" },
    content: { html: "<h1>The Vine</h1><p>Book A Room</p>" },
  },
  {
    position: { lat: 52.822411, lng: -2.134624 },
    image: { url: "assets/img/hotel.png" },
    content: { html: "<h1>Tillington Hall</h1><p>Book A Room</p>" },
  },
  {
    position: { lat: 52.797033, lng: -2.100978 },
    image: { url: "assets/img/hotel.png" },
    content: { html: "<h1>Spittal Brook</h1><p>Book A Room</p>" },
  },
  {
    position: { lat: 52.799386, lng: -2.104048 },
    image: { url: "assets/img/hotel.png" },
    content: { html: "<h1>Abbey Hotel</h1><p>Book A Room</p>" },
  },
  {
    position: { lat: 52.800163, lng: -2.106002 },
    image: { url: "assets/img/hotel.png" },
    content: { html: "<h1>Cameron Lodge</h1><p>Book A Room</p>" },
  },
];

// Declare Global Variable
var image;
var markers = [];
var map;
var infowindow;

// INITIALISE GOOGLE MAP
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: { lat: 52.8072076, lng: -2.1173127 },
  });
  infowindow = new google.maps.InfoWindow();
}

// FUNCTION TO ADD INFO TO RESTAURANT MARKERS
function dropRestaurants() {
  clearMarkers();
  for (var i = 0; i < restaurants.length; i++) {
    addRestaurantMarkersWithTimeout(
      restaurants[i].position,
      restaurants[i].image,
      i * 200,
      restaurants[i].content.html
    );
  }
}

// FUNCTION TO ADD INFO TO ATTRACTION MARKERS
function dropAttractions() {
  clearMarkers();
  for (var i = 0; i < restaurants.length; i++) {
    addAttractionsMarkersWithTimeout(
      attractions[i].position,
      attractions[i].image,
      i * 200,
      attractions[i].content.html
    );
  }
}

// FUNCTION TO ADD INFO TO HOTEL MARKERS
function dropHotels() {
  clearMarkers();
  for (var i = 0; i < restaurants.length; i++) {
    addHotelsMarkersWithTimeout(
      hotels[i].position,
      hotels[i].image,
      i * 200,
      hotels[i].content.html
    );
  }
}

// RESTAURANT FUNCTION
function addRestaurantMarkersWithTimeout(position, image, timeout, content) {
  var marker;
  console.log(content);
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

// ATTRACTIONS FUNCTION
function addAttractionsMarkersWithTimeout(position, image, timeout, content) {
  var marker;
  console.log(content);
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

// HOTELS FUNCTION
function addHotelsMarkersWithTimeout(position, image, timeout, content) {
  var marker;
  console.log(content);
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




// SINGLE MARKERS
// PIZZA EXPRESS

function dropSingleMarker(name) {
  clearMarkers();{
    addSingleMarkerWithTimeout(
      name.position,
      name.image,
      1 * 200,
      name.content.html
    );
  }
}

function addSingleMarkerWithTimeout(position, image, timeout, content) {
  var marker;
  console.log(content);
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

// CLEAR ALL MARKERS FUNCTION
function clearMarkers() {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
}