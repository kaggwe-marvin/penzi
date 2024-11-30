  document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".nav__toggle");
    const menu = document.querySelector(".nav__menu");
  
    if (toggleButton && menu) {
      toggleButton.addEventListener("click", () => {
        menu.classList.toggle("nav__menu--active");
      });
    }
  });
  