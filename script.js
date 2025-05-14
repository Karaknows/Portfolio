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