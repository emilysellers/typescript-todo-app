import React from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

// const InputField = ({ todo, setTodo }: Props) => {    // alt syntax
const InputField: React.FC<Props> = ({ todo, setTodo }) => {
  return (
    <form className="input">
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="input"
        placeholder="enter a task"
        className="input-box"
      ></input>
      <button className="input-submit">Add</button>
    </form>
  );
};

export default InputField;
