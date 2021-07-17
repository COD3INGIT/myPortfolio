const validate={
    name:false,
    place:false,
    email:false,
    mobile:false
}
  
function validateName(){
    var name=document.getElementById("inputName").value
    var nameError=document.getElementById("name_Err")
    var elementAlp=/^[a-zA-Z]+(\s+[-a-zA-Z-()]+)*$/;

  if(name==null || name.length <1){
    validate.name=false;
    nameError.innerHTML="*required";
  }else if(name.match(elementAlp)){
    nameError.innerHTML="";
    validate.name=true;
  }else{
    nameError.innerHTML="*Invalid";
    validate.name=false;
  }

}

/*function validateplace(){
    var place=document.getElementById("place").value
    var placeError=document.getElementById('place-Error')
    var elementAlpa=/^[-a-zA-Z-()]+(\s+[-a-zA-Z-()]+)*$/

  if(place==null || place==""){
    validate.place=false;
    placeError.innerHTML="*Field cannot be Empty*";
  }else if(place.match(elementAlpa)){
    placeError.innerHTML="";
    validate.place=true;
  }else{
    placeError.innerHTML="*Enter alphabet only*";
    validate.place=false;
  }
}*/

function validateEmail(){
    var email=document.getElementById("inputEmail").value
    var emailError=document.getElementById("email_Err")
    var elementemail=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if(email==null || email==""){
    validate.email=false;
    emailError.innerHTML="*required";
  }else if(email.match(elementemail)){
    emailError.innerHTML="";
    validate.email=true;
  }else{
    emailError.innerHTML="*Invalid";
    validate.email=false;
  }
}

function validateContact(){
    var mobile=document.getElementById("inputContact").value
    var mobileError=document.getElementById("contact_Err")
    var elementmobile=/^\d{10}$/

  if(mobile==null || mobile==""){
    validate.mobile=false;
    mobileError.innerHTML="*required";
  }else if(mobile.match(elementmobile)){
    mobileError.innerHTML="";
    validate.mobile=true;
  }else{
    mobileError.innerHTML="*invalid";
    validate.mobile=false;
  }
}
function submitForm()
{
    if (validate.name == true && validate.email== true && validate.mobile ==true)
    {
        nameError.innerHTML="";
        emailError.innerHTML="";
        mobileError.innerHTML="";
        return;
    }
    else{
        nameError.innerHTML="required";
        emailError.innerHTML="adf";
        mobileError.innerHTML=" adsfa";
    }
}