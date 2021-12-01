import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import NavBarItem from "./NavBarItem.js";

const LOGIN = "Login";
const SIGN_UP = "Sign Up";

class NavbarList extends Component {
    state = {
        navItems: [
            {
                name: LOGIN,
                url: "#"
            },
            {
                name: SIGN_UP,
                url: "#"
            }
        ]
    }

    getNavEntry = (navEntryName) => {
        let navItemIndex = this.state.navItems.findIndex(navItem => navItem.name === navEntryName);
        let navItem = this.state.navItems[navItemIndex];
        return navItem;
    }
    
    render() {
        return (
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <NavBarItem {...this.getNavEntry(LOGIN)}></NavBarItem>
                    <NavBarItem {...this.getNavEntry(SIGN_UP)}></NavBarItem>
                </ul>
            </div>
        );
    }
}

export default NavbarList;
