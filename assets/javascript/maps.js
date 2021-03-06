// Declare Global letiables
let image;
let markers = [];
let map;
let infowindow;
let stafford = { lat: 52.8072076, lng: -2.1173127 };

// Declare Websites
let pizzaExpressWebsite = "https://www.pizzaexpress.com/stafford";
let theSwanWebsite = "https://www.theswanstafford.co.uk/";
let theMarketVaultsWebsite = "https://www.themarketvaults.co.uk/";
let theSoupKitchenWebsite = "http://www.thesoupkitchen.co.uk/home.htm";
let theBearWebsite = "https://www.thebearpubstafford.co.uk/index";
let theSunWebsite = "https://www.titanicbrewery.co.uk/our-pubs/the-sun/";

let theAncientHighHouseWebsite =
  "https://www.freedom-leisure.co.uk/centres/ancienthighhouse/";
let staffordCastleWesbite =
  "https://www.freedom-leisure.co.uk/centres/stafford-castle/";
let victoriaParkWebsite = "https://www.staffordbc.gov.uk/victoriapark";
let doxeyMarshesWebsite =
  "https://www.staffs-wildlife.org.uk/nature-reserves/doxey-marshes";
let shireHallGalleryWesbite =
  "https://www.staffordshire.gov.uk/Business/Investment/Shire-Hall.aspx";
let gateHouseTheatreWesbite = "https://staffordgatehousetheatre.co.uk/";

let theVineWebsite = "https://www.vinehotelpub.co.uk/";
let tillingtonHallWebsite = "https://www.tillingtonhall.co.uk/";
let theSpittalBrookWebsite = "http://thespittalbrookstafford.co.uk/";
let abbeyHotelWebsite = "http://www.abbeyhotelstafford.co.uk/";
let cameronLodgeWebsite = "https://www.cameronlodgestafford.co.uk/";

// INITIALISE GOOGLE MAP
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: stafford,
  });
  infowindow = new google.maps.InfoWindow();
}

// RESTAURANTS
let restaurants = [
  {
    position: { lat: 52.807589, lng: -2.117275 },
    image: { url: "assets/img/food.png" },
    content: {
      html:
        "<h3>Pizza Express</h3><p><a target=_blank class='info-window-link' href='" +
        pizzaExpressWebsite +
        "'> Book a Table</a></p>",
    },
  },
  {
    position: { lat: 52.806043, lng: -2.116994 },
    image: { url: "assets/img/food.png" },
    content: {
      html:
        "<h3>The Swan</h3><p><a target=_blank class='info-window-link' href='" +
        theSwanWebsite +
        "'> Book a Table</a></p>",
    },
  },
  {
    position: { lat: 52.80706, lng: -2.116824 },
    image: { url: "assets/img/food.png" },
    content: {
      html:
        "<h3>The Market Vaults</h3><p><a target=_blank class='info-window-link' href='" +
        theMarketVaultsWebsite +
        "'> Book a Table</a></p>",
    },
  },
  {
    position: { lat: 52.80589, lng: -2.118329 },
    image: { url: "assets/img/food.png" },
    content: {
      html:
        "<h3>The Soup Kitchen</h3><p><a target=_blank class='info-window-link' href='" +
        theSoupKitchenWebsite +
        "'> Book a Table</a></p>",
    },
  },
  {
    position: { lat: 52.806442, lng: -2.116837 },
    image: { url: "assets/img/food.png" },
    content: {
      html:
        "<h3>The Bear</h3><p><a target=_blank class='info-window-link' href='" +
        theBearWebsite +
        "'> Book a Table</a></p>",
    },
  },
  {
    position: { lat: 52.803788, lng: -2.11429 },
    image: { url: "assets/img/food.png" },
    content: {
      html:
        "<h3>The Sun</h3><p><a target=_blank class='info-window-link' href='" +
        theSunWebsite +
        "'> Book a Table</a></p>",
    },
  },
];

// ATTRACTIONS

