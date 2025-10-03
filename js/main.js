const burgerMenu = document.getElementById("burger");
let pageHeight = window.innerHeight;
const onTop = document.getElementById("on-top");

function responsiveMenu() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

burgerMenu.addEventListener("click", responsiveMenu);

//Dugme na vrh
window.onscroll = function () {
  scroll();
};

function scroll() {
  if (
    document.body.scrollTop > pageHeight / 4 ||
    document.documentElement.scrollTop > pageHeight / 4
  ) {
    onTop.style.display = "block";
  } else {
    onTop.style.display = "none";
  }
}
