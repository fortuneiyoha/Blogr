const navToggle = document.querySelector(".js-nav-toggle");
const navbar = document.querySelector(".js-nav");

// Toggles the navigation menu when the menu button is clicked
navToggle.addEventListener("click", () => {
  const isExpanded = navToggle.getAttribute("aria-expanded") === "true";

  // Update the accessibility attribute for the menu button
  navToggle.setAttribute("aria-expanded", !isExpanded);
  navbar.classList.toggle("open");

  // Switch the menu icon based on the menu state
  const menuIcon = navToggle.querySelector("img");
  menuIcon.src = isExpanded
    ? "assets/images/icon-hamburger.svg" // Menu icon when the menu is closed
    : "assets/images/icon-close.svg"; // Menu icon when the menu is open
});
