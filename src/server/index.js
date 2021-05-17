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
const API_username = "raphael88"

app.post("/geonameUrl", async function (req, res) {
    console.log('req====+>', req.body)
    const result = await fetch(baseURL + req.body.sentence + urlOption+ API_username)
    try {
        console.log(result)
        const response = await result.json();
        res.send(response)
    } catch (error) {
        console.log("error", error);
    }
})


//Pixabay API
const picUrl ='https://pixabay.com/api/?key='
const API_Key = "21617163-891f5fc3b1e299f21fbb94327"
const apiOption ="&per_page=3&category=travel&image_type=photo"

app.post("/pictureUrl", async function (req, res) {
    console.log('req====+>', req.body)
    const result = await fetch(picUrl+ API_Key +"&q=" + req.body.sentence + apiOption)
    try {
        console.log(result)
        const response = await result.json();
        res.send(response)
    } catch (error) {
        console.log("error", error);
    }
})

//forcast  API
app.post("/forcast", async function (req, res){
    const info = req.body
    const latitude = info.geonames[0].lat
    const longitude = info.geonames[0].lng
    const weatherKey = "59baf0425a574068af814ae4922c4358"
    const result = await fetch("https://api.weatherbit.io/v2.0/forecast/daily?lat=" + latitude + "&lon=" + longitude +"&key="+ weatherKey)
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

//travelbriefing API

app.post("/travelbriefingUrl", async function (req, res) {
    console.log('req====+>', req.body)
    const info = req.body
    const country = info.geonames[0].countryName
    const result = await fetch("https://travelbriefing.org/"+ country +"?format=json")
    try{
        console.log(result)
        let data = await result.json();
        const newData = {
            names:{
                names: data.names.name,
                continent:data.names.continent
            },
            language:{
                language: data.language[0].language,
                official: data.language[0].official,
            },
            electricity:{
                voltage: data.electricity.voltage,
                plugs: data.electricity.plugs,
            },
            telephone:{
                calling_code: data.telephone.calling_code,
                emergencyNumber: data.telephone.police,
            },
            water: data.water.short,
            currency:{
                name:data.currency.name,
                symbol:data.currency.symbol,
                rate:data.currency.rate
            },
        }
        Object.assign(infoTravel, newData);
        console.log(infoTravel)
        res.end() //using res.end()
    }catch(error){
        console.log("error", error);
    }
})