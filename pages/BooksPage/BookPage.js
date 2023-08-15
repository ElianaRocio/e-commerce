import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../config/site.config';
export default function BookPage() {
  // states
  const [book, setBook] = useState({});
  // init
  const { bookId } = useParams();
  useEffect(() => {
    api.get('api/products/46/getAll' + bookId).then((response) => {
      setBook(response.data.products);
    });
  }, []);
  // render
  return (
    <div className="container">
      <div className="row my-3">
        <div className="col">
          <h2>{book.product_name}</h2>
          <p>{book.product_price}</p>
          
        </div>
      </div>
    </div>
  );
}
