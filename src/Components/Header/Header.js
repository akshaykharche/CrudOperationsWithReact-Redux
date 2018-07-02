import React from 'react';
import { Link, IndexLink ,activeStyle} from 'react-router';

 const Headers = () => {
    return (
        <div>
            <IndexLink activeStyle={{ color: 'red' }}  to='/'>Crud Operations With React</IndexLink>
            {' | '}
            <Link activeStyle={{ color: 'red' }} to='recordsWithReactRedux'>Crud Operations With React-Redux</Link>
        </div>
    )
}
export default Headers;

