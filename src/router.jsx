import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './routes/root';
import Consulta from './routes/consulta';
import JugadoresEquipo from './routes/jugadoresequipo';

const Router = () => (
    <BrowserRouter>
        <Routes>   
            <Route index element={<Home/>} />
            <Route path="/consulta" element={<Consulta/>} />
            <Route path="/jugadoresequipo/:id" element={<JugadoresEquipo/>} />
            <Route path="*" element={<div>404</div> } />
        </Routes>
    </BrowserRouter>
);

export default Router;