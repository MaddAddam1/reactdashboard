import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Dashboard from './Dashboard/Dashboard'
import Users from './Users/Users'
import List from './Users/List'

ReactDOM.render(<Dashboard />, document.getElementById('root'));
registerServiceWorker();
