import React from "react";
import "./styles.css";

//include types of all props
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

//set type of function, include Props
// const InputField = ({ todo, setTodo }: Props) => {    // this is an alternate syntax for following line
const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    //on form submit handle add
    <form className="input" onSubmit={handleAdd}>
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
