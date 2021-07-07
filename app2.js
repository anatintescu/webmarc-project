let x = myFunction(4, 3);

function myFunction(a, b) {
    return a + b;
}



function myFunction2(a, b) {
    return a * b;
}

console.log(myFunction2(10, 2));


/*
 Show Error

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

form.addEventListener('button', (e) => {
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
}

*/


/* stepsButton.addEventListener('click', function(e) {
    e.preventDefault();
    if(displayForm.style.display = 'none') {
        displayForm.style.display = 'block'
    } 
})

stepsButton2.addEventListener('click', function(e) {
    e.preventDefault();
    if(displayForm2.style.display = 'none') {
        displayForm2.style.display = 'block'
    } 
}) */


  /* let formInput = document.forms['lName']['fName'].value;
     if (formInput === '') {
         errorMessage.style.display = 'block';
    else {
            errorMessage.style.display = 'none';
            displayForm2.style.display = 'block'
    
    
     } */


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


function formValidation(input, message) {
    
}