function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});;
let x = document.querySelector(".contain");
let nav = document.querySelector(".header-btn__users");

x.addEventListener("click", function() {
  let element = document.querySelector(".header-nav");

  x.classList.toggle("change");
});

nav.addEventListener("click", function() {
  let menu = document.querySelector(".header-menu");
  let headerBtns = document.querySelector(".header-btn");

  menu.classList.toggle("close-nav");
  if (menu.classList.contains("close-nav")) {
    headerBtns.style.visibility = "visible";
    headerBtns.style.opacity = 1;

  } else {
    headerBtns.style.visibility = "hidden";
  }
});;

$(document).ready(function () {
  $('.help-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1
  });
});