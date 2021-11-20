const toggler = document.querySelector(".nav__toggler");
const navbar = document.querySelector(".header__main ");
toggler.addEventListener("click", (e) => {
  navbar.classList.toggle("nav__expanded");
});
