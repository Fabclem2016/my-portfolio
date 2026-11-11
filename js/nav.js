const toggleButton = document.querySelector(".menu-toggle");
const menu = document.querySelector("nav ul");

toggleButton.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("open");
  toggleButton.setAttribute("aria-expanded", String(isOpen));
  toggleButton.textContent = isOpen ? "✕" : "☰";
});
