import React from 'react';

const NavbarItem = ({name, url}) => {
    return (
        <div className="nav-item">
            <li>
                <a className="nav-link" href={url}>{name}</a>
            </li>
        </div>
    );
}

export default NavbarItem
