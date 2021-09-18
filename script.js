console.log("Workin");
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("error");
let validFirstName = false;
let validLastName = false;
let validEmail = false;
let validPassword = false;
firstName.addEventListener('blur',()=>{
    let error1 = document.getElementById("pname");
    let str = firstName.value;
    let regex = /^([a-zA-z]){3,10}$/
    console.log(regex, str);
    if(str.match(regex)){
        error1.style.visibility = 'hidden';
        console.log("your name valid")
        validFirstName = true;
    }
    else{
        error1.style.visibility = 'visible';
        console.log("your name is notvalid")
        validFirstName = false;
    }
    
})
lastName.addEventListener('blur', ()=>{
    let error2 = document.getElementById("laname");
    let str2 = lastName.value;
    let regex = /^([a-zA-z]){3,10}$/
    console.log(regex, str2);
    if(str2.match(regex)){
        error2.style.visibility = 'hidden';
        console.log("your name valid")
        validLastName = true;
    }
    else{
        error2.style.visibility = 'visible';
        console.log("your name is notvalid")
        validLastName = false;
    }
})
email.addEventListener('blur', ()=>{
    let error3 = document.getElementById("uemail");
    let str3 = email.value;
    let regex = /^([_0-9a-zA-z]+)@([a-zA-z]+)\.([a-zA-z])/;
    console.log(regex, str3);
    if(str3.match(regex)){
        error3.style.visibility = 'hidden';
        console.log("your email valid")
        validEmail = true;
    }
    else{
        error3.style.visibility = 'visible';
        console.log("your email is notvalid")
        validEmail = false;
    }
})
password.addEventListener('blur', ()=>{
    let error4 = document.getElementById("pass");
    let str4 = password.value;
    let regex =/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$/;
    
    console.log(regex, str4);
    if(!str4.match(regex)){
        error4.style.visibility = 'visible';
        console.log("your password not valid")
        validPassword = false;
    }
    else{
        error4.style.visibility = 'hidden';
        console.log("your password is valid")
        validPassword = true;
    }
    
});
let submit = document.getElementById("btn");
submit.addEventListener('click', (e)=>{
   console.log(validFirstName, validLastName, validEmail, validPassword);
    if(validFirstName === false && validLastName === false && validEmail === false && validPassword === false){
        e.preventDefault();
    }
    else{
        alert('Submitted Successfully')
    }
  
})
