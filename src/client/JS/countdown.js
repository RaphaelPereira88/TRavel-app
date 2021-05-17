function countdown (response){
    const inputStartDate = document.getElementById('start').value
    const inputEndDate = document.getElementById('end').value
    const time = Client.timeLeft(inputStartDate)
    const lengthtrip = Client.timeLeft(inputEndDate)
    const lenghStay= Math.ceil(lengthtrip - time) 
    const cityName = response.geonames[0].name 
    const countryName = response.geonames[0].countryName 

    setInterval(function() {
        //will display the lengh of the trip according to the start and end date entered.
        if (lenghStay < 1){
            document.getElementById("trip_length").innerHTML = "Day trip in "+ cityName +" - "+ countryName 
        }else{
            document.getElementById("trip_length").innerHTML = "length of your trip : " + lenghStay+ "days"
        }
            // will display the message when countdown is over:
        if (time < 0.2){
            clearInterval(countdown);
            document.getElementById("days_left").innerHTML = ""
            document.getElementById("finish").innerHTML = "Its's Time for yout trip in "+ cityName + " - " + countryName + " !!!";
            
        }else if(time > 0.2 && time < 0.8){
            clearInterval(countdown);
            document.getElementById("days_left").innerHTML = ""
            document.getElementById("finish").innerHTML = " You are leaving to "+ cityName + " - " + countryName + " in few hours";
        }else{
            const roundtime = Math.ceil(time) 
            document.getElementById("days_left").innerHTML = "Your trip to "+ cityName + " - " + countryName +" is " + roundtime + " days away "
            document.getElementById("trip_length").innerHTML = "length of your trip : " + lenghStay+ "days"
        }
    }, 1000)
}


export { countdown}