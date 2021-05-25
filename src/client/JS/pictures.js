import {collectData}from './collectData'

const pic = document.getElementById("picture")
function pictures(inputText){
    collectData('pictureUrl',inputText)
    .then((data)=> {
        try{
            pic.setAttribute("src", data.hits[0].webformatURL)
        } catch(error) {
            pic.setAttribute("src", "https://treefurniturerental.ca/wp-content/uploads/2017/05/sorry-image-not-available.jpg")
        }
    })
}

export{pictures}
