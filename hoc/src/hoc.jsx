import React,{Component} from "react"



const NewComponent = (originalComponent) =>{
    class HigherOrderComponent extends Component{
        render(){
            return (<originalComponent/>)
        }
    }
    return HigherOrderComponent;
}

export default NewComponent;