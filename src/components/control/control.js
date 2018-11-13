import React , {Component} from 'react';
import './control.css';
// 受控组件
class Control extends Component{
    constructor(){
        super();
        this.state = {
            nick:'',
            count:0,
            sex:0
        }
    }
    render(){
        return(
            <form onSubmit={this.submitFn}>
                <br/>
                <label>
                    男 <input type="radio" name="sex" value="0" checked={this.state.sex === 0} onChange={this.changeFn}/>
                </label>
                <br/>
                <label>
                    女 <input type="radio" name="sex" value="1" checked={this.state.sex === 1} onChange={this.changeFn}/>
                </label>
                <br/>
                <input type="text" name="nick" value={this.state.nick} onChange={this.changeFn}/>
                <br/>
                <input type="number" name="count" value={this.state.count}  onChange={this.changeFn}/>
                <br/>
                <input type="button" value="提交" onClick={this.submitFn} />
            </form>
        )
    }
    submitFn = e => {
        console.log(this.state)
        e.preventDefault();
    }
    changeFn = e => {
        let tag = e.currentTarget,
            name = tag.name;
        let value = tag.type === 'radio' ? Number(tag.value) : tag.value;
        this.setState({
            [name]:value
        })
    }
}
export default Control;