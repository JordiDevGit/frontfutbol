import { Link } from 'react-router-dom';
import { getEquipos } from '../services/api';
import { useEffect, useState } from 'react';

const Consulta = () => {
  const [equipos, setEquipos] = useState([]);

useEffect(() => {
  getEquipos().then((equipo) => {
    setEquipos(equipo.data)
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
      <div className='equipos'>
      {equipos?.map((equipo) => {
                return (
                 <Link to="/jugadoresequipo" key={equipo.equipoCod}>
                  <div className='equipo'>
                    <p>{equipo.equipoCod} {equipo.nombre}</p>
                    <img src={"http://localhost:8080/"+ equipo.fotoEquipo} alt="" />
                  </div>
                 </Link>
                  
                )
              })}
      </div>
    </div>
  )   
}

export default Consulta;