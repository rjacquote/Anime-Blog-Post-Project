/* Posts Page JavaScript */

"use strict";
// token 

let loginData =JSON.parse(window.localStorage.getItem('login-data'));
console.log(loginData.token)
// dom nodes 
let searchBtn =  document.getElementById('searchBtn');
let searchEng = document.getElementById('searchEng');
console.log(searchEng)
let tableEle = document.getElementById('content');
let tableEle2 = document.getElementById('content2');
// let numLikes ;



// fetches 

        // declaring endpoints 
        let postsEnd = 'https://microbloglite.herokuapp.com/api/posts';
        let likeEnd = 'https://microbloglite.herokuapp.com/api/likes';
        let userEnd = 'https://microbloglite.herokuapp.com/api/users';

    function contentDisplay (){
        fetch(postsEnd,{
            method: 'GET',
            headers: {
            'Authorization': `Bearer ${loginData.token}`
            }
        })
        .then(response =>response.json())
        .then(data =>{
            console.log('it works');
            // console.log(data);

            //Display Data 
            data.filter((info)=>{

                let likes = info.likes.length;
                // console.log(likes)

                tableEle.innerHTML += `
            
                <tr>
                <th>UserName</th>
                <th>Posts</th>
                <th>Time</th>

                </tr>
                <tr>
                <td>${info.username}</td>
                <td>${info.text}</td>
                <td>${info.createdAt}</td>

                <p id= "postIds"></p>
            
                <div>
                <p class="likes">${likes}</p>
                <button type="submit" id="likesBtn"  onclick="incrementLikes('${info._id}')"> Like </button >

            
                </div>
                <br>

                <div>
                <span id="dislikes"></span>
                <button type="submit" id="dislikesBtn" onclick="deleteLikes('${info._id}')"> Dislike </button>
                
                </div>
                <br>

                </tr>

                </tr>
            
                `;
       
    
            
            })

        
    
        })

     }
    contentDisplay();

    // likes and dislikes

    function incrementLikes(postId){
        console.log(postId)
        console.log('yup')
            fetch(likeEnd,{
                method: 'POST',
                body: JSON.stringify({
                    postId: postId
                  }),
                headers:{
                    'Authorization': `Bearer ${loginData.token}`,
                    'Content-Type': 'application/json'
             
                }
            
            })
            .then(response => response.json())
            .then(postsLikes => {
                console.log(postsLikes)
              getLikes(postId);

            })
            .catch (() => {
                
             })
     

    }

    function getLikes (postId){
        console.log(likes)    
   
        // numLikestag.repl();
        fetch(`https://microbloglite.herokuapp.com/api/posts/${postId}`,{
            method: 'GET',
            headers: {
                Authorization: `Bearer ${loginData.token}`
            }
        })
        .then(response => response.json())
        .then(conLikes => {
            console.log(conLikes)
            let numLikes = document.getElementById('likes').textContent;
            let numLikestag = document.getElementsByClassName('likes')
            // numLikes.replace();
           let listLikes = conLikes.likes

                
                console.log(numLikes)
                console.log(listLikes)
      
                let lenLikes =parseInt(listLikes.length);
                console.log(lenLikes)
                let addLikes =lenLikes+1;
                console.log(addLikes)
               numLikes= addLikes;
               console.log(numLikestag)
               numLikestag.replaceChildren(`${numLikes}`);
               console.log(numLikes)
               
            
           
         
       
          
                
         
       
        })
    }
    function deleteLikes(postId){
        fetch(`https://microbloglite.herokuapp.com/api/posts/${postId}`,{
            method: 'GET',
            headers: {
                Authorization: `Bearer ${loginData.token}`
            }
        })
        .then(response => response.json())
        .then(deleteLikes => {
            console.log(deleteLikes)
            // deleteLikes(postId);

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
       
            fetch(`https://microbloglite.herokuapp.com/api/posts/?username=${searchEng.value}`,{
                method: 'GET',
                headers:{
                    Authorization: `Bearer ${loginData.token}`
                }
            })
            .then(response => response.json())
            .then(posts =>{
                console.log(posts.length)
                //display no post when if the user has no post 
                if(!posts.length ){
                    console.log('hey')
                    tableEle.replaceChildren()
                    tableEle.innerHTML = '<h3> No Post</h3>'
                }
                else {
                    tableEle.replaceChildren()
                    posts.filter((post)=>{
                                
                        
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
                                
                    
        
                
                })
        }
              
                 
                    

            
    })
            
    
    
}

