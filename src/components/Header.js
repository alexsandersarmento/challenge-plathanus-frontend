import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsGearFill } from 'react-icons/bs';

import '../styles/header.css';

import logo from '../images/logo.png';
import searchIcon from '../images/search-icon.png';

function Header() {

    useEffect(() => {
        var links = document.querySelectorAll('.nav-option a[href^="#"]');

        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();

                const element = e.target;
                const href = element.getAttribute('href');
                const to = document.querySelector(href).offsetTop;

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
                    <a href="#home" id="teste">Home</a>
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

            <Link to="/background-change" className="config">
                <BsGearFill />
            </Link>

        </header>
    )
};

export default Header;