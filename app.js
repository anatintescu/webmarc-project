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
const displayForm1 = document.getElementById('form');
const displayForm2 = document.getElementById('formId');
const displayForm3 = document.getElementById('formId2');


stepsButton.addEventListener('click', function () {
    showError();
   
   /* if (formValidation1()) {
        displayForm(displayForm1, displayForm2);

    } else {
        return false;
    } */

});


stepsButton2.addEventListener('click', function () {
    

    /*if (formValidation2()) {
        displayForm(displayForm2, displayForm3);
    } else {
        return false;
    } */

}); 


function displayForm(a, b) {
    a.style.display = 'none';
    b.style.display = 'block';
}


/* function formValidation1() {

    if (document.form.lName.value == '') {
        alert('Numele este obligatoriu')
        document.form.lName.focus();
        return false;

    }

    if (document.form.fName.value == '') {
        alert('Prenumele este obligatoriu')
        document.form.fName.focus();
        return false;
    }

    if (document.form.birthday.value == '') {
        {
            alert("Alegeti data nasterii");
            document.form.fName.focus();
            return false;
        }
    }

    else {
        displayForm2.style.display = 'block'
    }

};


function formValidation2() {
    if (document.form.phone.value == '') {
        alert("Introduceti numarul de telefon");
        document.form.phone.focus();
        return false;

    }

    if (document.form.email.value == '') {
        alert("Introduceti adresa de email");
        document.form.email.focus();
        return false;
    }

    if (document.form.county.value == '') {
        {
            alert("Alegeti judetul");
            document.form.county.focus();
            return false;
        }
    }

    if (document.form.county.value == '') {
        {
            alert("Alegeti orasul");
            document.form.city.focus();
            return false;
        }
    }

    if (document.form.address.value == '') {
        {
            alert("Introduceti adresa");
            document.form.address.focus();
            return false;
        }
    }

    if (document.form.zip.value == '') {
        {
            alert("Introduceti codul postal");
            document.form.zip.focus();
            return false;
        }
    }

    else {
        displayForm3.style.display = 'block';
    }

};
 */

// Show Error

function showError(input, message) {
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation error';

    const errorMessage = formValidation.querySelector('p');
    errorMessage.innerText = message;


}



// Check Required Fields 

function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if(input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            return false;
        }
    })
   
}





