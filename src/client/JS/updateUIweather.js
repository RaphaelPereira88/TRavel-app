import {timeLeft}from './timeLeft'

const updateUIweather = async() => {
    const inpudate = document.getElementById('start').value
    const newTime = Math.ceil(timeLeft(inpudate))
    const request = await fetch("http://localhost:8081/all")
    try {
        const allData = await request.json()
        const maxTemp = document.getElementById("maxTemp")
        const minTemp = document.getElementById("minTemp")
        const temperature = document.getElementById("temp")
        const outputDate = document.getElementById("time")
        const description = document.getElementById("description")
        const icon = document.getElementById("icon")
        const output = document.getElementById("output1")
        //update data displayed
        outputDate.innerHTML = "Date: "+ allData.data[newTime].valid_date
        temperature.innerHTML = "Temperature: "+allData.data[newTime].temp
        maxTemp.innerHTML = "Max Temperature: "+ allData.data[newTime].max_temp;
        minTemp.innerHTML = "Min Temperature: "+ allData.data[newTime].min_temp;
        description.innerHTML = allData.data[newTime].weather.description;
        const image = allData.data[newTime].weather.icon
        //update weather icon
        icon.setAttribute("src", "https://www.weatherbit.io/static/img/icons/"+ image +".png");
        output.className += " activated";
    }catch(error){
        console.log("error", error);
    }
}
export{updateUIweather}