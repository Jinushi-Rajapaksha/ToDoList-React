import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import "./css/Todo.css";

let count = 0;
const Todo = () => {

  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);
  
  const add = () =>{
      setTodos([...todos,{no:count++,text:inputRef.current.value,display:''}]);
      inputRef.current.value = ''; 
  }

  useEffect(()=>{
    console.log(todos);
  },[todos])
    
  return (
    <div className="todo">
      <div className="todoheader">To-do List</div>

        <div className="Todo-add">
          <input ref={inputRef} type="text" placeholder="Add your task" className="Todo-input" />
            <div  onClick={()=>{add()}} className="todo-add-btn">ADD</div>
        </div>

      <div className="Todo-list"></div>
    </div>
  );
};

export default Todo;
