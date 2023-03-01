import React, { useRef } from "react";
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
  //useRef hook to remove visual blur after submit
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    //on form submit handle add
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        type="text"
        placeholder="enter a task"
        value={todo}
        ref={inputRef}
        onChange={(e) => setTodo(e.target.value)}
        className="input__box"
      />
      <button className="input__submit">Add</button>
    </form>
  );
};

export default InputField;
