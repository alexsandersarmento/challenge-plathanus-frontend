import React from 'react';

import '../styles/header.css';

import logo from '../images/logo.png';
import searchIcon from '../images/search-icon.png';

function Header() {
    return (
        <header>
            <div className="navigation">
                <div className="nav-option">
                    <p>Home</p>
                    <div className="border selected"></div>
                </div>

                <div className="nav-option">
                    <p>What we do?</p>
                    <div className="border"></div>
                </div>

                <div className="nav-option">
                    <p>Testimonial</p>
                    <div className="border"></div>
                </div>

                <div className="nav-option">
                    <p>Contact Us</p>
                    <div className="border"></div>
                </div>
            </div>

            <div className="logo">
                <img src={logo} />
            </div>

            <div className="search">
                <input className="input-search" placeholder="Search..." type="text" />
                <button className="button-search" type="submit">
                    <img className="icon-search" src={searchIcon} />
                </button>

            </div>
        </header>
    )
}

export default Header;