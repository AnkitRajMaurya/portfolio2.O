// 1. Typing Animation
const texts = ["Web Development", "App Development", "Frontend Development", "Backend Development"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedText = document.getElementById("typed-text");

function type() {
    if (!typedText) return; // Exit if the element doesn't exist

    const currentText = texts[textIndex];

    if (isDeleting) {
        charIndex--;
        typedText.textContent = currentText.substring(0, charIndex);
    } else {
        charIndex++;
        typedText.textContent = currentText.substring(0, charIndex);
    }

    if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => isDeleting = true, 1500);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
    }

    const speed = isDeleting ? 50 : 100;
    setTimeout(type, speed);
}

// Ensure the type function starts after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    if (typedText) {
        type();
    }
});

// 3. Scroll Animation for Sections
const sections = document.querySelectorAll(".section-box");
function checkScroll() {
    sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            section.classList.add("show");
        }
    });
}

// Run checkScroll on initial load and on scroll
document.addEventListener("DOMContentLoaded", checkScroll);
window.addEventListener("scroll", checkScroll);

// 4. Navbar Hide on Scroll
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    const nav = document.getElementById("navbar");
    let currentScrollPos = window.pageYOffset;
    if (nav) {
        nav.classList.toggle("hide", prevScrollpos < currentScrollPos);
    }
    prevScrollpos = currentScrollPos;
};

// 5. Dropdown Menu Toggle
function toggleMenu() {
    const dropdown = document.getElementById("dropdownMenu");
    if (dropdown) {
        dropdown.classList.toggle("open"); // Using 'open' class as per updated CSS
    }
}

// 6. Image Blur-to-Clear Loading
document.addEventListener("DOMContentLoaded", () => {
    const img = document.querySelector(".loading-img");
    if (img) {
        const loadHandler = () => img.classList.add("loaded");
        img.addEventListener("load", loadHandler);
        if (img.complete) loadHandler();
    }
});

// 7. Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });

            // Close dropdown menu if open after clicking a link
            const dropdown = document.getElementById("dropdownMenu");
            if (dropdown && dropdown.classList.contains("open")) { // Checking for 'open' class
                dropdown.classList.remove("open");
            }
        }
    });
});

// 8. Change Tab Title on Blur
const originalTitle = document.title;
const newTitle = "Come Back Soon!"; // The text you want to display

document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        document.title = newTitle;
    } else {
        document.title = originalTitle;
    }
});

// 9. Back to Top Button Functionality
let backToTopButton = document.getElementById("backToTop");
window.onscroll = function() {
    if (backToTopButton) {
        backToTopButton.style.display = (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? "block" : "none";
    }
};
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// 10. Redirect to home after form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function() {
            setTimeout(function() {
                window.location.href = '#';
            }, 500);
        });
    }
});

// 11. Show About Section Line on Scroll
const aboutSection = document.getElementById('about');
const aboutLine = document.querySelector('#about .about-line');

function checkAboutLine() {
    if (aboutSection && aboutLine) {
        const top = aboutSection.getBoundingClientRect().top;
        if (top < window.innerHeight - 200) {
            aboutLine.classList.add('show');
        }
    }
}

document.addEventListener('DOMContentLoaded', checkAboutLine);
window.addEventListener('scroll', checkAboutLine);

// 12. Line by Line Loading Animation for About Section Text
const aboutDescription = document.querySelector('#about .about-description');
const aboutLines = aboutDescription ? Array.from(aboutDescription.children) : [];

aboutLines.forEach((line, index) => {
    line.style.opacity = 0;
    line.style.transform = 'translateY(20px)';
    line.style.transition = `opacity 0.5s ease ${index * 0.2 + 0.5}s, transform 0.5s ease ${index * 0.2 + 0.5}s`;
});

function animateAboutLines() {
    if (aboutSection && aboutLines.length > 0) {
        const top = aboutSection.getBoundingClientRect().top;
        if (top < window.innerHeight - 150) { // Adjust trigger point as needed
            aboutLines.forEach(line => {
                line.style.opacity = 1;
                line.style.transform = 'translateY(0)';
            });
            window.removeEventListener('scroll', animateAboutLines); // Stop animation once visible
        }
    }
}

document.addEventListener('DOMContentLoaded', animateAboutLines);
window.addEventListener('scroll', animateAboutLines);


