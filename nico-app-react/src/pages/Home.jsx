import Banner from "../components/Banner";
import AppContainer from "../components/ItemContainer";
import { UserLayout } from "../components/UserLayout";

export const Home = () =>{
    return (
      <UserLayout>   

      <Banner 
      promocion="ÚNETE AL CLUB Y CONSIGUE 15% DE DESUENTO" 
      boton="registrate"
      onClick={() => console.log("click en registrate")}
      />
      <main className='content'>
          <AppContainer />
      </main>
      <Banner
      promocion="UNETE AL CLUB Y CONSIGUE 35% DE DESCUENTO"
      boton="unete"
      onClick={() => console.log("click en unete")}
      />
      </UserLayout>
    );

};
