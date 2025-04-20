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

// 2. Typewriter Effect for About Section
const aboutText = "I'm Ankit Raj from Muzaffarpur, Bihar. I love Web & App Development. Learning every day to build better software.";
let aboutIndex = 0;
function typeAboutMe() {
    const element = document.getElementById("type-about");
    if (element) {
        if (aboutIndex < aboutText.length) {
            element.textContent += aboutText.charAt(aboutIndex);
            aboutIndex++;
            setTimeout(typeAboutMe, 40);
        }
    }
}

// Ensure the typeAboutMe function starts after the window is fully loaded
window.addEventListener("load", typeAboutMe);

// 3. Scroll Animation
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
        dropdown.classList.toggle("show-dropdown");
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
            if (dropdown && dropdown.classList.contains("show-dropdown")) {
                dropdown.classList.remove("show-dropdown");
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
