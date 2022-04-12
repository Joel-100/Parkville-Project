const validform = () =>{
    const numberPlate = document.getElementById('numberplate')
    const plateError = document.getElementById('plateError')
    const model = document.getElementById('model')
    const modelError = document.getElementById('modelError')
    const vehicleType = document.getElementById('vehicletype')
    const vehicleTypeError = document.getElementById('vehicleTypeError')
    const driverName = document.getElementById('drivername')
    const driverNameError = document.getElementById('driverNameError')
    const date = document.getElementById('date') 
    const dateError = document.getElementById('dateError')
    const phoneNumber = document.getElementById('phonenumber')
    const phoneNumberError = document.getElementById('phoneNumberError')
    const entryTime = document.getElementById('entrytime')
    const entryTimeError = document.getElementById('entryTimeError')

    if(numberPlate.value == ""){
        numberPlate.style.border = "1px solid red"
        plateError.textContent = "Please provide a number plate"
        plateError.style = "color: red"
        return false
    }else{
        numberPlate.style.border = "1px solid green"
        plateError.textContent = ""
    }

    if(model.value == ""){
        model.style.border = "1px solid red"
        modelError.textContent = "Please provide the car model"
        modelError.style = "color: red"
        return false
    }else{
        model.style.border = "1px solid green"
        modelError.textContent = ""
    }

    if(vehicleType.value == "Default"){
        vehicleType.style.border = "1px solid red"
        vehicleTypeError.textContent = "Please select a vehicle type"
        vehicleTypeError.style = "color: red"
        return false
    }else{
        vehicleType.style.border = "1px solid green"
        vehicleTypeError.textContent = ""
    }

    if(driverName.value == ""){
        driverName.style.border = "1px solid red"
        driverNameError.textContent = "Please select a driver name"
        driverNameError.style = "color: red"
        return false
    }else{
        driverName.style.border = "1px solid greeen"
        driverNameError.textContent  = ""
    }

    if(phoneNumber.value == ""){
        phoneNumber.style.border = "1px solid red"
        phoneNumberError.textContent = "Please select a phone number"
        phoneNumberError.style = "color: red"
        return false
    }else{
        phoneNumber.style.border = "1px solid green"
        phoneNumberError.textContent = ""
    }

    if(date.value == ""){
        date.style.border = "1px solid red"
        dateError.textContent = "Please select a date"
        dateError.style = "color: red"
        return false

    }else{
        date.style.border = "1px solid green"
        dateError.textContent = ""
    }


}