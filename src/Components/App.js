import React from 'react';
import Headers from './Header/Header';
class App extends React.Component {
    render() {
        return (
            <div>
                <Headers />
                <br/>
                {this.props.children}
            </div>
        );
    }
}
export default App;