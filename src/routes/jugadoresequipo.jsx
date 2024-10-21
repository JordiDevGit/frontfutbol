import { Link } from 'react-router-dom';
import { getJugadores } from '../services/api';
import { useEffect, useState } from 'react';

const JugadoresEquipo = () => {
  const [jugadores, setJugadores] = useState([]);

useEffect(() => {
  getJugadores().then((jugador) => {
    setJugadores(jugador.data)
  })}, [])

  return(
    <div>  
      <div className='header'>
        <ul className='navbar'>
          <li><Link to="/" className='link'>Home</Link></li>
          <li><Link to="/consultajugadores" className='link'>Consulta Jugadores</Link></li>
          <li><Link to="/consulta" className='link'>Consulta Equipos</Link></li>
        </ul>
      </div>  
      <ul>
      {jugadores?.map((jugador) => {
                return (
                  <li key={jugador.jugadorCod}>
                    <h1>{jugador.jugadorCod}</h1>
                    <p>{jugador.nombre} {jugador.apellidos}</p>
                  </li>
                )
              })}
      </ul>
    </div>
  )   
}

export default JugadoresEquipo;