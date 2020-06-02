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



$('#mainmenu a').click(function(event){
  event.preventDefault();
  event.stopPropagation();
  var subtopic = $(this).parent().find('.subtopics');
  $('.subtopics').not(subtopic).hide();
  subtopic.show();
})
$(document).click(function(event){
  $('.subtopics').hide();
})