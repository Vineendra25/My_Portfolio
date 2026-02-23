/* ========================= */
/* TERMINAL LOADER */
/* ========================= */

window.addEventListener("load", function () {
  const text = "Initializing Portfolio System...\nLoading Developer Profile...\nAccess Granted.";
  let i = 0;
  const speed = 40;
  const terminal = document.getElementById("terminal-text");

  function typeWriter() {
    if (!terminal) return;

    if (i < text.length) {
      terminal.innerHTML += text.charAt(i) === "\n" ? "<br>" : text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } else {
      setTimeout(() => {
        const loader = document.getElementById("loader");
        if (loader) loader.style.display = "none";
      }, 800);
    }
  }

  typeWriter();
});

/* ========================= */
/* SCROLL PROGRESS BAR */
/* ========================= */

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollPercent = (scrollTop / height) * 100;
  const progressBar = document.getElementById("progress-bar");

  if (progressBar) {
    progressBar.style.width = scrollPercent + "%";
  }
});

/* ========================= */
/* SCROLL REVEAL */
/* ========================= */

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll("section").forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(40px)";
  section.style.transition = "all 0.8s ease";
  observer.observe(section);
});

/* ========================= */
/* PROJECT FILTERING */
/* ========================= */

const filterButtons = document.querySelectorAll("[data-filter]");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");

    projectCards.forEach(card => {
      if (filter === "all" || card.dataset.category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

/* ========================= */
/* ACTIVE NAV LINK */
/* ========================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});