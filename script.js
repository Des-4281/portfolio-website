const hamburgerBtn = document.getElementById("hamburger-btn");
const navLinks = document.querySelector(".nav-links");
const navSocial = document.querySelector(".nav-social");

if (hamburgerBtn && navLinks && navSocial) {
  hamburgerBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.contains("active");

    navLinks.classList.toggle("active");
    navSocial.classList.toggle("active");

    hamburgerBtn.setAttribute("aria-expanded", String(!isOpen));
    hamburgerBtn.textContent = isOpen ? "☰" : "✕";
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      navLinks.classList.remove("active");
      navSocial.classList.remove("active");
      hamburgerBtn.setAttribute("aria-expanded", "false");
      hamburgerBtn.textContent = "☰";
    }
  });
}