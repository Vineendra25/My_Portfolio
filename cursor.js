const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
  if (!cursor) return;

  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

/* Cursor Grow on Hover */

const hoverElements = document.querySelectorAll("a, button, .project-card");

hoverElements.forEach(el => {
  el.addEventListener("mouseenter", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1.8)";
  });

  el.addEventListener("mouseleave", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
  });
});