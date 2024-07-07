const togglePassword = document.querySelector('#togglePassword');
// console.log(togglePassword);
const password = document.querySelector('#doctorpassword');
// console.log(password);

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    console.log(type);
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');          
    console.log("Changed")
});

// Code to hide and show the password
const togglecPassword = document.querySelector('#togglecPassword');
const cpassword = document.querySelector('#doctorcpassword');

togglecPassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = cpassword.getAttribute('type') === 'password' ? 'text' : 'password';
    console.log(type);
    cpassword.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
    console.log("Changed")
});

var dn, gm, pn, pw, cpw, rege

function verifyName(){
    dn = document.getElementById("doctorname").value;
    if(dn == ""){
        document.getElementById("doctornamemessage").innerHTML = "Cannot leave this field empty. Please fill it";  
        console.log("This is first name")
        return false;
    }
    else{
        document.getElementById("doctornamemessage").innerHTML=""
    }
}

function verifyGmail(){
    gm = document.getElementById("doctorgmail").value;
    if(gm == ""){
        document.getElementById("doctorgmailmessage").innerHTML = "Cannot leave this field empty. Please fill it";  
        console.log("This is last name")
        return false;
    }
    else{
        document.getElementById("doctorgmailmessage").innerHTML=""
    }
}

function verifyPhoneNumber(){
    pn = document.getElementById("doctorphonenumber").value;
    if(pn == ""){
        document.getElementById("doctorphonenumbermessage").innerHTML = "Cannot leave this field empty. Please fill it";  
        console.log("This is last name")
        return false;
    }
    else{
        document.getElementById("doctorphonenumbermessage").innerHTML=""
    }
}

function verifyPassword() {  
    verifyName()
    verifyGmail()
    verifyPhoneNumber()

    pw = document.getElementById("doctorpassword").value;   
    //check empty password field  
    if(pw == "") {  
        document.getElementById("doctorpasswordmessage").innerHTML = "Fill the password please!";  
        return false;  
    }  
    else{
        document.getElementById("doctorpasswordmessage").innerHTML=""
    }  
    
    //minimum password length validation  
    if(pw.length < 8) {  
       document.getElementById("doctorpasswordmessage").innerHTML = "Password length must be atleast 8 characters";  
       return false;  
    }
    else{
        document.getElementById("doctorpasswordmessage").innerHTML=""
    }  
    
    //maximum length of password validation  
    if(pw.length > 15) {  
        document.getElementById("doctorpasswordmessage").innerHTML = "Password length must not exceed 15 characters";  
        return false;  
    }
    else{
        document.getElementById("doctorpasswordmessage").innerHTML=""
    }
} 

// Code for validating the confirm password
function verifycPassword() {  
    cpw = document.getElementById("doctorcpassword").value;   
    //check empty password field  
    if(pw == "") {  
        document.getElementById("doctorcpasswordmessage").innerHTML = "Fill the password please!";  
        return false;  
    }  
    else{
        document.getElementById("doctorcpasswordmessage").innerHTML=""
    }  
     
   //minimum password length validation  
   if(pw.length < 8) {  
       document.getElementById("doctorcpasswordmessage").innerHTML = "Password length must be atleast 8 characters";  
       return false;  
    }  
    else{
        document.getElementById("doctorcpasswordmessage").innerHTML=""
    }  
    
    //maximum length of password validation  
    if(pw.length > 15) {  
        document.getElementById("doctorcpasswordmessage").innerHTML = "Password length must not exceed 15 characters";  
        return false;  
    }
    else{
        document.getElementById("doctorcpasswordmessage").innerHTML=""
    }  
    
    if(pw != cpw){
        document.getElementById("doctorfinalmessage").innerHTML = "Both passpwords are not matching, check the entered passwords";
        return false;  
    }
    else {  
        document.getElementById("doctorfinalmessage").innerHTML = "";
    }    
}

function verifyDGmail(){
    let gml = document.getElementById("doctorgmail").value;
    if(gml == ""){
        document.getElementById("doctorgmailmessage").innerHTML = "Cannot leave this field empty. Please fill it";  
        console.log("This is last name")
        return false;
    }
    else{
        document.getElementById("doctorgmailmessage").innerHTML=""
    }
}

function verifyDLogInPassword(){
    verifyDGmail()
    let pswd = document.getElementById("doctorpassword").value;   
    //check empty password field  
    if(pswd == "") {  
        document.getElementById("doctorpasswordmessage").innerHTML = "Fill the password please!";  
        return false;  
    }  
    else{
        document.getElementById("doctorpasswordmessage").innerHTML=""
    }  
    
    //minimum password length validation  
    if(pswd.length < 8) {  
       document.getElementById("doctorpasswordmessage").innerHTML = "Password length must be atleast 8 characters";  
       return false;  
    }
    else{
        document.getElementById("doctorpasswordmessage").innerHTML=""
    }  
    
    //maximum length of password validation  
    if(pswd.length > 15) {  
        document.getElementById("doctorpasswordmessage").innerHTML = "Password length must not exceed 15 characters";  
        return false;  
    }
    else{
        document.getElementById("doctorpasswordmessage").innerHTML=""
    }
}
