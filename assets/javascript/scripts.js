// NAVBAR SCRIPT

//SCRIPT TAKEN FROM W3SCHOOLS - HIDE NAVBAR ON SCROLL
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
};

//TABS
$("#tabs").tabs();

/*SCRIPT TAKEN FROM W3SCHOOLS - SMOOTH SCROLL TO ELEMENT*/
$(document).ready(function () {
  var windowSize = $(window).width();
  $(".view-on-map-marker").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = "google-maps-box";
      $("html, body").animate(
        {
          scrollTop: $("#google-maps-box").offset().top - 160,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

// HOTEL OBJECTS
function restaurant(name, type, website, lat, lng) {
  this.name = name;
  this.type = type;
  this.website = website;
  this.lat = lat;
  this.lng = lng;
}

function attraction(name, type, website, lat, lng) {
  this.name = name;
  this.type = type;
  this.website = website;
  this.lat = lat;
  this.lng = lng;
}

function hotel(name, type, website, lat, lng) {
  this.name = name;
  this.type = type;
  this.website = website;
  this.lat = lat;
  this.lng = lng;
}

let pizzaExpress = new restaurant(
  "Pizza Express",
  "Italian",
  "https://www.pizzaexpress.com/stafford",
  52.807589,
  -2.117275
);

let theMarketVaults = new restaurant(
  "The Market Vaults",
  "Burgers + Fries",
  "https://www.themarketvaults.co.uk/",
  52.806962,
  -2.116683
);

let theSoupKitchen = new restaurant(
  "The Soup Kitchen",
  "British",
  "http://www.thesoupkitchen.co.uk/home.html",
  52.805889,
  -2.118376
);

let theSwan = new restaurant(
  "The Swan",
  "British",
  "https://www.theswanstafford.co.uk/",
  52.806043,
  -2.116994
);

let theBear = new restaurant(
  "The Bear",
  "Grill",
  "https://www.thebearpubstafford.co.uk/index",
  52.806509,
  -2.116485
);

let theSunInn = new restaurant(
  "The Sun",
  "Traditional",
  "https://www.titanicbrewery.co.uk/our-pubs/the-sun/",
  52.806428,
  -2.116867
);

//ATTRACTION OBJECTS
let theAncientHighHouse = new attraction(
  "The Ancient High House",
  "Museum",
  "https://www.freedom-leisure.co.uk/centres/ancienthighhouse/",
  52.806308,
  -2.117098
);

let staffordCastle = new attraction(
  "Stafford Castle",
  "Castle",
  "https://www.freedom-leisure.co.uk/centres/stafford-castle/",
  52.798166,
  -2.147409
);

let victoriaPark = new attraction(
  "Victoria Park",
  "Park",
  "https://www.staffordbc.gov.uk/victoriapark",
  52.804005,
  -2.120343
);

let doxeyMarshes = new attraction(
  "Doxey Marshes",
  "Nature Reserve",
  "https://www.staffs-wildlife.org.uk/nature-reserves/doxey-marshes",
  52.820349,
  -2.145383
);

let shireHallGallery = new attraction(
  "Shire Hall Gallery",
  "Art Gallery",
  "https://www.staffordshire.gov.uk/Business/Investment/Shire-Hall.aspx",
  52.807209,
  -2.11675
);

let gatehouseTheatre = new attraction(
  "Gatehouse Theatre",
  "Theatre",
  "https://staffordgatehousetheatre.co.uk/",
  52.807247,
  -2.115686
);

//HOTEL OBJECTS
let theSwanHotel = new hotel(
  "The Swan",
  "Hotel",
  "https://www.theswanstafford.co.uk/",
  52.806043,
  -2.116994
);

let theVine = new hotel(
  "The Vine",
  "Hotel",
  "https://www.vinehotelpub.co.uk/",
  52.808093,
  -2.116839
);

let tillingtonHall = new hotel(
  "Tillington Hall",
  "Hotel",
  "https://www.tillingtonhall.co.uk/",
  52.822488,
  -2.134698
);

let theSpittalBrook = new hotel(
  "The Spittal Brook",
  "B&B",
  "http://thespittalbrookstafford.co.uk/",
  52.79706,
  -2.100965
);

let abbeyHotel = new hotel(
  "Abbey Hotel",
  "B&B",
  "http://www.abbeyhotelstafford.co.uk/",
  52.79933,
  -2.104049
);

let cameronLodge = new hotel(
  "Cameron Lodge",
  "B&B",
  "https://www.cameronlodgestafford.co.uk/",
  52.800147,
  -2.105996
);

// SHOW RESTAURANTS ON PAGE
let eat1 =
  "<div class='places-to-box'><p>" +
  pizzaExpress.name +
  "</p>" +
  "<p>" +
  pizzaExpress.type +
  "</p>" +
  '<p> <a class="external_link" target=_blank href="' +
  pizzaExpress.website +
  '">Make a booking</a></p>' +
  '<button id="view-on-map" class="view-on-map-marker" onclick="dropSingleMarker(restaurants[0])">View On Map</button></div>';
let food1 = document.getElementById("pizza-express");
food1.innerHTML = eat1;

let eat2 =
  "<div class='places-to-box'><p>" +
  theSwan.name +
  "</p>" +
  "<p>" +
  theSwan.type +
  "</p>" +
  '<p> <a target=_blank href="' +
  theSwan.website +
  '">Make a booking</a></p>' +
  '<button class="view-on-map-marker" onclick="dropSingleMarker(restaurants[1])">View On Map</button></div>';
let food2 = document.getElementById("the-swan");
food2.innerHTML = eat2;

let eat3 =
  "<div class='places-to-box'><p>" +
  theMarketVaults.name +
  "</p>" +
  "<p>" +
  theMarketVaults.type +
  "</p>" +
  '<p> <a target=_blank href="' +
  theMarketVaults.website +
  '">Make a booking</a></p>' +
  '<button class="view-on-map-marker" onclick="dropSingleMarker(restaurants[2])"  >View On Map</button></div>';
let food3 = document.getElementById("the-market-vaults");
food3.innerHTML = eat3;

let eat4 =
  "<div class='places-to-box'><p>" +
  theSoupKitchen.name +
  "</p>" +
  "<p>" +
  theSoupKitchen.type +
  "</p>" +
  '<p> <a target=_blank href="' +
  theSoupKitchen.website +
  '">Make a booking</a></p>' +
  '<button class="view-on-map-marker" onclick="dropSingleMarker(restaurants[3])"  >View On Map</button></div>';
let food4 = document.getElementById("the-soup-kitchen");
food4.innerHTML = eat4;

let eat5 =
  "<div class='places-to-box'><p>" +
  theBear.name +
  "</p>" +
  "<p>" +
  theBear.type +
  "</p>" +
  '<p> <a target=_blank href="' +
  theBear.website +
  '">Make a booking</a></p>' +
  '<button class="view-on-map-marker" onclick="dropSingleMarker(restaurants[4])"  >View On Map</button></div>';
let food5 = document.getElementById("the-bear");
food5.innerHTML = eat5;

let eat6 =
  "<div class='places-to-box'><p>" +
  theSunInn.name +
  "</p>" +
  "<p>" +
  theSunInn.type +
  "</p>" +
  '<p> <a target=_blank href="' +
  theSunInn.website +
  '">Make a booking</a></p>' +
  '<button class="view-on-map-marker" onclick="dropSingleMarker(restaurants[5])"  >View On Map</button></div>';
let food6 = document.getElementById("the-sun");
food6.innerHTML = eat6;

// SHOW ATTRACTIONS ON PAGE
let see1 =
  "<div class='places-to-box'><p>" +
  theAncientHighHouse.name +
  "</p>" +
  "<p>" +
  theAncientHighHouse.type +
  "</p>" +
  '<p> <a target=_blank href="' +
  theAncientHighHouse.website +
  '">See Website</a></p>' +
  '<button class="view-on-map-marker" onclick="dropSingleMarker(attractions[0])"  >View On Map</button></div>';
let attraction1 = document.getElementById("ancient-high-house");
attraction1.innerHTML = see1;

let see2 =
  "<div class='places-to-box'><p>" +
  staffordCastle.name +
  "</p>" +
  "<p>" +
  staffordCastle.type +
  "</p>" +
  '<p> <a target=_blank href="' +
  staffordCastle.website +
  '">See Website</a></p>' +
  '<button class="view-on-map-marker" onclick="dropSingleMarker(attractions[1])"  >View On Map</button></div>';
let attraction2 = document.getElementById("stafford-castle");
attraction2.innerHTML = see2;

let see3 =
  "<div class='places-to-box'><p>" +
  victoriaPark.name +
  "</p>" +
  "<p>" +
  victoriaPark.type +
  "</p>" +
  '<p> <a target=_blank href="' +
  victoriaPark.website +
  '">See Website</a></p>' +
  '<button class="view-on-map-marker" onclick="dropSingleMarker(attractions[2])"  >View On Map</button></div>';
let attraction3 = document.getElementById("victoria-park");
attraction3.innerHTML = see3;

let see4 =
  "<div class='places-to-box'><p>" +
  doxeyMarshes.name +
  "</p>" +
  "<p>" +
  doxeyMarshes.type +
  "</p>" +
  '<p> <a target=_blank href="' +
  doxeyMarshes.website +
  '">See Website</a></p>' +
  '<button class="view-on-map-marker" onclick="dropSingleMarker(attractions[3])"  >View On Map</button></div>';
let attraction4 = document.getElementById("doxey-marshes");
attraction4.innerHTML = see4;

let see5 =
  "<div class='places-to-box'><p>" +
  shireHallGallery.name +
  "</p>" +
  "<p>" +
  shireHallGallery.type +
  "</p>" +
  '<p> <a target=_blank href="' +
  shireHallGallery.website +
  '">See Website</a></p>' +
  '<button class="view-on-map-marker" onclick="dropSingleMarker(attractions[4])"  >View On Map</button></div>';
let attraction5 = document.getElementById("shire-hall-gallery");
attraction5.innerHTML = see5;

let see6 =
  "<div class='places-to-box'><p>" +
  gatehouseTheatre.name +
  "</p>" +
  "<p>" +
  gatehouseTheatre.type +
  "</p>" +
  '<p> <a target=_blank href="' +
  shireHallGallery.website +
  '">See Website</a></p>' +
  '<button class="view-on-map-marker" onclick="dropSingleMarker(attractions[5])"  >View On Map</button></div>';
let attraction6 = document.getElementById("gatehouse-theatre");
attraction6.innerHTML = see6;

// SHOW HOTELS ON PAGE
let stay1 =
  "<div class='places-to-box'><p>" +
  theSwanHotel.name +
  "</p>" +
  "<p>" +
  theSwanHotel.type +
  "</p>" +
  '<p> <a target=_blank href="' +
  theSwanHotel.website +
  '">See Website</a></p>' +
  '<button class="view-on-map-marker" onclick="dropSingleMarker(hotels[0])"  >View On Map</button></div>';
let hotel1 = document.getElementById("the-swan-hotel");
hotel1.innerHTML = stay1;

let stay2 =
  "<div class='places-to-box'><p>" +
  theVine.name +
  "</p>" +
  "<p>" +
  theVine.type +
  "</p>" +
  '<p> <a target=_blank href="' +
  theVine.website +
  '">See Website</a></p>' +
  '<button class="view-on-map-marker" onclick="dropSingleMarker(hotels[1])"  >View On Map</button></div>';
let hotel2 = document.getElementById("the-vine");
hotel2.innerHTML = stay2;

let stay3 =
  "<div class='places-to-box'><p>" +
  tillingtonHall.name +
  "</p>" +
  "<p>" +
  tillingtonHall.type +
  "</p>" +
  '<p> <a target=_blank href="' +
  tillingtonHall.website +
  '">See Website</a></p>' +
  '<button class="view-on-map-marker" onclick="dropSingleMarker(hotels[2])"  >View On Map</button></div>';
let hotel3 = document.getElementById("tillington-hall");
hotel3.innerHTML = stay3;

let stay4 =
  "<div class='places-to-box'><p>" +
  theSpittalBrook.name +
  "</p>" +
  "<p>" +
  theSpittalBrook.type +
  "</p>" +
  '<p> <a target=_blank href="' +
  theSpittalBrook.website +
  '">See Website</a></p>' +
  '<button class="view-on-map-marker" onclick="dropSingleMarker(hotels[3])"  >View On Map</button></div>';
let hotel4 = document.getElementById("the-spittal-brook");
hotel4.innerHTML = stay4;

let stay5 =
  "<div class='places-to-box'><p>" +
  abbeyHotel.name +
  "</p>" +
  "<p>" +
  abbeyHotel.type +
  "</p>" +
  '<p> <a target=_blank href="' +
  abbeyHotel.website +
  '">See Website</a></p>' +
  '<button class="view-on-map-marker" onclick="dropSingleMarker(hotels[4])"  >View On Map</button></div>';
let hotel5 = document.getElementById("abbey-hotel");
hotel5.innerHTML = stay5;

let stay6 =
  "<div class='places-to-box'><p>" +
  cameronLodge.name +
  "</p>" +
  "<p>" +
  cameronLodge.type +
  "</p>" +
  '<p> <a target=_blank href="' +
  cameronLodge.website +
  '">See Website</a></p>' +
  '<button class="view-on-map-marker" onclick="dropSingleMarker(hotels[5])"  >View On Map</button></div> ';
let hotel6 = document.getElementById("cameron-lodge");
hotel6.innerHTML = stay6;

// HOVER EFFECT ON BUTTONS
$(".view-on-map-marker").hover(
  function () {
    $(this).addClass("view-on-map-marker-hover");
  },
  function () {
    $(this).removeClass("view-on-map-marker-hover");
  }
);
