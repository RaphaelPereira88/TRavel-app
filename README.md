## intro:

This program is a Travel app that will give you, the forcast for the next 16 days from today,informations on the country, 
a picture of the city and access to a todo list. you texts and detects their polarity, subjectivity, irony and emotional agreement.

It is part of a training for the front end developer program thatr I'm currently doing with [Udacity](https://www.udacity.com/)

This is the opportunity to put all of the skills I have learned into one project to build my own custom travel app. 

Skills used: HTML, CSS, JAVASCRIPT

I targeted the DOM, working with objects, and retrieving data from 4 APIs (Geonames, Weatherbit, Pixabay, REST Countries API)in which one of those is reliant on another to work. 

It is done in a Webpack environment, using an express server, and wrapped up with service workers.

The goal of this project is to get practice with:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls


# Fixtures:

1) You can enter an city, start date and end date 

2) The Geonames API will pass the LAT and LNG coordonates to the weather API and the rest countries API to get the forscast and a information about the country.

3) The Pixabay API is called using the user input to display a picture of the city

4) The countdown function allow us to get the number of days left before departure and how long your trip will be 

5) The add Notes section is a todo list that you can toggle, add notes, tick notes, and erase notes.

6) you have to enter a destination otherwise the program doesn't let you carry on

7) Because we are limited due to the weather API and the 16 days forcast from today, I voluntary set a  limit of 16 days, the rest of the dates are disabled.

8) Start date is automatically set up to today's date and the end date minimum value date is automatically set up by defaut to the start date you enterred. the previous dates are disabled in the calendar. 

8) If the pixabay API doesn't have pictures available for the destination you entered, a special image will show up instead to let you know.

9) if you select a start date within the 7 coming days, it will give you the forcast of today only. If you select a date superior to 7 days from today it will give the forcast for 16 days from now and will show you circle with a red color the date matching your start date.



### info on API key:
THe API key is set up in a env. file  that is then marked in the gitignore.
To create the env file , I used *dotenv*, see decription below:

*dotenv*: allows you to separate secrets from your source code. This is useful in a collaborative environment (e.g., work, or open source) where you may not want to share your database login credentials with other people. Instead, you can share the source code while allowing other people to create their own . env file.`

### service workers installed.

### Dependdencies used: 

1)" Path " module provides a way of working with directories and file paths.

2) "Express" to run server and routes

3)" bodyParser" is the Node. js body parsing middleware. It is responsible for parsing the incoming request bodies in a middleware before you handle it.Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST) and exposes the resulting object (containing the keys and values) on req. body .

4)" Cors" is a middleware for cross origin allowance, It allows you to make requests from one website to another website in the browser,

5) "node-fetch" be able to use fetch

6)"dotenv" to hide keys etc..

7)"babel"  is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.

8)"jest" to be able to make tests

9)"webpack-dev-server" provides live reloading. This should be used for development only. It uses a webpack-dev-middleware which provides fast in-memory access to the webpack assets.

10)"node-sass"   "sass-loader"  "style-loader": for compiling SCSS/Sass files.

11) "service worker" service worker is a script that your browser runs in the background, separate from a web page, opening the door to features that don't need a web page or user interaction. Today, they already include features like push notifications and background sync




