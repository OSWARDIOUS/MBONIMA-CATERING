// Smooth scroll for nav links
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Scroll reveal animation
const revealElements = document.querySelectorAll('.about-section, .menu-section, .gallery-section, .contact-section');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add('active');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Animate navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
    navbar.style.transition = 'background-color 0.4s ease';
  } else {
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  }
});

// Optional: Fade in gallery images
const galleryImages = document.querySelectorAll('.gallery-grid img');
galleryImages.forEach((img, i) => {
  img.style.opacity = 0;
  img.style.transition = 'opacity 0.6s ease';
  setTimeout(() => {
    img.style.opacity = 1;
  }, 500 + i * 200);
});
