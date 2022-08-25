import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import ContextProvider from "./store/context";

const todoApp = () => {
  /*
    todo for todo:
    - Add tests
    - Add drop down on click
    - Add tick and delete
    - Add strike for ticked items
    - Add shareable todos(NoSql or firebase integration)
    - Add alerts for todo (pomdoro style)
    */
  return (
    <>
      <ContextProvider>
        <NewTodo />
        <Todos />
      </ContextProvider>
    </>
  );
};

export default todoApp;
