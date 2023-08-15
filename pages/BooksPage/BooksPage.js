import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../config/site.config';
export default function BooksPage() {
  // states
  const [books, setBooks] = useState([
    {
      id: 1,
      product_name: 'text',
      product_description: ' text',
    },
  ]);
  // init
  useEffect(() => {
    api
      .get('api/products/46/getAll')
      .then((response) => {
        setBooks(response.data.products);
      })
      .catch((error) => console.log(error));
  }, []);
  // render
  return (
    <div className="container">
      <div className="row my-3">
        <div className="col">
          <h2>Books</h2>
          <p>
            <Link to="/books/add" className="btn btn-outline-primary">
              Adicionar Libro
            </Link>
          </p>
          <ul>
            {books.map((book, index) => {
              return (
                <li key={index}>
                  <Link to={'/book/' + book.id}>{book.product_name}</Link>. {book.product_description}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
