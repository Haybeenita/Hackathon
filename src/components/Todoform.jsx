import { useState } from "react";
import axios from "axios";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Todoform = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (event) => {
    if (event.target.name === "name") {
      setName(event.target.value);
    } else if (event.target.name === "description") {
      setDescription(event.target.value);
    }
  };

  const addTask = () => {
    axios
      .post("http://49.13.2.10:4000/todos/", {
        name: name,
        description: description,
        completed: false,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <section className="pt-[10rem]">
    <div className="bg-[rgb(30,58,138)] max-w-[35rem] mx-auto p-4 rounded-md">
      <div className="p-4">
        <Link to="/haybee" className="flex items-center gap-2">
          <IoMdArrowRoundBack className="w-4 h-4" fill="#000" />
        <p className="text-black font-semibold text-lg">View Todos</p>
        </Link>
      </div>
      <h1 className="flex justify-center mt-[0.5rem] mb-[0.5rem] text-black font-bold text-2xl">
        TO DO LIST
      </h1>

      <div className="text-gray-300 mb-[0.3rem] flex flex-col mt-[3rem] w-full justify-center">
        <input
          className="mb-[2rem] h-[3rem] rounded-md m-auto w-[20rem] p-[1rem]"
          type="text"
          placeholder=" Enter name"
          name="name"
          value={name}
          onChange={handleChange}
        />

        <input
          className="h-[3rem] w-[20rem] mb-[2rem] rounded-md m-auto p-[1rem]"
          type="text"
          name="description"
          placeholder=" Enter task"
          value={description}
          onChange={handleChange}
        />
      </div>
      <Link to="/haybee">
      <div className="flex justify-center items-center pb-10">
        <button
          className="mt-[1rem] border p-[0.5rem] rounded-md hover:bg-orange-600 cursor-pointer w-[7rem] text-white bg-black"
          onClick={addTask}
        >
          ADD TODO
        </button>
      </div>
      </Link>
    </div>
    </section>
  );
};

export default Todoform;
