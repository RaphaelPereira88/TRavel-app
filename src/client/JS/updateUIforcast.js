const updateUIforcast = async() => {
    const request = await fetch("http://localhost:8081/all")
    try {
        const allData = await request.json();
        let number = 0
        const divForecast = document.getElementById('output2');
        const weatherBloc = document.createElement("DIV")
        divForecast.className = "active";
        //creates all the box for the 16 days forcast
        for (const x of allData.data){
            const weatherdata = document.createElement("DIV")
            const day = document.createElement("DIV")
            const temp = document.createElement("DIV")
            const maxTemp = document.createElement("DIV")
            const minTemp = document.createElement("DIV")
            const description = document.createElement("DIV")
            const icon = document.createElement("IMG")
            const inputDate = document.getElementById('start').value
            //update datas displayed
            day.innerHTML= allData.data[number].valid_date
            temp.innerHTML = "Temp: "+allData.data[number].temp+"℃";
            maxTemp.innerHTML = "Max: "+ allData.data[number].max_temp +"℃";
            minTemp.innerHTML = "Min: "+ allData.data[number].min_temp +"℃";
            description.innerHTML = allData.data[number].weather.description;
            const image = allData.data[number].weather.icon
            icon.setAttribute("src", "https://www.weatherbit.io/static/img/icons/"+ image +".png");
            weatherdata.appendChild(day)
            weatherdata.appendChild(temp)
            weatherdata.appendChild(maxTemp)
            weatherdata.appendChild(minTemp)
            weatherdata.appendChild(description)
            weatherdata.appendChild(icon)
            weatherdata.className += "displayed";
            weatherBloc.appendChild(weatherdata)
            weatherBloc.id = "weatherbloc"
            if(inputDate === allData.data[number].valid_date){
                weatherdata.className += " activated";
            }
            number = number +1
        }
        divForecast.appendChild(weatherBloc)
    }catch(error){
        console.log("error", error);
    }
}
export{updateUIforcast}