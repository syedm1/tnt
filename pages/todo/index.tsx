import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import ContextProvider from "./store/context";
import Layout from "components/Layout/Layout";

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
      <Layout>
        <ContextProvider>
          <NewTodo />
          <Todos />
        </ContextProvider>
      </Layout>
    </>
  );
};

export default todoApp;
