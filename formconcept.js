var statesList = ['Andhra Pradesh', 'Assam,Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jammu & Kashmir','Jharkhand','Karnataka',,'Kerala','Madhya Pradesh'
,'Maharashtra',' Manipur','Meghalaya',' Mizoram','Nagaland','Orissa','Punjab','Rajasthan','Sikkim','Tamil Nadu','Tripura','Uttarakhand','Uttar Pradesh','West Bengal','Puducherry','Andaman & Nikobar','Chandigarh','Nagar Haveli','Daman',' Lakshadweep','Daman ',' Dadra'];

var randomUnique = (range, count) => {
  let nums = new Map();
  let index = 0;
  while (nums.size < count) {
    nums.set(Math.floor(Math.random() * (range - 100 + 1) + 100), statesList[index++]);
  }
  return nums;
};
var index=0;
var states = randomUnique(999, 36);
console.log(states);
function validate()
{   
    var name= document.getElementById("uname").value;
    var emailid=document.getElementById("email").value;
    var isNameValid = name && document.getElementById("ibluser").innerHTML == "Valid";
    var isPhoneValid = !document.getElementById("state").innerHTML.includes("Invalid");
    var isEmailValid= emailid && document.getElementById("iblemail").innerHTML == "Valid";

    return isNameValid && isPhoneValid && isEmailValid;
}

function validateEmail(){
  var emailid=document.getElementById("email").value;
  //Email field
  var regex = /^([a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)$/;
  if(regex.test(emailid))
  {
   document.getElementById("iblemail").innerHTML="Valid";
   document.getElementById("iblemail").style.visibility="visible";
   document.getElementById("iblemail").style.color="green";
  }
  else{
   document.getElementById("iblemail").innerHTML="Invalid";
   document.getElementById("iblemail").style.visibility="visible";
   document.getElementById("iblemail").style.color="red";
  }
}

function validateName(){
  var firstname='';
  var name = document.getElementById("uname").value;

  //Name Field 
  var rgx=/^[a-zA-Z ]+$/;
  if(name.length > 4 && rgx.test(name))
  {
     document.getElementById("ibluser").innerHTML="Valid";
     document.getElementById("ibluser").style.visibility="visible";
     document.getElementById("ibluser").style.color="green";
     firstname = name.split(" ")[0];
     localStorage.setItem("txtFirstName",firstname);
     
  }
  else{
      document.getElementById("ibluser").innerHTML="Invalid";
      document.getElementById("ibluser").style.visibility="visible";
      document.getElementById("ibluser").style.color="red";
      
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
        var value = states.get(parseInt(second));
        if(value){
          state = provider+", "+value;
        }
    }
    if(third){
        __phone = __phone + ' - '+third;
    }
    document.getElementById("phno").value = __phone;
    document.getElementById("state").innerHTML = state;
}
    
    
}


