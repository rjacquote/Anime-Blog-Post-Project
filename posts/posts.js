/* Posts Page JavaScript */

"use strict";
// token 
let loginData =JSON.parse(window.localStorage.getItem('login-data'))

console.log(loginData.token)

// event listeners 
let tableEle = document.getElementById('content');

// fetches 
    fetch('https://microbloglite.herokuapp.com/api/posts',{
        method: 'GET',
        headers: {
            Authorization: `Bearer ${loginData.token}`
        }
    })
    .then(response =>response.json())
    .then(data =>{
        console.log('it works');
        console.log(data);
      
        for (let i = 0; i < data.length; i++) {
        
            tableEle.innerHTML += `
         
            <tr>
            <th>UserName</th>
            <th>Posts</th>
            <th>Time</th>
            </tr>
            <tr>
            <td>${data[i].username}</td>
            <td>${data[i].text}</td>
            <td>${data[i].createdAt}</td>
            </tr>
         
            `;
        }
    })
