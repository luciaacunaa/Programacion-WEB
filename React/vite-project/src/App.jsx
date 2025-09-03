import { useState } from 'react' // hokea el react
import './App.css'

function App() {
  const [num, setNum] = useState([1, 2, 3, 4])
  const [persona, setPersona] = useState({ nombre: "Lucia", edad: 17 })

  // Agregar números consecutivos
  function myFuction() {
    const ultimo = num[num.length - 1]
    setNum([...num, ultimo + 1])
  }

  // Agregar propiedad nacionalidad
  function personaFun() {
    const nPersona = {
      ...persona,
      nacionalidad: "Argentina"
    }
    setPersona(nPersona)
  }

  // Cambiar el nombre
  function cambiarNombre() {
    const nuevaPersona = {
      ...persona,
      nombre: "Ayelén" // acá podés poner el nombre que quieras
    }
    setPersona(nuevaPersona)
  }

  return (
    <>
      <div>
        <h3>Lista de números</h3>
        {num.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
        <button onClick={myFuction}>Agregar número</button>
      </div>

      <div>
        <h3>Datos de persona</h3>
        <p>Nombre: {persona.nombre}</p>
        <p>Edad: {persona.edad}</p>
        <p>Nacionalidad: {persona.nacionalidad}</p>

        <button onClick={personaFun}>Agregar propiedad</button>
        <button onClick={cambiarNombre}>Cambiar nombre</button>
      </div>
    </>
  )
}

export default App