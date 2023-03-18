const header = document.querySelector('header')
const hamburgerMenuButton = document.querySelector('.mobile')
const nav = document.querySelector('nav ul');
const menuItems = document.querySelectorAll('nav ul li a')

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
