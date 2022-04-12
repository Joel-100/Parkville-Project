const validform = () =>{
    const batterySize = document.getElementById('batterysize')
    const batterySizeError = document.getElementById('batterySizeError')
    const date = document.getElementById('date')
    const dateError = document.getElementById('dateError')
    const amount = document.getElementById('amount')
    const amountError = document.getElementById('amountError')
    

    if(batterySize.value == ""){
        batterySize.style.border = "1px solid red"
        batterySizeError.textContent = "Please provide a battery size"
        batterySizeError.style = "color: red"
        return false
    }else{
        batterySize.style.border = "1px solid green"
        batterySizeError.textContent = ""
    }

    if(date.value == ""){
        date.style.border = "1px solid red"
        dateError.textContent = "Please provide the car model"
        dateError.style = "color: red"
        return false
    }else{
        date.style.border = "1px solid green"
        dateError.textContent = ""
    }

    if(amount.value == "Default"){
        amount.style.border = "1px solid red"
        amountError.textContent = "Please select a vehicle type"
        amountError.style = "color: red"
        return false
    }else{
        amount.style.border = "1px solid green"
        amountError.textContent = ""
    }

    
    

}