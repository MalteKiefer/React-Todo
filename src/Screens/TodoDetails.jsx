import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useState } from "react";

const TodoDetails = ({ todos, onChangeTodo }) => {
  const { id } = useParams();
  const history = useHistory();
  const todo = todos.find((t) => t.id === id);

  const [title, setTitle] = useState(todo.title);

  const handleChangeTitle = (e) => {
    if (e.key === "Enter") {
      onChangeTodo({ ...todo, title });
      history.push("/");
    }
  };

  return (
    <div className="TodoInputContainer">
      <input
        placeholder="Ändere Todo Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="InputItem"
        onKeyDown={handleChangeTitle}
      />
    </div>
  );
};

export default TodoDetails;
