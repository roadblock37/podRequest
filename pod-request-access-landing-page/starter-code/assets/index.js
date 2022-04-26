// function that validate email in a form using the email ID.
function validateEmail(emailID){
    var mailFormat =/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (emailID.value.match(mailFormat)){
        document.emailForm.text1.focus();
        return true;
    }
    else {
        alert("oops! Please check your email");
        document.emailForm.text.focus();
        return false;
    }
}