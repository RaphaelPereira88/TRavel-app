import {collectData} from './JS/collectData'
import {handleSubmit} from './JS/formhandler'
import {updateUIforcast} from './JS/updateUIforcast'
import {updateUIweather} from './JS/updateUIweather'
import{countdown} from './JS/countdown'
import {timeLeft}from './JS/timeLeft'
import {weatherOrforcast}from './JS/weatherOrforcast'
import {pictures}from './JS/pictures'
import {updateUItravelInfo}from './JS/updateUItravelInfo'
import {updateUIpic}from './JS/updateUIpic'
import {calendarSetUp}from './JS/calendarSetUp'


import './styles/header.scss'
import './styles/footer.scss'
import './styles/main.scss'

calendarSetUp()

export{
    handleSubmit,
    updateUIforcast,
    updateUIweather,
    timeLeft,
    weatherOrforcast,
    countdown,
    collectData,
    calendarSetUp,
    pictures,
    updateUItravelInfo,
    updateUIpic,
    //changeMax
}
