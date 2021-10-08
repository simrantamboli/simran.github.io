//Writing Function to validate the Name and Email
var states = new Map();

states.set(100, 'Andhra Pradesh')
states.set(101, 'Assam,Bihar');
states.set(102, 'Chhattisgarh');
states.set(103, 'Goa');
states.set(104, 'Gujarat');
states.set(105, ' Haryana');
states.set(106, 'Himachal Pradesh');
states.set(107, 'Jammu & Kashmir');
states.set(108, 'Jharkhand');
states.set(109, 'Karnataka');
states.set(110, 'Kerala');
states.set(111, 'Madhya Pradesh');
states.set(112, 'Maharashtra');
states.set(113, ' Manipur');
states.set(114, 'Meghalaya');
states.set(115, ' Mizoram');
states.set(116, 'Nagaland');
states.set(117, 'Orissa');
states.set(118, 'Punjab');
states.set(119, 'Rajasthan');
states.set(120, 'Sikkim');
states.set(121, 'Tamil Nadu');
states.set(122, 'Tripura');
states.set(123, 'Uttarakhand');
states.set(124, 'Uttar Pradesh');
states.set(125, 'West Bengal');
states.set(130, 'Puducherry');
states.set(131, 'Andaman & Nikobar');
states.set(132, 'Chandigarh');
states.set(133, 'Nagar Haveli');
states.set(134, 'Daman');
states.set(135, ' Lakshadweep');
states.set(135, 'Daman ');
states.set(135, ' Dadra');


function validate()
{   var firstname='';
    var lastname='';
    var name= document.getElementById("uname").value;
    var emailid=document.getElementById("email").value;
    var phnum=document.getElementById("phno").value;

//Name Field 

    var rgx=/([a-zA-z]{4}\s)([a-zA-Z]{4})$/;
    if(rgx.test(name))
    {
       document.getElementById("ibluser").innerHTML="Valid";
       document.getElementById("ibluser").style.visibility="visible";
       document.getElementById("ibluser").style.color="green";
       firstname = name.split(" ")[0];
       localStorage.setItem("txtFirstName",firstname);
       return true;
    }
    else{
        document.getElementById("ibluser").innerHTML="Invalid";
        document.getElementById("ibluser").style.visibility="visible";
        document.getElementById("ibluser").style.color="red";
        return false;
     }
     
   


    //Email field
    var regex = /^([a-zA-Z0-9\.]+)@([a-zA-Z0-9]+).([a-z]{2,20})$/;
   if(regex.test(emailid))
   {
    document.getElementById("iblemail").innerHTML="Valid";
    document.getElementById("iblemail").style.visibility="visible";
    document.getElementById("iblemail").style.color="green";
    return true;
   }
   else{
    document.getElementById("iblemail").innerHTML="Invalid";
    document.getElementById("iblemail").style.visibility="visible";
    document.getElementById("iblemail").style.color="red";
    return false; 
   }

 var state = document.getElementById("state").innerHTML;
 if(state.includes("Invalid")){
     return false; 
 } else {
     return true;
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


