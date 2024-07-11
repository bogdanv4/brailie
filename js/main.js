//Responzivan meni
function responsiveMenu() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//Vegas slajder na pocetnoj stranici
$("#example, #vegas-slider").vegas({
  slides: [
    {
      src: "./img/slika1.jpg",
    },
    {
      src: "./img/slika2.jpg",
    },
    {
      src: "./img/slika3.jpg",
    },
  ],
});

//Validacija forme na kontakt stranici
function validation() {
  let name = document.forms["forma"]["name"].value;
  let mail = document.forms["forma"]["email"].value;
  let phone = document.forms["forma"]["phone"].value;
  let message = document.forms["forma"]["message"].value;
  if (mail.search("@") == -1) {
    alert("E-mail is not in valid format \nValid format: email@test.com");
    return false;
  } else if (isNaN(phone)) {
    alert(
      "Phone number is not in valid format \nValid phone contains only numbers!"
    );
    return false;
  } else if (name.search(" ") == -1) {
    alert("Please enter First Name and Last Name \nValid format: Joe Johnson");
    return false;
  } else if (mail.search("@") != -1 && isNaN(phone) == false) {
    alert(
      "Your data is successfully recorded \nName: " +
        name +
        "\n" +
        "Email: " +
        mail +
        "\n" +
        "Phone: " +
        phone +
        "\n" +
        "Message: " +
        message
    );
    return true;
  }
}

//Collapsibles na about stranici
let coll = document.getElementsByClassName("collapsible");
let i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    let collContent = this.nextElementSibling;
    if (collContent.style.display === "block") {
      collContent.style.display = "none";
    } else {
      collContent.style.display = "block";
    }
  });
}

//Dugme na vrh
let pageHeight = window.innerHeight;
let onTop = document.getElementById("on-top");

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
