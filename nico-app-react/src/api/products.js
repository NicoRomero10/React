const products = [
    {
      nombre: "Zapatillas Ultra Resist",
      categoria: "Hombre Running",
      tag: "10 colores",
      precio: 4300,
      imagen: "url",
      id: 0
  },
  {
    nombre: "Zapatillas Ultra Resist",
    categoria: "Hombre Running",
    tag: "10 colores",
    precio: 4300,
    imagen: "url",
    id: 1
  },
  ];

  export const getProducts = () => 
  new Promise((res,rej)=> {
  setTimeout(()=>{
    res(products);
  }, 3000)
});