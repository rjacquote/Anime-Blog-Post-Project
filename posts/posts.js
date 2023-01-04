/* Posts Page JavaScript */

"use strict";
// token 

let loginData =JSON.parse(window.localStorage.getItem('login-data'));
// dom nodes 
let searchBtn =  document.getElementById('searchBtn');
let searchEng = document.getElementById('searchEng');
let tableEle = document.getElementById('content');
let tableEle2 = document.getElementById('content2');




console.log(searchEng)

console.log(loginData.token)



// fetches 
    // declaring endpoints 
    let postsEnd = 'https://microbloglite.herokuapp.com/api/posts';
    let likEnd = 'https://microbloglite.herokuapp.com/api/likes';
    function conetentDisplay (){
    fetch(postsEnd,{


console.log(loginData.token)



// fetches 

    // declaring endpoints 
    let postsEnd = 'https://microbloglite.herokuapp.com/api/posts';
    let likeEnd = 'https://microbloglite.herokuapp.com/api/likes';
    let userEnd = 'https://microbloglite.herokuapp.com/api/users'
    function conetentDisplay (){
    fetch(postsEnd,{
        method: 'GET',
        headers: {
            Authorization: `Bearer ${loginData.token}`
        }
    })
    .then(response =>response.json())
    .then(data =>{
        console.log('it works');
        console.log(data);

        //Display Data 
        for (let i = 0; i < data.length; i++) {
            // console.log('hey')
            let postId =data[i]._id;
            console.log(postId)
            
            let likes = data[i].likes.length;

        }

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

            <td id = "postIds">${postId} </td>
         
            <div>
            <span id="likes">${likes}</span>
            <button type = "submit" id="likesBtn" value ${postId} onclick= " incrementLikes()"> Like </button >

          
            </div>
            <br>

            <div>
            <span id="likes"></span>
            <input type="button" value="Dislike" id="dislikesBtn"  >
            </div>
            <br>

            </tr>

            </tr>
         
            `;
            // console.log(postId)
  
   
         
    }


    
   
 })
   
    }
    conetentDisplay();

//  })
//   I need to put my likes and search in another function (no nesting)!!!!!!
    // search 
 /* Kevin said do a fetch of usernames and create a dropdown 
            that will be option to filter through posts
            
            the way we were doing it was to complicated for this project (don't have the time)

    Here is his example code 
    fetch(api + `/api/posts/?username=${chosenUserName}`, options)
            .then(response => response.json())
            .then(posts => { console.log(posts) })

            */

    // event listener 
  
    // likes and dislikes

    function incrementLikes(){

        console.log('yup')


        let letSee = document.getElementById('likesBtn').value;
        console.log(letSee)
        
            let numLikes = document.getElementById('likes');
            likes ++;
            numLikes.innerText = likes;
            fetch(`https://microbloglite.herokuapp.com/api/likes`,{
                method: 'POST',
                body: JSON.stringify({
                    postId: letSee
                  }),
                headers:{
                    Authorization: `Bearer ${loginData.token}`,
                    'Content-Type': "application/json"
             
                }
            
            })
            .then(response => response.json())
            .then(postsLikes => {
                console.log(postsLikes)
        
            })
       
     

      
    }

 // search 

//  function searchDropdown(){
   
//  }

//  function searchTask () {

//         console.log('it works')
//         console.log(searchEng.value)

//             tableEle.replaceChildren();
       
//             fetch(`https://microbloglite.herokuapp.com/api/posts/?${username}`,{
//                 method: 'GET',
//                 headers:{
//                     Authorization: `Bearer ${loginData.token}`
//                 }
//             })
//             .then(response => response.json())
//             .then(posts =>{
//                 console.log(posts)
             
//                 tableEle2.innerHTML += `
//                 <tr>
//                 <th>UserName</th>
//                 <th>Posts</th>
//                 <th>Time</th>
    
//                 </tr>
//                 <tr>
//                 <td>${data[i].username}</td>
//                 <td>${data[i].text}</td>
//                 <td>${data[i].createdAt}</td>
               
           
//                 `;
//             })
            
    
    
// }


            </tr>
         
            `;
            // console.log(postId)
  
   
         
    }


    
   
 })
   
    }
    conetentDisplay();
    // let letSee = document.getElementById('likesBtn').value = postId;
    // console.log(letSee)

//  })
//   I need to put my likes and search in another function (no nesting)!!!!!!
    // search 
 /* Kevin said do a fetch of usernames and create a dropdown 
            that will be option to filter through posts
            
            the way we were doing it was to complicated for this project (don't have the time)

    Here is his example code 
    fetch(api + `/api/posts/?username=${chosenUserName}`, options)
            .then(response => response.json())
            .then(posts => { console.log(posts) })

            */

    // event listener 
  
    // likes and dislikes
        //dom nodes
            
            
          
    function incrementLikes(){

        console.log('yup')
  
        let postIds = document.getElementById('postIds');
        console.log( postIds)
        // let letSee = document.getElementById('likeBtn').value;
        let letSee = '63b1c06b3c39b6c11b3027fa'
            fetch(likeEnd,{
                method: 'POST',
                body: JSON.stringify({
                    postId: letSee
                  }),
                headers:{
                    Authorization: `Bearer ${loginData.token}`,
                    'Content-Type': "application/json"
             
                }
            
            })
            .then(response => response.json())
            .then(postsLikes => {
                console.log(postsLikes)
            
              getLikes()

            })
       
     

        
    }
    function getLikes (){
        fetch(postsEnd,{
            method: 'GET',
            headers: {
                Authorization: `Bearer ${loginData.token}`
            }
        })
        .then(response => response.json())
        .then(conLikes => {
            console.log(conLikes.likes)
            let numLikes = document.getElementById('likes');
            for (let i = 0; i < conLikes.length; i++) {
          
                let newLikes = conLikes[i].likes.length;
                newLikes ++;
                 numLikes.innerHTML += newLikes;
            }
          
        })
    }

 // search 

 function searchDropdown(){
    fetch(userEnd,{
        method: 'GET',
        headers:{
            Authorization: `Bearer ${loginData.token}`
        }
    })
    .then(response => response.json())
    .then( users =>{
        console.log(users)
   
        for(let i = 0; i< users.length ; i++){
        let opt = new Option (users[i].username);
        searchEng.appendChild(opt)
        }
        searchEng.addEventListener('change', searchTask)
    })

 }
searchDropdown()

 function searchTask () {

        console.log('it works')
        console.log(searchEng.value)

            tableEle.replaceChildren();
       
            fetch(`https://microbloglite.herokuapp.com/api/posts/?${searchEng.value}`,{
                method: 'GET',
                headers:{
                    Authorization: `Bearer ${loginData.token}`
                }
            })
            .then(response => response.json())
            .then(posts =>{
                console.log(posts)
                
            posts.filter((post)=>{
                          
                if(searchEng.value === post.username){
                    console.log(post)
       
                        console.log(post)
                            
                        
                        tableEle.innerHTML += 
                        `             
                        <tr>
                        <th>UserName</th>
                        <th>Posts</th>
                        <th>Time</th>
            
                        </tr>
                        <tr>
                        <td>${post.username}</td>
                        <td>${post.text}</td>
                        <td>${post.createdAt}</td>
                       
                        <div>
                        <span id="likes">${post.likes.length}</span>
                        <button type = "submit" id="likesBtn" onclick= " incrementLikes()"> Like </button >
                      
                        </div>
                        <br>
            
                        <div>
                        <span id="likes"></span>
                        <input type="button" value="Dislike" id="dislikesBtn"  >
                        </div>
                        <br>
            
                        `;
                        
            }
            //display no post when if the user has no post 
          else  {
            tableEle.replaceChildren()
             tableEle.innerHTML = `<h3>No Post</h3>`
          }

            })
              
                 
                    

            
            })
            
    
    
}

