//Refactored code from software-tools project
"use strict";
const form = document.getElementById('register');

function displayErrorMessage(message){
    document.getElementById('register-error-message').innerText = message;
}

function showSuccessMessage(){
    alert('Registration successful!\n\nYou will now be redirected to the login page.');
}

/*function hasEmptyFields(fields){
    for(let i=0; i<=7; i++){
        if(!fields[i].value){
            displayErrorMessage('You may not leave fields empty. Please try again.');
            return false;
        }
    }
    
    return true;
}*/

function isValidEmail(email){
    //regex found here https://www.w3resource.com/javascript/form/email-validation.php
    
    let isValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value);

    if(!isValid)
        displayErrorMessage('Please enter a correctly formatted email address.');

    return isValid;
}

function isValidPassword(password){
    const PASSWORD_MIN_LENGTH = 8;
    
    if(password.value.length >= PASSWORD_MIN_LENGTH)
        return true;
    else{
        displayErrorMessage('Password must be at least 8 characters long.');
        return false;
    }
}

function isMatchingPassword(password, confirmPassword){
    if(password.value === confirmPassword.value)
        return true;
    else{
        displayErrorMessage('Passwords must match.');
        return false;
    }
}

form.addEventListener('submit', function (event) {
    event.preventDefault();

   // if(!hasEmptyFields(form.elements))
     //   return;
    if(!isValidEmail(form.elements['email']))
        return;
    if(!isValidPassword(form.elements['password']))
        return;
    if(!isMatchingPassword(form.elements['password'], form.elements['confirmPassword']))
        return;
    
    showSuccessMessage();

    form.submit();
});
