const backButton=document.querySelector('#backToTop');
const header = document.querySelector('header');
const menuButton = document.querySelector('.mobile');
const nav = document.querySelector('nav ul');
const menuItems = document.querySelectorAll('nav ul li a')
const modalButton = document.querySelector('#modalButton')
const overlay = document.querySelector('.overlay')
const closeButton = document.querySelector('#closeButton')


const mobMenu = () => {

    for (const link of menuItems){
        link.addEventListener('click', mobMenu)
    }

    if (nav.classList.contains('responsive')) {
        nav.classList.remove('responsive')
    } else {
        nav.classList.add('responsive')
    }
}


// This code was taken from w3schools.com/howto/  and it make the button disapear when the user is on top of the site
// Also we added the feature with changing the header's background
// ######
window.onscroll = function() {scrollFunction()};

const scrollFunction = () => {


    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        backButton.style.display = 'block';
        header.classList.add('bg')
    } else {
        backButton.style.display = 'none';
        header.classList.remove('bg')
    }
}

// This code will scroll everything to top
const getToTop =  () => {
    // We need to write both lines, because they are working in different browsers:
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// ######

const modalShow = () => {
    document.querySelector('.overlay').classList.toggle('visible')
}

backButton.addEventListener('click', getToTop);
menuButton.addEventListener('click', mobMenu);
modalButton.addEventListener('click', modalShow);
closeButton.addEventListener('click', modalShow);