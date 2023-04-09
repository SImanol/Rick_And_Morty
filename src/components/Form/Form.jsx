import { useState } from "react"
import validate from "./validation"



const Form = ({login}) => {

    

const [userData, setUserData] = useState({
         email: '',
         password: ''
     })
    
const [errors, setErrors] = useState({
})

const handleChanges = (event) => {
    setUserData({
        ...userData,
        [event.target.name]: event.target.value,
})

const resultadoValidacion = validate([event.target.name], event.target.value)

if(resultadoValidacion.email){
    setErrors({
        ...errors,
        email: resultadoValidacion.email,
    })
}else if (resultadoValidacion.password){
    setErrors({
        ...errors,
        password: resultadoValidacion.password,
    })
}else {
    setErrors({
        ...errors,
        email: '',
        password: ''
    })
}
}
const submitHandler = (event) => {
    event.preventDefault();
    login(userData)
}

    return(
    <form onSubmit={submitHandler}>
       
        <h1>"LOGIN"</h1>
        
    
        <label htmlFor="email"> E-mail: </label>
            <input name="email" type="email" placeholder="ingrese su E-mail" value= {userData.email} onChange={handleChanges} />
             {errors.email && <p>{errors.email}</p>}
         <hr />
        
        <label htmlFor="password"> Password: </label>
        <input name="password" type="text" placeholder="password" value= {userData.password} onChange={handleChanges}/>
            {errors.password && <p>{errors.password}</p>}
            <hr />
        <button disabled={!userData.email || !userData.password || errors.email || errors.password}>Submit</button>
    </form>
    )
}

export default Form
