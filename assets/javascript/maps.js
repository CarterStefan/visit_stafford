(function (exports) {
  "use strict";

  

  // In the following example, markers appear when the user clicks on the map.
  // The markers are stored in an array.
  // The user can then click an option to hide, show or delete the markers.

  exports.markers = [];

  function initMap() {
    var stafford = {
      lat: 52.8072076,
      lng: -2.1173127,
    };
    exports.map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: stafford,
    });

    // This event listener will call addMarker() when the map is clicked.
    var buttonLocation = document.getElementById("pizza-express-marker");
    google.maps.event.addDomListener(buttonLocation, "click", function (event) {
      deleteMarkers();
      addMarker(event.latLng);
    });

    // Adds a marker at the center of the map.
    // addMarker(stafford);
  }

  // Deletes all markers in the array by removing references to them.
  function deleteMarkers() {
    clearMarkers();
    exports.markers = [];
  }

  // Adds a marker to the map and push to the array.
  function addMarker(location) {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(52.807589, -2.117275),
      animation: google.maps.Animation.DROP,
      map: exports.map,
    });
    setMapOnAll(null);
    exports.markers.push(marker);
    console.log(markers);
  }

  // Sets the map on all markers in the array.
  function setMapOnAll(map) {
    for (var i = 0; i < exports.markers.length; i++) {
      exports.markers[i].setMap(map);
    }
  }

  // Removes the markers from the map, but keeps them in the array.
  function clearMarkers() {
    setMapOnAll(null);
  }

  // Shows any markers currently in the array.
  function showMarkers() {
    setMapOnAll(exports.map);
  }

  // Deletes all markers in the array by removing references to them.
  function deleteMarkers() {
    clearMarkers();
    exports.markers = [];
  }

  exports.addMarker = addMarker;
  exports.clearMarkers = clearMarkers;
  exports.deleteMarkers = deleteMarkers;
  exports.initMap = initMap;
  exports.setMapOnAll = setMapOnAll;
  exports.showMarkers = showMarkers;
})((this.window = this.window || {}));

// MARKERS.
// THE FOLLOWING FUNCTIONS SHOW THE LOCATIONS OF THE RESTAURANTS ON THE MAP.
// THESE ARE SHOWN WHEN THE 'PLACES TO EAT' BUTTON IS CLICKED.

