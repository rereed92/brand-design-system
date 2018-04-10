import React, { Component } from 'react';
import './App.scss';

import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Sidebar />
                <Main />
            </div>
        );
    }
}

export default App;