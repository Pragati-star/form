// math function for employee Id

   function empId() {
    var eid=`LPU${Math.floor(Math.random()*10000)}`
    var eid=document.getElementById(`eid`).value=eid;
   }

// onblur
function validatefname() {
    var fname=document.getElementById('firstname').value;
    if(fname.trim().length==0) {
        document.getElementById('fout').innerHTML="Please inter Your Name";
    } 
    else {
        document.getElementById('fout').innerHTML="";
        fname=fname.charAt(0).toUpperCase()+fname.slice(1).toLowerCase();
        document.getElementById('firstname').value-fname;
    }
}
// onclick

var showPassword=()=>{
    var pwd=document.getElementById('pwd')
    if(pwd.type=="password") {
        pwd.type="text"
    }
    else {
        pwd.type="password"
    }
}
// oninput

function validatePwd() {
    var pwd=document.getElementById('pwd').value;
    if(pwd.length<15) {
        if(pwd.length<8) {
            document.getElementById('pout').innerText="Minimum length of Password should be  8";
            document.getElementById('ppout').style.display="block";
            document.getElementById(ppout).style.backgroundColor="red";
    }
    else {
        if(pwd.length<11) {
            document.getElementById('pout').innerText="Weak password";
            document.getElementById('ppout').style.backgroundColor="orange";
        }
    }
}
else {
    document.getElementById('pout').innerText="Strong password";
    document.getElementById('ppout').style.backgroundColor="green";
}
}
// onchange

var validateCPwd=()=> {
    
}