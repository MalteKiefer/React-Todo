import "./App.css";
import Todo from "./Screens/Todo";
import Navbar from "./Components/Navbar";
import { Switch, Route } from "react-router-dom";
import TodoDetails from "./Screens/TodoDetails";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./Reducer/todoSlice";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const todos = useSelector((state) => state.todo.list);
  const dispatch = useDispatch();

  const handleAddTodo = (event) => {
    if (event.key === "Enter") {
      dispatch(addTodo({ title: event.target.value, done: false, id: uuid() }));
      event.target.value = "";
    }
  };

  const handleDeleteTodo = (id) => {
    // setTodos(todos.filter((t) => t.id !== id));
  };

  const handleToogleTodo = (id) => {
    // setTodos(
    //   todos.map((t) => {
    //     if (t.id === id) return { ...t, done: !t.done };
    //     else return t;
    //   })
    // );
  };

  const handleChangeTodo = (todo) => {
    // setTodos(
    //   todos.map((t) => {
    //     if (t.id === todo.id) {
    //       return todo;
    //     }
    //     return t;
    //   })
    // );
  };

  return (
    <div className="App">
      <Navbar onSearchQuery={(e) => setSearchQuery(e.target.value)} />
      <div className="MainContainer">
        <Switch>
          <Route exact path="/">
            <Todo
              todos={todos}
              onDeleteTodo={handleDeleteTodo}
              onToogleTodo={handleToogleTodo}
              onAddTodo={handleAddTodo}
              searchQuery={searchQuery}
            />
          </Route>
          <Route exact path="/todo/:id">
            <TodoDetails todos={todos} onChangeTodo={handleChangeTodo} />
          </Route>
          <Route path="*">
            <h1>404 - not found</h1>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
