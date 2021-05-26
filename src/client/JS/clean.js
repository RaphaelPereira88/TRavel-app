const clean = () =>{
    document.getElementById("days_left").innerHTML = ""
    document.getElementById("trip_length").innerHTML = ""

    const weather = document.getElementById("output1")
    const divForecast = document.getElementById('output2')
    const divInfo = document.getElementById('output3')
    const maxTemp = document.getElementById("maxTemp")
    const minTemp = document.getElementById("minTemp")
    const temperature = document.getElementById("temp")
    const outputDate = document.getElementById("time")
    const description = document.getElementById("description")
    const icon = document.getElementById("icon")
    const pic = document.getElementById("picture")

    document.getElementById("destination").style.borderColor = "grey"

    divForecast.className += ""
    weather.className = " "
    divInfo.className = " "

    outputDate.innerHTML = " "
    temperature.innerHTML = ""
    maxTemp.innerHTML = ""
    minTemp.innerHTML = ""
    description.innerHTML = ""
    icon.setAttribute("src", "")
    pic.setAttribute("src", "")

    if (divForecast.firstChild){
        divForecast.removeChild(divForecast.firstChild)
    }

    if (divInfo.firstChild){
        divInfo.removeChild(divInfo.firstChild)
    }
}

export{clean}