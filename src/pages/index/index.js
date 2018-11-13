import React, { Component } from "react";
import './index.css';
import Grandson from '../../components/grandson/grandson';


class Index extends Component{
    constructor(props){
        let list = [];
        for(let key in props){
            if(!isNaN(Number(key))){
                list.push(props[key]);
            }
        }
        super();
        this.state = {
            title:'this is index page',
            name:props.name
        }
        this.list = list;
    }
    render(){
        return(
            <div>
                <br/>
                <br/>
                <Grandson></Grandson>
                <br/>
                <ul>
                    {
                        this.list.map(v => <li key={v.id}>{v.name}</li>)
                    }
                </ul>
                <div className="idx-t">index内容</div>
                <h2>{this.state.title}</h2>
                <h3>{this.state.name}</h3>
                <div onClick={this.props.refreshList}>点击改变父组件内容</div>
                <div onClick={this.props.refreshTitle} data-txt="改物语">点击改变兄弟组件内容</div>
                {/* 跨组件通信  未完成  */}
                {/* eg */}
                {/* Box.childContextType = {
                    refresh:React.PropTypes.any
                } */}
                {/* <div onClick={this.context.refreshText}>点击 跨级组件通信</div> */}
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        )
    }
}
export default Index;