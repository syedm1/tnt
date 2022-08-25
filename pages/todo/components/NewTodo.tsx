import { useRef, useContext } from "react";
import { TodosContext } from "../store/context";
import {
  todofFormLabelStyles,
  todoAddButton,
  todoFormStyles,
  todoFormInput
} from "../../../styles/tsxBased/todoModuleStyles";

const NewTodo: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const todosCtx = useContext(TodosContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = inputRef.current!.value;

    if (enteredText === "") return;
    todosCtx.addTodo(enteredText);
  };

  return (
    <form style={todoFormStyles} onSubmit={submitHandler}>
      <label style={todofFormLabelStyles} htmlFor="text">
        Todo List
      </label>
      <input style={todoFormInput} type="text" name="text" ref={inputRef} />
      <button style={todoAddButton} type="submit">
        Add Todo
      </button>
    </form>
  );
};

export default NewTodo;
