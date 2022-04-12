const validform = () =>{
    const tyreMake = document.getElementById('tyremake')
    const tyreMakeError = document.getElementById('tyreMakeError')
    const tyreSize = document.getElementById('tyresize')
    const tyreSizeError = document.getElementById('tyreSizeError')
    const tyreAmount = document.getElementById('tyreamount')
    const tyreAmountError = document.getElementById('tyreAmountError')
    const carModel = document.getElementById('carmodel')
    const carModelError = document.getElementById('carModelError')
    const tyreServices = document.getElementById('tyreservices') 
    const tyreServicesError = document.getElementById('tyreServicesError') 
    const tyreServiceFees = document.getElementById('tyreservicefees')
    const tyreServiceFeesError = document.getElementById('tyreServiceFeesError')
    

    if(tyreMake.value == "Default"){
        tyreMake.style.border = "1px solid red"
        tyreMakeError.textContent = "Please provide a tyre make"
        tyreMakeError.style = "color: red"
        return false
    }else{
        tyreMake.style.border = "1px solid green"
        tyreMakeError.textContent = ""
    }

    if(tyreSize.value == ""){
        tyreSize.style.border = "1px solid red"
        tyreSizeError.textContent = "Please provide a tyre size"
        tyreSizeError.style = "color: red"
        return false
    }else{
        tyreSize.style.border = "1px solid green"
        tyreSizeError.textContent = ""
    }

    if(tyreAmount.value == ""){
        tyreAmountError.style.border = "1px solid red"
        tyreAmountError.textContent = "Please select tyre amount"
        tyreAmountError.style = "color: red"
        return false
    }else{
        tyreAmount.style.border = "1px solid green"
        tyreAmountError.textContent = ""
    }

    if(carModel.value == ""){
        carModel.style.border = "1px solid red"
        carModelError.textContent = "Please select a car model"
        carModelError.style = "color: red"
        return false
    }else{
        carModelError.style.border = "1px solid greeen"
        carModelError.textContent  = ""
    }

    if(tyreServices.value == ""){
        tyreServices.style.border = "1px solid red"
        tyreServices.textContent = "Please select a tyre service"
        tyreServices.style = "color: red"
        return false
    }else{
        tyreServices.style.border = "1px solid green"
        tyreServicesError.textContent = ""
    }
    
    if(tyreServiceFees.value == ""){
        tyreServiceFees.style.border = "1px solid red"
        tyreServiceFees.textContent = "Please select tyre service fees"
        tyreServiceFees.style = "color: red"
        return false
    }else{
        tyreServiceFees.style.border = "1px solid red"
        tyreServiceFeesError.textContent = ""
    }


}