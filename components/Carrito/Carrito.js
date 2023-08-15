import { useState } from 'react';
export default function Carrito({
  carrito,
  handlerClickAddItem,
  handlerChangeDoneItem,
  handlerClickDeleteItem,
}) {
  // states
  const [inputItem, setInputItem] = useState('');
  // render
  return (
    <>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={inputItem}
          onChange={(e) => {
            setInputItem(e.target.value);
          }}
        />
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => {
            handlerClickAddItem(inputItem);
          }}
        >
          Adicionar
        </button>
      </div>
      <ul className="list-group">
        {carrito.map((todo, index) => {
          return (
            <li className="list-group-item d-flex justify-content-between" key={index}>
              <span>
                <input
                  className="form-check-input"
                  onChange={() => {
                    handlerChangeDoneItem(index);
                  }}
                  type="checkbox"
                  checked={todo.done}
                />
                &nbsp;&nbsp;
                {todo.Item}
              </span>
              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={() => handlerClickDeleteItem(index)}
              >
                Eliminar
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

