import React, { Component } from 'react'
import NewComponent from "./CounterHOC"
export class ButtonCounter extends Component {
    render() {
        return (
        <button 
        onClick={this.props.incrementCount}>
            Clicked 
            {this.props.count} times
            {this.props.name}
            </button>
        )
    }
}

export default NewComponent(ButtonCounter,2)
