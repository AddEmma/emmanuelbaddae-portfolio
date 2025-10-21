// ========================================
// LOADING SCREEN
// ========================================
window.addEventListener("load", function () {
  const loadingScreen = document.getElementById("loadingScreen");
  const mainContent = document.getElementById("mainContent");

  // Minimum loading time of 2 seconds for smooth experience
  setTimeout(function () {
    loadingScreen.classList.add("hidden");
    mainContent.classList.add("visible");
    document.body.style.overflow = "auto";
  }, 2000);
});

// Prevent scrolling during loading
document.body.style.overflow = "hidden";

// ========================================
// MOBILE NAVIGATION
// ========================================
const mobileNavToggle = document.getElementById("mobileNavToggle");
const mobileNav = document.getElementById("mobileNav");
const mobileNavOverlay = document.getElementById("mobileNavOverlay");
const mobileNavClose = document.getElementById("mobileNavClose");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-links a");

function openMobileNav() {
  mobileNav.classList.add("active");
  mobileNavOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeMobileNav() {
  mobileNav.classList.remove("active");
  mobileNavOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

mobileNavToggle.addEventListener("click", openMobileNav);
mobileNavClose.addEventListener("click", closeMobileNav);
mobileNavOverlay.addEventListener("click", closeMobileNav);

// Close mobile nav when clicking on links
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", closeMobileNav);
});

// ========================================
// SMOOTH SCROLLING
// ========================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Animated code lines on screen with syntax highlighting
const codeLines = [
  { text: "// Building amazing Web Apps & Mobile Apps", class: "comment" },
  { text: "const developer = {", class: "keyword" },
  { text: "  name: Emmanuel B. Addae,", class: "string" },
  { text: '  role: Web Developer | Mobile App Developer",', class: "string" },
  {
    text: "  skills: [HTML5, CSS3, JS, Dart, Flutter]",
    class: "variable",
  },
  { text: '  passion: "Innovation"', class: "string" },
  { text: "};", class: "keyword" },
  // { text: "", class: "" },
  { text: "function createMagic() {", class: "function" },
  { text: "  return code + creativity;", class: "variable" },
  { text: "}", class: "function" },
];

function animateCode() {
  const screen = document.getElementById("codeScreen");
  screen.innerHTML = "";

  codeLines.forEach((line, index) => {
    setTimeout(() => {
      const codeLine = document.createElement("div");
      codeLine.className = `code-line ${line.class}`;
      codeLine.textContent = line.text;

      if (index === codeLines.length - 1) {
        codeLine.innerHTML += '<span class="cursor"></span>';
      }

      codeLine.style.top = index * 20 + 10 + "px";
      screen.appendChild(codeLine);
    }, index * 400);
  });

  setTimeout(animateCode, 12000);
}

animateCode();

// Typing text animation
const texts = [
  "Passionate Web Developer",
  "Building Modern Web Applications",
  "Creating Mobile Solutions with Flutter",
  "Turning Ideas into Digital Reality",
];

let currentText = 0;
let currentChar = 0;
let isDeleting = false;
const heroText = document.getElementById("heroText");

function typeText() {
  const current = texts[currentText];

  if (isDeleting) {
    heroText.textContent = current.substring(0, currentChar - 1);
    currentChar--;
  } else {
    heroText.textContent = current.substring(0, currentChar + 1);
    currentChar++;
  }

  let typeSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && currentChar === current.length) {
    typeSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && currentChar === 0) {
    isDeleting = false;
    currentText = (currentText + 1) % texts.length;
    typeSpeed = 500;
  }

  setTimeout(typeText, typeSpeed);
}

setTimeout(typeText, 1000);

// ========================================
// FLOATING PARTICLES
// ========================================
function createParticles() {
  const particles = document.querySelector(".particles");
  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 6 + "s";
    particle.style.animationDuration = Math.random() * 3 + 3 + "s";
    particles.appendChild(particle);
  }
}

// Initialize particles
createParticles();

// ========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ========================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});

// ========================================
// CONTACT FORM HANDLING
// ========================================
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form data
  const name = this.querySelector('input[placeholder="Your Name"]').value;
  const email = this.querySelector('input[placeholder="Your Email"]').value;
  const subject = this.querySelector('input[placeholder="Subject"]').value;
  const message = this.querySelector("textarea").value;

  // Create mailto link
  const mailtoLink = `mailto:addaebemmanuel@gmail.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(
    `From: ${name} (${email})\n\nMessage:\n${message}`
  )}`;

  // Open email client
  window.location.href = mailtoLink;

  // Show success message
  alert("Email client opened! Your message is ready to send.");

  // Reset form
  this.reset();
});

// ========================================
// NAVBAR BACKGROUND ON SCROLL
// ========================================
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 100) {
    nav.style.background = "rgba(10, 10, 10, 0.95)";
  } else {
    nav.style.background = "rgba(10, 10, 10, 0.9)";
  }
});
