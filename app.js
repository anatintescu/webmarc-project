const input = document.getElementsByTagName('input')
const form = document.getElementById('form');
const lName = document.getElementById('lName');
const fName = document.getElementById('fName');
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


/* Hide / Display Each Form Step */

const stepsButton = document.getElementById('steps');
const stepsButton2 = document.getElementById('steps2');
const stepsButton3 = document.getElementById('submit-btn');
const displayForm1 = document.getElementById('form');
const displayForm2 = document.getElementById('formId');
const displayForm3 = document.getElementById('formId2');


stepsButton.addEventListener('click', function () {

    if (formValidation(inputArr)) {
        displayForm(displayForm1, displayForm2);
        return false;
    }

});


stepsButton2.addEventListener('click', function () {
    if (formValidation2(inputArr2)) {
        displayForm(displayForm2, displayForm3);
        return false;
    }

});

stepsButton3.addEventListener('click', function (e) {
    e.preventDefault();
    formValidation3(inputArr3);
});




function displayForm(a, b) {
    a.style.display = 'none';
    b.style.display = 'block';
}


var inputArr = [lName, fName, birthday,];
var inputArr2 = [phone, email, county, city, address, zip];
var inputArr3 = [password, passwordConfirm, terms];




function formValidation(inputArr) {
    for (let i = 2; i < inputArr.length; i++) {
        if (inputArr[i].value === '') {
            errorFunc();
            break;
        }
        return true;
    }

}

function formValidation2(inputArr2) {
    for (let i = 5; i < inputArr2.length; i++) {
        if (inputArr2[i].value === '') {
            errorFunc2();
            break;
        }
        return true;
    }
}

function formValidation3(inputArr3) {
    for (let i = 0; i < inputArr3.length; i++) {
        if (inputArr3[i].value === '') {
            errorFunc3();
            break;
        }
        return true;
    }
}




/* function showError(input, message) {
    const formValidation = input.parentElement;
    const errorMessage = formValidation.querySelector('p');
    errorMessage.innerText = message;


} */

const errorMessage3 = document.querySelector(".error3");
const errorFunc3 = () => {
    errorMessage3.style.display = "block"
}

const errorMessage2 = document.querySelector(".error2");
const errorFunc2 = () => {
    errorMessage2.style.display = "block"
}

const errorMessage = document.querySelector(".error");
const errorFunc = () => {
    errorMessage.style.display = "block"
}














