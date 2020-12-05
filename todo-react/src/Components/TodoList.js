import React from"react";
import ToDo from "./ToDo";

const TodoList = ({todo,setToDo,filteredTodos}) =>{
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((singleTodo)=>{
                    return(<ToDo singleTodo={singleTodo} key={singleTodo.id} setTodo = {setToDo} todos= {todo}/>)
                })}
            </ul>
        </div>
    )
}
export default TodoList