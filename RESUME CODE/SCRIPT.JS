function toggleTheme() {
  document.body.classList.toggle("dark-theme");

  // Toggle the title between Light and Dark Mode
  const title = document.getElementById("theme-title");
  if (document.body.classList.contains("dark-theme")) {
    title.textContent = "Sachin M | Resume - Dark Mode";
  } else {
    title.textContent = "Sachin M | Resume - Light Mode";
  }
}
