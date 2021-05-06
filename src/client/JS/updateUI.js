const updateUI = async (response)=>{
    document.getElementById("test").innerHTML =  response.geonames[0].lat
}

export{updateUI}