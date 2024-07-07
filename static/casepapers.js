var fn, ln, gm, pn, age, gen, bg;

function verifyFirstName(){
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

function verifyLastName(){
    ln = document.getElementById("patientlastname").value;
    if(ln == ""){
        document.getElementById("patientlastnamemessage").innerHTML = "Cannot leave this field empty. Please fill it";  
        return false;
    }
    else{
        document.getElementById("patientlastnamemessage").innerHTML=""
    }
}

function verifyPhoneNumber(){
    pn = document.getElementById("patientphonenumber").value;
    if(pn == ""){
        document.getElementById("patientphonenumbermessage").innerHTML = "Cannot leave this field empty. Please fill it";  
        return false;
    }
    else{
        document.getElementById("patientphonenumbermessage").innerHTML=""
    }
}

function verifyAge(){
    age = document.getElementById("patientage").value;
    if(age == ""){
        document.getElementById("patientagemessage").innerHTML = "Cannot leave this field empty. Please fill it";
        return false;
    }
    else{
        document.getElementById("patientagemessage").innerHTML = "";
    }
}

