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

calendarSetUp()
document.getElementById("button").addEventListener("click", handleSubmit);
todolist()

export{
    handleSubmit,
    calendarSetUp,
    todolist
}
