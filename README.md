# VISIT STAFFORD

### [GitHub](https://github.com/CarterStefan/visit_stafford)
(https://user-images.githubusercontent.com/64138643/88920640-19868e80-d265-11ea-8b65-59ec215c043e.PNG)

### [GitHub Pages](https://carterstefan.github.io/visit_stafford)

## Contents
1. [Project Overview](Project-Overview)
2. [UX](ux)

## Project Overview
This is my second milestone project towards my full-stack web developer course with the [Code Institute](https://codeinstitute.net/). The website will be created using HTML, CSS and JAVASCRIPT / JQuery.

I will create a website for my hometown of Stafford. This will feature information about the town, images of the area, along with a map feature showing places to eat as well as local attractions. I also plan to incorporate a weather forecast feature to update people who may be planning a visit what the weather will be like in the town.

The main user of the website will be residents who live here looking for something to do, as well as people who have never been to the town before who may be planning a visit.



## UX 
The users of this website can be split into two simple groups, those who live in Stafford and those who don't. The aim of the website will be to inform people of what there is to do around stafford. This will include places to eat and drink, places of interest to visit, and places to shop. Due to this, despite the two groups of users being split, they share a common purpose to visit the site in the fact they are looking for something to do in Stafford.

The website will be focused on adults, so will need a professional and clean feel to the site, encouraging people to visit the area. It should be informative and easy to use.

### User Stories
- I am a current resident of Stafford looking for somewhere to eat this weekend. 

  Having lived here for a few years, I do know of the restaurants here, although I am unable to choose which one to go to for a meal out on the weekend.  
  I would like to go on a website to show me a list of local eateries, so I can see them all in one place to see which one takes my fancy the most, and       perhaps find a restaurant I did not know about near to me. 
  
  
- I am visiting Stafford on part of a business trip having never been to the town before. 

  As part of my expenses from work, I get a meal and drink included for each night. Not wanting to eat in the hotel room, I am looking for somewhere to eat   and find out a little about the town. As well as food, I would like to see more of the town than just the office and hotel room, so I would benefit from   suggestions of local places to walk to and attractions to see in my free time while I am here.
  
  
- I am visiting Stafford for a wedding on Sunday. I will be staying from Friday - Monday. 

  I would like to see what there is to do around the town on the days leading up to the wedding. Also, I would like to know what I need to pack in my         suitcase for the weekend. I want to know if I will need warm weathered clothing or cold weathered clothing for the days either side of the wedding.
  
  
## Features
This is a one page website. I opted for this as I wanted the page to be a one stop place for all information, which I felt a multi page website would take away from this concept. The webpage consists of:

- Jumbotron - Stand-out picture and "Welcome to Stafford Tagline".

- Introduction - A short introduction about the town.

- What's on - This section features a small selection of places to eat / see and stay. Each of these items offers an external link to the website, or the option to view on the map.

- Map controls - There are also some additional buttons which will have added control for the map. This includes show all of one category, show all of all categories and clear the map.

- Map - This is where the above controls are visualised. Once markers appear on the map, they can be clicked to show info windows with another link to the website.

- Weather - This section of the website is linked to a weather API to show a 8 day range of the weather in Stafford. It shows the date, temperature and a description of the weather that day, along with an image.

### Fonts
I have used the Google Fonts library to make the text on my page visually appealing.

@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

-   Bebas - This was a striking font, which is easy on the eye also. I did not want anything that applied to a specific target audience (nothing too childish or playful). This font will appeal to all that use the site, and wont take away anything from the content of the page.


### Color
![color_theme](https://user-images.githubusercontent.com/64138643/87045675-106b4a00-c1f0-11ea-8c87-82c5c3c3fa2a.PNG)

I chose this color theme as it tied in well with the colors of Stafford. Many of the iconic buildings of Stafford are old Tudor houses, and are painted balck and white. As well as this, the two main sports teams in Stafford, Stafford Rugby Club and Stafford Rangers FC play in yellow/black and white/black respectively. 

### Images 
The Jumbotron image of Mill Street was taken by myself.

The icons on the weather section were taken from [weatherbit](https://www.weatherbit.io/api) - These were then linked to weather code in the API data to show a particular image based on what the weather is that day.

## Technologies Used
- [HTML5](https://en.wikipedia.org/wiki/HTML5)  This was used to create the structure of the site.

- [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) This was used to make the page more visually appealing.

- [Bootstrap](https://getbootstrap.com/) This project used Bootstrap as a framework. The main use of this was for the layout and grid structure of the page.

- [Google-Fonts](https://fonts.google.com/) I used only one font on this page. This was taken from Google Fonts to make the page more visually appealing.

- [Adobe Color](https://color.adobe.com/create/color-wheel) I used only one font on this page. This was taken from Google Fonts to make the page more visually appealing.

- [Javascript](https://en.wikipedia.org/wiki/JavaScript) I used Javascript to create functionality for this site. The Google Map feature relies heavily on this, and the functionality was created using documentation from the Google Maps API site. I also got great help from a Git Hub repo I found - https://gist.github.com/Kusumoto/c2a73e9292590c510a47 - This added the functionality to the map which I was looking for when adapting the code to suit my personal needs, in adding personal info windows with different content, and also dropping the markers on the map.

- [Fontawsome](https://fontawesome.com/) I have used Fontawsome for the pictograms in the footer of my page.

- [JQuery](https://jquery.com) I used some JQuery around my site. This was used to create the functionality of the navbar on mobile site. Also, for helping the page scroll smoothly.

- [GitPod](https://www.gitpod.io/) This was used to create all the code for the site.

- [GitHub](https://github.com/) This was used for hosting and version control of the website. From here, I also used the Code Institute template to begin the coding of my site.

## User Story Testing
My First User Story was - I am a current resident of stafford looking for somewhere to eat this weekend. 
  - This is achieved through the 'what-to-do' section of the site. Here there is a suggestion of six places to eat, with a description of the type of food the restaurant offers. From here, the user can either see the location on the map, or view the restaurant's website to book a table. This can also be achieved through the info window on the map itself.
  
The second user story was - I am visiting Stafford on part of a business trip having never been to the town before.
  - This user story is accommodated for by offering more than just suggestions for places to eat. There is also a tab to show local attractions and places to see, as well as various hotels should they wish to change hotels for the next time they stay. Again, these are all visible on the map, either by being shown individually, or shown all at once to compare locations.
  
The third user story was - I am visiting Stafford for a wedding on Sunday. I will be staying from Friday - Monday.  
  - For this user story I have created a section on the site which links up to a weather API. The area is automatically added to show the weather for Stafford over an 8 day period. This will give people visiting a good idea on what to pack, based on the temperature and weather description. I added a personal / playful touch to this byt adding a sign off message for each day based on the weather description code returned from the weather API. for example the weather code "800" will show the message "bring your sunglasses".
  
  Also, this user would make use of the map and suggestions feature for creating a plan on where to eat and stay each night, along with what to do on the days around the wedding.
  
## Functionality Testing
I have tested each function of the site, by generally using the page as a user would, as well as extensively testing every individual button on the page to ensure it does what I want it to do.

### Nav Bar
Clicking the logo - This will take you to the top of the page.
Clicking Home - This will take you to the top of the page.
Clicking About - This will scroll to the introduction section.
Clicking Visit - This will scroll to the what to do section of the page.
Clicking Map - This will scroll to the google map section of the page.
Clicking Weather - This will take you to the weather report section of the page.

Clicking on any of the links in the nav bar from any of the sections will scroll to the desired location. 

The nav bar will also reduce in height when scrolling down the page, but will appear when scrolling up. This was due to the page being very long on mobile, so you can still easily navigate around the page without having to scroll all the way back to the top of the page to do so.

![nav_bar](https://user-images.githubusercontent.com/64138643/88782906-0cdf3900-d186-11ea-931b-e04cffe5d1a1.PNG)

![nav_bar_collapsed](https://user-images.githubusercontent.com/64138643/88783098-4dd74d80-d186-11ea-85c1-70fa19672786.PNG)

### Eat See Stay
Clicking Eat - This will show you the 6 options of places to eat.
Clicking See - This will show you the 6 options of places to see.
Clicking Stay - This will show you the 6 options of places to stay.

![eat_see_stay](https://user-images.githubusercontent.com/64138643/88783326-88d98100-d186-11ea-9c6d-8abe40001c59.PNG)

You can navigate between the three tabs easily and the background will change to show you which tab you are currently on. 

Clicking on any of the 'make booking' / 'see website' will take you to an external page of the particular restaurant / attraction / hotel you clicked on.

Clicking on the 'view on map' buttons of the particular restaurant / attraction / hotel you clicked on will scroll down to the map feature and drop a single marker on the map zooming in and panning to that location. 

![map_single_marker](https://user-images.githubusercontent.com/64138643/88783463-b7575c00-d186-11ea-8740-3b5e690d6946.PNG)

Clicking 'Show all (restaurants / attractions / hotels) on map' will drop 6 markers on the map, and zoom out to fit them all on the map. Clicking on a marker will zoom in and pan to that location - opening an info window where you can then click through to make a booking / see the website. 

![map_restaurant_markers](https://user-images.githubusercontent.com/64138643/88783597-e40b7380-d186-11ea-8ae6-24a22f37272a.PNG)

Clicking 'Show all' will drop 18 markers on the map and zoom out to fit them all in the window. The 3 different categories will have a different marker image to differentiate for the user. Again, clicking on each individual marker will show an info window with the name and a link to make a booking / view website. 

![map_all_markers](https://user-images.githubusercontent.com/64138643/88783700-08675000-d187-11ea-9596-12d0ac64004b.PNG)

Clicking 'Clear all from map' will remove all markers currently on the map.

### Weather Forecast
This area of the website does not require the user to click anywhere as all the information is already returned from the API and displayed on the screen. This section is interactive in the sense that it will show an 8 day forecast from the date the user visits the site, so the date / temperature and descriptions will change upon each visit. Also, depending on the description returned from the API the description will use an if statement to display a more playful message depending on the code returned.

![weather](https://user-images.githubusercontent.com/64138643/88783818-2e8cf000-d187-11ea-88e7-03e5d30eae06.PNG)

### Footer 
The footer features four links to further expand the users knowledge of Stafford. They link up to Tripadvisor, Facebook, Twitter and Instagram.
These links open up the window in a new tab, and also underline on hover.

### Cross Platform Testing

I have used the following browsers to test my site:
1. Google Chrome - Version 84.0.4147.89
2. Mozilla Firefox - Version 79.0
3. Microsoft Edge - Version 84.0.522.44  

### Device Testing
I have used Chrome's device simulator to test how it looked on different devices and at different sizes. 
I checked the following devices:
1. iPad pro
2. iPad
3. iPhone X
4. iPhone 6/7/8 Plus
5. iPhone 6/7/8
6. Kindle Fire HDX
7. Galaxy S5

These were tested both landscape and portrait.

As well as this, I used my Huawei P20 to test the page on mobile.

An issue was encountered where the nav bar did not collapse on clicking the item. This was fixed with a solution I found on [Stack Overflow](https://stackoverflow.com/a/45818711)

## Validating Code

List of websites used to validate the code:
E.G
1. [W3C HTML Validator](https://validator.w3.org/)
2. [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
3. [JSHINT](https://jshint.com/)

### Future Features

If I was to expand on this website, I would add more imagery, maybe through a gallery section of the site.

I think it would also be a good idea to add more restaurants / attractions / hotels and maybe show a random selection of 6 each time, or 'show 6 more' through pagination. 

In time, it could be good to add the feature of booking a table / room through the page itself, rather than going to the external page to book.

This site could also be expanded to show information about different towns and cities, not just my town of Stafford.

## Deployment

I used GitHub and Gitpod to create all pages and css on my site. This was initially started with the Code Institute Template.

This was used for version control and regularly pushed changes using the terminal in Gitpod.

To deploy the page and make it viewable to others, I used Github pages:
1. In the Visit Stafford project I clicked on the settings tab.
2. I scrolled down to Github Pages and changed the Source to Master Branch.
3. This meant I could then share my page with others using the following link: [Visit Stafford](https://carterstefan.github.io/visit_stafford)

### Content
The introduction paragraph was taken from a [Visit Staffordshire](https://www.enjoystaffordshire.com/information/product-catch-all/stafford-p736161) site. 

### Credits
#### Scripts.js
- FUNCTION TO SMOOTH SCROLL FOR WHOLE PAGE - This was taken from W3Schools.
- FUNCTION TO SMOOTH SCROLL TO GOOGLE MAP BOX - This was taken from W3Schools.
- NAVBAR COLLAPSE ON CLOSE - Fix taken from [mdbootstrap](https://mdbootstrap.com/support/general/auto-close-navbar-when-click-on-link-responsive-mode/).

#### Maps.js
- THE FOLLOWING FUNCTIONS 'dropRestaurants, dropAttractions, dropHotels, addRestaurantMarkersWithTimeout, addAttractionsMarkersWithTimeout, addHotelsMarkersWithTimeout & clearMarkers' were created by referencing [This repository](https://gist.github.com/Kusumoto/c2a73e9292590c510a47). The functions were then adapted to suit my needs.

- THE CODE WAS ALSO CRETED WITH THE HELP OF THE GOOGLE MAPS DOCUMENTATION: 
[Overview](https://developers.google.com/maps/documentation/javascript/overview).
[Marker Animations](https://developers.google.com/maps/documentation/javascript/examples/marker-animations-iteration).
[Info Windows](https://developers.google.com/maps/documentation/javascript/infowindows).

- THE MAP MARKERS WERE TAKEN FROM [Map Icons Collection](https://mapicons.mapsmarker.com).

#### Weather.js
- FOLLOWED CODE INSTITUTE LESSON ON API / JSON TO EXTRACT DATA FROM WEATHER API.
- WEATHER API DATA EXTRACTED FROM [WeatherBit](https://www.weatherbit.io/api).
- WEATHER IMAGES TAKEN FROM [WeatherBit](https://www.weatherbit.io/api).
- REVERSED DATE USING [Stack Overflow](https://stackoverflow.com/questions/40232218/how-to-reverse-date-format-yyyy-mm-dd-using-javascript-jquery).

#### INDEX
- NAVBAR - Created using Bootstrap Documentation.
- INTRODUCTION PARAGRAPH - Taken from [Enjoy Stafford](https://www.enjoystaffordshire.com/information/product-catch-all/stafford-p736161).

### Acknowledgements

- I would like to thank my mentor Adegbenga Adeye for his help in my mentoring sessions and input in some valuable advice with the development of my website. 

- I would also like to thank the Code Institute team in helping with the learning new skills used to create this page.
