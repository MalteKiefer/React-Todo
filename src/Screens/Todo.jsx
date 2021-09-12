import React from "react";
import TodoList from "../Todo/TodoList";

const Todo = ({
  todos,
  onAddTodo,
  onDeleteTodo,
  onToogleTodo,
  searchQuery,
}) => {
  const activeTodos = todos.filter(({ done }) => !done);
  const doneTodos = todos.filter(({ done }) => done);
  const filterTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="TodoInputContainer">
        <input
          onKeyDown={onAddTodo}
          placeholder="Hier Todo hinzufügen"
          className="InputItem"
        />
      </div>

      {searchQuery ? (
        <TodoList
          title="Suchergebnis"
          list={filterTodos}
          onDeleteTodo={onDeleteTodo}
          onToogleTodo={onToogleTodo}
        />
      ) : (
        <>
          <TodoList
            title="Zu erledigen"
            list={activeTodos}
            onDeleteTodo={onDeleteTodo}
            onToogleTodo={onToogleTodo}
          />
          <TodoList
            title="Erledigt"
            list={doneTodos}
            onDeleteTodo={onDeleteTodo}
            onToogleTodo={onToogleTodo}
          />
        </>
      )}
    </>
  );
};

export default Todo;
