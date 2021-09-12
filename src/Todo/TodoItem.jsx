import React from "react";
import { Link } from "react-router-dom";

const TodoItem = ({ id, done, title, onToogleTodo, onDeleteTodo }) => {
  return (
    <div key={id} className="TodoItemContainer">
      <input
        type="checkbox"
        checked={done}
        onChange={() => onToogleTodo(id)}
      ></input>
      <Link to={`/todo/${id}`}>
        <p className="TodoItemText">{title}</p>
      </Link>
      <button className="TodoItemDeleteButton" onClick={() => onDeleteTodo(id)}>
        &#x2715;
      </button>
    </div>
  );
};

export default TodoItem;
