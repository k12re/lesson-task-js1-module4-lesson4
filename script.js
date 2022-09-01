const contactForm = document.querySelector("#contactForm");
const firstName = document.querySelector("#firstName")
const lastName = document.querySelector("#lastName")
const email = document.querySelector("#email")
let button = document.querySelector(".button")
const message = document.querySelector(".message")


function validateForm() {
    
    event.preventDefault()

    if (checkLen(firstName.value, 0) === true ){
        console.log(firstName.value.length)
    }
    else {
        console.log("Please type first name")
    }
    

    if (checkLen(lastName.value, 3) === true) {
        console.log(lastName.value.length)
    }
    else {
        console.log("Please type last name")
    }
 

    if (validateEmail(email.value) === true) {
        console.log(email.value)
    }
    else {
        console.log("Please type email")
    }

    if (firstName.value.length > 0 && lastName.value.length > 3 && email.value === true) {
        message.display = "block"
        button.disabled = "false"
    }
    else {
        //button.disabled = "true"
    }

}

contactForm.addEventListener("submit", validateForm)

function checkLen (value, len) {
    if (value.length > len) {
        return true
    }
    else {
        return false
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatch = regEx.test(email);
    return patternMatch;
}
