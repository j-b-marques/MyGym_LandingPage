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
  closenavMobile.style.right = '-50%';
});
