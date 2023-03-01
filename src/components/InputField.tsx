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
    <div>
      <form
        className="input"
        onSubmit={(e) => {
          handleAdd(e);
          //remove visual focus blur after submit
          inputRef.current?.blur();
        }}
      >
        <input
          ref={inputRef}
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="input"
          placeholder="enter a task"
          className="input-box"
        ></input>
        <button className="input-submit">Add</button>
      </form>
    </div>
  );
};

export default InputField;
