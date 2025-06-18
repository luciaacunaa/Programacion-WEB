import './App.css'
import Pepito from './components/usuario/usuario';
import { Proveedor } from './components/usuario/proveedor/Proveedor';
import { useEffect, useState } from 'react';
function App() {
  const [characters, setCharacters] = useState([])


//useEfecct va a ejecutar el código que se encuentra dentro, tantas veces como se actualicen sus dependencias.
//Si no hay dependencias se ejecuta solo antes del primer renderizado. 
  useEffect(()=>{
    fetch('https://rickandmortyapi.com/api/character')
      .then(data => data.json())
      .then(response => setCharacters(response.results));
  }, [])

  return (
    <>
    {characters ?(
      characters.map((item, index) => <p>{item.name}</p>)
    ) : (
      <> Cargando...</>
    )}
      
    Hola Mundo

    <button>Hola soy un botón</button>
    <Pepito />
    <Proveedor name={'Luci'} />
    </>
  );
  
}

export default App;