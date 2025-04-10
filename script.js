// 1. Typing Animation
const texts = ["Web Development", "App Development", "Frontend Development", "Backend Development"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedText = document.getElementById("typed-text");

function type() {
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
document.addEventListener("DOMContentLoaded", type);

// 2. Typewriter Effect for About Section
const aboutText = "I'm Ankit Raj from Muzaffarpur, Bihar. I love Web & App Development. Learning every day to build better software.";
let aboutIndex = 0;
function typeAboutMe() {
  const element = document.getElementById("type-about");
  if (aboutIndex < aboutText.length && element) {
    element.textContent += aboutText.charAt(aboutIndex);
    aboutIndex++;
    setTimeout(typeAboutMe, 40);
  }
}
window.addEventListener("load", typeAboutMe);

// 3. Scroll Animation
const sections = document.querySelectorAll(".section-box");
window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.classList.add("show");
    }
  });
});

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
  dropdown.classList.toggle("show-dropdown");
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