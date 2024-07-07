const togglePassword = document.querySelector('#togglePassword');
// console.log(togglePassword);
const password = document.querySelector('#userpassword');
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
const cpassword = document.querySelector('#usercpassword');

togglecPassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = cpassword.getAttribute('type') === 'password' ? 'text' : 'password';
    console.log(type);
    cpassword.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
    console.log("Changed")
});

var fn, ln, gm, pn, pw, cpw, rege

function verifyFirstName(){
    fn = document.getElementById("userfirstname").value;
    if(fn == ""){
        document.getElementById("userfirstnamemessage").innerHTML = "Cannot leave this field empty. Please fill it";  
        console.log("This is first name")
        return false;
    }
    else{
        document.getElementById("userfirstnamemessage").innerHTML=""
    }
}

function verifyLastName(){
    ln = document.getElementById("userlastname").value;
    if(ln == ""){
        document.getElementById("userlastnamemessage").innerHTML = "Cannot leave this field empty. Please fill it";  
        console.log("This is last name")
        return false;
    }
    else{
        document.getElementById("userlastnamemessage").innerHTML=""
    }
}

function verifyGmail(){
    const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");

    gm = document.getElementById("usergmail").value;
    if(gm == ""){
        document.getElementById("usergmailmessage").innerHTML = "Cannot leave this field empty. Please fill it";  
        console.log("This is last name")
        return false;
    }
    else{
        document.getElementById("usergmailmessage").innerHTML=""
    }
    
    if(emailRegex.test(gm) == false){
        document.getElementById("usergmailmessage").innerHTML = "Invalid gmail format.Please check and enter again";  
        console.log("Invalid gmail")
        return false;
    }
    else{
        document.getElementById("usergmailmessage").innerHTML=""
    }
}

function verifyPhoneNumber(){
    pn = document.getElementById("userphonenumber").value;
    if(pn == ""){
        document.getElementById("userphonenumbermessage").innerHTML = "Cannot leave this field empty. Please fill it";  
        console.log("This is last name")
        return false;
    }
    else{
        document.getElementById("userphonenumbermessage").innerHTML=""
    }
    
    if(pn.length > 10 || pn.length < 10){
        document.getElementById("userphonenumbermessage").innerHTML = "Phone number having less than 10 characters. Check and fill again";  
        return false;
    }
    else{
        document.getElementById("userphonenumbermessage").innerHTML=""
    }
}

function verifyPassword() {  
    // verifyFirstName()
    // verifyLastName()
    // verifyGmail()
    // verifyPhoneNumber()

    pw = document.getElementById("userpassword").value;   
    //check empty password field  
    if(pw == "") {  
        document.getElementById("userpasswordmessage").innerHTML = "Fill the password please!";  
        return false;  
    }  
    else{
        document.getElementById("userpasswordmessage").innerHTML=""
    }  
    
    //minimum password length validation  
    if(pw.length < 8) {  
        document.getElementById("userpasswordmessage").innerHTML = "Password length must be atleast 8 characters";  
        return false;  
    }
    else{
        document.getElementById("userpasswordmessage").innerHTML=""
    }  
    
    //maximum length of password validation  
    if(pw.length > 15) {  
        document.getElementById("userpasswordmessage").innerHTML = "Password length must not exceed 15 characters";  
        return false;  
    }
    else{
        document.getElementById("userpasswordmessage").innerHTML=""
    }
} 

// Code for validating the confirm password
function verifycPassword() {  
    pw = document.getElementById("userpassword").value;   
    cpw = document.getElementById("usercpassword").value;   
    //check empty password field  
    if(pw == "") {  
        document.getElementById("usercpasswordmessage").innerHTML = "Fill the password please!";  
        return false;  
    }  
    else{
        document.getElementById("usercpasswordmessage").innerHTML=""
    }  
     
   //minimum password length validation  
   if(pw.length < 8) {  
       document.getElementById("usercpasswordmessage").innerHTML = "Password length must be atleast 8 characters";  
       return false;  
    }  
    else{
        document.getElementById("usercpasswordmessage").innerHTML=""
    }  
    
    //maximum length of password validation  
    if(pw.length > 15) {  
        document.getElementById("usercpasswordmessage").innerHTML = "Password length must not exceed 15 characters";  
        return false;  
    }
    else{
        document.getElementById("usercpasswordmessage").innerHTML=""
    }  
    
    if(pw != cpw){
        document.getElementById("userfinalmessage").innerHTML = "Both passpwords are not matching, check the entered passwords";
        return false;  
    }
    else {  
        document.getElementById("userfinalmessage").innerHTML = "";
    }    
}

