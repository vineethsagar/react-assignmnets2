import { Link } from "react-router-dom";

export default function Home({history,location,match }){
    console.log(location);
    console.log(match);
    return(
        <>
        <div>
            Hello! This is  Home page  
        </div>
        <Link to="/page1"> Page1 </Link>
        <button onClick={()=>(
            history.push("/page2")
        )}>Go to page 2</button>
        </>
    )
}