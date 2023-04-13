
const validate = (name, valor) => {
    console.log(name)
    console.log(valor)
    let retorno = {} 
    if(name == 'email'){
    if(!/\S+@\S+\.\S+/.test(valor)){
    retorno.email= 'Ingrese un E-mail valido'
    return retorno
    }
    if(valor.length < 1){
    retorno.email= 'Ingrese un E-mail valido'
    return retorno
    }
    if(valor.length > 35){
    retorno.email= 'El E-mail no puede superar los 35 caracteres'
    return retorno
    }
    retorno.email = ''
    }
    if(name == 'password'){
        
        if(valor.length < 6 || valor.length > 10){
            retorno.password = 'La password debe tener entre 6 y 10 caracteres'
            return retorno
        }
        retorno.password = '';
        if(!/\d/.test(valor)){
            retorno.password = 'La password debe incluir al menos un numero'
            return retorno
        }
        retorno.password = '';
    }
    return retorno

    
}

export default validate
 