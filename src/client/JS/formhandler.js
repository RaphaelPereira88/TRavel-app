function handleSubmit(event) {
    event.preventDefault();
    const inputText = document.getElementById('destination').value
    
    if (inputText=== ""){
        alert("please enter a destination")
        document.getElementById("destination").style.borderColor = "red"
        window.stop()
    }else{
        Client.pictures({ sentence: inputText })
        Client.collectData('http://localhost:8081/geonameUrl',{ sentence: inputText })
        .then((response)=> {
            try{
                Client.countdown(response)
                Client.weatherOrforcast(response)
                Client.collectData('http://localhost:8081/travelbriefingUrl',response)
                .then((data)=> {
                    Client.updateUItravelInfo(data)
                })
            }catch(error) {
                console.log(error);
            }
        })
    }
}

export { handleSubmit}