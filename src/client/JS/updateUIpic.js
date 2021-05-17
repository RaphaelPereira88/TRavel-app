import { NULL } from "node-sass"

const updateUIpic = async (data) => {
    const pic = document.getElementById("picture")
    pic.setAttribute("src", data.hits[0].webformatURL)
    if(undefined){
        pic.setAttribute("src", "https://treefurniturerental.ca/wp-content/uploads/2017/05/sorry-image-not-available.jpg")
    }else{
        pic.setAttribute("src", data.hits[0].webformatURL)
    }
}

export {updateUIpic}