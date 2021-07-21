
 
$(document).ready(function(){
  let emailError=true;
  let nameError=true;
  let contactError=true;

  $('#email_Err').hide();
  $("#inputEmail").keyup(function(){
   validateEmail();
  });

  $('#name_Err').hide();

  $("#inputName").keyup(function(){
    validateName();
   });

  $('#contact_Err').hide();

    $("#inputContact").keyup(function(e){
    var keyCode=e.which;
    validateContact(keyCode);
   });


function validateEmail()
{
  let email=$('#inputEmail').val();
  var emailRegx=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if(email==null || email=="")
  {
    $('#email_Err').show();
    $('#email_Err').html("*email required");
    $("#inputEmail").css("border", "1px solid red");
    emailError=false;
    return false;
  }
  else if(! email.match(emailRegx)){

    $('#email_Err').show();
    $('#email_Err').html("**enter valid email");
    $("#inputEmail").css("border", "1px solid red");
    emailError=false;
    return false;

    
  }
  else{
    $('#email_Err').hide();
    $("#inputEmail").css("border","1px solid #ced4da");
    emailError=true;
   return true;

  }

}
function validateName()
{
  let name=$('#inputName').val();
  let strName=name.charAt(0);
  var nameRegx=/[a-zA-Z]+(\s+[-a-zA-Z-()]+)*$/;
 // var nameRegx=/^[a-zA-Z ]{2,30}$/;

  if(name==null || name=="")
  {
    $('#name_Err').show();
    $('#name_Err').html("*name required");
    $("#inputName").css("border", "1px solid red");
    nameError=false;
    return false;
  }
   
  if(! name.match(nameRegx)){

    $('#name_Err').show();
    $('#name_Err').html("**only alphabets allowed");
    $("#inputName").css("border", "1px solid red");
    nameError=false;
    return false;

    
  }
  else{
    $('#name_Err').hide();
    nameError=true;
    $("#inputName").css("border","1px solid #ced4da");
   return true;

  }
}

function validateContact(keyCode)
{

  let contact=$('#inputContact').val();
  var contactRegx=/^\d{10}$/
  if(contact==null || contact =='')
  {
    $('#contact_Err').show();
    $('#contact_Err').html("*contact no: required");
    $("#inputContact").css("border", "1px solid red");
    contactError=false;
    return false;
  }

  else if((keyCode != 8 || keyCode ==32 ) && (keyCode < 48 || keyCode > 57))
  {
    
      $('#contact_Err').show();
      $('#contact_Err').html("**Only numbers allowed ");
      $('#inputContact').val($('#inputContact').val().replace(/[^0-9]/g, ''))
      $("#inputContact").css("border", "1px solid red");
    contactError=false;
      return false;
    
  }
  else if(contact.length <10)
  {
     $('#contact_Err').show();
      $('#contact_Err').html("**Conatct no: should be 10 digits");
         $("#inputContact").css("border", "1px solid red");
      contactError=false;
      return false;
  }
  
  else{


    if(contact.length > 10)
    {
      $('#contact_Err').show();
      $('#contact_Err').html("**Contact no: should not exceed 10 digits");
      $("#inputContact").css("border", "1px solid red");
      contactError=false;
      return false;
    }
    else{
    $('#contact_Err').hide();
    contactError=true;
    $("#inputContact").css("border","1px solid #ced4da");
   return true;
    }

  }
}
$('#submit_btn').click(function () {
  validateName();
  validateEmail();
  validateContact();
  if ((nameError == true) &&
      (emailError == true) &&  
      (contactError == true)) {
      return true;
  } else {
      alert("Please fill the details")
      return false;
  }
});


});



