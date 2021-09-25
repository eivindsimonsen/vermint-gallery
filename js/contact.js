const form = document.querySelector("form");

const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");

const email = document.querySelector("#mail");
const emailError = document.querySelector("#mailError");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");

const validateMessage = document.querySelector("#contact-message");

function validateForm(event) {
    event.preventDefault();

    if (fullName.value.trim().length > 0) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
    }

    if (validateEmail(mail.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (subject.value.trim().length > 0) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if (fullName.value.trim().length > 0 && validateEmail(mail.value) === true && subject.value.trim().length > 0) {
        validateMessage.style.display = "block";
        form.reset();
    } else {
        validateMessage.style.display = "none";
    }
}

form.addEventListener("submit", validateForm)

function validateEmail(mail) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(mail);
    return patternMatches;
}