import React, { useContext } from "react";
import { TodoContext } from "../context/todo-provider";

function TodoList() {
  const {todos, setTodos, setDelete,setTodoEdit} = useContext(TodoContext)

  const handleStatus = (index) => {
    let cloneTodos = [...todos];
    cloneTodos[index].status = !cloneTodos[index].status;

    setTodos([...cloneTodos]);
  };

  const handleEdit = (todo) => {
    setTodoEdit(todo)
  };

  const deleteTodo = (id) => {
    console.log(id);
    let newTodos = todos.filter(item => item.id != id)
    setTodos(newTodos)
  }

    return(
        <div>
          {todos.map((todo, index) => (
                  <div type="checkbox" key={todo.id}className="flex flex-row justify-between">
                  <span 
                  onClick={() => handleStatus(index)} 
                  className={todo.status ? "line-through" : "" }>
                    {todo.value}
                    </span>
                  <div>
                  <button onClick={() => handleEdit(todo)}>📝</button>
                  </div>
                  <div>
        {todos.map((item) => (
          <div key={item.id}>
            <span>{item.todo}</span>
            <button onClick={() => deleteTodo(item.id)}>🚮</button>
          </div>
        ))}

      </div>
                 </div>
          ))}
    </div>
    );
}

export default TodoList