import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Componentes/NavBar';
import ItemListContainer from './Componentes/ItemListContainer';
import { Button } from "bootstrap";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <ItemListContainer symart={"Bienvenidos a la distribuidora Symart"} />
    </div>
  );
}

export default App;
