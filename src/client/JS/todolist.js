const todolist=()=>{
    const x = document.getElementById('notes')
    const y = document.getElementById('todo')
    const addNotesButton =  document.getElementById('getlist') 
    const newAddition = document.createElement("INPUT")
    const buttonAdd = document.createElement("BUTTON")
    newAddition.setAttribute("type", "text");
    newAddition.setAttribute("placeholder", "enter note");
    buttonAdd.innerHTML="add"
    newAddition.setAttribute("id", "noteinput")
    buttonAdd.setAttribute("id", "add")
    x.appendChild(newAddition)
    x.appendChild(buttonAdd)
    buttonAdd.hidden = true
    newAddition.hidden = true

    addNotesButton.addEventListener('click',function(){
        x.setAttribute("placeholder", "enter your notes")
        buttonAdd.toggleAttribute("hidden")
        newAddition.toggleAttribute("hidden")
    })
    document.getElementById("add").addEventListener('click',function(){
        const newnotes = document.createElement("LI")
        const buttonRemove = document.createElement("BUTTON")
        newnotes.innerHTML = newAddition.value
        buttonRemove.innerHTML="x"
        buttonRemove.className = "close"
        //buttonRemove.id = "remove"
        newnotes.appendChild(buttonRemove)
        y.appendChild(newnotes);
        newAddition.value=""
        buttonRemove.addEventListener('click',function(){
            newnotes.remove()
            buttonRemove.remove()
        })
        newnotes.addEventListener('click',function(){
            newnotes.classList.toggle("checked");
        })

    })

}


export{todolist}