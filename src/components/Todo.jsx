import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaHandPointUp } from "react-icons/fa";

const Todo = () => {
  
    const gradientStyle = {
      backgroundImage: 'linear-gradient(to right, #2563eb, #f97316)',
      WebkitBackgroundClip: 'text',
      color: 'transparent'
    };
  
  const [todo, setTodo] = useState([]);
  const [searchtext, setSearchText] = useState("");
  const [setCompleted] = useState(false);

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

  return (
    <section className="max-w-[120rem] p-8 mx-auto bg-white">
      <div className="">
        <input
          className="m-[2rem] w-[15rem] rounded-md p-4 border-2 border-blue-900 h-[3rem]"
          type="text"
          placeholder="Search..."
          value={searchtext}
          onChange={handleSearch}
        />
      </div>
      <div className="flex flex-wrap w-full bg-white items-center border-2 border-black/30">
        {todo
          .filter((item) => {
            return searchtext.toLowerCase() === ""
              ? true
              : item.name.toLowerCase().includes(searchtext);
          })
          .map((user) => (
            <div
              className="flex flex-col text-black font-medium m-8 p-4 border-2 rounded-md border-blue-900 flex-wrap w-[30rem] h-[12rem]"
              key={user.id}
            >
              <span className="mb-[2rem]">NAME: {user.name}</span>
              <span className="mb-[2rem]">DESCRIPTION: {user.description}</span>
              <div className="flex justify-between ">
              <div className="w-8 h-8 flex items-center rounded-full border-2 border-blue-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-6 h-6 ${
                    user.completed ? "text-black" : "text-transparent"
                  }`}
                  onClick={() => statusTicker(user.id, user)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </div>
              <div  className=" border-2 border-blue-900 rounded-md text-center hover:bg-orange-600 cursor-pointer text-black w-[5rem] h-8">
              <button         
                onClick={() => deleteTodo(user.id)}
              >
                Delete
              </button>

              </div>

              </div>

            </div>
          ))}
      </div>
      <div className="flex justify-between">
        <button
          onClick={getTodo}
          className="btn bg-orange-600 items-center justify-center m-7 text-black rounded-md"
        >
          CLICK ME!
        </button>
        <Link to="/">
        <button className="btn bg-orange-600 items-center justify-center m-7 text-black rounded-md">
          Add Todo
        </button>
        </Link>
      </div>
      <div className="flex items-center">
        <p className=" font-medium text-md" style={gradientStyle}>Click the button above, to view all Todos</p>
        <FaHandPointUp className="w-6 h-6" fill="#c68642"/>
      </div>
    </section>
  );
};

export default Todo;
