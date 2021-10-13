var statesList = ['Andhra Pradesh', 'Assam,Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jammu & Kashmir','Jharkhand','Karnataka',,'Kerala','Madhya Pradesh'
,'Maharashtra',' Manipur','Meghalaya',' Mizoram','Nagaland','Orissa','Punjab','Rajasthan','Sikkim','Tamil Nadu','Tripura','Uttarakhand','Uttar Pradesh','West Bengal','Puducherry','Andaman & Nikobar','Chandigarh','Nagar Haveli','Daman',' Lakshadweep','Daman ',' Dadra'];

function validate()
{
   var name= document.getElementById("uname").value;
    var emailid=document.getElementById("email").value;
    var isNameValid = name && document.getElementById("lbluser").innerHTML == "Valid";
    var isPhoneValid = !document.getElementById("state").innerHTML.includes("Invalid");
    var isEmailValid= emailid && document.getElementById("lblemail").innerHTML == "Valid";
    
    return isNameValid  && isPhoneValid && isEmailValid; 
        
}

function validateName(){
    var firstname='';
    var name = document.getElementById("uname").value;
  
    //Name Field 
    var rgx=/[a-zA-Z ]+$/;
    if (name.trim().length > 4 && rgx.test(name))
    {
       document.getElementById("lbluser").innerHTML="Valid";
       document.getElementById("lbluser").style.visibility="visible";
       document.getElementById("lbluser").style.color="green";
      firstname = name.split(" ")[0];
      localStorage.setItem("txtFirstName",firstname);
    }
    else { 
        document.getElementById("lbluser").innerHTML="Invalid";
        document.getElementById("lbluser").style.visibility="visible";
        document.getElementById("lbluser").style.color="red";     
        
     }
         
}
function validateEmail(){
    var emailid=document.getElementById("email").value;
    //Email field
    var regex = /^([a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-zA-Z](?:[a-zA-Z-]*[a-zA-Z])?\.)+[a-zA-Z](?:[a-zA-Z-]*[a-zA-Z])?)$/;
    if(regex.test(emailid))
    {
     document.getElementById("lblemail").innerHTML="Valid";
     document.getElementById("lblemail").style.visibility="visible";
     document.getElementById("lblemail").style.color="green";
    }
    else{
     document.getElementById("lblemail").innerHTML="Invalid";
     document.getElementById("lblemail").style.visibility="visible";
     document.getElementById("lblemail").style.color="red";
    }
}
  
  function formatPhone(){    
    var __phone=document.getElementById("phno").value;
    var state='Invalid Number';
    var provider ="Invalid";
    if(__phone){
    var pt = /[\(\)\- - ]+/gi
    __phone = __phone.replace(pt, '');
    var first = __phone.substr(0,3);
    var second = __phone.substr(3,3);
    var third = __phone.substr(6,4);
    if(first){
        __phone = '('+first+')';
        var image = document.getElementById("provider");
        if (first >= 621 && first <= 799) {
            image.src="jio.png";
            provider ="Jio";
          }else if (first >= 801 && first <= 920) {
            image.src="idea.png";
            provider ="Idea";
          } else if (first >= 921 && first <= 999) {
            image.src="vodafone.png";
            provider ="Vodafone";
          }else{
            image.src="invalid.png";
          }
    }
    if(second){
        __phone = __phone + ' - '+second;
        if(second.length == 3){
          var value = Math.round(parseInt(second) / 27);
          state = provider+", "+statesList[value];
        }
    }
    if(third){
        __phone = __phone + ' - '+third;
    }
    document.getElementById("phno").value = __phone;
    document.getElementById("state").innerHTML = state;
    
    }
}
    
    
