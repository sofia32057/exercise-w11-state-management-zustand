import { useState } from "react";
import { useTodoStore } from "../store/useTodoStore";

export const TodoList = () => {
  const { addTodo, todos, deleteTodo } = useTodoStore();
  const [task, setTask] = useState("");

  const handleChange = event => {
    setTask(event.target.value);
    console.log(task);
  };

  const handleSubmit = event => {
    event.preventDefault();
    addTodo(task);
    setTask("");
  };

  const handleRemove = (event, i) => {
    event.preventDefault();
    deleteTodo(i);
    console.log("event", event);
  };

  return (
    <main>
      {/* the form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task-input"
          id="task-input"
          value={task}
          onChange={handleChange}
        />
        <button>Add task</button>
      </form>

      {/* The list */}
      <ul>
        {todos.map((task, i) => (
          <li key={`${task}${i}`}>
            {task}{" "}
            <button
              onClick={event => {
                handleRemove(event, i);
              }}>
              remove
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
};
