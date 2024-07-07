const togglePassword = document.querySelector('#togglePassword');
// console.log(togglePassword);
const password = document.querySelector('#receptionistpassword');
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
const cpassword = document.querySelector('#receptionistcpassword');

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
    dn = document.getElementById("receptionistname").value;
    if(dn == ""){
        document.getElementById("receptionistnamemessage").innerHTML = "Cannot leave this field empty. Please fill it";  
        console.log("This is first name")
        return false;
    }
    else{
        document.getElementById("receptionistnamemessage").innerHTML=""
    }
}

function verifyGmail(){
    gm = document.getElementById("receptionistgmail").value;
    if(gm == ""){
        document.getElementById("receptionistgmailmessage").innerHTML = "Cannot leave this field empty. Please fill it";  
        console.log("This is last name")
        return false;
    }
    else{
        document.getElementById("receptionistgmailmessage").innerHTML=""
    }
}

function verifyPhoneNumber(){
    pn = document.getElementById("receptionistphonenumber").value;
    if(pn == ""){
        document.getElementById("receptionistphonenumbermessage").innerHTML = "Cannot leave this field empty. Please fill it";  
        console.log("This is last name")
        return false;
    }
    else{
        document.getElementById("receptionistphonenumbermessage").innerHTML=""
    }
}

function verifyPassword() {  
    verifyName()
    verifyGmail()
    verifyPhoneNumber()

    pw = document.getElementById("receptionistpassword").value;   
    //check empty password field  
    if(pw == "") {  
        document.getElementById("receptionistpasswordmessage").innerHTML = "Fill the password please!";  
        return false;  
    }  
    else{
        document.getElementById("receptionistpasswordmessage").innerHTML=""
    }  
    
    //minimum password length validation  
    if(pw.length < 8) {  
       document.getElementById("receptionistpasswordmessage").innerHTML = "Password length must be atleast 8 characters";  
       return false;  
    }
    else{
        document.getElementById("receptionistpasswordmessage").innerHTML=""
    }  
    
    //maximum length of password validation  
    if(pw.length > 15) {  
        document.getElementById("receptionistpasswordmessage").innerHTML = "Password length must not exceed 15 characters";  
        return false;  
    }
    else{
        document.getElementById("receptionistpasswordmessage").innerHTML=""
    }
} 

// Code for validating the confirm password
function verifycPassword() {  
    cpw = document.getElementById("receptionistcpassword").value;   
    //check empty password field  
    if(pw == "") {  
        document.getElementById("receptionistcpasswordmessage").innerHTML = "Fill the password please!";  
        return false;  
    }  
    else{
        document.getElementById("receptionistcpasswordmessage").innerHTML=""
    }  
     
   //minimum password length validation  
   if(pw.length < 8) {  
       document.getElementById("receptionistcpasswordmessage").innerHTML = "Password length must be atleast 8 characters";  
       return false;  
    }  
    else{
        document.getElementById("receptionistcpasswordmessage").innerHTML=""
    }  
    
    //maximum length of password validation  
    if(pw.length > 15) {  
        document.getElementById("receptionistcpasswordmessage").innerHTML = "Password length must not exceed 15 characters";  
        return false;  
    }
    else{
        document.getElementById("receptionistcpasswordmessage").innerHTML=""
    }  
    
    if(pw != cpw){
        document.getElementById("receptionistfinalmessage").innerHTML = "Both passpwords are not matching, check the entered passwords";
        return false;  
    }
    else {  
        document.getElementById("receptionistfinalmessage").innerHTML = "";
    }    
}

function verifyDGmail(){
    let gml = document.getElementById("receptionistgmail").value;
    if(gml == ""){
        document.getElementById("receptionistgmailmessage").innerHTML = "Cannot leave this field empty. Please fill it";  
        console.log("This is last name")
        return false;
    }
    else{
        document.getElementById("receptionistgmailmessage").innerHTML=""
    }
}

function verifyDLogInPassword(){
    let pswd = document.getElementById("receptionistpassword").value;   
    //check empty password field  
    if(pswd == "") {  
        document.getElementById("receptionistpasswordmessage").innerHTML = "Fill the password please!";  
        return false;  
    }  
    else{
        document.getElementById("receptionistpasswordmessage").innerHTML=""
    }  
    
    //minimum password length validation  
    if(pswd.length < 8) {  
       document.getElementById("receptionistpasswordmessage").innerHTML = "Password length must be atleast 8 characters";  
       return false;  
    }
    else{
        document.getElementById("receptionistpasswordmessage").innerHTML=""
    }  
    
    //maximum length of password validation  
    if(pswd.length > 15) {  
        document.getElementById("receptionistpasswordmessage").innerHTML = "Password length must not exceed 15 characters";  
        return false;  
    }
    else{
        document.getElementById("receptionistpasswordmessage").innerHTML=""
    }
}


