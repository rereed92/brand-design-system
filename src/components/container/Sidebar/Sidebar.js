import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import data from '../../../data/navigation.json';

import './Sidebar.scss';

const SubLinks = (props) => {
  return (
      <ul className="sidebar__sub-nav">
          {props.subLinks.map((link, i) => 
              <li key={i}><Link to={link.href}>{link.name}</Link></li>
          )}
      </ul>
  )
}

const Links = (props) => {
  return (
      <ul>
          {props.navigationLinks.map((link, i) => 
              <li key={i}>
                  <Link to={link.href}>{link.name}</Link>
                  {link.children.length > 0 ? <SubLinks subLinks={link.children} /> : null}
              </li>
          )}
      </ul>
  );
}

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="logo">
          <Link to="/">
            <img src="https://static.andigital.com/new-logos/ANDigital_LOGO_LONG_RGB_ON_WHITE.png" alt="brand logo" className="img img--fluid" />
          </Link>
        </div>
        <nav className="sidebar__links">
            <Links navigationLinks={data} />
        </nav>
      </div>
    );
  }
}

export default Sidebar;
