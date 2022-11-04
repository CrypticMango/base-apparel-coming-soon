 const emailField = document.getElementById("email-field");
 const button = document.getElementById("submit-button");
 const invalidMessage = document.getElementById("validation-message");

 button.addEventListener("click", function () {
    const email = emailField.value;
    if (validateEmail(email)) {
        invalidMessage.innerHTML = "";
    } else {
        invalidMessage.innerHTML = "Please provide a valid email."
    }
 });

 function validateEmail(email) {
    const characters = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return characters.test(String(email).toLocaleLowerCase());
 }