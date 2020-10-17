import React, { useEffect, useState } from 'react';
import { FiArrowDown } from 'react-icons/fi';

import Header from '../components/Header';
import Button from '../components/Button';

import backgroundImg from '../images/background.jpg'

import '../styles/home.css';

function Home(props) {
    const [background, setBackground] = useState(backgroundImg);
    useEffect(() => {
        if (props.imageBackground) {
            setBackground(props.imageBackground.image)
        }

        document.querySelector('.scroll-button').addEventListener('click', () => {
            window.scroll({
                top: 900,
                behavior: 'smooth',
            });
        });
    }, []);

    return (
        <div id="home" style={{
            background: `url(${background}) no-repeat center center / cover`,
        }}>
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
        </div >
    );
};

export default Home;
