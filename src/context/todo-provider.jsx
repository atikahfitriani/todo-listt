import { useState } from "react";
import { createContext } from "react";

export const TodoContext = createContext ()

function TodoProvider ({children}){
    const [todos, setTodos] = useState ([
        {id: 1, value: "belajar todo", status: false},
        {id: 2, value: "belajar react", status: false},
        {id: 3, value: "belajar context", status: false},
    ])
    const [todoEdit, setTodoEdit] = useState({})

    return (
        <TodoContext.Provider value={{todos, setTodos, todoEdit, setTodoEdit}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider