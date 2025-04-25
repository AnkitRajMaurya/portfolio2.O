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
const aboutText = "Hi! I'm Ankit Raj Maurya, a passionate web developer from Muzaffarpur, Bihar. Currently pursuing a Diploma in Computer Science at NRI Institute of Research and Technology (2024–2027), I specialize in creating responsive and user-friendly websites. With hands-on experience from my internship at Tata Power Skill Development Institute and various freelance projects, I have honed my skills in:";
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

// 9. Back to Top Button Functionality (Included in HTML <script> tag, but for completeness)
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
            // You can add a slight delay if needed to ensure the Formspree submission starts
            setTimeout(function() {
                window.location.href = '#'; // Or your actual homepage URL
            }, 500); // Adjust the delay in milliseconds as needed
        });
    }
});
