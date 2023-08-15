import { api } from '../../config/site.config';
import { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import { Link } from 'react-router-dom';

export default function PastelesPage({handlerClickAddProducto}) {

  const handleClickAddItem = () => {
    handlerClickAddProducto('producto');
  };

  const [productos, setProductos] = useState([]);
  const [busquedaInput, setBusquedaInput] = useState('');


  useEffect(() => {

    api.get('api/products/46/getAll').then((response) => {
      setProductos(response.data.products);

    })
      .catch((error) => console.log(error));

  }, []);

  const handlerClickBusqueda = () => {
   
    api.get('api/products/46/search' + busquedaInput).then((response) => {
      setProductos(response.data.results);
    });
  };

  // render
  return (
    <>

<div className="container my-3">
      <div className="row ">
        <div className="col">       
                  
              <div className="input-group mb-3" >
                <input
                placeholder="¿Qué quieres comprar?"
                  type="text"
                  className="form-control"
                  value={busquedaInput}
                  onChange={(e) => {
                    setBusquedaInput(e.target.value);
                  }}
                />
                <button className="btn btn-outline-primary" onClick={handlerClickBusqueda}>
                  Buscar
                </button>
              </div>           
         
        </div>
      </div>
    </div>

      <div className="container my-5">
        <h5 className="text-center titulo">NUESTROS PRODUCTOS</h5>
        <div className="row">
          {productos.map((producto, index) => {
            return (

              <div className="col-3 my-5">
                <Card
                  key={index}
                  image={producto.product_image}
                  name={producto.product_name}
                  price={producto.product_price}


                />
                <div className="row my-3 text-center">
                <div className="col">
              <Link to={"/pastel/" + producto.id}>
                    <button type="button" className="btn btn-primary">Ver Producto</button>
                  </Link>

              <button onClick={handleClickAddItem} type="button" class="btn btn-secondary ms-2">Añadir a carrito</button>

            </div>
                  
                </div>

              </div>

            );
          })}
        </div>

      </div>



    </>
  );
}
