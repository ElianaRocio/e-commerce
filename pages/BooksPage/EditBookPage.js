import { useState, useEffect } from 'react';
import { api } from '../../config/site.config';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
export default function EditBookPage() {
  let navigate = useNavigate();
  // states
  const [book, setBook] = useState({
    product_name: '',
    description: '',
    
  });
  // init
  const { bookId } = useParams();
  useEffect(() => {
    api.get('api/products/getProduct/885' + bookId).then((response) => {
      setBook(response.data);
    });
  }, []);
  
 
  // render
  return (
    <div className="container">
      <div className="row my-3">
        <div className="col">
          <h2>Editar Libro</h2>
          <p>   {product_name}        </p>
         <p>{product_description}</p>
        </div>
      </div>
    </div>
  );
}
