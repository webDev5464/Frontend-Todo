import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

import CreateTodo from "./Components/CreateTodo";
import TodoList from "./Components/TodoList";
import Nav from "./Components/Navigation";
import Header from "./Components/Header";
import Admin from "./Components/Admin";

export const Context = createContext();

function App() {
  const [ref, setRef] = useState(0);
  const [renderTodo, setRenderTodo] = useState([]);

  //! Render data
  // const todo = async () => {
  //   await axios
  //     .get("https://todo-app-72er.onrender.com/renderTodo")
  //     .then((x) => {
  //       setRenderTodo(x.data.RenderTodoData);
  //     });
  // };

  const todo = async () => {
    await axios.get("http://localhost:3005/renderTodo").then((x) => {
      setRenderTodo(x.data.RenderTodoData);
    });
  };

  useEffect(() => {
    todo();
  }, []);

  //! Remove Data
  // const RemoveTodo = async (id) => {
  //   await axios
  //     .delete(`https://todo-app-72er.onrender.com/deleteTodo/${id}`)
  //     .then((x) => {
  //       alert(x.data.message);
  //     });
  //   setRef(ref - 1);
  // };

  const RemoveTodo = async (id) => {
    await axios
      .delete(`http://localhost:3005/deleteTodo/${id}`)
      .then((x) => {
        alert(x.data.message);
      });
    setRef(ref - 1);
  };

  return (
    <section className="bg-zinc-800 text-white select-none">
      <BrowserRouter>
        <Context.Provider
          value={{ setRef, ref, RemoveTodo, renderTodo }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<CreateTodo />} />
            <Route path="todoList" element={<TodoList />} />
            <Route path="admin" element={<Admin />} />
          </Routes>
          <Nav />
        </Context.Provider>
      </BrowserRouter>
    </section>
  );
}

export default App;
