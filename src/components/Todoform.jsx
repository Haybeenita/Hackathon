import React, { useState } from "react";
import axios from "axios";

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
        completed:false
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="bg-white/50 w-[30rem] h-[25rem] m-auto rounded-lg mt-[10rem]">
      <h1 className="flex justify-center mt-[1rem] pt-[2rem] mb-[1rem] text-black font-bold text-2xl">
        TO DO LIST
      </h1>

      <div className="text-gray-300 mb-[0.3rem] flex flex-col mt-[4rem] w-full justify-center">
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
      <div className="flex justify-center items-center">
        <button
          className="mt-[1rem] border p-[0.2rem] rounded-lg hover:bg-orange-600 cursor-pointer w-[7rem] text-white bg-black"
          onClick={addTask}
        >
          ADD TODO
        </button>
      </div>
    </div>
  );
};

export default Todoform;