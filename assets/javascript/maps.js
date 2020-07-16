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

    // Event listeners will call the relevant addMarker() when the show on map button is clicked.

    //RESTAURANTS
    var pizzaExpressLocation = document.getElementById("pizza-express-marker");
    google.maps.event.addDomListener(pizzaExpressLocation, "click", function (
      event
    ) {
      deleteMarkers();
      addPizzaExpressMarker(event.latLng);
    });

    var theSwanLocation = document.getElementById("the-swan-marker");
    google.maps.event.addDomListener(theSwanLocation, "click", function (
      event
    ) {
      deleteMarkers();
      addTheSwanMarker(event.latLng);
    });

    var theMarketVaultsLocation = document.getElementById(
      "the-market-vaults-marker"
    );
    google.maps.event.addDomListener(
      theMarketVaultsLocation,
      "click",
      function (event) {
        deleteMarkers();
        addTheMarketVaultsMarker(event.latLng);
      }
    );

    var theSoupKitchenLocation = document.getElementById(
      "the-soup-kitchen-marker"
    );
    google.maps.event.addDomListener(theSoupKitchenLocation, "click", function (
      event
    ) {
      deleteMarkers();
      addTheSoupKitchenMarker(event.latLng);
    });

    var theBearLocation = document.getElementById("the-bear-marker");
    google.maps.event.addDomListener(theBearLocation, "click", function (
      event
    ) {
      deleteMarkers();
      addTheBearMarker(event.latLng);
    });

    var theSunInnLocation = document.getElementById("the-sun-inn-marker");
    google.maps.event.addDomListener(theSunInnLocation, "click", function (
      event
    ) {
      deleteMarkers();
      addTheSunInnMarker(event.latLng);
    });

    //ATTRACTIONS

    var theAncientHighHouseLocation = document.getElementById(
      "the-ancient-high-house-marker"
    );
    google.maps.event.addDomListener(
      theAncientHighHouseLocation,
      "click",
      function (event) {
        deleteMarkers();
        addAncientHighHouseMarker(event.latLng);
      }
    );

    var staffordCastleLocation = document.getElementById("stafford-castle-marker");
    google.maps.event.addDomListener(staffordCastleLocation, "click", function (
      event
    ) {
      deleteMarkers();
      addStaffordCastleMarker(event.latLng);
    });

    var victoriaParkLocation = document.getElementById("victoria-park-marker");
    google.maps.event.addDomListener(victoriaParkLocation, "click", function (
      event
    ) {
      deleteMarkers();
      addVictoriaParkMarker(event.latLng);
    });

    var doxeyMarshesLocation = document.getElementById("doxey-marshes-marker");
    google.maps.event.addDomListener(doxeyMarshesLocation, "click", function (
      event
    ) {
      deleteMarkers();
      addDoxeyMarshesMarker(event.latLng);
    });

    var shireHallGalleryLocation = document.getElementById(
      "shire-hall-gallery-marker"
    );
    google.maps.event.addDomListener(
      shireHallGalleryLocation,
      "click",
      function (event) {
        deleteMarkers();
        addShireHallGalleryMarker(event.latLng);
      }
    );

    var gatehouseTheatreLocation = document.getElementById(
      "gatehouse-theatre-marker"
    );
    google.maps.event.addDomListener(
      gatehouseTheatreLocation,
      "click",
      function (event) {
        deleteMarkers();
        addGatehouseTheatreMarker(event.latLng);
      }
    );

    //HOTELS

    var pizzaExpressLocation = document.getElementById("pizza-express-marker");
    google.maps.event.addDomListener(pizzaExpressLocation, "click", function (
      event
    ) {
      deleteMarkers();
      addPizzaExpressMarker(event.latLng);
    });

    var theSwanLocation = document.getElementById("the-swan-marker");
    google.maps.event.addDomListener(theSwanLocation, "click", function (
      event
    ) {
      deleteMarkers();
      addTheSwanMarker(event.latLng);
    });

    var theMarketVaultsLocation = document.getElementById(
      "the-market-vaults-marker"
    );
    google.maps.event.addDomListener(
      theMarketVaultsLocation,
      "click",
      function (event) {
        deleteMarkers();
        addTheMarketVaultsMarker(event.latLng);
      }
    );

    var theSoupKitchenLocation = document.getElementById(
      "the-soup-kitchen-marker"
    );
    google.maps.event.addDomListener(theSoupKitchenLocation, "click", function (
      event
    ) {
      deleteMarkers();
      addTheSoupKitchenMarker(event.latLng);
    });

    var theBearLocation = document.getElementById("the-bear-marker");
    google.maps.event.addDomListener(theBearLocation, "click", function (
      event
    ) {
      deleteMarkers();
      addTheBearMarker(event.latLng);
    });

    var theSunInnLocation = document.getElementById("the-sun-inn-marker");
    google.maps.event.addDomListener(theSunInnLocation, "click", function (
      event
    ) {
      deleteMarkers();
      addTheSunInnMarker(event.latLng);
    });
  }

  // Deletes all markers in the array by removing references to them.
  function deleteMarkers() {
    clearMarkers();
    exports.markers = [];
  }

  // Adds a marker to the map and push to the array.
  function addPizzaExpressMarker(location) {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(52.807589, -2.117275),
      animation: google.maps.Animation.DROP,
      map: exports.map,
    });
    setMapOnAll(null);
    exports.markers.push(marker);
  }

  function addTheSwanMarker(location) {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(52.806043, -2.116994),
      animation: google.maps.Animation.DROP,
      map: exports.map,
    });
    setMapOnAll(null);
    exports.markers.push(marker);
    console.log(markers);
  }

  function addTheMarketVaultsMarker(location) {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(52.80706, -2.116824),
      animation: google.maps.Animation.DROP,
      map: exports.map,
    });
    setMapOnAll(null);
    exports.markers.push(marker);
    console.log(markers);
  }

  function addTheSoupKitchenMarker(location) {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(52.80589, -2.118329),
      animation: google.maps.Animation.DROP,
      map: exports.map,
    });
    setMapOnAll(null);
    exports.markers.push(marker);
    console.log(markers);
  }

  function addTheBearMarker(location) {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(52.806442, -2.116837),
      animation: google.maps.Animation.DROP,
      map: exports.map,
    });
    setMapOnAll(null);
    exports.markers.push(marker);
    console.log(markers);
  }

  function addTheSunInnMarker(location) {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(52.803788, -2.11429),
      animation: google.maps.Animation.DROP,
      map: exports.map,
    });
    setMapOnAll(null);
    exports.markers.push(marker);
    console.log(markers);
  }

  //ATTRACTIONS
  function addAncientHighHouseMarker(location) {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(52.806302, -2.117101),
      animation: google.maps.Animation.DROP,
      map: exports.map,
    });
    setMapOnAll(null);
    exports.markers.push(marker);
  }

  function addStaffordCastleMarker(location) {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(52.798038, -2.147365),
      animation: google.maps.Animation.DROP,
      map: exports.map,
    });
    setMapOnAll(null);
    exports.markers.push(marker);
    console.log(markers);
  }

  function addVictoriaParkMarker(location) {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(52.804004, -2.120334),
      animation: google.maps.Animation.DROP,
      map: exports.map,
    });
    setMapOnAll(null);
    exports.markers.push(marker);
    console.log(markers);
  }

  function addDoxeyMarshesMarker(location) {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(52.820263, -2.145788),
      animation: google.maps.Animation.DROP,
      map: exports.map,
    });
    setMapOnAll(null);
    exports.markers.push(marker);
    console.log(markers);
  }

  function addShireHallGalleryMarker(location) {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(52.807201, -2.11675),
      animation: google.maps.Animation.DROP,
      map: exports.map,
    });
    setMapOnAll(null);
    exports.markers.push(marker);
    console.log(markers);
  }

  function addGatehouseTheatreMarker(location) {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(52.807243, -2.115737),
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

  exports.clearMarkers = clearMarkers;
  exports.deleteMarkers = deleteMarkers;
  exports.initMap = initMap;
  exports.setMapOnAll = setMapOnAll;
  exports.showMarkers = showMarkers;
})((this.window = this.window || {}));
