import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './Components/App';
import ShowRecordsWithReact from './Components/CrudOperationsWithReact/ShowRecordsWithReact';
import ShowRecordsWithReactRedux from './Components/CrudOperationsWithReactRedux/ShowRecordsWithReactRedux';

export default (
    <Route path='/' component={App}>
        <IndexRoute component={ShowRecordsWithReact} /> 
         <Route path='recordsWithReactRedux' component={ShowRecordsWithReactRedux} />  
    </Route>
);