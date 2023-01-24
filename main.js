const form = document.querySelector(".form");
const errorPlace = document.querySelector(".error");
const username = document.querySelector("#name");
const password = document.querySelector("#password");
const btn = document.querySelector(".login-btn");

let error;

btn.addEventListener("click", (e) => {
    e.preventDefault();
    
    // Validate the userName
    validateName()

    validatePassword()
    
})


function validateName() {
    const nameValue = username.value;

    const userRegex = /^[a-z0-9_-]{3,15}$/ 
    const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/

    if (nameValue.length === 0) {
        error = `<p>⚠ username or Email is obligatory</p>`;
        errorPlace.innerHTML = error;
        makeRedBorder(username)
    }

    else if (nameValue.length >= 3) {
        if (userRegex.test(nameValue) || emailRegex.test(nameValue)) {
            makegreenBorder(username)
        }

        else {
            error = `<p>⚠ Invalid username or email</p>`;
            errorPlace.innerHTML = error;
            makeRedBorder(username)
        }

    } else {
        error = `<p>⚠ Invalid username or email</p>`;
        errorPlace.innerHTML = error;
        makeRedBorder(username)
    }
}

function validatePassword() {
    const passwordValue = password.value;

    if (passwordValue.length >= 8 && passwordValue.length <= 15) {
        makegreenBorder(password)

    } else {
        error = `<p>⚠ Password must be 8 characters or longer and less than 15 characters</p>`;
        errorPlace.innerHTML += error;
        makeRedBorder(password)
    }
}


function makeRedBorder(element) {
    element.style.borderColor = "red";
    element.style.boxShadow = "0 0 3px red, inset 0 0 3px red";
}

function makegreenBorder(element) {
    element.style.borderColor = "green";
    element.style.boxShadow = "0 0 3px green, inset 0 0 3px green";
}