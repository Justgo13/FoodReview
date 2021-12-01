import React, { Component } from 'react';
import NavbarList from './NavBarList.js';
import './NavBar.css';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="index.html">
                    <i className="fas fa-utensils nav-icon"></i>
                    Food Review
                </a>
                <NavbarList></NavbarList>
            </nav>
        );
    }
}

export default Navbar;
