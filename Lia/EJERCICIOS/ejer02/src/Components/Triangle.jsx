
import React from "react";
import { useState } from "react";


const Triangle =(props)=>{
    
    const[boton,setButton] = useState(
        {
            clicked: false,
            value:0,
        }
    ); let resp;

    //PERIMETRO no recibe parámetros
    const perimetro = _ =>{
        let peri = parseInt(props.a) + parseInt(props.b) + parseInt(props.c) ;
        setButton({
                clicked: true,
                value: peri
        })
    }
    //AREA no recibe parámetros
    // formula de heron 
    //s= (a +b+c)/2
    // √s(s-a)(s-b)(s-c) = area
    const area = _ =>{
        const calArea =(a, b, c) =>{
            let s =(a + b + c)/2;
            let area= Math.sqrt( s * (s-a) * (s-b) * (s-c));
            return area;
        }
        let Area = calArea(parseInt(props.a), parseInt(props.b), parseInt(props.c))
        setButton({
            clicked: true,
            value: Area
    })
    }


    //mostrar respuesta
    if(boton.clicked){
        resp = <p>{boton.value}</p> 
    }

    return(
        <div className="container mt-5 ">
            <div>Primer lado: {props.a}</div>
            <div>Segundo lado: {props.b}</div>
            <div>Tercer lado: {props.c}</div>
            <div className="my-3">
                <button className="me-3 btn btn-success " onClick={perimetro}>Perimetro</button>
                <button onClick={area} className="btn btn-info">Area </button>
            </div>
            <div>Resultado: {resp} </div>
        </div>
    )
}

export default Triangle