import { todoItemStyles } from "../styles/styles";

const TodoItem: React.FC<{
  text: string;
  id: string;
  onRemoveTodo: (id: string) => void;
}> = (props) => {
  return (
    <li style={todoItemStyles} onClick={() => props.onRemoveTodo(props.id)}>
      {props.text}
    </li>
  );
};

export default TodoItem;
