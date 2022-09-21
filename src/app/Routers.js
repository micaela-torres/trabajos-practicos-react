import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Contacto from '../pag/Contacto';
import { CartWidget } from '../Componentes/CartWidget';
import ItemListContainer from '../Componentes/ItemListContainer';



const Routers = () => (

    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}></Route>
                <Route path="/categoria/:marcaid" element={<ItemListContainer />}></Route>
                <Route path="/contacto" element={<Contacto />}></Route>
                <Route path="/carrito" element={<CartWidget />}></Route>
            </Routes>
        </BrowserRouter>
    </>

)

export default Routers