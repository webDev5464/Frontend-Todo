import React, { useContext, useState } from "react";
//* npm i axios
import axios from "axios";
import { Context } from "../App";

const CreateTodo = () => {
  const { setRef, ref } = useContext(Context);

  //? value
  const [todo, setTodo] = useState({
    heading: "",
    title: "",
    date: "",
    time: "",
    des: "",
  });

  // ? Form handel
  const createTodoList = (e) => {
    //? Can not reload browser at submit form
    e.preventDefault();

    //? data send inside database
    axios
      .post("https://todo-app-72er.onrender.com/todoData", todo)
      .then((x) => {
        alert(x.data.message);

        //? Not reload browser and add data in frontend backend
        setRef(ref + 1);
      });
  };

  /*
  const createTodoList = (e) => {
    //? Can not reload browser at submit form
    e.preventDefault();

    //? data send inside database
    axios.post("http://localhost:3005/todoData", todo).then((x) => {
      alert(x.data.message);
      //? Not reload browser and add data in frontend backend
      setRef(ref + 1);
    });
  };
  */
 
  //? onChange
  const todoDetail = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  return (
    <section className="h-screen pt-component-top">
      <form
        onSubmit={createTodoList}
        className="tab:w-form m-auto p-5 bg-slate-950 rounded-lg shadow-lg shadow-neutral-950 max-[500px]:w-form h-4/5 overflow-y-auto max-[500px]:h-form500"
      >
        <h2 className="m-auto w-fit mb-5 text-2xl font-bold border-b-2">
          Create Todo
        </h2>
        <table className="m-auto w-fit">
          <tbody className="largeTab:flex largeTab:items-center largeTab:justify-evenly largeTab:w-timeDate mb-5">
            <tr className="flex max-[500px]:flex-col mb-2">
              <td className="w-40 max-[500px]:w-fit my-0.5">
                <label htmlFor="date" className="font-semibold">
                  Date :{" "}
                </label>
              </td>
              <td>
                <input
                  className="bg-zinc-700 p-1 max-[500px]:w-input"
                  onChange={todoDetail}
                  value={todo.date}
                  type="date"
                  name="date"
                />
              </td>
            </tr>
            <tr className="flex max-[500px]:flex-col mb-2">
              <td className="w-40 max-[500px]:w-fit my-0.5">
                <label htmlFor="date" className="font-semibold">
                  Time :{" "}
                </label>
              </td>
              <td>
                <input
                  className="bg-zinc-700 p-1 max-[500px]:w-input"
                  onChange={todoDetail}
                  value={todo.time}
                  type="time"
                  name="time"
                />
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="flex max-[500px]:flex-col mb-2 justify-evenly">
              <td className="w-40 max-[500px]:w-fit my-0.5">
                <label htmlFor="heading" className="font-semibold">
                  Heading :{" "}
                </label>
              </td>
              <td>
                <input
                  className="bg-zinc-700 p-1 max-[500px]:w-input"
                  onChange={todoDetail}
                  value={todo.heading}
                  type="text"
                  name="heading"
                  required
                />
              </td>
            </tr>
            <tr className="flex max-[500px]:flex-col mb-2 justify-evenly">
              <td className="w-40 max-[500px]:w-fit my-0.5">
                <label htmlFor="title" className="font-semibold">
                  Title :{" "}
                </label>
              </td>
              <td>
                <input
                  className="bg-zinc-700 p-1 max-[500px]:w-input"
                  onChange={todoDetail}
                  value={todo.title}
                  type="text"
                  name="title"
                />
              </td>
            </tr>
            <tr className="flex flex-col mb-2">
              <td className="w-40 max-[500px]:w-fit my-0.5">
                <label htmlFor="description" className="font-semibold">
                  Description :{" "}
                </label>
              </td>
              <td>
                <textarea
                  className="bg-zinc-700 p-1 w-full h-28"
                  onChange={todoDetail}
                  value={todo.des}
                  type="text"
                  name="des"
                />
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td className="flex justify-end mt-5">
                <input
                  type="submit"
                  value="Add Todo"
                  className="bg-cyan-500 text-black rounded-md p-1 font-semibold cursor-pointer hover:bg-cyan-600"
                />
              </td>
            </tr>
          </tfoot>
        </table>
      </form>
    </section>
  );
};

export default CreateTodo;
