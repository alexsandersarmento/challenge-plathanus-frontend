import React, { useEffect } from 'react';

import '../styles/header.css';

import logo from '../images/logo.png';
import searchIcon from '../images/search-icon.png';

import moveScrollTo from '../utilities/moveScrollTo';

function Header() {
    useEffect(() => {
        var links = document.querySelectorAll('.nav-option a[href^="#"]');

        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();

                const element = e.target;
                const href = element.getAttribute('href');
                const to = document.querySelector(href).offsetTop;

                moveScrollTo();

                window.scroll({
                    top: to,
                    behavior: 'smooth',
                });
            });
        });
    }, []);

    return (
        <header>
            <div className="navigation">
                <div className="nav-option">
                    <a href="#home">Home</a>
                    <div className="border selected"></div>
                </div>

                <div className="nav-option">
                    <a href="#what-we-do">What we do?</a>
                    <div className="border"></div>
                </div>

                <div className="nav-option">
                    <a href="" >Testimonial</a>
                    <div className="border"></div>
                </div>

                <div className="nav-option">
                    <a href="">Contact Us</a>
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
};

export default Header;