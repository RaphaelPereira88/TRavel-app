import {collectData}from './collectData'
import {timeLeft}from './timeLeft'
import {updateUIweather}from './updateUIweather'
import {updateUIforcast}from './updateUIforcast'

function weatherOrforcast(response){
    const inpudate = document.getElementById('start').value
    const newTime = timeLeft(inpudate)
    collectData('http://localhost:8081/forcast',response)
    .then((data)=> {
        try{
            if (newTime <=6) {
                updateUIweather(data)
            }else{
                updateUIforcast(data)
            }
        } catch(error) {
            alert("issue with updateUI");
            console.log("error", error);
        }
    })
}

export{weatherOrforcast}