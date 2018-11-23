import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

// import logo from './logo.svg';
import './App.css';
import Header from './layouts/header/header';
import Index from './pages/index/index';
// import Control from './components/control/control';
// import Uncontrol from "./components/uncontrol/uncontrol";

import TwoPage from './pages/twopage/twopage';
import OnePage from './pages/onepage/onepage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      test: 'test',
      count:0,
      title:'物语'
    }
    this.list = [
      {
        id: 1,
        name: 'list1'
      },
      {
        id: 2,
        name: 'list2'
      },
      {
        id: 3,
        name: 'list3'
      }
    ]
    this.title = '物语';
    // this.alertListDataFn = this.alertListDataFn.bind(this);
  }
  static childContextTypes = {
    color:PropTypes.string.isRequired
  }
  // 传递给孙子组件的数据
  getChildContext(){
    return {
      color:'red'
    }
  }
  render() {
    return (
      <div className="hhhh">
        <Header title={this.state.title} />
        
        
        
        <Router>
          <div>
              323
            <NavLink to="/onepage" activeClassName="curr" replace>goto onepage</NavLink>
            <br/>
            <Route path='/onepage' component={OnePage}></Route>
            <Link to='/twopage/2' replace>goto twopage</Link>
            <Route path='/twopage/:id' component={TwoPage}></Route>
            <br/>
            <Link to="/"  replace>go to index</Link>
            <Route path="/" exact component={Index}></Route>
            <br/>
            {/* <Index name="哈哈哈哈" {...this.list} key={'list'} refreshList={this.refreshList} refreshTitle={this.refreshTitle} />
            <p className="App-intro" style={{ color: 'red' }}>
              {this.state.test} <code>src/App.js</code> and save to reload.
            </p>
            {
              this.list.map(v => <p key={v.id}>{v.name}</p>)
            }
            <button onClick={this.alertListDataFn}>修改list值得按钮 {this.state.count}</button>
            <br/>
            <Control></Control>
            <br/>
            <Uncontrol></Uncontrol>
            <br/> */}
          </div>
        </Router>
      </div>
    );
  }
  refreshList = () => {
    if(this.state.count <= 0) return;
    let list = this.list.map(v => {
      v.name = 'list' + (v.name.split('list')[1]-1);
      return v;
    });
    this.setState({
      count:this.state.count-1
    })
    this.list = list;
  }
  refreshTitle = e => {
    let txt = e.currentTarget.getAttribute('data-txt');
    console.log(txt)
    this.title = txt;
    this.setState({
      title:txt
    })
  }
  alertListDataFn = () => {
    let list = this.list.map(v => {
      v.name = 'list' + (v.name.split('list')[1]-0+1);
      return v;
    });
    this.setState({
      count:this.state.count+1
    })
    this.list = list;
  }
}
export default App;
