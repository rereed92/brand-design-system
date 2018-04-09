import React, { Component } from 'react';
import './App.scss';

import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="col-10">
            <Main />
          </div>
        </div>
      </div>
    );
  }
}

export default App;