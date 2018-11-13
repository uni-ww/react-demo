import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Grandson extends Component{
    static contextTypes = {
        color:PropTypes.string
    }
    render(){
        // console.log(this.context)
        return(
            <h2 style={{color:this.context.color}}>爷爷告诉我他是红色</h2>
        )
    }
}
export default Grandson;