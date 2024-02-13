// for the rotating circle
const text = document.querySelector('.text p');
text.innerHTML = text.innerText.split('').map(
  (char, i) => 
    `<span style="transform:rotate(${i * 14}deg)">${char}</span>`
).join('');


// automatic slider for the review section
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slides');

setInterval(() => {
  // Hide all slides
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  // Increment the current slide index
  currentSlideIndex++;

  // Reset index to 0 if it exceeds the number of slides
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }

  // Display the current slide
  slides[currentSlideIndex].style.display = 'flex';

}, 3000);


// Navigation 
const hamBtn = document.querySelector('.ham-menu');
const navLinks = document.querySelector('.nav-links');

hamBtn.addEventListener('click', () => {
  hamBtn.classList.toggle('clicked');
  navLinks.classList.toggle('clicked');
})