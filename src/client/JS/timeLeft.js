function timeLeft(inputDate){
    //will give us a countdown in milliseconds from 1 jan 1970 until the date entered by user
    const countDownDate = new Date(inputDate).getTime();
    //will give us a countdown in milliseconds from 1 jan 1970 until today 
    const now = new Date().getTime();
    //the diff of both will give us the timeleft:
    const timeleft = countDownDate - now;
    const days = (timeleft / (1000 * 60 * 60 * 24)).toFixed(1);
    return days
}

export {timeLeft}