const validform = () =>{
      const email = document.getElementById('email')
      const eamilError = document.getElementById('emailError')
      const password = document.getElementById('password')
      const passwordError = document.getElementById('passwordError')


      if(email.value == ""){
          email.style.border = "1px solid red"
          emailError.textContent ="please provide your email"
          emailError.style = "color:red"
          return false

      }else{
          email.style.border = "1px solid green"
          emailError.textContent = ""


      }

      if(password.value == ""){
          password.style.border = "1px solid green"
          passwordError.textContent = "please provide your password"
          passwordError.style = "color:red"
          return false

      }else{
          password.style.border = "1px solid green"
          passwordError.textContent = ""
          
      }


}