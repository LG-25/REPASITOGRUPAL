
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Pokemon from './Components/Pokemon';
import { useState } from 'react';

function App() {
  
  const [pokemon, setPokemon] = useState("");
  const [boton, setBoton] = useState(false);
  let info;
  // enviar información si se apreta el boton
  if(boton){
    info= (<Pokemon name={pokemon}/>)
  }
  return (
    <div className="App">
      
      <div class="container border m-5">
        <div className=' fs-1 fw-bold my-3'>Prueba Pokemon API</div> 
          <label>Nombre Pokemon</label> <br/>
        <div className='row mx-0'>
          <input type='text' onChange={event => {setPokemon(event.target.value)}}></input> <br/>
        </div>
        <button className='btn btn-primary my-3' onClick={_=>setBoton(true)}>Mostrar datos</button>
      </div>
        {info}
    </div>
  );
}

export default App;
