
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Pokemon = (props) =>{

    const [data, setData] = useState({});
 

    async function getData(pokemon){
            const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon )
            const dato = await res.json()
            setData(dato);
        }
    
        useEffect(()=>{
            getData(props.pokemon);
        }, [])

    return(
        
          <div className="container m-5">
            
            <div className="container border m-5">
                <div className="row">
                    <div className="col">
                        <label htmlFor="" className="fw-bold">Nombre:</label>
                        {data.name}
                    </div>
                    <div className="col">
                        <label htmlFor="" className="fw-bold">Peso:</label>
                        {data.weight}
                    </div>
                    <div className="col">
                        <label htmlFor="" className="fw-bold">Habilidades:</label>
                        <p>{data.abitity.name}</p>
                    </div>
                    <div className="col">
                        <img src={data.sprites.front_default} alt="" />
                    </div>
                </div>
            </div>
        </div>   
        )
}

export default Pokemon