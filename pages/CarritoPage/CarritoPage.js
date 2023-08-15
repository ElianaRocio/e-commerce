import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function CarritoPage({

}) {
    //states
    const [productos, setProductos] = useState([]);
    //handlers
    const handlerClickDeleteProducto = (id) => {
        let newProductos = [...productos];
        for (let x in productos) {
            if (productos[x].id === id) {
                newProductos.splice(x, 1);
                break;
            }
        }
        setProductos(newProductos);
    };
    const handlerClickAddProducto = (producto) => {
        let newProductos = [...productos];
        let existeProducto = false;
        for (let x in productos) {
            if (productos[x].id === producto.id) {
                existeProducto = true;
                newProductos[x].product_quantity++;
                break;
            }
        }
        if (existeProducto) {
            setProductos(newProductos);
        } else {
            setProductos([...productos, producto]);
        }
    };


    const handlerClickAddOneProducto = (id) => {
        let newProductos = [...productos];
        for (let x in productos) {
            if (productos[x].id === id) {
                newProductos[x].product_quantity++;
                break;
            }
        }
        setProductos(newProductos);
    };
    const handlerClickSubstractOneProducto = (id) => {
        let newProductos = [...productos];
        for (let x in productos) {
            if (productos[x].id === id) {
                newProductos[x].product_quantity--;
                break;
            }
        }
        setProductos(newProductos);
    };

    const handlerClickEnviarMensaje = () => {
        let link = 'https://wa.me/59172555837?text=' + encodeURIComponent('El total de la compra es');
       
        
        window.open(link);
      };

    //render
    return (
        <>
            <p>

                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" >
                    Ver Productos
                </button>
            </p>
            <div className="collapse" id="collapseExample">
                <div className="card card-body">

                    <table class="table">

                        <tbody>
                            <tr>
                                <td>Torta Cuatro Leches</td>
                                <td>
                                    <div className="my-5">
                                        <button
                                            className="btn btn-primary"
                                            onClick={() =>
                                                handlerClickAddProducto({
                                                    product_name: 'Torta cuatro leches',
                                                    product_price: 130,
                                                    product_quantity: 1,
                                                    id: 885,
                                                })
                                            }
                                        >
                                            Adicionar producto
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>Torta Selva Negra</td>
                                <td>
                                    <div className="my-5">
                                        <button
                                            className="btn btn-primary"
                                            onClick={() =>
                                                handlerClickAddProducto({
                                                    product_name: 'Torta Selva negra',
                                                    product_price: 130,
                                                    product_quantity: 1,
                                                    id: 886,
                                                })
                                            }
                                        >
                                            Adicionar producto
                                        </button>
                                    </div>
                                </td>

                            </tr>

                            <tr>
                                <td>Torta cafe Moka</td>
                                <td>
                                    < div className="my-5">
                                        <button
                                            className="btn btn-primary"
                                            onClick={() =>
                                                handlerClickAddProducto({
                                                    product_name: 'Torta cafe Moka',
                                                    product_price: 130,
                                                    product_quantity: 1,
                                                    id: 887,
                                                })
                                            }
                                        >
                                            Adicionar producto
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Torta infatil</td>
                                <td>
                                    < div className="my-5">
                                        <button
                                            className="btn btn-primary"
                                            onClick={() =>
                                                handlerClickAddProducto({
                                                    product_name: 'Torta infantil',
                                                    product_price: 170,
                                                    product_quantity: 1,
                                                    id: 888,
                                                })
                                            }
                                        >
                                            Adicionar producto
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <td>Torta Foto Torta</td>
                            <td>
                                < div className="my-5">
                                    <button
                                        className="btn btn-primary"
                                        onClick={() =>
                                            handlerClickAddProducto({
                                                product_name: 'Foto Torta',
                                                product_price: 170,
                                                product_quantity: 1,
                                                id: 889,
                                            })
                                        }
                                    >
                                        Adicionar producto
                                    </button>
                                </div>
                            </td>

                            <tr>
                                <td>Torta al Desnudo</td>
                                <td>
                                    < div className="my-5">
                                        <button
                                            className="btn btn-primary"
                                            onClick={() =>
                                                handlerClickAddProducto({
                                                    product_name: 'Torta al Desnudo',
                                                    product_price: 170,
                                                    product_quantity: 1,
                                                    id: 890,
                                                })
                                            }
                                        >
                                            Adicionar producto
                                        </button>
                                    </div>
                                </td>

                            </tr>
                            <tr>
                                <td>Brownie</td>
                                <td>
                                    < div className="my-5">
                                        <button
                                            className="btn btn-primary"
                                            onClick={() =>
                                                handlerClickAddProducto({
                                                    product_name: 'Brownie',
                                                    product_price: 10,
                                                    product_quantity: 1,
                                                    id: 891,
                                                })
                                            }
                                        >
                                            Adicionar producto
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>


                </div>
            </div>
            <h3>Lista de Compras</h3>
            <ul className="list-group">
                {productos.map((producto, index) => {
                    return (
                        <li className="list-group-item d-flex justify-content-between" key={index}>
                            <span>
                                <div className="container">
                                    <div className="row">
                                        <div className="col">

                                            {producto.product_name}
                                            <br />
                                            {producto.product_price} Bs
                                            <br />
                                            Cantidad: {producto.product_quantity}
                                            <br />
                                            Total: {producto.product_price * producto.product_quantity}
                                        </div>
                                    </div>

                                    <div className="row my-2">

                                        <div className="col">
                                            <button
                                                className="btn btn-outline-secondary my-2"
                                                onClick={() => {
                                                    handlerClickAddOneProducto(producto.id);
                                                }}
                                            >
                                                <i className="bi bi-cart-plus-fill ">  Añadir</i>
                                            </button>
                                        </div>

                                        <div className="col">
                                            <button
                                                className="btn btn-outline-secondary my-2"
                                                onClick={() => {
                                                    handlerClickSubstractOneProducto(producto.id);
                                                }}
                                            >
                                                <i className="bi bi-cart-dash-fill ">  sustraer</i>
                                            </button>
                                        </div>

                                    </div>

                                </div>

                            </span>
                            <div className="container">
                                <div className="row">
                                    <button
                                        className="btn btn-outline-secondary btn-sm"
                                        onClick={() => handlerClickDeleteProducto(producto.id)} >
                                        <i className="bi bi-cart-x-fill">  Eliminar</i>
                                    </button>
                                </div>
                            </div>


                        </li>
                    );
                })}
                <li className="list-group-item d-flex justify-content-between">
                    Total: &nbsp;
                    {productos.reduce(
                        (previousValue, currentValue) =>
                            previousValue + currentValue.product_price * currentValue.product_quantity,
                        0,
                    )}{' '}
                    Bs
                </li>
            </ul>
            <div className="my-3">
              <button
                onClick={handlerClickEnviarMensaje}
                data-bs-dismiss="offcanvas"
                className="btn btn-primary"
              >
                Comprar Productos
              </button>
            </div>

        </>
    );
}
