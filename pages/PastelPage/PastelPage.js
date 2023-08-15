import { useParams } from "react-router";
import { useState,useEffect } from "react";
import { api } from "../../config/site.config";
import { Link } from "react-router-dom";
export default function PastelPage() {

  let {pastelId}=useParams();
  const [producto, setProducto] = useState('');
  useEffect(()=>{
    let link='api/products/getProduct/'+pastelId;
      api.get(link).then((response)=>
    {
        setProducto(response.data.product);
    })  
},[pastelId] );

return(

  <div className="container my-5">
    <div className="row">
      <div className="col">
        
        <img src={producto.product_image} className="img-fluid rounded-start" width="450" alt="product_image"/>
      </div>
      <div className="col-6 my-4">
      <div className="row my-3">
        <p className="text-center titulo1 my-3"> {producto.product_name}</p>
      </div>
      <div className="row my-3">
        <p className="texto2 "> {producto.product_description}</p>
        <p className="texto3 "> <strong>El precio es Bs: {producto.product_price }</strong></p>
        
      </div>      
        
        <p className="text-center texto2">
           <Link to={"/categorias" }>
                    categoria
                  </Link>

                  
        </p>
        <div className="row my-3 text-center">
          <div className="col">
        <button className="btn btn-primary">Añadir a carrito</button>
       </div>
</div>

      </div>
    </div>
  
  

</div>
)
}