function verifyUGmail(){
    let gml = document.getElementById("usergmail").value;
    if(gml == ""){
        document.getElementById("usergmailmessage").innerHTML = "Cannot leave this field empty. Please fill it";  
        console.log("This is last name")
        return false;
    }
    else{
        document.getElementById("usergmailmessage").innerHTML=""
    }
}

function verifyULogInPassword(){
    // verifyUGmail()
    let pswd = document.getElementById("userpassword").value;   
    //check empty password field  
    if(pswd == "") {  
        document.getElementById("userpasswordmessage").innerHTML = "Fill the password please!";  
        return false;  
    }  
    else{
        document.getElementById("userpasswordmessage").innerHTML=""
    }  
    
    //minimum password length validation  
    if(pswd.length < 8) {  
       document.getElementById("userpasswordmessage").innerHTML = "Password length must be atleast 8 characters";  
       return false;  
    }
    else{
        document.getElementById("userpasswordmessage").innerHTML=""
    }  
    
    //maximum length of password validation  
    if(pswd.length > 15) {  
        document.getElementById("userpasswordmessage").innerHTML = "Password length must not exceed 15 characters";  
        return false;  
    }
    else{
        document.getElementById("userpasswordmessage").innerHTML=""
    }
}

function show(){
    document.getElementById("report").style.display="contents";
}

function reportValidate(){
    let filename = document.getElementById("filename").value;
    if(filename == ""){
        document.getElementById("filenamemessage").innerHTML = "File name cannot be empty";
        return false;
    }
    else{
        document.getElementById("filenamemessage").innerHTML = "";
    }
    if(filename.length > 20){
        document.getElementById("filenamemessage").innerHTML = "file name is too long";
        return false;
    }
    else{
        document.getElementById("filenamemessage").innerHTML = "";
    }
}

function patientNameValidate(){
    let patientname = document.getElementById("patientname").value;
    if(patientname == ""){
        document.getElementById("patientnamemessage").innerHTML = "Name cannot be empty.Please enter a name";
        return false;
    }
    else{
        document.getElementById("patientnamemessage").innerHTML = "";
    }
}


function verifyPFirstName(){
    fn = document.getElementById("patientfirstname").value;
    if(fn == ""){
        document.getElementById("patientfirstnamemessage").innerHTML = "Cannot leave this field empty. Please fill it";  
        return false;
    }
    else{
        document.getElementById("patientfirstnamemessage").innerHTML=""
    }
    if(fn.length > 15){
        document.getElementById("patientfirstnamemessage").innerHTML = "First name is too long";  
        return false;
    }
    else{
        document.getElementById("patientfirstnamemessage").innerHTML=""
    }
}

function verifyPLastName(){
    ln = document.getElementById("patientlastname").value;
    if(ln == ""){
        document.getElementById("patientlastnamemessage").innerHTML = "Cannot leave this field empty. Please fill it";  
        return false;
    }
    else{
        document.getElementById("patientlastnamemessage").innerHTML=""
    }
}

function verifyPPhoneNumber(){
    pn = document.getElementById("patientphonenumber").value;
    if(pn == ""){
        document.getElementById("patientphonenumbermessage").innerHTML = "Cannot leave this field empty. Please fill it";  
        return false;
    }
    else{
        document.getElementById("patientphonenumbermessage").innerHTML=""
    }
    if(pn.length <10){
        document.getElementById("patientphonenumbermessage").innerHTML = "Invalid mobile number. Please check and enter again";  
        return false;    
    }
    else{
        document.getElementById("patientphonenumbermessage").innerHTML=""
    }
}

function verifyPAge(){
    let age;
    age = document.getElementById("patientage").value;
    if(age == ""){
        document.getElementById("patientagemessage").innerHTML = "Cannot leave this field empty. Please fill it";  
        return false;
    }
    else{
        document.getElementById("patientagemessage").innerHTML=""
    }
    if(age > 100 || age <= 0){
        document.getElementById("patientagemessage").innerHTML = "Invalid age. Please check and enter again";  
        return false
    }
    else{
        document.getElementById("patientagemessage").innerHTML = "";  
    }
}

function verifyPGmail(){
    verifyPFirstName()
    verifyPLastName()
    verifyPPhoneNumber()
    // verifyPAge()
    let gmail;
    const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");

    gmail = document.getElementById("patientgmail").value;
    if(gmail == ""){
        document.getElementById("patientgmailmessage").innerHTML = "Cannot leave this field empty. Please fill it";  
        return false;
    }
    else{
        document.getElementById("patientgmailmessage").innerHTML=""
    }
    
    if(emailRegex.test(gmail) == false){
        document.getElementById("patientgmailmessage").innerHTML = "Invalid gmail format.Please check and enter again";  
        console.log("Invalid gmail")
        return false;
    }
    else{
        document.getElementById("patientgmailmessage").innerHTML=""
    }
}