import { useState, useEffect } from 'react';
export default function CarritoPage(
    {
        handlerClickDeleteProducto,
        handlerClickAddOneProducto,
        handlerClickSubstractOneProducto,
        handlerClickAddProducto,

    }
) {
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


    //render
    return (
        <>
            <p className="my-5">
                <button
                    className="btn btn-primary"
                    onClick={() =>
                        handlerClickAddProducto({
                            product_name: {product_name},
                            product_price: {product_price},
                            product_quantity: 1,
                            id: {id},
                        })
                    }
                >
                    Adicionar producto
                </button>
                
            </p>

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
                                                className="btn btn-outline-secondary"
                                                onClick={() => {
                                                    handlerClickAddOneProducto(producto.id);
                                                }}
                                            >
                                                <i class="bi bi-cart-plus-fill">  Añadir</i>
                                            </button>
                                        </div>

                                        <div className="col">
                                            <button
                                                className="btn btn-outline-secondary"
                                                onClick={() => {
                                                    handlerClickSubstractOneProducto(producto.id);
                                                }}
                                            >
                                                <i class="bi bi-cart-dash-fill">  sustraer</i>
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
            
        </>
    );
}
