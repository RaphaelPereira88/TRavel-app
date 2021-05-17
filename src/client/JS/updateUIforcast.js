const updateUIforcast = async() => {
    const request = await fetch("/all")
    try {
        const allData = await request.json();
        let number = 0
        const divForecast = document.getElementById('output2');
        divForecast.className += "active";
        for (const x of allData.data){
            const weatherBloc = document.createElement("DIV")
            const day = document.createElement("DIV")
            const temp = document.createElement("DIV")
            const maxTemp = document.createElement("DIV")
            const minTemp = document.createElement("DIV")
            const description = document.createElement("DIV")
            const icon = document.createElement("IMG")
            const inputDate = document.getElementById('start').value
            day.innerHTML= allData.data[number].valid_date
            temp.innerHTML = "Temp: "+allData.data[number].temp+"℃";
            maxTemp.innerHTML = "Max: "+ allData.data[number].max_temp +"℃";
            minTemp.innerHTML = "Min: "+ allData.data[number].min_temp +"℃";
            description.innerHTML = allData.data[number].weather.description;
            const image = allData.data[number].weather.icon
            icon.setAttribute("src", "https://www.weatherbit.io/static/img/icons/"+ image +".png");
            weatherBloc.appendChild(day)
            weatherBloc.appendChild(temp)
            weatherBloc.appendChild(maxTemp)
            weatherBloc.appendChild(minTemp)
            weatherBloc.appendChild(description)
            weatherBloc.appendChild(icon)
            weatherBloc.className += "displayed";
            divForecast.appendChild(weatherBloc)
            if(inputDate === allData.data[number].valid_date){
                weatherBloc.className += " activated";
            }
            number = number +1
        }
    }catch(error){
        console.log("error", error);
    }
}
export{updateUIforcast}