import React from "react";
import { NavLink } from "react-router-dom";
// import Theme from "./Theme";

const nav = () => {
  return (
    <ul className="flex justify-around w-full fixed bottom-0 text-black font-semibold">
      <li className="bg-slate-400 rounded-t-lg hover:bg-slate-500 tab:py-1 tab:px-2 py-0.5 px-1">
        <NavLink to="/">Create Todo</NavLink>
      </li>
      <li className="bg-slate-400 rounded-t-lg hover:bg-slate-500 tab:py-1 tab:px-2 py-0.5 px-1">
        <NavLink to="todoList">Todo List</NavLink>
      </li>
    </ul>
  );
};

export default nav;
