"use strict";
function DisplayMessage(valid)
{
    if(valid)
        document.getElementById('errortxt').innerText =""

    else
        document.getElementById('errortxt').innerText ="Please Enter A Valid Email Address!"
    
    
}

function submitForm()
{
  document.getElementById("loginForm").submit();
}