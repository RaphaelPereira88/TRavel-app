function calendarSetUp(){
    document.getElementById('start').min= new Date().toISOString().split("T")[0]
    document.getElementById('end').min= new Date().toISOString().split("T")[0]
    const someDate = new Date();
    const numberOfDaysToAdd = 16;
    someDate.setDate(someDate.getDate() + numberOfDaysToAdd); 
    const y = someDate.getFullYear()
    const m = someDate.getMonth()+1
    const d = someDate.getDate()
    document.getElementById('start').max= new Date(y + "-"+ m + "-" + d).toISOString().split("T")[0]
    document.getElementById('start').addEventListener("change",()=>{
        document.getElementById('end').min= document.getElementById('start').value
    })
}

export {calendarSetUp}