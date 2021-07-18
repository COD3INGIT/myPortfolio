const validate={
    name:false,
    place:false,
    email:false,
    contact:false
}
  
function validateName(){
    var name=document.getElementById("inputName").value;
    var nameError=document.getElementById("name_Err");
    var nameRegx=/^[a-zA-Z]+(\s+[-a-zA-Z-()]+)*$/;

  if(name==null || name.length <1){
    validate.name=false;
    nameError.innerHTML="*required";
  }else if(name.match(nameRegx)){
    nameError.innerHTML="";
    validate.name=true;
  }else{
    nameError.innerHTML="*Invalid";
    validate.name=false;
  }

}


function validateEmail(){
    var email=document.getElementById("inputEmail").value;
    var emailError=document.getElementById("email_Err");
    var emailRegx=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if(email==null || email==""){
    validate.email=false;
    emailError.innerHTML="*required";
  }else if(email.match(emailRegx)){
    emailError.innerHTML="";
    validate.email=true;
  }else{
    emailError.innerHTML="*Invalid";
    validate.email=false;
  }
}

function validateContact(){
    var contact=document.getElementById("inputContact").value;
    var mobileError=document.getElementById("contact_Err");
    var contactRegx=/^\d{10}$/

  if(contact==null || contact==""){
    validate.contact=false;
    mobileError.innerHTML="*required";
  }else if(mobile.match(contactRegx)){
    mobileError.innerHTML="";
    validate.contact=true;
  }else{
    mobileError.innerHTML="*invalid";
    validate.contact=false;
  }
}
function validateForm()
{
    if (validate.name== false)
    {
      nameError.innerHTML="required";
      return false;
    }
    else if(validate.email==false) {
      emailError.innerHTML="*required";

    }
    else if(validate.contact==false)
    {
      mobileError.innerHTML="*required";
    }
    else
    {
      return true;
    }
}
