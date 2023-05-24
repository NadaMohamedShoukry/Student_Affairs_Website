var password_error = document.getElementById("password_error");
function isPassword() {
    var password = document.getElementById("contant_password").value;
    if (password.length <= 8) {
        password_error.innerHTML = ' <i class="fa-solid fa-square-xmark"></i> <br/>should be >= 8 char <br/>';
        return false;
    }

    password_error.innerHTML = '<i class="fa fa-check-circle" style="color:green;"></i><br>';
    return true;
};
//========================================================================================================================
var email_error = document.getElementById("email_error");
function isEmail() {
    var email = document.getElementById("email").value;
    if (email.length == 0) {

        email_error.innerHTML = ' <i class="fa-solid fa-square-xmark"></i> ';;
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        email_error.innerHTML = ' <i class="fa-solid fa-square-xmark"></i>';
        return false;
    }
    email_error.innerHTML = '<i class="fa fa-check-circle" style="color:green;"></i>';
    return true;
};
var submit = document.getElementById('submit_error');
function VailedForm() {
    if (!isPassword() || !isEmail()) {
        submit.style.display = 'block';
        submit.innerHTML = 'Fix-Errors  ';
        setTimeout(function () { submit.style.display = 'none'; }, 3000);
        return false;

    };
    return true;
};