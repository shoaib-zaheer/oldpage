const menuIcon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");
});


const galleryIcon = document.querySelector('#drop-itDown');
const dropDown = document.querySelector('.dropdown-content');

galleryIcon.addEventListener("click", () => {
  dropDown.classList.toggle("newOne");
});