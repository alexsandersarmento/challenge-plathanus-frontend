import React, { useEffect } from 'react';
import { FiArrowDown } from 'react-icons/fi';
import Header from './components/Header';

import service01 from './images/service-01.jpg';
import service02 from './images/service-02.jpg';
import service03 from './images/service-03.jpg';

import './styles/global.css';
import './styles/home.css';

function App() {

  useEffect(() => {
    window.addEventListener('wheel', (e) => {
      if (window.pageYOffset > 400) {
        console.log(document.getElementsByClassName('navigation')[0].children[0].children[1]);
        document.getElementsByClassName('navigation')[0].children[0].children[1].classList.remove('selected');
        document.getElementsByClassName('navigation')[0].children[1].children[1].classList.add('selected');
      } else {
        document.getElementsByClassName('navigation')[0].children[0].children[1].classList.add('selected');
        document.getElementsByClassName('navigation')[0].children[1].children[1].classList.remove('selected');
      }

      if (e.deltaY > 0) {
        document.getElementsByClassName('scroll-button')[0].style.opacity = 0;
        document.getElementsByTagName('header')[0].style.background = '#000';
      } else {
        document.getElementsByTagName('header')[0].style.background = 'none';
        document.getElementsByClassName('scroll-button')[0].style.opacity = 0.8;
      }
    })

  }, [])

  return (
    <div className="App" onMouseDown={() => console.log(document.getElementsByTagName('header')[0].style.display)} >
      <div className="container">
        <Header />

        <div className="section">
          <div className="work">
            <h2>Art is Eternal Happiness</h2>

            <button>WORK WITH US</button>
          </div>

          <button className="scroll-button">
            Scroll down
            <FiArrowDown />
          </button>
        </div>
      </div>

      <div className="what-we-do">
        <div className="title">
          <h2>WHAT WE DO</h2>

          <hr />

          <p>Lorem ipsum dolor sit amet. Proin gravida nibh vel velit auctor.</p>

        </div>

        <div className="services">
          <div className="service">
            <img className="image-service" src={service01} />

            <h2>Lorem Ipsum</h2>

            <p className="description-service">Sed in turpis eget sapien pharetra consectetur. Vestibulum sit amet est ipsum. Vivamus non condimentum erat, quis aliquet tellus.</p>

            <button className="learn-more">Learn more</button>
          </div>

          <div className="service">
            <img className="image-service" src={service02} />

            <h2>Lorem Ipsum</h2>

            <p className="description-service">Sed in turpis eget sapien pharetra consectetur. Vestibulum sit amet est ipsum. Vivamus non condimentum erat, quis aliquet tellus.</p>

            <button className="learn-more">Learn more</button>
          </div>

          <div className="service">
            <img className="image-service" src={service03} />

            <h2>Lorem Ipsum</h2>

            <p className="description-service">Sed in turpis eget sapien pharetra consectetur. Vestibulum sit amet est ipsum. Vivamus non condimentum erat, quis aliquet tellus.</p>

            <button className="learn-more">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
