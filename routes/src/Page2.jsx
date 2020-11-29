import {useEffect,useState} from "react"

export default function Page2({match}){
    const [data,setData] = useState("");
    //console.log(match);
    useEffect(() => {
        fetch(`http://numbersapi.com/${match.params.id}/trivia`).then((x)=>x.text()).then(x=>setData(x))
        return () => {
    }}, [match.params.id])

    return(
        <>
        <div>
            Hello! This is page 2 Post number {match.params.id}
        </div>
        <h3>{data}</h3>
        </>
    )
}