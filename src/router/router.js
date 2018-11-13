import React from 'react';
// import ReactDom from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

import App from '../App';

const AllRouter = function(){
    return (
        <HashRouter>
            <Route path='/' component={App}></Route>
        </HashRouter>
    )
}
export default AllRouter;