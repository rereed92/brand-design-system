import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import data from '../../../data/navigation.json';

import './Sidebar.scss';

const Titles = (props) => {
    return (
        <ul className="sidebar__titles">
            {props.titles.map((title, i) =>
                <li key={i}>
                    <HashLink smooth to={props.titleUrl + title.hash}>{title.name}</HashLink>
                </li>
            )}
        </ul>
    )
}

const Pages = (props) => {
    return (
        <ul className="sidebar__pages">
            {props.pages.map((page, i) =>
                <li key={i}>
                    <Link to={page.url}>{page.name}</Link>
                    { page.children.length > 0 ? <Titles titles={page.children} titleUrl={page.url} /> : null }
                </li>
            )}
        </ul>
    );
}

const Sections = (props) => {
    return (
        <ul>
            {props.sections.map((section, i) =>
                <li key={i} className="sidebar__sections">
                    { section.url ? <Link to={section.url}>{section.name}</Link> : section.name }
                    { section.children.length > 0 ? <Pages pages={section.children} /> : null }
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
                <nav>
                    <Sections sections={data} />
                </nav>
            </div>
        );
    }
}

export default Sidebar;
