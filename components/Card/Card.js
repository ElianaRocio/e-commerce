
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Card({ image, name, price }) {

  return (


    <div className="card-holder">
      <div className="card ">
        <img src={image} className="card-img-top" alt="cardImagen" />
        <div className="card-body text-center">
          <h5 className="card-text  ">{name}</h5>

          <p > Precio: Bs {price}</p>
          
        </div>
      </div>
    </div>
  );
}
