import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, editTodo, removeTodo } from "./config/redux/reducers/todoslice";

function App() {
  //useRef
  const todoVal = useRef();

  //useDispatch
  const dispatch = useDispatch();

  //useSlector
  const selector = useSelector((state) => state.todos.todo);
  console.log(selector);

  const addTodoInRedux = (e) => {
    e.preventDefault();
    console.log("todo value", todoVal.current.value);
    dispatch(
      addTodo({
        title: todoVal.current.value,
      })
    );
    todoVal.current.value = "";
  };


const removeTodoFromRedux = (index) =>{
  console.log('delete', index);
  dispatch(removeTodo({
    index
  }))
  
}


const EditTodoFromRedux = (index) =>{
  console.log('edit', index);
  dispatch(editTodo({
    index
  }))
  
}

  return (
    <div className="m-10">
      <h1 className="text-center text-4xl font-semibold">Todo App</h1>
      <form>
        <div className="input-group flex mb-3 mt-3 border border-black border-opacity-25 rounded">
          <input
            ref={todoVal}
            required
            type="text"
            className="form-control w-full p-4"
            placeholder="Enter Todo"
            aria-label="Todo"
            aria-describedby="basic-addon1"
          />
          <span className="input-group-text" id="basic-addon1">
            <button
              type="submit"
              onClick={addTodoInRedux}
              className="btn btn-light"
            >
              Add
            </button>
          </span>
        </div>
      </form>


      {selector.length > 0 ? (
        selector.map((item , index) => {
          return (
            <div key={item.id} className="">
              <div >
                <li className="text-3xl">
                  {item.title}
                  <button onClick={() => EditTodoFromRedux(index)} className="btn btn-success mx-2 btn-sm">Edit</button>
                  <button onClick={() => removeTodoFromRedux(index)} className="btn btn-error btn-sm">Delete</button>
                </li>
              </div>
            </div >
          );
        })
      ) : (
        <h1 className="text-red-600 text-center text-2xl font-semibold mt-10">No Todo's Found..</h1>
      )}

    </div>
  );
}

export default App;
