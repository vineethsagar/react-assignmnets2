import React,{useState,useEffect} from "react"
import FuncExample from "./FuncExample"
import InputExample from "./InputExample"


function FuncComponent(){
    const [visible, setVisible] = useState(true);
    const [text,setText] = useState("type in input box");

    const handleChange = (event)=>{
        setText(event.target.value);
        
    }
    useEffect(()=>{
        document.title=text;
    })
    return (
        <>
            <h3>Hi I'm functional component</h3>
            
            {visible?<FuncExample data= "Click Hide to make me invisible"/> : <FuncExample data="Click Show to make me visible"/>}
            <button onClick={()=>setVisible(!visible)}>{visible?"Hide":"Show"}</button>

            <InputExample data={text} onChange= {handleChange} />
        </>
    )
}
export default FuncComponent;