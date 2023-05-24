var id_error = document.getElementById("id");
function check_id() {
  var contant_id = document.getElementById("contant_id").value;
  contant_id = Number(contant_id);
  if (contant_id <= 0) {
    id_error.innerHTML = ' <i class="fa-solid fa-square-xmark"></i> ';
    return false;
  }
  else if (contant_id > 99999999)///Length 8
  {

    id_error.innerHTML = '<br/> <i class="fa-solid fa-square-xmark"></i>  max length is 8';
    return false;
  }
  id_error.innerHTML = '<i class="fa fa-check-circle" style="color:green;"></i>';
  return true;

};
//////////////////////
var firstname_error = document.getElementById("fname");
function isName() {
  var FN = document.getElementById("contant_fname").value;
  if (FN.length <= 2 || !FN.match(/^[a-zA-Z]+$/)) {
    firstname_error.innerHTML = ' <i class="fa-solid fa-square-xmark"></i>';
    return false;
  }

  firstname_error.innerHTML = '<i class="fa fa-check-circle" style="color:green;"></i>';
  return true;
};
var edit = document.getElementById('edit_error');
function VailedForm() {
  if (!isPassword() || !isEmail()) {
    edit.style.display = 'block';
    edit.innerHTML = 'Fix-Errors  ';
    setTimeout(function () { edit.style.display = 'none'; }, 3000);
    return false;

  };
  return true;
};