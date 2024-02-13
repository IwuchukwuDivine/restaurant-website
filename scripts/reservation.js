// Navigation 
const hamBtn = document.querySelector('.ham-menu');
const navLinks = document.querySelector('.nav-links');

hamBtn.addEventListener('click', () => {
  hamBtn.classList.toggle('clicked');
  navLinks.classList.toggle('clicked');
})