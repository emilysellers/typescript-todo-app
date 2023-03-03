import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { Todo } from "./models";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const App: React.FC = () => {
  //set types for state
  const [todo, setTodo] = useState<string>("");
  //Todo type imported from ./models
  const [todos, setTodos] = useState<Todo[]>([]);
  //create new state for completed todos
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

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

  const onDragEnd = (result: any) => {
    console.log(result);
  };

  return (
    //install react-beautiful-dnd and wrap app in DragDropContext
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className="heading">Get It Done!</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