/* $("#eat").click(function () {
  // PIN LOCATION FOR PIZZA EXPRESS
  var markerPizzaExpress = new google.maps.Marker({
    position: new google.maps.LatLng(52.807589, -2.117275),
    map: map,
    title: "Pizza Express",
    icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
  });
   


  google.maps.event.addListener(markerPizzaExpress, "click", function () {
    map.panTo(this.getPosition());
    map.setZoom(18);
  });

  // PIN LOCATION FOR THE SWAN
  var markerSwan = new google.maps.Marker({
    position: new google.maps.LatLng(52.806043, -2.116994),
    map: map,
    title: "The Swan",
    icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
  });

  google.maps.event.addListener(markerSwan, "click", function () {
    map.panTo(this.getPosition());
    map.setZoom(18);
  });

  // PIN LOCATION FOR MARKET VAULTS
  var markerMarketVaults = new google.maps.Marker({
    position: new google.maps.LatLng(52.806962, -2.116683),
    map: map,
    title: "Market Vaults",
    icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
  });

  google.maps.event.addListener(markerMarketVaults, "click", function () {
    map.panTo(this.getPosition());
    map.setZoom(18);
  });

  // PIN LOCATION FOR SOUP KITCHEN
  var markerSoupKitchen = new google.maps.Marker({
    position: new google.maps.LatLng(52.805889, -2.118376),
    map: map,
    title: "Soup Kitchen",
    icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
  });

  google.maps.event.addListener(markerSoupKitchen, "click", function () {
    map.panTo(this.getPosition());
    map.setZoom(18);
  });

  // PIN LOCATION FOR THE BEAR
  var markerTheBear = new google.maps.Marker({
    position: new google.maps.LatLng(52.806509, -2.116485),
    map: map,
    title: "The Bear",
    icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
  });

  google.maps.event.addListener(markerTheBear, "click", function () {
    map.panTo(this.getPosition());
    map.setZoom(18);
  });

  // PIN LOCATION FOR THE SUN INN
  var markerTheSunInn = new google.maps.Marker({
    position: new google.maps.LatLng(52.806428, -2.116867),
    map: map,
    title: "The Sun INN",
    icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
  });

  google.maps.event.addListener(markerTheSunInn, "click", function () {
    map.panTo(this.getPosition());
    map.setZoom(18);
  });
});

/* var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(52.8072076, -2.1173127),
    zoom: 16,
  });

  
}

// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.
var foods = [
  ["Pizza Express", 52.80749022738673, -2.117243520977638, 1],
  ["The Bakehouse", 52.807513559894325, -2.1164920390789144, 2],
  ["The Market Vaults", 52.80694065799884, -2.1166817024969053, 3],
  ["Grove Coffee House", 52.80668482822292, -2.1180137534526633, 4],
  ["The Soup Kitchen", 52.80587092807219, -2.1183753426146157, 5],
  ["The Swan", 52.806071977798034, -2.116980032861837, 6],
  ["Royal Bangkok", 52.80486888552228, -2.1168604587943096, 7],
  ["Ayo Gorkhali", 52.80483665866169, -2.1170096765799973, 8],
  ["The Sun Inn", 52.803756592079, -2.1144042312020117, 9],
  ["Nandos", 52.80444489138128, -2.1133998484127536, 10],
  ["The Bear", 52.80642479101823, -2.116871050282536, 11],
];

let attractions = [
  ["Ancient High House", 52.80637610727258, -2.117107258551081, 1],
  ["Doxey Marshes", 52.82024877228274, -2.145856260858241, 2],
  ["Shire Hall Gallery", 52.80719662664109, -2.1167741830841336, 3],
  ["Gatehouse Theatre", 52.80720378578625, -2.115744265416404, 4],
  ["Victoria Park", 52.80398925465019, -2.1203379837765857, 5],
  ["Stafford Castle", 52.797918450118445, -2.147415021577961, 6],
];

function setFoodMarkers(map) {    
  // Adds markers to the map.

  // Marker sizes are expressed as a Size of X,Y where the origin of the image
  // (0,0) is located in the top left of the image.

  // Origins, anchor positions and coordinates of the marker increase in the X
  // direction to the right and in the Y direction down.
  var image = {
    url: "http://maps.google.com/mapfiles/kml/paddle/grn-blank.png",
    // This marker is 60 pixels wide by 60 pixels high.
    size: new google.maps.Size(60, 60),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 0),
  };
  // Shapes define the clickable region of the icon. The type defines an HTML
  // <area> element 'poly' which traces out a polygon as a series of X,Y points.
  // The final coordinate closes the poly by connecting to the first coordinate.
  var shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: "poly",
  };



  for (var i = 0; i < foods.length; i++) {
    var food = foods[i];
    var foodMarker = new google.maps.Marker({
      position: { lat: food[1], lng: food[2] },
      map: map,
      icon: image,
      shape: shape,
      title: food[0],
      zIndex: food[3],
    });
  }

  

}

function setAttractionMarkers(map) {
  // Adds markers to the map.

  // Marker sizes are expressed as a Size of X,Y where the origin of the image
  // (0,0) is located in the top left of the image.

  // Origins, anchor positions and coordinates of the marker increase in the X
  // direction to the right and in the Y direction down.
  var image = {
    url: "http://maps.google.com/mapfiles/kml/paddle/blu-blank.png",
    // This marker is 60 pixels wide by 60 pixels high.
    size: new google.maps.Size(60, 60),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 0),
  };
  // Shapes define the clickable region of the icon. The type defines an HTML
  // <area> element 'poly' which traces out a polygon as a series of X,Y points.
  // The final coordinate closes the poly by connecting to the first coordinate.
  var shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: "poly",
  };
  for (var i = 0; i < attractions.length; i++) {
    var attraction = attractions[i];
    var attractionMarker = new google.maps.Marker({
      position: { lat: attraction[1], lng: attraction[2] },
      map: map,
      icon: image,
      shape: shape,
      title: attraction[0],
      zIndex: attraction[3],
    });
  }
} */