let attractions = [
  {
    position: { lat: 52.806302, lng: -2.117101 },
    image: { url: "assets/img/see.png" },
    content: {
      html:
        "<h3>Ancient High House</h3><p><a target=_blank class='info-window-link' href='" +
        theAncientHighHouseWebsite +
        "'> See Website </a></p>",
    },
  },
  {
    position: { lat: 52.798038, lng: -2.147365 },
    image: { url: "assets/img/see.png" },
    content: {
      html:
        "<h3>Stafford Castle</h3><p><a target=_blank class='info-window-link' href='" +
        staffordCastleWesbite +
        "'> See Website</a></p>",
    },
  },
  {
    position: { lat: 52.804004, lng: -2.120334 },
    image: { url: "assets/img/see.png" },
    content: {
      html:
        "<h3>Victoria Park</h3><p><a target=_blank class='info-window-link' href='" +
        victoriaParkWebsite +
        "'> See Website</a></p>",
    },
  },
  {
    position: { lat: 52.820263, lng: -2.145788 },
    image: { url: "assets/img/see.png" },
    content: {
      html:
        "<h3>Doxey Marshes</h3><p><a target=_blank class='info-window-link' href='" +
        doxeyMarshesWebsite +
        "'> See Website</a></p>",
    },
  },
  {
    position: { lat: 52.807201, lng: -2.11675 },
    image: { url: "assets/img/see.png" },
    content: {
      html:
        "<h3>Shire Hall Gallery</h3><p><a target=_blank class='info-window-link' href='" +
        shireHallGalleryWesbite +
        "'> See Website </a></p>",
    },
  },
  {
    position: { lat: 52.807243, lng: -2.115737 },
    image: { url: "assets/img/see.png" },
    content: {
      html:
        "<h3>Gatehouse Theatre</h3><p><a target=_blank class='info-window-link' href='" +
        gateHouseTheatreWesbite +
        "'> See Wesbite </a></p>",
    },
  },
];

// HOTELS

let hotels = [
  {
    position: { lat: 52.806075, lng: -2.116975 },
    image: { url: "assets/img/hotel.png" },
    content: {
      html:
        "<h3>The Swan Hotel</h3><p><a target=_blank class='info-window-link' href='" +
        theSwanWebsite +
        "'> Book a Room</a></p>",
    },
  },
  {
    position: { lat: 52.808092, lng: -2.116838 },
    image: { url: "assets/img/hotel.png" },
    content: {
      html:
        "<h3>The Vine</h3><p><a target=_blank class='info-window-link' href='" +
        theVineWebsite +
        "'> Book a Room</a></p>",
    },
  },
  {
    position: { lat: 52.822411, lng: -2.134624 },
    image: { url: "assets/img/hotel.png" },
    content: {
      html:
        "<h3>Tillington Hall</h3><p><a target=_blank class='info-window-link' href='" +
        tillingtonHallWebsite +
        "'> Book a Room </a></p>",
    },
  },
  {
    position: { lat: 52.797033, lng: -2.100978 },
    image: { url: "assets/img/hotel.png" },
    content: {
      html:
        "<h3>Spittal Brook</h3><p><a target=_blank class='info-window-link' href='" +
        theSpittalBrookWebsite +
        "'> Book a Room</a></p>",
    },
  },
  {
    position: { lat: 52.799386, lng: -2.104048 },
    image: { url: "assets/img/hotel.png" },
    content: {
      html:
        "<h3>Abbey Hotel</h3><p><a target=_blank class='info-window-link' href='" +
        abbeyHotelWebsite +
        "'> Book a Room</a></p>",
    },
  },
  {
    position: { lat: 52.800163, lng: -2.106002 },
    image: { url: "assets/img/hotel.png" },
    content: {
      html:
        "<h3>Cameron Lodge</h3><p><a target=_blank class='info-window-link' href='" +
        cameronLodgeWebsite +
        "'> Book a Room</a></p>",
    },
  },
];

