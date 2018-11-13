import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import AllRouter from './router/router';

ReactDOM.render(<AllRouter />, document.getElementById('root'));
registerServiceWorker();
