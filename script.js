const  email=false;

const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
const err=document.getElementById("email_Err")
const emailInput = document.querySelector("input[name='email']".value);



function validateEmail(){
   if(  emailInput.value == "" || emailInput.value==null)
   {
       err.innerHTML ="*required "

   }
   else if( emailInput.match(re))
   {
       err.innerHTML="";
   }
   else {
       err.innerHTML="invalid email";
   }

       
   
}





