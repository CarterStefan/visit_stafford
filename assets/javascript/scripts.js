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

/*SCRIPT TAKEN FROM W3SCHOOLS - SMOOTH SCROLL FOR WHOLE PAGE*/
$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        400,
        function () {
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

/*SCRIPT TAKEN FROM W3SCHOOLS - SMOOTH SCROLL TO ELEMENT AMENDED TO ONLY SCROLL TO GOOGLE MAP BOX*/
$(document).ready(function () {
  $(".view-on-map-marker").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $("#google-maps-box").offset().top - 160,
        },
        400,
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

var pizzaExpress = new restaurant(
  "Pizza Express",
  "Italian",
  "https://www.pizzaexpress.com/stafford",
  52.807589,
  -2.117275
);

var theMarketVaults = new restaurant(
  "The Market Vaults",
  "Burgers + Fries",
  "https://www.themarketvaults.co.uk/",
  52.806962,
  -2.116683
);

var theSoupKitchen = new restaurant(
  "The Soup Kitchen",
  "British",
  "http://www.thesoupkitchen.co.uk/home.htm",
  52.805889,
  -2.118376
);

var theSwan = new restaurant(
  "The Swan",
  "British",
  "https://www.theswanstafford.co.uk/",
  52.806043,
  -2.116994
);

var theBear = new restaurant(
  "The Bear",
  "Grill",
  "https://www.thebearpubstafford.co.uk/index",
  52.806509,
  -2.116485
);

var theSunInn = new restaurant(
  "The Sun",
  "Traditional",
  "https://www.titanicbrewery.co.uk/our-pubs/the-sun/",
  52.806428,
  -2.116867
);

//ATTRACTION OBJECTS
var theAncientHighHouse = new attraction(
  "The Ancient High House",
  "Museum",
  "https://www.freedom-leisure.co.uk/centres/ancienthighhouse/",
  52.806308,
  -2.117098
);

var staffordCastle = new attraction(
  "Stafford Castle",
  "Castle",
  "https://www.freedom-leisure.co.uk/centres/stafford-castle/",
  52.798166,
  -2.147409
);

var victoriaPark = new attraction(
  "Victoria Park",
  "Park",
  "https://www.staffordbc.gov.uk/victoriapark",
  52.804005,
  -2.120343
);

var doxeyMarshes = new attraction(
  "Doxey Marshes",
  "Nature Reserve",
  "https://www.staffs-wildlife.org.uk/nature-reserves/doxey-marshes",
  52.820349,
  -2.145383
);

var shireHallGallery = new attraction(
  "Shire Hall Gallery",
  "Art Gallery",
  "https://www.staffordshire.gov.uk/Business/Investment/Shire-Hall.aspx",
  52.807209,
  -2.11675
);

var gatehouseTheatre = new attraction(
  "Gatehouse Theatre",
  "Theatre",
  "https://staffordgatehousetheatre.co.uk/",
  52.807247,
  -2.115686
);

//HOTEL OBJECTS
var theSwanHotel = new hotel(
  "The Swan",
  "Hotel",
  "https://www.theswanstafford.co.uk/",
  52.806043,
  -2.116994
);

var theVine = new hotel(
  "The Vine",
  "Hotel",
  "https://www.vinehotelpub.co.uk/",
  52.808093,
  -2.116839
);

var tillingtonHall = new hotel(
  "Tillington Hall",
  "Hotel",
  "https://www.tillingtonhall.co.uk/",
  52.822488,
  -2.134698
);

var theSpittalBrook = new hotel(
  "The Spittal Brook",
  "B&B",
  "http://thespittalbrookstafford.co.uk/",
  52.79706,
  -2.100965
);

var abbeyHotel = new hotel(
  "Abbey Hotel",
  "B&B",
  "http://www.abbeyhotelstafford.co.uk/",
  52.79933,
  -2.104049
);

var cameronLodge = new hotel(
  "Cameron Lodge",
  "B&B",
  "https://www.cameronlodgestafford.co.uk/",
  52.800147,
  -2.105996
);

// SHOW RESTAURANTS ON PAGE
var eat1 =
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
var food1 = document.getElementById("pizza-express");
food1.innerHTML = eat1;

var eat2 =
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
var food2 = document.getElementById("the-swan");
food2.innerHTML = eat2;

var eat3 =
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
var food3 = document.getElementById("the-market-vaults");
food3.innerHTML = eat3;

var eat4 =
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
var food4 = document.getElementById("the-soup-kitchen");
food4.innerHTML = eat4;

var eat5 =
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
var food5 = document.getElementById("the-bear");
food5.innerHTML = eat5;

var eat6 =
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
var food6 = document.getElementById("the-sun");
food6.innerHTML = eat6;

// SHOW ATTRACTIONS ON PAGE
var see1 =
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
var attraction1 = document.getElementById("ancient-high-house");
attraction1.innerHTML = see1;

var see2 =
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
var attraction2 = document.getElementById("stafford-castle");
attraction2.innerHTML = see2;

var see3 =
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
var attraction3 = document.getElementById("victoria-park");
attraction3.innerHTML = see3;

var see4 =
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
var attraction4 = document.getElementById("doxey-marshes");
attraction4.innerHTML = see4;

var see5 =
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
var attraction5 = document.getElementById("shire-hall-gallery");
attraction5.innerHTML = see5;

var see6 =
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
var attraction6 = document.getElementById("gatehouse-theatre");
attraction6.innerHTML = see6;

// SHOW HOTELS ON PAGE
var stay1 =
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
var hotel1 = document.getElementById("the-swan-hotel");
hotel1.innerHTML = stay1;

var stay2 =
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
var hotel2 = document.getElementById("the-vine");
hotel2.innerHTML = stay2;

var stay3 =
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
var hotel3 = document.getElementById("tillington-hall");
hotel3.innerHTML = stay3;

var stay4 =
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
var hotel4 = document.getElementById("the-spittal-brook");
hotel4.innerHTML = stay4;

var stay5 =
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
var hotel5 = document.getElementById("abbey-hotel");
hotel5.innerHTML = stay5;

var stay6 =
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
var hotel6 = document.getElementById("cameron-lodge");
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
