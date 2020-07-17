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

    var staffordCastleLocation = document.getElementById(
      "stafford-castle-marker"
    );
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

    var theSwanHotelLocation = document.getElementById("the-swan-hotel-marker");
    google.maps.event.addDomListener(theSwanHotelLocation, "click", function (
      event
    ) {
      deleteMarkers();
      addTheSwanHotelMarker(event.latLng);
    });

    var theVineLocation = document.getElementById("the-vine-marker");
    google.maps.event.addDomListener(theVineLocation, "click", function (
      event
    ) {
      deleteMarkers();
      addTheVineMarker(event.latLng);
    });

    var tillingtonHallLocation = document.getElementById(
      "tillington-hall-marker"
    );
    google.maps.event.addDomListener(tillingtonHallLocation, "click", function (
      event
    ) {
      deleteMarkers();
      addTillingtonHallMarker(event.latLng);
    });

    var theSpittalBrookLocation = document.getElementById(
      "the-spittal-brook-marker"
    );
    google.maps.event.addDomListener(
      theSpittalBrookLocation,
      "click",
      function (event) {
        deleteMarkers();
        addTheSpittalBrookMarker(event.latLng);
      }
    );

    var abbeyHotelLocation = document.getElementById("abbey-hotel-marker");
    google.maps.event.addDomListener(abbeyHotelLocation, "click", function (
      event
    ) {
      deleteMarkers();
      addAbbeyHotelMarker(event.latLng);
    });

    var cameronLodgeLocation = document.getElementById("cameron-lodge-marker");
    google.maps.event.addDomListener(cameronLodgeLocation, "click", function (
      event
    ) {
      deleteMarkers();
      addCameronLodgeMarker(event.latLng);
    });
  }

  // Deletes all markers in the array by removing references to them.
  function deleteMarkers() {
    clearMarkers();
    exports.markers = [];
  }

  // Adds a marker to the map and push to the array.
  function addPizzaExpressMarker(location) {
    // Sets content of info window
    var contentString = '<div id="content">PIZZA EXPRESS</div>';

    // Adds content to info window
    var infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    // Adds info window to marker
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(52.807589, -2.117275),
      animation: google.maps.Animation.DROP,
      map: exports.map,
      title: "Pizza Express",
    });
    // Adds info window to marker
    marker.addListener("click", function () {
      infowindow.open(map, marker);
    });

    setMapOnAll(null);
    exports.markers.push(marker);
  }

  function addTheSwanMarker(location) {
    // Sets content of info window
    var contentString = '<div id="content">THE SWAN</div>';

    // Adds content to info window
    var infowindow = new google.maps.InfoWindow({
      content: contentString,
    });
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(52.806043, -2.116994),
      animation: google.maps.Animation.DROP,
      map: exports.map,
      title: "The Swan",
    });
    // Adds info window to marker
    marker.addListener("click", function () {
      infowindow.open(map, marker);
    });
    setMapOnAll(null);
    exports.markers.push(marker);
  }

  function addTheMarketVaultsMarker(location) {
    // Sets content of info window
    var contentString = '<div id="content">THE MARKET VAULTS</div>';

    // Adds content to info window
    var infowindow = new google.maps.InfoWindow({
      content: contentString,
    });
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(52.80706, -2.116824),
      animation: google.maps.Animation.DROP,
      map: exports.map,
      title: "The Market Vaults",
    });
    // Adds info window to marker
    marker.addListener("click", function () {
      infowindow.open(map, marker);
    });
    setMapOnAll(null);
    exports.markers.push(marker);
  }

  function addTheSoupKitchenMarker(location) {
    // Sets content of info window
    var contentString = '<div id="content">THE SOUP KITCHEN</div>';

    // Adds content to info window
    var infowindow = new google.maps.InfoWindow({
      content: contentString,
    });
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(52.80589, -2.118329),
      animation: google.maps.Animation.DROP,
      map: exports.map,
      title: "The Soup Kitchen",
    });
    // Adds info window to marker
    marker.addListener("click", function () {
      infowindow.open(map, marker);
    });
    setMapOnAll(null);
    exports.markers.push(marker);
  }

  function addTheBearMarker(location) {
    // Sets content of info window
    var contentString = '<div id="content">THE BEAR</div>';

    // Adds content to info window
    var infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(52.806442, -2.116837),
      animation: google.maps.Animation.DROP,
      map: exports.map,
      title: "The Bear",
    });
    // Adds info window to marker
    marker.addListener("click", function () {
      infowindow.open(map, marker);
    });
    setMapOnAll(null);
    exports.markers.push(marker);
  }

  function addTheSunInnMarker(location) {
    // Sets content of info window
    var contentString = '<div id="content">THE SUN INN</div>';

    // Adds content to info window
    var infowindow = new google.maps.InfoWindow({
      content: contentString,
    });
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(52.803788, -2.11429),
      animation: google.maps.Animation.DROP,
      map: exports.map,
      title: "The Sun",
    });
    // Adds info window to marker
    marker.addListener("click", function () {
      infowindow.open(map, marker);
    });
    setMapOnAll(null);
    exports.markers.push(marker);
  }

  //ATTRACTIONS
  function addAncientHighHouseMarker(location) {
    // Sets content of info window
    var contentString = '<div id="content">ANCIENT HIGH HOUSE</div>';

    // Adds content to info window
    var infowindow = new google.maps.InfoWindow({
      content: contentString,
    });
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(52.806302, -2.117101),
      animation: google.maps.Animation.DROP,
      map: exports.map,
      title: "Ancient High House",
    });
    // Adds info window to marker
    marker.addListener("click", function () {
      infowindow.open(map, marker);
    });
    setMapOnAll(null);
    exports.markers.push(marker);
  }

  function addStaffordCastleMarker(location) {
    // Sets content of info window
    var contentString = '<div id="content">STAFFORD CASTLE</div>';

    // Adds content to info window
    var infowindow = new google.maps.InfoWindow({
      content: contentString,
    });
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(52.798038, -2.147365),
      animation: google.maps.Animation.DROP,
      map: exports.map,
      title: "Stafford Castle",
    });
    // Adds info window to marker
    marker.addListener("click", function () {
      infowindow.open(map, marker);
    });
    setMapOnAll(null);
    exports.markers.push(marker);
  }

  function addVictoriaParkMarker(location) {
    // Sets content of info window
    var contentString = '<div id="content">VICTORIA PARK</div>';

    // Adds content to info window
    var infowindow = new google.maps.InfoWindow({
      content: contentString,
    });
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(52.804004, -2.120334),
      animation: google.maps.Animation.DROP,
      map: exports.map,
      title: "Victoria Park",
    });
    // Adds info window to marker
    marker.addListener("click", function () {
      infowindow.open(map, marker);
    });
    setMapOnAll(null);
    exports.markers.push(marker);
  }

  function addDoxeyMarshesMarker(location) {
    // Sets content of info window
    var contentString = '<div id="content">DOXEY MARSHES</div>';

    // Adds content to info window
    var infowindow = new google.maps.InfoWindow({
      content: contentString,
    });
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(52.820263, -2.145788),
      animation: google.maps.Animation.DROP,
      map: exports.map,
      title: "Doxey Marshes",
    });
    // Adds info window to marker
    marker.addListener("click", function () {
      infowindow.open(map, marker);
    });
    setMapOnAll(null);
    exports.markers.push(marker);
  }

  function addShireHallGalleryMarker(location) {
    // Sets content of info window
    var contentString = '<div id="content">SHIRE HALL GALLERY</div>';

    // Adds content to info window
    var infowindow = new google.maps.InfoWindow({
      content: contentString,
    });
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(52.807201, -2.11675),
      animation: google.maps.Animation.DROP,
      map: exports.map,
      title: "Shire Hall Gallery",
    });
    // Adds info window to marker
    marker.addListener("click", function () {
      infowindow.open(map, marker);
    });
    setMapOnAll(null);
    exports.markers.push(marker);
  }

  function addGatehouseTheatreMarker(location) {
    // Sets content of info window
    var contentString = '<div id="content">GATEHOUSE THEATRE</div>';

    // Adds content to info window
    var infowindow = new google.maps.InfoWindow({
      content: contentString,
    });
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(52.807243, -2.115737),
      animation: google.maps.Animation.DROP,
      map: exports.map,
      title: "Gatehouse Theatre",
    });
    // Adds info window to marker
    marker.addListener("click", function () {
      infowindow.open(map, marker);
    });
    setMapOnAll(null);
    exports.markers.push(marker);
  }

  //HOTELS
  function addTheSwanHotelMarker(location) {
    // Sets content of info window
    var contentString = '<div id="content">THE SWAN HOTEL</div>';

    // Adds content to info window
    var infowindow = new google.maps.InfoWindow({
      content: contentString,
    });
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(52.806075, -2.116975),
      animation: google.maps.Animation.DROP,
      map: exports.map,
    });
    // Adds info window to marker
    marker.addListener("click", function () {
      infowindow.open(map, marker);
    });
    setMapOnAll(null);
    exports.markers.push(marker);
  }

  function addTheVineMarker(location) {
    // Sets content of info window
    var contentString = '<div id="content">THE VINE</div>';

    // Adds content to info window
    var infowindow = new google.maps.InfoWindow({
      content: contentString,
    });
    
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(52.808092, -2.116838),
      animation: google.maps.Animation.DROP,
      map: exports.map,
    });
    // Adds info window to marker
    marker.addListener("click", function () {
      infowindow.open(map, marker);
    });
    setMapOnAll(null);
    exports.markers.push(marker);
  }

  function addTillingtonHallMarker(location) {
    // Sets content of info window
    var contentString = '<div id="content">TILLINGTON HALL</div>';

    // Adds content to info window
    var infowindow = new google.maps.InfoWindow({
      content: contentString,
    });
    
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(52.822411, -2.134624),
      animation: google.maps.Animation.DROP,
      map: exports.map,
    });
    // Adds info window to marker
    marker.addListener("click", function () {
      infowindow.open(map, marker);
    });
    setMapOnAll(null);
    exports.markers.push(marker);
  }

  function addTheSpittalBrookMarker(location) {
    // Sets content of info window
    var contentString = '<div id="content">THE SPITTAL BROOK</div>';

    // Adds content to info window
    var infowindow = new google.maps.InfoWindow({
      content: contentString,
    });
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(52.797033, -2.100978),
      animation: google.maps.Animation.DROP,
      map: exports.map,
    });
    // Adds info window to marker
    marker.addListener("click", function () {
      infowindow.open(map, marker);
    });
    setMapOnAll(null);
    exports.markers.push(marker);
  }

  function addAbbeyHotelMarker(location) {
    // Sets content of info window
    var contentString = '<div id="content">ABBEY HOTEL</div>';

    // Adds content to info window
    var infowindow = new google.maps.InfoWindow({
      content: contentString,
    });
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(52.799386, -2.104048),
      animation: google.maps.Animation.DROP,
      map: exports.map,
    });
    // Adds info window to marker
    marker.addListener("click", function () {
      infowindow.open(map, marker);
    });
    setMapOnAll(null);
    exports.markers.push(marker);
  }

  function addCameronLodgeMarker(location) {
    // Sets content of info window
    var contentString = '<div id="content">CAMERON LODGE</div>';

    // Adds content to info window
    var infowindow = new google.maps.InfoWindow({
      content: contentString,
    });
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(52.800163, -2.106002),
      animation: google.maps.Animation.DROP,
      map: exports.map,
    });
    // Adds info window to marker
    marker.addListener("click", function () {
      infowindow.open(map, marker);
    });
    setMapOnAll(null);
    exports.markers.push(marker);
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
