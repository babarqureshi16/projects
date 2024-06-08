// // ======================toggle icon navbar ======================
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');

}


// // ======================scroll section active link ======================

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(section => {
    let top = window.scrollY;
    let offset = section.offsetTop - 450;
    let height = section.offsetHeight;
    let id = section.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + id) {
          link.classList.add('active');
        }
      });
    }
  });

  
// =================sticky navbar ==================

let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);

// // ======================remove toggle icon and navbar when click navbar link (scroll) ======================
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};

// =================  Scroll Reveal ==================

ScrollReveal({ 
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.contact form, .btn, .home-img, .category-container, .oldest-bridge-box, .Highest-bridge-box, .Longest-bridges', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// =================  typed js ==================
const typed = new Typed('.multiple-text', {
  strings: ['Millau Viaduct', 'Russky', 'Hangzhhou', 'Brooklyn', 'Jiaozhou Bay', 'Rialto', 'Royal gorge', 'Glenfinnan Viaduct', 'Akashi-Kaikyo Bridge', 'Bailing River', 'Sidu River', 'Duge', 'Smithfield Street', 'Kapellbrucke', 'The Confederation Bridge','Beipann River Guanxing'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelete: 1000,
  loop: true
});

