import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store.es';
import routes from './route'

ReactDOM.render(routes, document.getElementById('root'));
