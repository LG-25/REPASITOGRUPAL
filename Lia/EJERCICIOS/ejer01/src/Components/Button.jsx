
import React from "react"
const Button =(props) =>{
    return(
        <div className="container ">
                <div className="row">
                    <div className="col">
                        <label >{props.label}</label>
                    </div>
                    <div className="col">
                        <input type="text"> </input>
                    </div>
                    <div className="col">
                        <button>{props.buttonText}</button>
                    </div>
                </div>
        </div>
    )
}

export default Button