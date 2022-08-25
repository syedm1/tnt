import { useState, createContext, ReactNode } from "react";
import TodoItem from "../../../components/models/TodoItem";

type TodosContextObj = {
  items: TodoItem[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

interface Props {
  children?: React.ReactNode;
}

export const TodosContext = createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {}
});

const ContextProvider: React.FC<Props> = (props) => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new TodoItem(text);
    setTodos([...todos, newTodo]);
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props?.children}
    </TodosContext.Provider>
  );
};

export default ContextProvider;
