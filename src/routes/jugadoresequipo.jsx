import { Link, useParams } from 'react-router-dom';
import { getEquipo, getJugadoresEquipo } from '../services/api';
import { useEffect, useState } from 'react';

const JugadoresEquipo = () => {
  const [jugadores, setJugadores] = useState([]);
  const [equipo, setEquipo] = useState([{}]);

  const { id } = useParams();

useEffect(() => {
  getEquipo(id).then((equipo) => {
    setEquipo(equipo.data)
    console.log("aaaaaa",equipo.data)
  })}, [])

useEffect(() => {
  getJugadoresEquipo(id).then((jugador) => {
    setJugadores(jugador.data)
})}, [])

  return(
    <div>  
      <div className='header'>
        <ul className='navbar'>
          <li><Link to="/" className='link'>Home</Link></li>
          <li><Link to="/consulta" className='link'>Consulta Equipos</Link></li>
        </ul>
      </div> 
      <div>
        <img src={"http://localhost:8080/" + equipo.fotoEquipo} alt="" />
        <img src={"http://localhost:8080/" + equipo.fotoEscudo} alt="" />
      </div>
      {
        console.log(11111,equipo)
      }
      {console.log(22222,equipo.nombre)}
      <ul>  
      {jugadores?.map((jugador) => {
                return (
                  <li key={jugador.jugadorCod}>
                    <p>{jugador.nombre} {jugador.apellidos}</p>
                  </li>
                )
              })}
      </ul>
      
    </div>
  )   
}

export default JugadoresEquipo;