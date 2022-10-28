

// import Button from './components/Button';

import './App.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '././pages/Home';

function App() {
  const precio = 4299;
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
      </Routes>
      </BrowserRouter>
      

      {/* <Button >Agregar al carrito</Button> */}
    </div>
  );
}

export default App;



//----------------------------------------------------

// PRACTICA DE "PROMISE (PROMESAS)"

// const voyALlegar = () => new Promise((res,rej)=>{
//   let llego = Math.random() > 0.5;
//   setTimeout(()=>{
//     if (llego) res("Lo atendemos")
//     rej("Liberamos la mesa") 
//   }, 3000)
// })

// voyALlegar()
// .then(res => console.log(res))
// .catch(error =>console.log(error))
// .finally(() => console.log("Seguir atendiendo"))


// CREAR UNA PROMESA QUE RETORNE UN OBJETO DE UN PRODUCTO



// let nuevoArray = products.map(
//   (item, index)=> ({...item, id: index})
// )

// console.log(nuevoArray);



// // const getProducts = () => 
// //   new Promise((res,rej)=> {
// //   setTimeout(()=>{
// //     res(products);
// //   }, 3000)
// // });

// getProducts()
// .then(e => console.log(e))
// .catch(error =>console.log(error))
// .finally(() => console.log("Seguir atendiendo"))


/*  {
  id: 1,
  nobre : Zapa,
  precio: 400,
  descripcion: naranja y blanca,
  stock: 10,
}
*/


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