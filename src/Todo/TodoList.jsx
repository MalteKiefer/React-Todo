import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ list, title, onDeleteTodo, onToogleTodo }) => {
  return (
    <div className="TodoListContainer">
      <h2>{title}</h2>
      {list.map((t) => (
        <TodoItem
          key={t.id}
          id={t.id}
          done={t.done}
          title={t.title}
          onDeleteTodo={onDeleteTodo}
          onToogleTodo={onToogleTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
