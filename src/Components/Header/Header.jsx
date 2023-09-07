// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav>

            <div className="logo">
                <h6>e-shop</h6>
            </div>
            <div className="header">
                <a href="">home</a>
                <a href="">about</a>
                <a href="">shop</a>
                <a href="">contact</a>
            </div>
            
        </nav>
    );
};

export default Header;