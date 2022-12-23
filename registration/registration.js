let fullName = document.getElementById('fullName');
let userName = document.getElementById('username');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmPassword');
let submitBtn = document.getElementById('submitBtn');



function getRegInfo() {
    if (!(fullName.value) || !(userName.value) || !(password.value) || !(confirmPassword.value)) {
        alert('Error. Complete form please');
    } else {
        
    }
};













// function password () { 
//     let letters = /^[0-9a-zA-Z]+$/;
//     if(uadd.value.match(letters)) {
//         return true;
//     }
//     else {
//     alert('User address must have alphanumeric characters only');
//     uadd.focus();
//     return false;
//     }
// }