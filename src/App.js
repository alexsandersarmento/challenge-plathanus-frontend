import React, { useEffect } from 'react';

import Home from './pages/Home';
import WhatWeDo from './pages/WhatWeDo';

import './styles/global.css';
import './styles/home.css';

function App() {

  useEffect(() => {
    window.addEventListener('wheel', (e) => {
      if (window.pageYOffset > 400) {
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
  }, []);

  return (
    <div className="App">
      <Home />
      <WhatWeDo />
    </div>
  );
};

export default App;
