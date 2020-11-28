import React,{Component} from "react";

class Decrement extends Component{

    constructor(props){
        super(props);
        this.state= {
            property : 1
        };
        this.handleClick = this.handleClick.bind(this);
    }

    //called before component is rendered. initialize values from props
 /*    static  getDerivedStateFromProps(props,state){
        // console.log(props)
        //console.log(state)

    
        return {property: Number(props.value)}
    } */

    // Called to determine whether the change in props and state should trigger a re-render.
    shouldComponentUpdate(){
        console.log("Called to determine whether the change in props and state should trigger a re-render.")
        return true;
    }


    handleClick = ()=>{
            this.setState((previousState)=>{
            return {property : previousState.property -1};
        })
    }

    // called after component is rendered
    componentDidMount(){
        console.log("Called immediately after a component is mounted. Setting state here will trigger re-rendering")
    }

    
    componentDidUpdate(){
        console.log("Called immediately after updating occurs. Not called for the initial render.")
    }

    render(){
        return(
        <>
            <h1> Decrement : {this.state.property}</h1>
            <button onClick= {this.handleClick}>Decrement</button>
            {console.log("re-rendered  decrement")}
        </>
        )
    }
}
export default Decrement;