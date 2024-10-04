
// Toggle Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('show-nav');
  navbar.classList.toggle('active');
  hamburger.classList.toggle('open');
});

let slideIndex = 0;

// Show initial slide
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Show slides based on the index
function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    const captions = document.querySelector(".image-caption");

    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Hide all slides
    }

    // Show current slide
    slides[slideIndex].style.display = "flex";
    slides[slideIndex].classList.add("fade");
    
    // Update caption based on current slide
    captions.textContent = slides[slideIndex].children[0].alt;
}

// Automatically change slides every 5 seconds
setInterval(() => {
    plusSlides(1);
}, 5000);

// Placeholder for future interactivity or animations
// console.log("Our Services Page Loaded");

document.addEventListener('DOMContentLoaded', () => {

    const serviceItems = document.querySelectorAll('.service-item');

    // Add animation to each card
    serviceItems.forEach((item, index) => {
        if (index % 2 === 0) { // Even index items fall from the left
            item.style.animation = 'fallFromLeft 1s ease forwards';
            item.style.animationDelay = `${index * 0.3}s`;
        } else { // Odd index items fall from the right
            item.style.animation = 'fallFromRight 1s ease forwards';
            item.style.animationDelay = `${index * 0.3}s`;
        }

        // Make items visible after delay
        setTimeout(() => {
            item.style.opacity = 1;
        }, index * 300);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelectorAll('.service-card');

    // Function to reveal cards with animation on scroll
    const revealCards = () => {
        serviceCards.forEach(card => {
            const position = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (position < screenPosition) {
                const animationType = card.getAttribute('data-animation');
                card.style.animation = `${animationType} 1s ease forwards`;
                card.style.opacity = '1';
            }
        });
    };

    window.addEventListener('scroll', revealCards);
    revealCards(); // Trigger the function on page load
});


document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.querySelector('.form-status');

    // Form submission event
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent form from submitting the traditional way

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            // Simulate successful form submission
            formStatus.textContent = 'Your message has been sent successfully!';
            formStatus.style.color = '#0044cc';
            formStatus.style.animation = 'fadeIn 1s ease-in-out';

            // Clear form fields after submission
            contactForm.reset();
        } else {
            formStatus.textContent = 'Please fill out all fields before submitting.';
            formStatus.style.color = '#cc0000'; // Red text for error
            formStatus.style.animation = 'fadeIn 1s ease-in-out';
        }
    });
});

// Form Submission Handling
document.getElementById('consultation-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    const formAlert = document.getElementById('form-alert');

    if (name && email && phone) {
        formAlert.textContent = 'Thank you for reaching out, ' + name + '! We will contact you soon.';
        formAlert.style.display = 'block';
        formAlert.style.color = 'green';

        // Clear form fields
        document.getElementById('consultation-form').reset();
    } else {
        formAlert.textContent = 'Please fill out all required fields.';
        formAlert.style.display = 'block';
        formAlert.style.color = 'red';
    }
});
