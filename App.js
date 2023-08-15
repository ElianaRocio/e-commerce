import './assets/scss/stylesheet.scss';
import Boot from './redux/boot';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import ContactoPage from './pages/ContactoPage/ContactoPage';
import HistoriaPage from './pages/HistoriaPage/HistoriaPage';
import CategoriasPage from './pages/CategoriasPage/CategoriasPage';
import Footer from './components/Footer/Footer';
import PastelesPage from './pages/PastelPage/PastelesPage';
import PastelPage from './pages/PastelPage/PastelPage';
import CarritoPage from './pages/CarritoPage/CarritoPage';
import { useState,useEffect } from 'react';



const App = () => {

  // options
  let navBarOptions = {
    main: [
      { option: 'Inicio', to: '/' },
      { option: 'Contacto', to: '/contacto' },
      { option: 'Acerca de nosotros', to: '/historia' },
      { option: 'categorias', to: '/categorias' },

    ],    
    right: [      
    ],
  };
  

  
  return (
    <BrowserRouter>
      <NavBar navBarOptions={navBarOptions} />
      <div className="App">

        <div className="container my-3 ">
          <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" >
            <i className="bi bi-cart4"> Carrito de compras
            </i></button>

          <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" >
            <div className="offcanvas-body">
              <CarritoPage        
                                        
              
              />
            </div>
          </div>
        </div>




        <Routes>
          <Route index element={<Home />} />
          <Route path="contacto" element={<ContactoPage />} />
          <Route path="historia" element={<HistoriaPage />} />
          <Route path="categorias" element={<CategoriasPage />} />
          


          <Route path="pasteles" element={<PastelesPage />} />
          <Route path="pastel">
            <Route path=":pastelId" element={<PastelPage />} />
          </Route>
          <Route path="carrito" element={<CarritoPage />} />

        </Routes>

      </div>
     


      <div className="container-fluid my-3" >
        <Footer />
      </div>

    </BrowserRouter>

  );
};
Boot()
  .then(() => App())
  .catch((error) => console.error(error));

export default App;
