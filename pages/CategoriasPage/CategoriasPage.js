import { api } from '../../config/site.config';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Formato from '../../components/Formato/Formato';

export default function CategoriasPage() {

    const [categorias, setCategorias] = useState([]);


    useEffect(() => {

        api.get('api/categories/46/getAll').then((response) => {
            setCategorias(response.data.categories);

        })
            .catch((error) => console.log(error));

    }, []);



    // render
    return (
        <>


            <div className="container my-5">
                <h5 className="text-center titulo">NUESTRAS CATEGORIAS</h5>
                <div className="row">
                    {categorias.map((categoria, index) => {
                        return (

                            <div className="row my-5">
                                <Formato
                                    key={index}

                                    name={categoria.category_name}
                                    description={categoria.category_description}
                                    numbers={categoria.products_number}


                                />


                            </div>

                        );
                    })}
                </div>

            </div>



        </>
    );
}
