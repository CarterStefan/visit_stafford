(function (exports) {
  "use strict";

  // If you're adding a number of markers, you may want to drop them on the map
  // consecutively rather than all at once. This example shows how to use
  // window.setTimeout() to space your markers' animation.
  var restaurants = [
    {
      lat: 52.807589,
      lng: -2.117275,
    },
    {
      lat: 52.806043,
      lng: -2.116994,
    },
    {
      lat: 52.80706,
      lng: -2.116824,
    },
    {
      lat: 52.80589,
      lng: -2.118329,
    },
    {
      lat: 52.806442,
      lng: -2.116837,
    },
    {
        lat: 52.803788, 
        lng: -2.11429
    }
  ];
  exports.markers = [];

  function initMap() {
    exports.map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: {
        lat: 52.8072076,
        lng: -2.1173127,
      },
    });
  }

  function drop() {
    clearMarkers();

    for (var i = 0; i < restaurants.length; i++) {
      addMarkerWithTimeout(restaurants[i], i * 200);
    }
  }

  function addMarkerWithTimeout(position, timeout) {
    window.setTimeout(function () {
      exports.markers.push(
        new google.maps.Marker({
          position: position,
          map: exports.map,
          animation: google.maps.Animation.DROP,
        })
      );
    }, timeout);
  }

  function clearMarkers() {
    for (var i = 0; i < exports.markers.length; i++) {
      exports.markers[i].setMap(null);
    }

    exports.markers = [];
  }

  exports.addMarkerWithTimeout = addMarkerWithTimeout;
  exports.clearMarkers = clearMarkers;
  exports.drop = drop;
  exports.initMap = initMap;
  exports.restaurants = restaurants;
})((this.window = this.window || {}));
