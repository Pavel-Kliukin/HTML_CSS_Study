const backToTopButton = document.querySelector('#backToTop')
const header = document.querySelector('header')
const hamburgerMenuButton = document.querySelector('.mobile')
const nav = document.querySelector('nav ul');
const menuItems = document.querySelectorAll('nav ul li a')

// This code was taken from w3schools.com/howto/  and it make the button disapear when the user is on top of the site
// Also I added the feature with changing the header's background
// ### BACK TO TOP BUTTON and HEADERS BACKGROUND CHANGE ON SCROLL ###
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


//Progress-alements onscroll activating

// receiving options as an object
// if the user doesn't pass any options, the default will be `{}`
function scrollTrigger (selector, options = {}) {
  let els = document.querySelectorAll(selector)
  els = Array.from(els)
  els.forEach(el => {
    // Passing the options object to the addObserver function
    addObserver(el, options)
  })
}

// Receiving options passed from the scrollTrigger function
function addObserver (el, options) {
  if (!('IntersectionObserver' in window)) {
    if (options.cb) {
      // If we've passed a callback function, we'll call it
      options.cb(el)
    } else {
      // If we haven't, we'll just add the active class
      entry.target.classList.add('active')
    }
    return
  }
  let observer = new IntersectionObserver((entries, observer) => { //this takes a callback function which receives two arguments: the elemts list and the observer instance
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (options.cb) {
          options.cb(el)
        } else {
          entry.target.classList.add('active')
        }
        observer.unobserve(entry.target)
      }
    })
  }, options) // Passing the options object to the observer
  observer.observe(el)
}
scrollTrigger('.progress-element', {
  rootMargin: '-10%',
})
// ---------------------------------------