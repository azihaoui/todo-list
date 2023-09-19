import "./App.css";
import { useState } from "react";
import Input from "./Input";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <img className="logo" src="/tech-logo.png" alt="" />
      <Input setTodo={setTodo} todo={todo} addTodo={addTodo} />
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
