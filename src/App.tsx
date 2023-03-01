import { log } from "console";
import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./models";

const App: React.FC = () => {
  //set types for state
  const [todo, setTodo] = useState<string>("");
  //Todo type imported from ./models
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    //prevent page reload on button click
    e.preventDefault();
    //if there is a todo in input, add todo to todos
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
    }
    //clear input
    setTodo("");
  };

  console.log(todos);

  return (
    <div className="App">
      <span className="heading">Get It Done!</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </div>
  );
};

export default App;
