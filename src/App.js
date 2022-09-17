import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './app/Layout';
import Contacto from './pag/Contacto';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/contacto" element={<Contacto />}></Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
