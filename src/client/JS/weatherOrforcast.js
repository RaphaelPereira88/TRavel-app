import {collectData}from './collectData'
import {timeLeft}from './timeLeft'
import {updateUIweather}from './updateUIweather'
import {updateUIforcast}from './updateUIforcast'

function weatherOrforcast(response){
    const inpudate = document.getElementById('start').value
    const newTime = timeLeft(inpudate)
    //API call for the forcast
    collectData('http://localhost:8081/forcast',response)
    .then((data)=> {
        try{
            //to choose between 1 day forcast or 16 days forcast according to the depart date selected by user
            //use of timeleft function to know when are we in time compare to the depart date selected
            if (newTime <=6) {
                updateUIweather(data)
            }else{
                updateUIforcast(data)
            }
        } catch(error) {
            console.log("error", error);
        }
    })
}

export{weatherOrforcast}