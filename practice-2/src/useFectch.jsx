import {useState,useEffect} from "react";


export default function useFetch(url){
    const[state,setState] = useState({data:null , loading:true})
    useEffect(() => {
        fetch(url).then(x=>x.text()).then(y => setState({data:y ,loading:false})).catch(e=>console.log(e));
        return () => {
        }
    }, [url,setState])

    return state;
}