const contactForm = document.getElementById("contactForm");
const fields = ["name", "email", "phone", "message"];

function showError(field, message) {
  document.getElementById(field + "Error").textContent = message;
  document.getElementById(field).classList.toggle("invalid", message !== "");
}

function validateField(field) {
  const value = document.getElementById(field).value.trim();
  if (value === "") return "This field cannot be empty.";
  if (field === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Please enter a valid email address.";
  if (field === "phone" && !/^\d+$/.test(value)) return "Phone number must contain digits only.";
  return "";
}

fields.forEach((field) => {
  document.getElementById(field).addEventListener("blur", () => showError(field, validateField(field)));
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let valid = true;
  fields.forEach((field) => {
    const message = validateField(field);
    showError(field, message);
    if (message) valid = false;
  });
  const status = document.getElementById("formStatus");
  if (valid) {
    status.textContent = "Thank you! Your message has been sent (simulated).";
    contactForm.reset();
  } else {
    status.textContent = "";
  }
});
