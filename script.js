
  var validName;
  var validEmail;
  var validContact;

function validateName(){
  
    var name=document.getElementById("inputName").value;
    var nameError=document.getElementById("name_Err");
    var nameRegx=/^[a-zA-Z]+(\s+[-a-zA-Z-()]+)*$/;
    validName=false;
  if(name==null || name.length <1){
    validName=false;
    nameError.innerHTML="*required";
  }else if(name.match(nameRegx)){
    nameError.innerHTML="";
    validName=true;
  }else{
    nameError.innerHTML="*invalid";
    validName=false;
  }

}


function validateEmail(){
  validEmail=false
    var email=document.getElementById("inputEmail").value;
    var emailError=document.getElementById("email_Err");
    var emailRegx=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if(email==null || email==""){
    validEmail=false;
    emailError.innerHTML="*required";
  }else if(email.match(emailRegx)){
    emailError.innerHTML="";
    validEmail=true;
  }else{
    emailError.innerHTML="*invalid";
    validEmail=false;
  }
}

function validateContact(){
  validContact=false;
    var contact=document.getElementById("inputContact").value;
    var contactError=document.getElementById("contact_Err");
    var contactRegx=/^\d{10}$/

  if(contact==null || contact==""){
    validContact=false;
    contactError.innerHTML="*required";
  }
  else if(contact.match(contactRegx)){
    contactError.innerHTML="";
    validContact=true;
  }else
  {
    contactError.innerHTML="*invalid";
    validContact=false;
  }
}
// function validateForm()
// {
//     if (validate.name== false)
//     {
//       nameError.innerHTML="required";
//       return false;
//     }
//     else if(validate.email==false) {
//       emailError.innerHTML="*required";

//     }
//     else if(validate.contact==false)
//     {
//       mobileError.innerHTML="*required";
//     }
//     else
//     {
//       return true;
//     }
// }
