import { useState, useEffect } from "react";
import axios from "axios";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [searchtext, setSearchText] = useState("");
  // const [nameQuery, setNameQuery] = useState("");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {}, []);

  
  const getTodo = () => {
    axios
      .get("http://49.13.2.10:4000/todos")
      .then((response) => {
        setTodo(response.data.data);
      console.log(response.data.data);

      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const getTodoName = () => {
  //   axios
  //     .get(`http://49.13.2.10:4000/todos?name=${nameQuery}`)
  //     .then((response) => {
  //       setTodo(response.data.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const statusTicker = (id, user) => {
    axios
      .put(`http://49.13.2.10:4000/todos/${id}`, {
        ...user,
        completed: !user.completed,
      })
      .then(() => {
        setCompleted((prev) => !prev);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteTodo = (id) => {
    axios
      .delete(`http://49.13.2.10:4000/todos/${id}`)
      .then(() => {
        setTodo((prevTodo) => {
          const updatedTodo = prevTodo.filter((user) => user.id !== id);
          return updatedTodo;
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const handleSearch = (event) => {
    const searchtext = event.target.value.toLowerCase();
    setSearchText(searchtext);
  };

    

  // const handleGetName = () => {
  //   setNameQuery(searchtext);
  // };

  return (
    <>
      <div className="bg-black">
        <input
          className="m-[2rem] p-4  border-2 border-blue-900 h-[3rem]"
          type="text"
          placeholder="Search..."
          value={searchtext}
          onChange={handleSearch}
        />
      </div>
      <div className="flex flex-wrap w-full bg-white items-center">
        {todo
          .filter((item) => {
            return searchtext.toLowerCase() === ""
              ? true
              : item.name.toLowerCase().includes(searchtext);
          })
          .map((user) => (
            <div
              className="flex text-black font-medium m-4 p-[1rem] border-2 border-blue-900 flex-wrap w-[25rem] h-[12rem] flex-col"
              key={user.id}
            >
              <span className="mb-[2rem]">NAME: {user.name}</span>
              <span>DESCRIPTION: {user.description}</span>

              <div className="w-8 h-8 flex items-center rounded-full border-2 border-blue-900 mt-[2rem]">

              <svg
                
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-6 h-6 ${user.completed ?"text-black":"text-transparent"}`}
                onClick={()=>statusTicker(user.id,user)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>

              </div>


              <button
                className="mt-[7rem] border-2 border-blue-900 p-[0.2rem] rounded-xl hover:bg-orange-600 cursor-pointer text-black w-[5rem]"
                onClick={() => deleteTodo(user.id)}
              >
                Delete
              </button>
            </div>
          ))}
      </div>
      <div>GETTING DATA FROM API DB (GET Request)</div>
      <button
        onClick={getTodo}
        className="btn bg-orange-600 items-center justify-center m-7"
      >
        CLICK ME!
      </button>

      {/* <button
        className="mt-[3rem] border-2 border-blue-900 p-[0.2rem] rounded-xl hover:bg-orange-600 cursor-pointer text-white w-[6rem] h-[3rem]"
        onClick={handleGetName}
      >
        GET NAME
      </button> */}
    </>
  );
};

export default Todo;
