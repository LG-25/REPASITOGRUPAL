import React from "react";
import { useState } from "react";


const Info= () =>{
    //guardar datos

    const[datos,setDatos] = useState({
        nomCompleto: '', apellidos: '',  nombres: ''
    })

    //usar event 
    //usar split para separar por coma y usar at para usar el string antes y despues del split (coma)

    const handleChange = (event) =>{
        setDatos({
            nomCompleto: event.target.value,
            apellidos:  event.target.value.split(',').at(0),
            nombres: event.target.value.split(',').at(1)
        })
    }

    //mostrar si el nombre completo es menor a 8 caracteres
    //"El nombre completo debe tener por lo menos 8 caracteres"
    if(datos.nomCompleto !== '' && datos.nomCompleto.length < 8){
      comentario = (
       <p> * El nombre completo debe tener por lo menos 8 caracteres </p>)
    } 


    return(
        <div className="container p-5">
                <div className="row">
                    <div className="col-3"><label htmlFor="">Nombre completo: </label></div>
                    <div className="col"><input type="text" placeholder="Apellidos, Nombres" onChange={handleChange} value={datos.nomCompleto}/></div>
                </div>
                <div className="row my-4">
                    <div className="col-3"><label htmlFor="">Apellidos: </label></div>
                    <div className="col"><input type="text"  value={datos.apellidos}/></div>
                </div>
                <div className="row">
                    <div className="col-3"><label htmlFor="">Nombres: </label></div>
                    <div className="col"><input type="text" value={datos.nombres}/></div>
                </div>
                <div>
                    {comentario}
                </div>
        </div>
    )
}
export default Info