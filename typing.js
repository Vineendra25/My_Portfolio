const roles = [
  "Software Developer",
  "AI Enthusiast",
  "Full Stack Engineer",
  "System Builder"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (!document.querySelector(".typing")) return;

  if (count === roles.length) {
    count = 0;
  }

  currentText = roles[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;

  if (letter.length === currentText.length) {
    setTimeout(() => {
      index = 0;
      count++;
    }, 1200);
  }

  setTimeout(type, 100);
})();