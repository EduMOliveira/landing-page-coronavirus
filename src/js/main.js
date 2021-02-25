// fix forEach in IE 10/11
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

var burgerBtn = document.querySelector(".main__btn");
var nav = document.querySelector(".main__items");
var headerItem = document.querySelectorAll(".headerItem");

burgerBtn.addEventListener("click", toggleHamburguer);

function toggleHamburguer() {
  burgerBtn.classList.toggle("open");
  nav.classList.toggle("show");

  if (burgerBtn.classList.contains("open")) {
    document.getElementsByTagName("body")[0].style = "overflow-y: hidden";
  } else {
    document.getElementsByTagName("body")[0].style = "overflow-y: initial";
  }
}

headerItem.forEach(function (i) {
  i.addEventListener("click", handleShowHeaderOpen);
});

function handleShowHeaderOpen() {
  if (nav.classList.contains("show")) {
    burgerBtn.classList.remove("open");
    nav.classList.remove("show");

    document.getElementsByTagName("body")[0].style = "overflow-y: initial";
  }
}

// Prevent "bug" (burgerBtnburger toggle or show full nav) when user resize
window.addEventListener("resize", function (e) {
  burgerBtn.classList.remove("open");
  nav.classList.remove("show");
  document.getElementsByTagName("body")[0].style = "overflow-y: initial";
});

// IE 10 and IE 11
function isIE() {
  return /Trident\/|MSIE/.test(window.navigator.userAgent);
}
// IE 10 and IE 11
if (isIE()) {
  document.body.innerHTML =
    "<div class='ieError'><span>This browser is not Supported! Please use a recent version!</span><div>";
}
