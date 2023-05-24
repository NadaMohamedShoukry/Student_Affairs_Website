var id_error = document.getElementById("id");
function check_id() {
    var contant_id = document.getElementById("contant_id").value;
    contant_id = Number(contant_id);
    if (contant_id <= 0) {
        id_error.innerHTML = ' <i class="fa-solid fa-square-xmark"></i> <br/>';
        return false;
    }
    else if (contant_id > 99999999)///Length 8
    {

        id_error.innerHTML = '<br/> max length is 8<br/>';
        return false;
    }
    id_error.innerHTML = '<i class="fa fa-check-circle" style="color:green;"></i><br/>';
    return true;

};
//////////////////////
var firstname_error = document.getElementById("fname");
function isFName() {
    var FN = document.getElementById("contant_fname").value;
    if (FN.length <= 2 || !FN.match(/^[a-zA-Z]+$/)) {
        firstname_error.innerHTML = ' <i class="fa-solid fa-square-xmark"></i> <br/>';
        return false;
    }

    firstname_error.innerHTML = '<i class="fa fa-check-circle" style="color:green;"></i><br>';
    return true;
};
////////////////////////////////
var lastname_error = document.getElementById("lname");
function isLName() {
    var LN = document.getElementById("contant_lname").value;
    if (LN.length <= 2 || !LN.match(/^[a-zA-Z]+$/)) {
        lastname_error.innerHTML = ' <i class="fa-solid fa-square-xmark"></i> <br/>';
        return false;
    };

    lastname_error.innerHTML = '<i class="fa fa-check-circle" style="color:green;"></i><br>';
    return true;
};
////////////////////////////////////////////////
var phone_error = document.getElementById("phone");
function isPhone() {
    var Phone = document.getElementById("Phone_contant").value;
    if (Phone.length < 11) {
        phone_error.innerHTML = ' <i class="fa-solid fa-square-xmark"></i> <br/>';
        return false;

    }
    if (Phone.length != 11) {
        phone_error.innerHTML = ' <i class="fa-solid fa-square-xmark"></i> <br/>';
        return false;

    }
    if (!Phone.match(/^[0-9]{11}$/)) {
        phone_error.innerHTML = ' <i class="fa-solid fa-square-xmark"></i> <br/>';
        return false;


    }
    if (Phone[0] != '0' || Phone[1] != '1') {
        phone_error.innerHTML = 'Support Egypt Only <br/>';
        return false;


    }
    if (Phone[2] != '0' && Phone[2] != '1' && Phone[2] != '2' && Phone[2] != '5') {
        phone_error.innerHTML = 'Support Egypt Only <br/>';
        return false;

    }

    phone_error.innerHTML = '<i class="fa fa-check-circle" style="color:green;"></i><br>';
    return true;



};///////////////////////
/////////////////////////////////
var email_error = document.getElementById("email");
function isEmail() {
    var email = document.getElementById("email_contant").value;
    if (email.length == 0) {

        email_error.innerHTML = ' <i class="fa-solid fa-square-xmark"></i> <br/>';;
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        email_error.innerHTML = ' <i class="fa-solid fa-square-xmark"></i> <br/>';
        return false;
    }
    email_error.innerHTML = '<i class="fa fa-check-circle" style="color:green;"></i><br>';
    return true;
};
////////////////////////////
var gpa_error = document.getElementById("Gpa");
function isGpa() {

    var Gpa = document.getElementById("contant_Gpa").value;
    var j = Gpa;
    Gpa = Number(Gpa);
    if (Gpa < 0 || Gpa > 4 || j.length == 0) {
        gpa_error.innerHTML = "<br/>Gpa bettwen {0,4} only";
        return false;
    };
    gpa_error.innerHTML = '<i class="fa fa-check-circle" style="color:green;"></i><br>';
    return true;
};
var submit = document.getElementById('submit_error');
function VailedForm() {
    if (!check_id() || !isFName() || !isLName() || !isPhone() || !isEmail() || !isGpa()) {
        submit.style.display = 'block';
        submit.innerHTML = 'Fix Error First <br/>';
        setTimeout(function () { submit.style.display = 'none'; }, 3000);
        return false;

    };
    if(confirm("Are you sure you want to submit?"))
       swal("Success: form submitted successfully", " ", "success" ,);
    else swal("Cancelled: Didn't submit ", " ", "error" ,);
    return true;

};

function our(){
    if(confirm("Are you sure you want to reset?"))
      swal("Reset Succesful ", " ", "success" ,);
    else swal("Cancelled: Didn't reset ", " ", "error" ,);
    }
function ourSubmit(){
     if(confirm("Are you sure you want to submit?"))
       swal("Success: form submitted successfully", " ", "success" ,);
    else swal("Cancelled: Didn't submit ", " ", "error" ,);
    }
/////// تم بحمد الله 