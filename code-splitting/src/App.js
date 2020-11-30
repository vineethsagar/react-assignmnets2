import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react"

function App() {
  const [count,setCount] = useState(1);
  const [trivia,setTrivia] = useState("");
  
  useEffect(() => {
    console.log("useEffect")
    fetch(`http://numbersapi.com/${count}/trivia`).then((data)=>data.text()).then((text)=>setTrivia(text)).catch((e)=>console.log(e));
    console.log("data :",trivia);
  }, [count,setTrivia])

  return (
    <div className="App">
      <button onClick={()=> setCount(count+1)}>Dynamic Import</button>
      <h3>{trivia}</h3>
    </div>
  );
}

export default App;
