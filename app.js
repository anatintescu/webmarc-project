/* const form = document.getElementById('form');
const name = document.getElementById('name');
const fName = document.getElementById('fname');
const male = document.getElementById('male');
const fmale = document.getElementById('fmale');
const birthday = document.getElementById('birthday');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const county = document.getElementById('county');
const city = document.getElementById('city');
const address = document.getElementById('address');
const zip = document.getElementById('zip');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');
const terms = document.getElementById('terms');

// Show Error

function showError(input, message) {
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation error';

    const errorMessage = formValidation.querySelector('p');
    errorMessage.innerText = message;


}



// Show Valid

function showValid(input) {
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation valid';
}

// Check Required Fields 

function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if(input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showValid(input);
        }

    })
   
}

// Get Fieldname 
    function getFieldName(input) {
        return input.name.charAt(0).toUpperCase() + input.name.slice(1);    }


// Event Listeners

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkRequired([name, email, password, passwordConfirm]);
    checkLenght(name, 3, 30);
    checkLenght(password, 8, 25);
    checkLenght(passwordConfirm, 8, 25);
    passwordMatch(password, passwordConfirm);

}) 


// Check Input Lenght

function checkLenght(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if(input.value.lenght > max) {
        showError(input, `${getFieldName(input)} must be at less ${max} characters`);
    } else {
        showValid(input);
    }
}

// Check Passwords Match

function passwordMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, 'Passwords do not match')
    }
} */

const stepsButton = document.getElementById('steps');
const displayForm = document.getElementById('formId');
const displayForm2 = document.getElementById('formId2');

stepsButton.addEventListener('click', function(e) {
    e.preventDefault();
    if(displayForm.style.display = "none") {
        displayForm.style.display = 'block'
    }
})