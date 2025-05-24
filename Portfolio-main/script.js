// HEADER
// Select the header element

const header = document.querySelector('.header');

// Function to handle scroll event
function handleScroll() {
    if (window.scrollY > 50) { // Adjust the value as needed
        header.classList.add('active'); // Add active class when scrolled down
    } else {
        header.classList.remove('active'); // Remove active class when at the top
    }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

const element = document.querySelector('[data-reveal]');
// To reveal immediately
element.classList.add('visible');


//MENU

// Select the necessary elements
const navOpenBtn = document.querySelector('.nav-open-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');
const navbar = document.querySelector('.navbar');
const overlay = document.querySelector('.overlay');
// Function to open the menu
navOpenBtn.addEventListener('click', () => {
    navbar.classList.add('active'); // Show the navbar
    overlay.classList.add('active'); // Show the overlay
});
// Function to close the menu
navCloseBtn.addEventListener('click', () => {
    navbar.classList.remove('active'); // Hide the navbar
    overlay.classList.remove('active'); // Hide the overlay
});
// Optional: Close the menu when clicking on the overlay
overlay.addEventListener('click', () => {
    navbar.classList.remove('active'); // Hide the navbar
    overlay.classList.remove('active'); // Hide the overlay
});


// DATA REVEAL

document.addEventListener("DOMContentLoaded", function() {
    const reveals = document.querySelectorAll('[data-reveal]');
    const options = {
        root: null, // Use the viewport as the container
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };
    const revealOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'revealed' class to the element
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target); // Stop observing once revealed
            }
        });
    };
    const observer = new IntersectionObserver(revealOnScroll, options);
    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
});
