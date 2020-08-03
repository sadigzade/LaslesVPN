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
// Переменные - элементы
let burger = document.querySelector(".contain");
let iconUser = document.querySelector(".header-btn__users");
let navMenu = document.querySelector(".header-menu");
let headerBtns = document.querySelector(".header-btn");
let headerLogo = document.querySelector(".header-logo");
let contain = document.querySelector(".contain");

// Меню - бургер
burger.addEventListener("click", function() {
  burger.classList.toggle("change");

  if (contain.classList.contains("change")) {
    navMenu.style.top = "60px";
    navMenu.style.opacity = "1";
    navMenu.style.visibility = "visible";
  } else {
    navMenu.style.top = "10px";
    navMenu.style.opacity = "0";
    navMenu.style.visibility = "hidden";
  }
});

// Выподающее окно для входа или регистрации
iconUser.addEventListener("click", function() {
  navMenu.classList.toggle("close");

  if (navMenu.classList.contains("close")) {
    headerBtns.style.right = "27%";
    headerBtns.style.transform = "translateX(50%)";
    headerBtns.style.opacity = "1";
    headerBtns.style.visibility = "visible";

  } else {
    headerBtns.style.right = "0px";
    headerBtns.style.opacity = "0";
    headerBtns.style.transform = "translateX(0)";
    headerBtns.style.visibility = "hidden";
  }

  if (document.documentElement.clientWidth < 767) {
    headerLogo.classList.toggle("close");
  }
});;

$(document).ready(function () {
  $('.help-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1
  });
});