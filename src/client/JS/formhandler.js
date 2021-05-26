import {clean}from './clean'
import {pictures}from './pictures'
import {collectData} from './collectData'
import{countdown} from './countdown'
import{updateUItravelInfo} from './updateUItravelInfo'
import{weatherOrforcast} from './weatherOrforcast'

function handleSubmit(event) {
    event.preventDefault();
    const inputText = document.getElementById('destination').value
    //to oblige user to enter something
    if (inputText=== ""){
        alert("please enter a destination")
        document.getElementById("destination").style.borderColor = "red"
        window.stop()
    }else{
        //to clean all datas from previous research
        clean()
        // to make API call to get a pictures of the citu entered
        pictures({ sentence: inputText })
        // API call to get lat and lng coordonates
        collectData('http://localhost:8081/geonameUrl',{ sentence: inputText })
        //then pass the result to other API request 
        .then((response)=> {
            try{
                countdown(response)
                weatherOrforcast(response)
                //API call to get country info
                collectData('http://localhost:8081/restcountries',response)
                .then((data)=> {
                    //then passes result to update webpage
                    updateUItravelInfo(data)
                })
            }catch(error) {
                console.log(error);
            }
        })
    }
}

export { 
    handleSubmit,
}