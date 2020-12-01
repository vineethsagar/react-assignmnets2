import React,{Component} from "react"



const NewComponent = (OriginalComponent,increment) =>{
    class HigherOrderComponent extends Component{
        constructor(props) {
            super(props)
            this.state={
                counter : 0
            }
            this.handleMouseOver = this.handleMouseOver.bind(this)
        }
        handleMouseOver = ()=>{
            this.setState((prevState)=>{
                return {counter : prevState.counter +increment}
            })
        }
        render(){
            return (
            <OriginalComponent 
                count={this.state.counter} 
                incrementCount = {this.handleMouseOver}
                {...this.props} 
            />)
        }
    }
    return HigherOrderComponent;
}

export default NewComponent;