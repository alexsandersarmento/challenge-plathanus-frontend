export default function moveScrollTo() {

    if (window.pageYOffset < 400) {
        document.getElementsByClassName('scroll-button')[0].style.opacity = 0;
        document.getElementsByTagName('header')[0].style.background = '#000';
        document.getElementsByClassName('navigation')[0].children[0].children[1].classList.remove('selected');
        document.getElementsByClassName('navigation')[0].children[1].children[1].classList.add('selected');
    } else {
        document.getElementsByClassName('navigation')[0].children[0].children[1].classList.add('selected');
        document.getElementsByClassName('navigation')[0].children[1].children[1].classList.remove('selected');
        document.getElementsByTagName('header')[0].style.background = 'none';
        document.getElementsByClassName('scroll-button')[0].style.opacity = 0.8;
    }

};