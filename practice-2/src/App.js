import logo from './logo.svg';
import './App.css';
import React,{useEffect, useState} from "react"

import useCounterHook from "./useCounterHook"
import useFetch from './useFectch';

function App() {

  //const[values, handleClick] = useCounterHook({count1:0 ,count2:0});


/*   useEffect(() => {
    const onMouseMove = (e)=>{
      console.log(e);
    }
    window.addEventListener("mousemove",onMouseMove)

    return ()=>{
      console.log("use effect clean up")
      window.removeEventListener("mousemove",onMouseMove);
    }
  },[]) */
  //localStorage.setItem("count",0);
  const [count,setCount] = useState(0);
  const {data,loading} = useFetch(`http://numbersapi.com/${count}/trivia`);

/*   useEffect(()=>{
    localStorage.setItem("count",JSON.stringify(count))
  },[count]); */

  return (
    <div className="App">
      {loading ? "Loading...": data}
      <button onClick={()=>setCount(count=>count+15 )}>change</button>
    </div>
  );
}

export default App;
