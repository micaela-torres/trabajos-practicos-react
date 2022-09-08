import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Componentes/NavBar';
import ItemListContainer from './Componentes/ItemListContainer';


function App() {
  return (
    <div>
      <NavBar></NavBar>
      <ItemListContainer symart={"Bienvenidos a la distribuidora Symart"} />
    </div>
  );
}

export default App;
