
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Info =() =>{
    
    const [data, setData] = useState([ ])

    useEffect(()=>{
        async function getData(){
            const res = await fetch("https://task-node-api-rest.herokuapp.com/projects")
            const dato = await res.json()
            setData(dato)
        }
        getData()
    }, [])

    return(
        //usar map para rellenar la tabla
        <div className="container p-4">
            <div>
                <div className="fs-1 text-center">Project List</div>
                <table className=" table  table-info  my-4">
                    
                    <thead >
                        <tr className="text-center">
                           <th>ID</th>
                            <th>NAME</th>
                            <th>DESCRIPTION</th> 
                        </tr>
                        
                    </thead>
                    
                    <tbody>
                        {data.map( (info) => (
                            <tr key={info.id}>
                                <td>{info.id}</td>
                                <td>{info.name}</td>
                                <td>{info.description}</td>
                            </tr>

                        ))}
                       
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Info