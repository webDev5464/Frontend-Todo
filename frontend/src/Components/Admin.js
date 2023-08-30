import React, { useContext } from "react";
import { Context } from "../App";

const Admin = () => {
  const { renderTodo, RemoveTodo } = useContext(Context);

  const Render = ({ r }) => {
    return (
      <div className="my-10 p-0.5 border shadow-inner shadow-zinc-600 bg-black w-todoCard m-auto rounded-md">
        <h2 className="text-lime-200 text-center font-semibold text-lg my-2">
          {r.heading}
        </h2>
        <hr />
        <div className="p-1">
          <p className="p-2">Title : {r.title}</p>
          <p className="flex justify-around max-[500px]:flex-col p-2">
            <span>Date : {r.date}</span> <span>Time : {r.time}</span>
          </p>
          <p className="p-2">Description : {r.des}</p>
          <hr className="bg-black" />
          <div className="flex justify-end my-5">
            <button
              onClick={() => RemoveTodo(r._id)}
              className="bg-red-500 text-black rounded-md p-1 font-semibold cursor-pointer hover:bg-red-600"
            >
              Delete List
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="h-screen overflow-y-auto py-10 bg-black">
      <h2 className="w-fit m-auto pt-5">Developer Controller</h2>
      {renderTodo.map((x) => (
        <Render key={x._id} r={x} />
      ))}
    </div>
  );
};

export default Admin;
