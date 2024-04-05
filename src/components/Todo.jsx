// import axios from "axios";
// import { useEffect, useState } from "react";

// const Todo = () => {
//   const [todo, setTodo] = useState([]);
//   const [newTask, setNewTask] = useState("");

//   useEffect(() => {}, []);

//   const getTodo = () => {
//     axios.get("http://49.13.2.10:4000/todos").then((response) => {
//       console.log(response.data.data);
//       setTodo(response.data.data);
//     });
//   };

//   const handleChange = (event) => {
//     setNewTask(event.target.value);
//   };

//   const addTask = () => {
//     if (newTask.trim() !== "") {
//       setTasks((prevTasks) => [...prevTasks, newTask]);
//       setNewTask("");
//     }
//   };

  
//   const deleteTask = (index) => {
//     const updatedTasks = tasks.filter((_, i) => i !== index);
//     setTasks(updatedTasks);
//   };

  
    

// return (
    // <div className="bg-blue-900 w-[30rem] h-[20rem] flex flex-col items-center ml-[30rem] rounded-2xl">
    //   <h1 className="flex justify-center mt-[1rem] mb-[1rem] text-white">TO DO LIST</h1>

    //   <div className=" ml-[1rem] text-gray-300 mb-[0.3rem]">
    //     <input
    //     className="h-[2rem] w-[15rem]"
    //       type="text"
    //       placeholder="  Enter task..."
    //       value={newTask}
    //       onChange={handleChange}
    //     />
    //     <button className="ml-[1rem] border p-[0.2rem] rounded-xl hover:bg-orange-600 cursor-pointer w-[6rem]" onClick={addTask}>
    //       ADD TODO
    //     </button>
    //   </div>

    //   <ol className="list-disc">
    //     {tasks.map((todo, id) => (
    //       <li key={id} className="mb-[1rem]">
    //         <span className="font-normal text-base text-white">{todo}</span>
    //         <button className="ml-[1.5rem] border p-[0.2rem] rounded-xl hover:bg-orange-600 cursor-pointer text-white w-[5rem]" onClick={() => deleteTask(id)}>
    //           Delete
    //         </button>
            // <span>NAME: {todo.name}</span>
            // <span>DESCRIPTION: {todo.description}</span>
            // <span>Status : {todo.completed}</span>
    //       </li>
    //     ))}
    //   </ol>
    //   <div>
    //     <p className="text-white">Value: {newTask}</p>
    //     <p className="text-white">Count :{newTask.length}</p>
    //   </div>
    //   )
//     }








   
 

// export default Todo;



import { useState, useEffect } from 'react';
import axios from 'axios'; // Don't forget to import Axios

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    
  }, []);

  const getTodo = () => {
    axios
      .get('http://49.13.2.10:4000/todos')
      .then((response) => {
        console.log(response.data.data);
        setTasks(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching todo:', error);
      });
  };

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((_, i) => i !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="bg-blue-900 w-[30rem] h-[20rem] flex flex-col items-center ml-[30rem] rounded-2xl">
      <h1 className="flex justify-center mt-[1rem] mb-[1rem] text-white">TO DO LIST</h1>
      <div className="ml-[1rem] text-gray-300 mb-[0.3rem]">
        <input
          className="h-[2rem] w-[15rem]"
          type="text"
          placeholder="  Enter task..."
          value={newTask}
          onChange={getTodo}
        />
        <button className="ml-[1rem] border p-[0.2rem] rounded-xl hover:bg-orange-600 cursor-pointer w-[6rem]" onClick={addTask}>
          ADD TODO
        </button>
      </div>
      <ol className="list-disc">
        {tasks.map((todo, id) => (
          <li key={id} className="mb-[1rem]">
            <span className="font-normal text-base text-white">{todo}</span>
            <span>NAME: {todo.name}</span>
            <span>DESCRIPTION: {todo.description}</span>
            <span>Status : {todo.completed}</span>
            <button className="ml-[1.5rem] border p-[0.2rem] rounded-xl hover:bg-orange-600 cursor-pointer text-white w-[5rem]" onClick={() => deleteTask(id)}>
              Delete
            </button>
          </li>
        ))}
      </ol>
      <div>
       
      </div>
    </div>
  );
};

export default Todo;


