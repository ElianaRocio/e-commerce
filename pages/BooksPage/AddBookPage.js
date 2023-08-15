import { useState } from 'react';
import { api } from '../../config/site.config';
import { useNavigate } from 'react-router-dom';
export default function AddBookPage() {
  let navigate = useNavigate();
  // states
  const [book, setBook] = useState({
    title: '',
    description: '',
    rating: 0,
    Quote1: '',
  });
  // handlers
  const handleClickSubmit = () => {
    console.log(book);
    api
      .post('https://example-data.draftbit.com/books/', book)
      .then((response) => {
        navigate('/book/' + response.data.id);
      })
      .catch((error) => console.log(error));
  };
  // render
  return (
    <div className="container">
      <div className="row my-3">
        <div className="col">
          <h2>Adicionar Libro</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="mb-3">
              <label className="form-label">Título</label>
              <input
                type="text"
                className="form-control"
                value={book.title}
                onChange={(e) => {
                  setBook({ ...book, title: e.target.value });
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Descripción</label>
              <textarea
                className="form-control"
                value={book.description}
                onChange={(e) => {
                  setBook({ ...book, description: e.target.value });
                }}
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">Rating</label>
              <input
                type="number"
                className="form-control"
                value={book.rating}
                onChange={(e) => {
                  setBook({ ...book, rating: e.target.value });
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Cita</label>
              <textarea
                className="form-control"
                value={book.Quote1}
                onChange={(e) => {
                  setBook({ ...book, Quote1: e.target.value });
                }}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleClickSubmit}>
              Crear nuevo libro
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
