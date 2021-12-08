//Refactored code from software-tools project
"use strict";
const form = document.getElementById('register');

function displayErrorMessage(message){
    document.getElementById('register-error-message').innerText = message;
}

function showSuccessMessage(){
    alert('Registration success!\n\nYou will now be redirected to the login page.');
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    showSuccessMessage();

    form.submit();
});
