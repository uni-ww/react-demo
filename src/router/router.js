import React from 'react';
// import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from '../App';

const AllRouter = function(){
    return (
        <Router>
            <Route path='/' component={App}></Route>
        </Router>
    )
}
export default AllRouter;