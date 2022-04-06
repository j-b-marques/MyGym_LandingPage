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

//*************SCROLL REVEALL **********/
const allReveals = [
  'nav',
  '.header__lead',
  '.header__bottom',
  '.img__wrapper',
  '.img__wrapper2',
  '.join__us',
  '.flex__ct__modalidades',
  '.form__wrapper',
  '.footer__ct',
];

for (i = 0; i < allReveals.length; i++) {
  ScrollReveal().reveal(allReveals[i], {
    delay: 300,
    easing: 'ease-in',
    duration: 400,
  });
}
ScrollReveal().reveal('video', {
  rotate: {
    y: 180,
  },
  duration: 1200,
});
