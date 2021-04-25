import './index.html';
import './scss/main.scss';
import './js/Slider';
import './js/device';
import './js/Options';
import './js/slide-toggle';

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector(':root').style.setProperty('--vh', window.innerHeight/100 + 'px');
})

window.addEventListener('resize', () => { 
    document.querySelector(':root').style.setProperty('--vh', window.innerHeight/100 + 'px');
  })