// FUNCTION TO PREPARE RESTAURANT MARKERS
function dropRestaurants() {
  clearMarkers();
  for (let i = 0; i < restaurants.length; i++) {
    addRestaurantMarkersWithTimeout(
      restaurants[i].position,
      restaurants[i].image,
      i * 200,
      restaurants[i].content.html
    );
    map.setZoom(16);
    map.panTo(stafford);
  }
}

// FUNCTION TO PREPARE ATTRACTION MARKERS
function dropAttractions() {
  clearMarkers();
  for (let i = 0; i < attractions.length; i++) {
    addAttractionsMarkersWithTimeout(
      attractions[i].position,
      attractions[i].image,
      i * 200,
      attractions[i].content.html
    );
    map.setZoom(13);
    map.panTo(stafford);
  }
}

// FUNCTION TO PREPARE HOTEL MARKERS
function dropHotels() {
  clearMarkers();
  for (let i = 0; i < hotels.length; i++) {
    addHotelsMarkersWithTimeout(
      hotels[i].position,
      hotels[i].image,
      i * 200,
      hotels[i].content.html
    );
    map.setZoom(13);
    map.panTo(stafford);
  }
}

// RESTAURANT FUNCTION
function addRestaurantMarkersWithTimeout(position, image, timeout, content) {
  let marker;
  window.setTimeout(function () {
    marker = new google.maps.Marker({
      position: position,
      map: map,
      icon: image,
      animation: google.maps.Animation.DROP,
    });
    google.maps.event.addListener(marker, "click", function () {
      // Add listener on click to marker
      map.setZoom(16);
      map.panTo(marker.getPosition());
      infowindow.open(map, marker); // Show Infowindow
      infowindow.setContent(content); // Set Content to Infowindow
    });
    markers.push(marker);
  }, timeout);
}

// ATTRACTIONS FUNCTION
function addAttractionsMarkersWithTimeout(position, image, timeout, content) {
  let marker;
  window.setTimeout(function () {
    marker = new google.maps.Marker({
      position: position,
      map: map,
      icon: image,
      animation: google.maps.Animation.DROP,
    });
    google.maps.event.addListener(marker, "click", function () {
      // Add listener on click to marker
      map.setZoom(16);
      map.panTo(marker.getPosition());
      infowindow.open(map, marker); // Show Infowindow
      infowindow.setContent(content); // Set Content to Infowindow
    });
    markers.push(marker);
  }, timeout);
}

// HOTELS FUNCTION
function addHotelsMarkersWithTimeout(position, image, timeout, content) {
  let marker;
  window.setTimeout(function () {
    marker = new google.maps.Marker({
      position: position,
      map: map,
      icon: image,
      animation: google.maps.Animation.DROP,
    });
    google.maps.event.addListener(marker, "click", function () {
      // Add listener on click to marker
      map.setZoom(16);
      map.panTo(marker.getPosition());
      infowindow.open(map, marker); // Show Infowindow
      infowindow.setContent(content); // Set Content to Infowindow
    });
    markers.push(marker);
  }, timeout);
}

// SINGLE MARKERS

function dropSingleMarker(name) {
  clearMarkers();
  {
    addSingleMarkerWithTimeout(
      name.position,
      name.image,
      1 * 200,
      name.content.html
    );
  }
}

function addSingleMarkerWithTimeout(position, image, timeout, content) {
  let marker;
  window.setTimeout(function () {
    marker = new google.maps.Marker({
      position: position,
      map: map,
      icon: image,
      animation: google.maps.Animation.DROP,
    });
    map.setZoom(16);
    map.panTo(marker.getPosition());
    google.maps.event.addListener(marker, "click", function () {
      // Add listener on click to marker
      infowindow.open(map, marker); // Show Infowindow
      infowindow.setContent(content); // Set Content to Infowindow
      map.setZoom(16);
      map.panTo(marker.getPosition());
    });
    markers.push(marker);
  }, timeout);
}

// CLEAR ALL MARKERS FUNCTION
function clearMarkers() {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
  map.setZoom(13);
}
