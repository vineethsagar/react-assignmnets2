import React,{useState,useEffect} from "react";
import './App.css';
import Form from "./Components/Form"
import TodoList from "./Components/TodoList"


function App() {
  const[inputText,setInputText] = useState("");
  const[todo,setToDo] = useState([]);
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(()=>{
    filterHandler();
  },[todo,status])


  const filterHandler = ()=>{
    switch(status){
      case 'completed':
        setFilteredTodos(todo.filter(item=>item.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todo.filter(item=>item.completed === false))
        break;
      default :setFilteredTodos(todo)
        break;
    }
  }

  
  return (
    <div className="App">
      <header className="App-header">
        <h1>TODO APP</h1>
        <Form inputText = {inputText} setInputText = {setInputText} todo = {todo} setToDo = {setToDo}
          setStatus = {setStatus}/>
        <TodoList todo = {todo} setToDo = {setToDo} filteredTodos={filteredTodos}/>
      </header>
    </div>
  );
}

export default App;
