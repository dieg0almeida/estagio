function checkFields(event){

    const valuesToCheck = [
        "email",
        "password",
    ] 

    const isEmpty = valuesToCheck.find(function(value){

        const checkIfIsString = typeof event.target[value].value ==="string"
        const checkIfIsEmpty = !event.target[value].value.trim()

        if(checkIfIsString && checkIfIsEmpty) {
            return true
        }
    })

    if(isEmpty){

        event.preventDefault()
        
        var text = document.createTextNode('Por favor, preencha todos os campos!')
        var emptyFieldsElementeP = document.querySelector('div#emptyFields p')
        
        emptyFieldsElementeP.appendChild(text)
        
        setTimeout(function(){ 
            emptyFieldsElementeP.removeChild(text)
        }, 3000);
          
    }
}