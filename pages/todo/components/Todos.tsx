import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodosContext } from "../store/context";
import { todosStyles } from "../styles/styles";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul style={todosStyles}>
      {todosCtx.items.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          onRemoveTodo={todosCtx.removeTodo}
        />
      ))}
    </ul>
  );
};

export default Todos;
