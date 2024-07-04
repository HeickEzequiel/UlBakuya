function userValidation (input){
    const errors = {}
    const regexAlphabetic = new RegExp(/^[a-zA-Z]+$/);
    const regexAlphaSpace = new RegExp(/^[a-zA-Z\s]+$/);
    const regexPassword = new RegExp("[0-9]")
    const regexEmail = /\S+@\S+\.\S+/;
    const regexNum = new RegExp(/^[0-9]*$/)

    if (!input.nombre.length) {
        errors.nombre = "Ingrese su nombre";
      } else {
        if (!regexAlphaSpace.test(input.nombre)) {
          errors.nombre = "No debe contener números ni caracteres especiales";
        }
    }
    if (!input.apellido.length) {
        errors.apellido = "Ingrese su apellido";
      } else {
        if (!regexAlphaSpace.test(input.apellido)) {
          errors.apellido = "No debe contener números ni caracteres especiales";
        }
    }
    if (!input.tel.length) {
        errors.tel = "ingrese su numero de telefono"
    } else {
        if(!regexNum.test(input.tel)){
            errors.tel = "Solo debe contener numeros"
        }
    }
    if(!input.email.length) errors.email = "ingrese su email"
    else{
        if(!regexEmail.test(input.email)) errors.email = "ingrese un email valido"
        if(input.email.length > 35) errors.email = "debe ser menor a 35 caracteres"
    }

    if(!input.password.length) errors.password = "Ingrese su password";
    if(!regexPassword.test(input.password)) errors.password = "Debe tener al menos un número";
    if(input.password.length < 6) errors.password = "Al menos 6 caracteres";
   
return errors

}

export default userValidation