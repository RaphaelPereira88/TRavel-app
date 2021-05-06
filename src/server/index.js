const projectData={}

//The Path module provides a way of working with directories and file paths.
const path = require('path')
// Express to run server and routes
const express = require('express')
//middleware
const bodyParser = require('body-parser')
// Cors for cross origin allowance
const cors = require('cors');
//to define and be able to use fetch
const fetch = require('node-fetch')

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

//store datas from the Geoname API
const baseURL ='http://api.geonames.org/searchJSON?name_equals=';
const urlOption = '&fuzzy=0.8&username='
const API_username = "raphael88"

app.post("/clientdataUrl", async function (req, res) {
    console.log('req====+>', req.body)

    const result = await fetch("http://api.geonames.org/searchJSON?name_equals=" + req.body.sentence + urlOption+ API_username)
    try {
        console.log (result)
        const response = await result.json();
        res.send(response)
        console.log(response)
    } catch (error) {
        console.log("error", error);
    }
})