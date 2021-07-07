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


// Hide / Display Each Form Step 

const stepsButton = document.getElementById('steps');
const stepsButton2 = document.getElementById('steps2');
const stepsButton3 = document.getElementById('submit-btn');
const displayForm1 = document.getElementById('form');
const displayForm2 = document.getElementById('formId');
const displayForm3 = document.getElementById('formId2');



stepsButton.addEventListener('click', function () {
    ;
    if (formValidation(inputArr)) {
        displayForm(displayForm1, displayForm2);
        

    } else {
        errorMessage(error);
    }

});


stepsButton2.addEventListener('click', function () {
    
    if (formValidation(inputArr2)) {
        displayForm(displayForm2, displayForm3);
        
    } else {
        errorMessage(error2);
    }

});

stepsButton3.addEventListener('click', function (e) {
    e.preventDefault();
   if(formValidation(inputArr3)) {
       console.log();
   } else {
       errorMessage(error3);
   }
});




function displayForm(a, b) {
    a.style.display = 'none';
    b.style.display = 'block';
}

// Form Validation

const inputArr = [lName, fName, birthday,];
const inputArr2 = [phone, email, county, city, address, zip];
const inputArr3 = [password, passwordConfirm, terms];
const error = document.querySelector('.error');
const error2 = document.querySelector('.error2');
const  error3 = document.querySelector('.error3');
  


function formValidation(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].value === '') {
            return false;
        }
        
    }
    return true;
    }
     
function errorMessage(err) {
    
        err.style.display = 'block';

        
       
}
  




// Show Error Message

/* const errorMessage3 = document.querySelector(".error3");
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

*/














