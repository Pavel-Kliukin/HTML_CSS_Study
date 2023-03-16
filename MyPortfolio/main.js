const backToTopButton = document.querySelector('#backToTop')
const header = document.querySelector('header')
const hamburgerMenuButton = document.querySelector('.mobile')
const nav = document.querySelector('nav ul');
const menuItems = document.querySelectorAll('nav ul li a')

// This code was taken from w3schools.com/howto/  and it make the button disapear when the user is on top of the site
// Also I added the feature with changing the header's background
// ### BACK TO TOP BUTTON and HEADERS BACKGROUND CHANGE ON SCROLL ###
// window.onscroll = function () { scrollFunction() };
window.onscroll = () => {

  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTopButton.style.display = 'block';
    header.classList.add('headerOnScroll')
  } else {
    backToTopButton.style.display = 'none';
    header.classList.remove('headerOnScroll')
  }
}

// This code will scroll everything to top
const getToTop = () => {
  // we need to write both lines, because they are working in different browsers:
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
backToTopButton.addEventListener('click', getToTop)
// ---------------------------------------

// Function for "Hamburger" and mobile menu
const mobMenu = () => {
  for (const link of menuItems) {
    link.addEventListener('click', mobMenu)
  }
  if (nav.classList.contains('responsive')) {
    nav.classList.remove('responsive')
  } else {
    nav.classList.add('responsive')
  }
}
hamburgerMenuButton.addEventListener('click', mobMenu);
// ---------------------------------------
