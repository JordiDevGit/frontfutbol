import { Link } from 'react-router-dom';

const Home = () => (
        <div>    
          <div className='header'>
            <ul className='navbar'>
              <li><Link to="/" className='link'>Home</Link></li>
              <li><Link to="/consultajugadores" className='link'>Consulta Jugadores</Link></li>
              <li><Link to="/consulta" className='link'>Consulta Equipos</Link></li>
            </ul>
          </div>  
        </div>
)

export default Home;