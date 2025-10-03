const form = document.getElementById("forma");
const fullName = document.forms["forma"]["name"];
const mail = document.forms["forma"]["email"];
const phone = document.forms["forma"]["phone"];
const message = document.forms["forma"]["message"];

function validation() {
  event.preventDefault();
  if (mail.value.search("@") == -1) {
    alert("E-mail is not in valid format \nValid format: email@test.com");
    return false;
  } else if (isNaN(phone.value)) {
    alert(
      "Phone number is not in valid format \nValid phone contains only numbers!"
    );
    return false;
  } else if (fullName.value.search(" ") == -1) {
    alert("Please enter First Name and Last Name \nValid format: Joe Johnson");
    return false;
  } else if (mail.value.search("@") != -1 && isNaN(phone.value) == false) {
    alert(
      "Your data is successfully recorded \nName: " +
        fullName.value +
        "\n" +
        "Email: " +
        mail.value +
        "\n" +
        "Phone: " +
        phone.value +
        "\n" +
        "Message: " +
        message.value
    );
    form.reset();
    return true;
  }
}

form.addEventListener("submit", validation);
