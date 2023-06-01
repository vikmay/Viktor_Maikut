const BURGER_MENU = document.querySelector('.burger_menu');
const MOBILE_MENU = document.querySelector('.mobile__menu');
const HEADER = document.querySelector('header');
const MOBILE_MENU_LINKS = document.querySelectorAll('.mobile__menu a');

const switchMobileMenu = () => {
  BURGER_MENU.classList.toggle('active');
  MOBILE_MENU.classList.toggle('active');
  HEADER.classList.toggle('active');
};

BURGER_MENU.addEventListener('click', () => {
  switchMobileMenu();
})

MOBILE_MENU_LINKS.forEach((link) => {
  link.addEventListener('click', () => {
    switchMobileMenu();
  })
})

// showelement on scroll
document.addEventListener('scroll', () => {
  const ELEMENT = document.querySelector('.scroll-up');
  // display scroll up button after 100px
  if (window.scrollY > 20) {
    ELEMENT.classList.add('show');
  }else{
    ELEMENT.classList.remove('show');
  }
})