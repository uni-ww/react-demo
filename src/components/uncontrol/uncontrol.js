import React, {Component} from 'react';
// 非受控组件
class Uncontrol extends Component{
    constructor(){
        super();
        this.nickname = React.createRef();
        this.state = {

        }
    }
    render(){
        return (
            <form onSubmit={this.submitFn}>
                <input type="text" placeholder="nickname" ref={this.nickname}/>
                <br/>
                <input type="number" defaultValue={333} ref={input => this.age = input} />
                <input type="submit" value="提交" />
            </form>
        )
    }
    submitFn = e => {
        console.log(this.nickname.current.value)
        console.log(this.age.value)
        e.preventDefault();
    }
}
export default Uncontrol;