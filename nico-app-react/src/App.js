
import AppContainer from './components/AppContainer';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Button from './components/Button';
import Item from './components/Item';
import './App.scss';
import Banner from './components/Banner'
import Footer from './components/Footer'
import { BsFillCartCheckFill } from "react-icons/bs";

import logo from './logo.svg';

import Tag from "./components/Tags";

function App() {
  const precio = 4299;
  return (
    <div className="App">
      

      <Button >Agregar al carrito</Button>

      <Navbar />
      <ItemListContainer saludo="Bienvenidos a MODO MUNDIAL" />

      <BsFillCartCheckFill />
      
      <Banner promocion="ÚNETE AL CLUB Y CONSIGUE 15% DE DESUENTO" />
      <main className='content'>
          <AppContainer />

          <div className='products'>

            <div className='promo'>
              <h2>LO MEJOR EN CALZADO PARA LA FAMILIA</h2>
              <button className='promo__button'>DESCUBRILOS TODOS {"->"}</button>
            </div>
              
          </div>
          
        </main>
        <Footer />
      
    </div>
  );
}

export default App;




      {/* <Tag titulo="Envio gratis" />
      <Tag titulo="Promo 2x1" /> */}
      

{/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}