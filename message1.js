window.addEventListener('load',()=>{
    var params=(new URL(document.location)).searchparams;
    var name=params.get('uname');
    document.getElementById("result-name").innerHTML=uname;
})