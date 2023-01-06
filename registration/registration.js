window.onload = function (){
const api = "https://microbloglite.herokuapp.com/api/users"
const form = document.querySelector('form');

let fullName = document.getElementById('fullName');
let userName = document.getElementById('username');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmPassword');
// let submitBtn = document.getElementById('submitBtn');


let formJSON;


form.onsubmit = function getRegInfo(evt) {
    
    evt.preventDefault();

    if (confirmPassword.value != password.value) {
        alert('Error. Password entries do not match.');
    }
    else {
        
        formJSON = {
            "fullName": fullName.value,
            "username": userName.value,
            "password": password.value
        }
        console.log(formJSON);
        fetch(api, {
            method: "POST",
            body: JSON.stringify(formJSON),
            headers: { "Content-Type": "application/json; charset=UTF-8" }
        })
        .then(response => response.json())
        .then(_payload => {location.href = "../index.html"})
        .catch(err => console.log(err));
        // location.href="../index.html";
    }

}
}

// form.onsubmit = function getRegInfo(evt) {

//     if (confirmPassword.value != password.value) {
//         alert('Error. Password entries do not match.');
//     }
//     else {
//         evt.preventDefault();
        
//         formJSON = {
//             "fullName": fullName.value,
//             "username": userName.value,
//             "password": password.value
//         }
//         console.log(formJSON);
//         sendData();
//         //location.href="../index.html";
//     }

// }

// function sendData() {
//     fetch(api, {
//         method: "POST",
//         body: JSON.stringify(formJSON),
//         headers: { "Content-type": "application/json; charset= UTF-8" }
//     })
//         .then(response => response.json())
//         .then(json => {
//             let confirmMessage = document.getElementById('confirmationMessage');
//             confirmMessage.innerHTML = "User profile has been created";
//             console.log(confirmMessage);
//         })
//         .catch(err => {
//             console.log(err);
//             let confirmMessage = document.getElementById('confirmationMessage');
//             confirmMessage.innerHTML = "Unexpected Error";
//             console.log(confirmMessage);
//         })
// }
// }











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