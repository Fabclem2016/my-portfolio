function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("greeting").textContent = getGreeting() + "! Welcome to my academic portfolio.";
});
