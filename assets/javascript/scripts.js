// SCRIPTS TO CONTROL EXPANDING MENUS

$("#eat").click(function () {
  $("#places-to-see").hide();
  $("#places-to-stay").hide();
  $("#places-to-eat").toggle();
});

$("#see").click(function () {
  $("#places-to-eat").hide();
  $("#places-to-stay").hide();
  $("#places-to-see").toggle();
});

$("#stay").click(function () {
  $("#places-to-eat").hide();
  $("#places-to-see").hide();
  $("#places-to-stay").toggle();
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
  'Pizza Express',
  'Italian',
  'https://www.pizzaexpress.com/stafford',
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
  "http://www.thesoupkitchen.co.uk/home.htm",
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
  "The SpittalBrook",
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

// RESTAURANTS

let eat1 = 
'<p>' + pizzaExpress.name + '</p>' +
'<p>' + pizzaExpress.type + '</p>' +
'<p> <a target=_blank href="' + pizzaExpress.website +'">Make a booking</a></p>' + 
'<button id="pizza-express-marker">View On Map</button>';
let food1 = document.getElementById("pizza-express");
food1.innerHTML = eat1;

let eat2 = 
'<p>' + theSwan.name + '</p>' +
'<p>' + theSwan.type + '</p>' +
'<p> <a target=_blank href="' + theSwan.website +'">Make a booking</a></p>' + 
'<button id="the-swan-marker">View On Map</button>';
let food2 = document.getElementById("the-swan");
food2.innerHTML = eat2;

let eat3 = 
'<p>' + theMarketVaults.name + '</p>' +
'<p>' + theMarketVaults.type + '</p>' +
'<p> <a target=_blank href="' + theMarketVaults.website +'">Make a booking</a></p>' + 
'<button id="the-market-vaults-marker">View On Map</button>';
let food3 = document.getElementById("the-market-vaults");
food3.innerHTML = eat3;

let eat4 = 
'<p>' + theSoupKitchen.name + '</p>' +
'<p>' + theSoupKitchen.type + '</p>' +
'<p> <a target=_blank href="' + theSoupKitchen.website +'">Make a booking</a></p>' + 
'<button id="the-soup-kitchen-marker">View On Map</button>';;
let food4 = document.getElementById("the-soup-kitchen");
food4.innerHTML = eat4;

let eat5 = 
'<p>' + theBear.name + '</p>' +
'<p>' + theBear.type + '</p>' +
'<p> <a target=_blank href="' + theBear.website +'">Make a booking</a></p>' + 
'<button id="the-bear-marker">View On Map</button>';;
let food5 = document.getElementById("the-bear");
food5.innerHTML = eat5;

let eat6 = 
'<p>' + theSunInn.name + '</p>' +
'<p>' + theSunInn.type + '</p>' +
'<p> <a target=_blank href="' + theSunInn.website +'">Make a booking</a></p>' + 
'<button id="the-sun-inn-marker">View On Map</button>';;
let food6 = document.getElementById("the-sun");
food6.innerHTML = eat6;

// ATTRACTIONS

let see1 = 
'<p>' + theAncientHighHouse.name + '</p>' +
'<p>' + theAncientHighHouse.type + '</p>' +
'<p> <a target=_blank href="' + theAncientHighHouse.website +'">See Website</a></p>' + 
'<button id="the-ancient-high-house-marker">View On Map</button>';;
let attraction1 = document.getElementById("ancient-high-house");
attraction1.innerHTML = see1;

let see2 = 
'<p>' + staffordCastle.name + '</p>' +
'<p>' + staffordCastle.type + '</p>' +
'<p> <a target=_blank href="' + staffordCastle.website +'">See Website</a></p>' + 
'<button id="stafford-castle-marker">View On Map</button>';;
let attraction2 = document.getElementById("stafford-castle");
attraction2.innerHTML = see2;

let see3 = 
'<p>' + victoriaPark.name + '</p>' +
'<p>' + victoriaPark.type + '</p>' +
'<p> <a target=_blank href="' + victoriaPark.website +'">See Website</a></p>' + 
'<button id="victoria-park-marker">View On Map</button>';;
let attraction3 = document.getElementById("victoria-park");
attraction3.innerHTML = see3;

let see4 = 
'<p>' + doxeyMarshes.name + '</p>' +
'<p>' + doxeyMarshes.type + '</p>' +
'<p> <a target=_blank href="' + doxeyMarshes.website +'">See Website</a></p>' + 
'<button id="doxey-marshes-marker">View On Map</button>';;
let attraction4 = document.getElementById("doxey-marshes");
attraction4.innerHTML = see4;

let see5 = 
'<p>' + shireHallGallery.name + '</p>' +
'<p>' + shireHallGallery.type + '</p>' +
'<p> <a target=_blank href="' + shireHallGallery.website +'">See Website</a></p>' + 
'<button id="shire-hall-gallery-marker">View On Map</button>';;
let attraction5 = document.getElementById("shire-hall-gallery");
attraction5.innerHTML = see5;

let see6 = 
'<p>' + gatehouseTheatre.name + '</p>' +
'<p>' + gatehouseTheatre.type + '</p>' +
'<p> <a target=_blank href="' + shireHallGallery.website +'">See Website</a></p>' + 
'<button id="gatehouse-theatre-marker">View On Map</button>';;
let attraction6 = document.getElementById("gatehouse-theatre");
attraction6.innerHTML = see6;

// HOTELS

let stay1 = 
'<p>' + theSwanHotel.name + '</p>' +
'<p>' + theSwanHotel.type + '</p>' +
'<p> <a target=_blank href="' + theSwanHotel.website +'">See Website</a></p>' + 
'<button id="the-swan-hotel-marker">View On Map</button>';;
let hotel1 = document.getElementById("the-swan-hotel");
hotel1.innerHTML = stay1;

let stay2 = 
'<p>' + theVine.name + '</p>' +
'<p>' + theVine.type + '</p>' +
'<p> <a target=_blank href="' + theVine.website +'">See Website</a></p>' + 
'<button id="the-vine-marker">View On Map</button>';;
let hotel2 = document.getElementById("the-vine");
hotel2.innerHTML = stay2;

let stay3 = 
'<p>' + tillingtonHall.name + '</p>' +
'<p>' + tillingtonHall.type + '</p>' +
'<p> <a target=_blank href="' + tillingtonHall.website +'">See Website</a></p>' + 
'<button id="tillington-hall-marker">View On Map</button>';;
let hotel3 = document.getElementById("tillington-hall");
hotel3.innerHTML = stay3;

let stay4 = 
'<p>' + theSpittalBrook.name + '</p>' +
'<p>' + theSpittalBrook.type + '</p>' +
'<p> <a target=_blank href="' + theSpittalBrook.website +'">See Website</a></p>' + 
'<button id="the-spittal-brook-marker">View On Map</button>';;
let hotel4 = document.getElementById("the-spittal-brook");
hotel4.innerHTML = stay4;

let stay5 = 
'<p>' + abbeyHotel.name + '</p>' +
'<p>' + abbeyHotel.type + '</p>' +
'<p> <a target=_blank href="' + abbeyHotel.website +'">See Website</a></p>' + 
'<button id="abbey-hotel-marker">View On Map</button>';;
let hotel5 = document.getElementById("abbey-hotel");
hotel5.innerHTML = stay5;

let stay6 = 
'<p>' + cameronLodge.name + '</p>' +
'<p>' + cameronLodge.type + '</p>' +
'<p> <a target=_blank href="' + cameronLodge.website +'">See Website</a></p>' + 
'<button id="cameron-lodge-marker">View On Map</button>';;
let hotel6 = document.getElementById("cameron-lodge");
hotel6.innerHTML = stay6;

