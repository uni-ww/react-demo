import React, {Component} from 'react';


class OnePage extends Component{
    constructor(){
        super();
        this.state = {
            txt:"onepage"
        }
    }
    render(){
        return (
            <div>this is {this.state.txt}</div>
        )
    }
}
export default OnePage;