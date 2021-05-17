const updateUIweather = async() => {
    const request = await fetch("/all")
    try {
        const allData = await request.json();
        const timeleft = Client.timeLeft()
        const maxTemp = document.getElementById("maxTemp")
        const minTemp = document.getElementById("minTemp")
        const temperature = document.getElementById("temp")
        const outputDate = document.getElementById("time")
        const description = document.getElementById("description")
        const icon = document.getElementById("icon")
        const output = document.getElementById("output1")
        outputDate.innerHTML = "Date: "+ allData.data[timeleft].valid_date
        temperature.innerHTML = "Temperature: "+allData.data[timeleft].temp
        maxTemp.innerHTML = "Max Temperature: "+ allData.data[timeleft].max_temp;
        minTemp.innerHTML = "Min Temperature: "+ allData.data[timeleft].min_temp;
        description.innerHTML = allData.data[timeleft].weather.description;
        const image = allData.data[timeleft].weather.icon
        icon.setAttribute("src", "https://www.weatherbit.io/static/img/icons/"+ image +".png");
        output.className += " activated";
    }catch(error){
        console.log("error", error);
    }
}
export{updateUIweather}