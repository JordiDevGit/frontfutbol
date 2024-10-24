import { Link } from 'react-router-dom';

const Home = () => (
        <div>    
          <div className='header'>
            <ul className='navbar'>
              <li><Link to="/" className='link'>Home</Link></li>
              <li><Link to="/consulta" className='link'>Consulta Equipos</Link></li>
            </ul>
          </div>  
          <h1>Para buscar los jugadores que hay en los equipos vaya al menú de Consulta Equipos.</h1>
        </div>
)

export default Home;