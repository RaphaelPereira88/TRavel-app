function handleSubmit(event) {
    event.preventDefault();
    const inputText = document.getElementById('destination').value;
    Client.collectLocation('http://localhost:8080/clientdataUrl',{ sentence: inputText })
    .then((response)=> {
        try {
            Client.updateUI(response);
        } catch (error) {
            alert("please enter a valid URL");
            console.log("error", error);
        }
    })


    //Client.cleanData();
    //document.getElementById("output").className = "activated";

    //const inputText = document.getElementById('name').value;
//will check if url is good
    //Client.urlCheck(inputText);
}
export { handleSubmit}