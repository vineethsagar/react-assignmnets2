import React, { Component } from 'react'
import NewComponent from "./CounterHOC" 
export class HoverCounter extends Component {
    render() {
        return (
            <div  onMouseOver={this.props.incrementCount}>
                Hovered {this.props.count} times
                {this.props.name}
            </div>
        )
    }
}

export default NewComponent(HoverCounter,1)
