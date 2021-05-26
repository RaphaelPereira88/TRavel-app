import {handleSubmit} from './JS/formhandler'
import {calendarSetUp}from './JS/calendarSetUp'
import{todolist} from './JS/todolist'


import './styles/header.scss'
import './styles/footer.scss'
import './styles/main.scss'
import './styles/addNote.scss'
import './styles/travelinfo.scss'
import './styles/dayweather.scss'
import './styles/forcast.scss'

//this function will set rules on the calendars as soon as the webpage loads
calendarSetUp()

//event listener that will trigger almost all the function related to the users input
document.getElementById("button").addEventListener("click", handleSubmit);

//to create a todolist available even if you don't use the form
todolist()

export{
    handleSubmit,
    calendarSetUp,
    todolist
}
