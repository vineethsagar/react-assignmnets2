import  React,{ Component } from 'react';
import './App.css';
import Charts from "./Components/Charts"
import Cards from "./Components/Cards"
import CountryPick from "./Components/CountryPick"
import {fetchData} from "./api"


class App extends Component{
  /* constructor(props){
    super(props)
    this.state={
      data:{}
    }
  } */
  state= {
    data:{},
    country:''
  }

  async componentDidMount(){
    const data = await fetchData();
    this.setState({data:data})  
    // console.log(data);
  }
handleCountryChange= async(country)=>{
  const data = await fetchData(country);
  console.log(data)
  this.setState({data:data,country:country})  
}

  render(){
    const {data,country} = this.state;
    return(
      <div>
        <h1 className="title">COVID-19 TRACKER</h1>
        <Cards data = {data}/>
        <CountryPick handleCountryChange={this.handleCountryChange}/>
        <Charts data={data} country = {country}/>
        
      </div>
    );
  }
}


export default App;
