const updateUItravelInfo = async()=> {
    const request = await fetch("http://localhost:8081/info")
    try {
        const allData = await request.json();
        console.log(allData)
        const paragraphe = document.createElement("P")
        const divInfo = document.getElementById('output3');
        const TravelBloc = document.createElement("DIV")
        const name = document.createElement("DIV")
        const region = document.createElement("DIV")
        const language = document.createElement("DIV")
        const capital = document.createElement("DIV")
        const population = document.createElement("DIV")

        const currencycode = document.createElement("DIV")
        const currencyName = document.createElement("DIV")
        const currencySymbol = document.createElement("DIV")

        const flag = document.createElement("IMG")
        // update datas displayed
        name.innerHTML= allData.name
        paragraphe.innerHTML ="Country information:"
        region.innerHTML = "Region:  " + allData.region
        language.innerHTML = "Language:  " + allData.language
        capital.innerHTML =  "Capital:  " + allData.capital
        population.innerHTML =  "Population: " + allData.population;
        currencycode.innerHTML = "Currency Code:  " + allData.currencies.code
        currencyName.innerHTML = "Currency Name:  " + allData.currencies.name 
        currencySymbol.innerHTML = "Currency Symbol  " + allData.currencies.symbol;

        flag.setAttribute('src', allData.flag)

        TravelBloc.appendChild(paragraphe)
        TravelBloc.appendChild(name)
        TravelBloc.appendChild(region)
        TravelBloc.appendChild(language)
        TravelBloc.appendChild(capital)
        TravelBloc.appendChild(population)
        TravelBloc.appendChild(currencycode)
        TravelBloc.appendChild(currencyName)
        TravelBloc.appendChild(currencySymbol)
        TravelBloc.appendChild(flag)
        // allow activation of css rules set up 
        TravelBloc.className += "info";
        TravelBloc.id = "travelBloc"
        divInfo.appendChild(TravelBloc)
        divInfo.className = "activated"
    }catch(error){
        console.log("error", error);
    }
}
export{updateUItravelInfo}