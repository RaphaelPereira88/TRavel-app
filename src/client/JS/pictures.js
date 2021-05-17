function pictures(inputText){
    Client.collectData('pictureUrl',inputText)
    .then((data)=> {
        try{
            Client.updateUIpic(data)
        } catch(error) {
            console.log("error", error);
        }
    })
}

export{pictures}
