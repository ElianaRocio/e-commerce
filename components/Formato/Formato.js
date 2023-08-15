
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Formato ({ name, description, numbers }) {

    return (


        <div className="card-holder fondo2">
            <div className="card fondo3">
                <div className="card-body text-center texto1">
                    <h5 className="card-text  ">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"> <strong>Numero de productos :</strong>  {numbers}</p>

                </div>
            </div>
        </div>
    );
}
