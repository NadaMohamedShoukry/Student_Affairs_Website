function our(){
  if(confirm("Are you sure you want to delete?"))
    swal("The student is deleted successfuly ", " ", "success" ,);
  else swal("The student deletion failed: You cancelled. ", " ", "error" ,);
  }