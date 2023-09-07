// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Header.css';
import logo from '../../../public/images/Logo.svg';

const Header = () => {
    return (
        <nav>

            <div className="logo">
                <img src={logo}></img>
            </div>
            <div className="header">
                <a href="/home">home</a>
                <a href="/about">about</a>
                <a href="/shop">shop</a>
                <a href="/contact">contact</a>
            </div>
            
        </nav>
    );
};

export default Header;