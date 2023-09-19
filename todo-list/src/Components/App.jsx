import "./App.css";
import { useState } from "react";
import Input from "./Input";
import List from "./List";

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
      <List todos={todos} />
    </div>
  );
}

export default App;
