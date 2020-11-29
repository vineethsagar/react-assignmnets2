import {useState} from "react";

export default function useCounterHook(initialValues){
    const[values,setValues] = useState(initialValues)

    return [
        values, ()=>{
            setValues( (currentState)=>({
                count1:currentState.count1+1,
                count2:currentState.count2-1
            }))
        }
    ]
}

