import React from "react";

const ToDo = ({singleTodo,key ,setTodo,todos})=>{

    const deleteHandler = ()=>{
        setTodo(todos.filter(el=> el.id !== singleTodo.id))
    }
    const completeHandler = ()=>{
        setTodo(todos.map((item)=>{
            if(item.id === singleTodo.id){
                return{
                    ...item,
                    completed:!item.completed
                }
            }

            return item;
        })
        );
    };


    return(
        <div className="todo">
            <li className={`todo-item ${singleTodo.completed? "completed" : ""}`}>{singleTodo.text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash  "></i>
            </button>
        </div>

        )
}
export default  ToDo;