const collapsibles = document.getElementsByClassName("collapsible");

for (let i = 0; i < collapsibles.length; i++) {
  collapsibles[i].addEventListener("click", function () {
    let collContent = this.nextElementSibling;
    if (collContent.style.display === "block") {
      collContent.style.display = "none";
    } else {
      collContent.style.display = "block";
    }
  });
}
