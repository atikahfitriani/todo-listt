import React, { useContext } from "react";
import { useState } from "react";
import { TodoContext } from "../context/todo-provider";

function TodoInput() {
    const {todos, setTodos, todoEdit} = useContext(TodoContext)
    const [input, setInput] = useState("");

    const handleClick = (e) => {
        e.preventDefault();

        let newTodo = {
            id: new Date(),
            value: input,
            status: false
        }
        // console.log(newTodo)
        setTodos([
            ...todos,
            newTodo
        ])
        setInput("")
    };

    return(
        
        <form className="flex flex-row justify-between">
        <input 
            className="p-2 w-[95%] border-solid border-black border-2" 
            type="text" 
            placeholder="Masukan todo"
            value={todoEdit.value ? todoEdit.value :input}
            onChange={(e) => setInput(e.target.value)} 
            />
        <button 
        className="p-2 border-solid border-black border-2 bg-blue-200"
        onClick={handleClick}
        >Add</button>
      </form>
    );
}

export default TodoInput
