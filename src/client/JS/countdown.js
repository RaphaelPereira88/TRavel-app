import {timeLeft}from './timeLeft'

function countdown (response){
    const inputStartDate = document.getElementById('start').value
    const inputEndDate = document.getElementById('end').value
    const time = timeLeft(inputStartDate)
    const roundtime= Math.ceil(timeLeft(inputStartDate))
    const lengthtrip = timeLeft(inputEndDate)
    const lenghStay= Math.ceil(lengthtrip - time) 
    const cityName = response.geonames[0].name 
    const countryName = response.geonames[0].countryName 
    //use of timeleft function to provide the right mesage to the user
    if(time < 0.2){
        document.getElementById("days_left").innerHTML = "Its's Time for your trip in "+ cityName + " ( " + countryName + " ) in few Hours!!!&nbsp "; 
    }else if(time > 0.2 && time < 0.8){
        document.getElementById("days_left").innerHTML = " You are going to "+ cityName + " ( " + countryName + " ) in few hours, tomorrow.&nbsp ";
    }else{
        document.getElementById("days_left").innerHTML = " You are going to "+ cityName + "( " + countryName + " ) in "+ roundtime+ " days.&nbsp " ;
    }
        // will display the message when countdown is over:
    if (lenghStay < 1){
        document.getElementById("trip_length").innerHTML = " Day trip in "+ cityName + " ( " + countryName + " ) !!! ";
        
    }else{
        document.getElementById("trip_length").innerHTML =" Lengh of your trip: "+ lenghStay +"days. ";
    }
}

export { countdown}
