import {collectData}from './collectData'

const pic = document.getElementById("picture")
function pictures(inputText){
    collectData('http://localhost:8081/pictureUrl',inputText)
    .then((data)=> {
        try{
            //set up an image if API pixabay doesn't have onr for the city selected
            pic.setAttribute("src", data.hits[0].webformatURL)
        } catch(error) {
            pic.setAttribute("src", "https://rlv.zcache.co.uk/sorry_temporarily_unavailable_classic_round_sticker-rdd48f59c95bf4e5a8a006fe959e51469_0ugmp_8byvr_540.jpg")
        }
    })
}

export{pictures}
