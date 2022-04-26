// function that validate email in a form using the email ID.
function validateEmail(emailID){
    var mailFormat =/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (emailID.value.match(mailFormat)){
        document.emailForm.text1.focus();
        return true;
    }
    else {
        document.getElementById("errorMsg").style.visibility = "visible";
        document.emailForm.text.focus();
        return false;
    }
}