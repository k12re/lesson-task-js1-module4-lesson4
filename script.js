const contactForm = document.querySelector("#contactForm");
const firstName = document.querySelector("#firstName")
const lastName = document.querySelector("#lastName")
const email = document.querySelector("#email")
const button = document.querySelector("button")
const message = document.querySelector("#message")


function checkIfButtonIsDisabled() {
    // if all inputs pass validation enable the button
    if (checkLen(firstName.value , 1) && checkLen(lastName.value , 4) && validateEmail(email.value)) {
        button.disabled = false;
    }
    else {
        // clear the message
        message.innerHTML = "";
        // disable button
        button.disabled = true;
    }
}

// call the same function for each input's keyup event
firstName.addEventListener("keyup", checkIfButtonIsDisabled);
lastName.addEventListener("keyup", checkIfButtonIsDisabled);
email.addEventListener("keyup", checkIfButtonIsDisabled);

// function to run when the form is submitted
function validateForm(event) {
    
    event.preventDefault()
    // display a message once the form has been submitted
    message.innerHTML = `<div class="message">Your message has been sent</div>`

    contactForm.reset();
}

contactForm.addEventListener("submit", validateForm)

// function to check if the length of the input value is valid
function checkLen (value, len) {
    if (value.length >= len) {
        return true;
    }
    else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatch = regEx.test(email);
    return patternMatch;
}
