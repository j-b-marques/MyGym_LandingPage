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
  duration: 2200,
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
