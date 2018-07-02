import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './src/routes';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

const store = configureStore();
render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider> ,
    document.getElementById('app')
);

