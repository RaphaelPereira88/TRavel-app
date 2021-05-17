
function weatherOrforcast(response){
    const newTime = Client.timeLeft()
    Client.collectData('http://localhost:8081/forcast',response)
    .then((data)=> {
        try{
            if (newTime <= 7.0) {
                Client.updateUIweather(data)
            }else{
                Client.updateUIforcast(data)
            }
        } catch(error) {
            alert("issue with updateUI");
            console.log("error", error);
        }
    })
}

export{weatherOrforcast}