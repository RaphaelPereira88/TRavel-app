import {clean}from './clean'
import {pictures}from './pictures'
import {collectData} from './collectData'
import{countdown} from './countdown'
import{updateUItravelInfo} from './updateUItravelInfo'
import{weatherOrforcast} from './weatherOrforcast'


function handleSubmit(event) {
    event.preventDefault();
    const inputText = document.getElementById('destination').value
    if (inputText=== ""){
        alert("please enter a destination")
        document.getElementById("destination").style.borderColor = "red"
        window.stop()
    }else{
        clean()
        pictures({ sentence: inputText })
        collectData('http://localhost:8081/geonameUrl',{ sentence: inputText })
        .then((response)=> {
            try{
                countdown(response)
                weatherOrforcast(response)
                collectData('http://localhost:8081/restcountries',response)
                .then((data)=> {
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