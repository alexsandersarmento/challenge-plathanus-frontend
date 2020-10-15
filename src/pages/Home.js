import React, { useEffect } from 'react';
import { FiArrowDown } from 'react-icons/fi';

import Header from '../components/Header';
import Button from '../components/Button';

import '../styles/home.css';

import moveScrollTo from '../utilities/moveScrollTo';

function Home() {
    useEffect(() => {
        document.querySelector('.scroll-button').addEventListener('click', () => {
        
            moveScrollTo()

            window.scroll({
                top: 900,
                behavior: 'smooth',
            });
        });
    }, []);

    return (
        <div id="home">
            <Header />

            <div className="section">
                <div className="work">
                    <h2>Art is Eternal Happiness</h2>

                    <Button marginTop="50px" padding="20px" fontSize="21pt" text="WORK WITH US" />
                </div>

                <button className="scroll-button">
                    Scroll down
                    <FiArrowDown />
                </button>
            </div>
        </div>
    );
};

export default Home;
