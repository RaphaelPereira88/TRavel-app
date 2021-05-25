const weatherDatas = { }
const infoTravel = { }

//The Path module provides a way of working with directories and file paths.
const path = require('path')
// Express to run server and routes
const express = require('express')
//middleware
const bodyParser = require('body-parser')
// Cors for cross origin allowance
const cors = require('cors');
//to define and be able to use fetch
const fetch = require('node-fetch');
const { response } = require('express');

// Start up an instance of app
const app = express();

//to hide my username and keys
const dotenv = require('dotenv');
dotenv.config();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use(express.static('dist'));

app.listen(8081, function(){
    console.log(`running on localhost: 8081`)
})

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
    
})

app.get("/all",function(req,res){
    res.send(weatherDatas)
})

app.get("/info",function(req,res){
    res.send(infoTravel) 
})

//Geoname API
const baseURL ='http://api.geonames.org/searchJSON?name_equals='
const urlOption = '&maxRows=2&fuzzy=0.8&username='

app.post("/geonameUrl", async function (req, res) {
    console.log('req====+>', req.body)
    const result = await fetch(baseURL + req.body.sentence + urlOption+ process.env.API_username)
    try {
        console.log(result)
        const response = await result.json();
        res.send(response)
        res.end() //using res.end()
    } catch (error) {
        console.log("error", error);
    }
})


//Pixabay API
const picUrl ='https://pixabay.com/api/?key='
const apiOption ="&per_page=3&category=travel&image_type=photo"

app.post("/pictureUrl", async function (req, res) {
    console.log('req====+>', req.body)
    const result = await fetch(picUrl+ process.env.API_Key +"&q=" + req.body.sentence + apiOption)
    try {
        const response = await result.json();
        res.send(response)
        console.log(response)
        res.end() //using res.end()
    } catch (error) {
        console.log("error", error);
    }
})

//forcast  API
app.post("/forcast", async function (req, res){
    const info = req.body
    const latitude = info.geonames[0].lat
    const longitude = info.geonames[0].lng
    const result = await fetch("https://api.weatherbit.io/v2.0/forecast/daily?lat=" + latitude + "&lon=" + longitude +"&key="+ process.env.API_weatherKey)
    try{
        console.log(result)
        let data = await result.json();
        Object.assign(weatherDatas, data);
        console.log(data)
        res.end() //using res.end()
    }catch(error){
        console.log("error", error);
    }
})

//restcountries API

app.post("/restcountries", async function (req, res) {
    console.log('req====+>', req.body)
    const info = req.body
    const country = info.geonames[0].countryName
    const result = await fetch("https://restcountries.eu/rest/v2/name/"+ country )
    try{
        console.log(result)
        let data = await result.json();
        const newData = {
            name: data[0].name,
            region:data[0].region,
            capital:data[0].capital,
            language: data[0].languages[0].name,
            population:data[0].population,
            currencies:{
                code:data[0].currencies[0].code,
                name:data[0].currencies[0].name,
                symbol:data[0].currencies[0].symbol
            },
            flag : data[0].flag,
        }
        Object.assign(infoTravel, newData);
        console.log(infoTravel)
        res.end() //using res.end()
    }catch(error){
        console.log("error", error);
    }
})