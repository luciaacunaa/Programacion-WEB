import { useState } from "react";
import "./App.css";
function App() {

  const[nombre, setNombre] = useState('');


  const handleClick =() =>{
    console.log('hola')
  };
  const handInputChange = (event) =>{
    setNombre(event.target.value);
  }

  return (<>
  <input type="text" placeholder="Escribir tu nombre"onChange={handInputChange} value={nombre}/>
  <button onClick={handleClick}>Mostrar</button>

  </>);
}

export default App;