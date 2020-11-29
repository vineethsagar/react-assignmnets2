
import './App.css';
import React,{Component} from "react";


class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      property : 0
    }
    this.handleClick= this.handleClick.bind(this);
  }

  // changing state
  handleClick(){
    this.setState((perviousState)=>{
      return {property: perviousState.property +1};
    })
  }

  componentDidMount(){
    console.log("Component Mounted : increment");
  }

  componentDidUpdate(){
    console.log("Component Updated :increment");
  }
  render(){
    return(
      <>
        <h1>Increment : {this.state.property}</h1>
        <button onClick={this.handleClick}>Change</button>
        {console.log("rendered : increment")}
        
      </>
    )
  }
}

export default App;
