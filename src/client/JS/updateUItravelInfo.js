const updateUItravelInfo = async()=> {
    const request = await fetch("/info")
    try {
        const allData = await request.json();
        console.log(allData)
        const divInfo = document.getElementById('output3');
        const weatherBloc = document.createElement("DIV")
        const name = document.createElement("DIV")
        const names = document.createElement("DIV")
        const continent = document.createElement("DIV")
        const languages = document.createElement("DIV")
        const language = document.createElement("DIV")
        const electricity = document.createElement("DIV")
        const voltage = document.createElement("DIV")
        const plugs = document.createElement("DIV")
        const telephone = document.createElement("DIV")
        const calling = document.createElement("DIV")
        const police = document.createElement("DIV")
        const watersection = document.createElement("DIV")
        const water = document.createElement("DIV")
        const currency = document.createElement("DIV")
        const currencyName = document.createElement("DIV")
        const rate = document.createElement("DIV")
    
        names.innerHTML= allData.names.names
        continent.innerHTML = "continent: " + allData.names.continent;
        language.innerHTML = "Language: " + allData.language.language + "\b\b\b official: " + allData.language.official;
        voltage.innerHTML =  "Voltage: " + allData.electricity.voltage+ "v";
        plugs.innerHTML =  "Type of Plug: " + allData.electricity.plugs;
        water.innerHTML = "Water: " + allData.water;
        calling.innerHTML = "Country phone code +" + allData.telephone.calling_code;
        police.innerHTML = "Emergency phone number: " + allData.telephone.emergencyNumber;
        currencyName.innerHTML = "Currency: " + allData.currency.name + "\b\b\b Symbol: "+ allData.currency.symbol;;
        rate.innerHTML = "Exchange rate: " + allData.currency.rate;

        name.appendChild(names)
        name.appendChild(continent)
        weatherBloc.appendChild(name)
        languages.appendChild(language)
        weatherBloc.appendChild(languages)
        currency.appendChild(currencyName)
        currency.appendChild(rate)
        weatherBloc.appendChild(currency)
        telephone.appendChild(calling)
        telephone.appendChild(police)
        weatherBloc.appendChild(telephone)
        electricity.appendChild(voltage)
        electricity.appendChild(plugs)
        weatherBloc.appendChild(electricity)
        watersection.appendChild(water)
        weatherBloc.appendChild(watersection)

        weatherBloc.className += "info";
        divInfo.appendChild(weatherBloc)
    }catch(error){
        console.log("error", error);
    }
}
export{updateUItravelInfo}