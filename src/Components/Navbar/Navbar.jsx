import React from 'react';
import Toggle from './Toggle';
import './Navbar.css';

const Navbar = (props) => {
    return (
        <div className="navbar-container">
            <nav className="navbar">
                <h1 className="navbar-header">Where in the world?</h1>
                <div>
                    <Toggle updateDarkMode={props.updateDarkMode} isDarkMode={props.isDarkMode} />
                </div>
            </nav>
        </div>
    )
}

export default Navbar