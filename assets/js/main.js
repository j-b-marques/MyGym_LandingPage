//* Toggle menu mobile
const burguerMenu = document.querySelector('.burguer__menu');
const navMobile = document.querySelector('.nav__menu__mobile');

burguerMenu.addEventListener('click', () => {
  navMobile.style.right = 0;
});

//*Fechar
const closeMenu = document.querySelector('.close__menu');
const closenavMobile = document.querySelector('.nav__menu__mobile');

closeMenu.addEventListener('click', () => {
  closenavMobile.style.right = '-150vw';
});

//*Default behaviour from submit button

const submitBtn = document.querySelector('.submit__btn');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault(); //* for demo purposes
});

//* SCROLL REVEAL
ScrollReveal().reveal('nav ', {
  delay: 600,
  easing: 'ease-in',
});
ScrollReveal().reveal('.header__lead', {
  delay: 300,
  distance: '200px',
  origin: 'left',
  duration: 600,
  easing: 'ease-in',
});
ScrollReveal().reveal('.header__bottom', {
  delay: 300,
  distance: '200px',
  origin: 'left',
  duration: 600,
  easing: 'ease-in',
});
//*****/
ScrollReveal().reveal('.img__wrapper', {
  delay: 300,
  duration: 600,
  easing: 'ease-in',
});
ScrollReveal().reveal('.img__wrapper2', {
  delay: 300,

  duration: 600,
  easing: 'ease-in',
});

//********/

ScrollReveal().reveal('.join__us', {
  delay: 600,
  easing: 'ease-in',
});
ScrollReveal().reveal('video', {
  rotate: {
    y: 180,
  },
  duration: 1200,
});

//*****/
ScrollReveal().reveal('.flex__ct__modalidades', {
  delay: 600,
  easing: 'ease-in',
});

ScrollReveal().reveal('.form__wrapper', {
  delay: 300,
  distance: '200px',
  origin: 'right',
  duration: 600,
  easing: 'ease-in',
});

//*****/
ScrollReveal().reveal('.footer__ct', {
  delay: 600,
  easing: 'ease-in',
});


//******************************** */

particlesJS("particles-js", {"particles":{"number":{"value":160,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;