import React, { Component } from 'react';

import './Sidebar.scss';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="logo">
          <img src="https://static.andigital.com/new-logos/ANDigital_LOGO_LONG_RGB_ON_WHITE.png" alt="brand logo" className="img img--fluid" />
        </div>
      </div>
    );
  }
}

export default Sidebar;
