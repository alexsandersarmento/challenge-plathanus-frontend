export default function moveScrollTo() {
    window.onscroll = function () {
        "use strict";
        if (window.location == 'http://localhost:3000/') {
            if (window.pageYOffset > 50) {
                document.getElementsByClassName('scroll-button')[0].style.opacity = 0;
                document.getElementsByTagName('header')[0].style.background = '#000';
            } else {
                document.getElementsByTagName('header')[0].style.background = 'none';
                document.getElementsByClassName('scroll-button')[0].style.opacity = 0.8;
            }

            if (window.pageYOffset > 400) {
                document.getElementsByClassName('navigation')[0].children[0].children[1].classList.remove('selected');
                document.getElementsByClassName('navigation')[0].children[1].children[1].classList.add('selected');
            } else {
                document.getElementsByClassName('navigation')[0].children[0].children[1].classList.add('selected');
                document.getElementsByClassName('navigation')[0].children[1].children[1].classList.remove('selected');
            }
        }
    };

};
