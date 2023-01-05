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
        // console.log(data);

        //Display Data 
        for (let i = 0; i < data.length; i++) {
            // console.log('hey')
            let postId =data[i]._id;
            console.log(postId)
            
            let likes = data[i].likes.length;

        

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

            <p id= "postIds">${postId} </p>
         
            <div>
            <span id="likes">${likes}</span>
            <button type = "submit" class="likesBtn" value = "${postId}" onclick= " incrementLikes()"> Like </button >

          
            </div>
            <br>

            <div>
            <span id="ltikes"></span>
            <input type="button" value="Dislike" id="dislikesBtn"  >
            </div>
            <br>

            </tr>

            </tr>
         
            `;
            // console.log(postId)
  
         
         
    }


    // return postId;
   
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
        // console.log(postId)
        console.log('yup')
        // let postIds = document.getElementById('postIds');
        // console.log( postIds)
        let letSee = ""
        console.log(letSee)
        letSee = document.getElementById('postIds').textContent;
        //  letSee = document.getElementsByTagName('p').length;
         console.log(letSee)
        // for (let i = 0; i < letSee.length; i++) {
        //    let idk= document.getElementById('postIds').textContent;
        //     return idk
        // }
        
      console.log(idk)
        // let letSee = '63b1c37d3c39b6c11b302872'
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
       
     
            function getLikes (){
                let numLikes = document.getElementById('likes');
                fetch(postsEnd,{
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${loginData.token}`
                    }
                })
                .then(response => response.json())
                .then(conLikes => {
                    console.log(conLikes)
                 
                    conLikes.filter((kk) =>{
                        console.log(kk.likes)
                        
                        let lenLikes = kk.likes.length;
                        let addLikes = Number(lenLikes+1);
                        console.log(addLikes)
                        numLikes.appendChild(addLikes)
                    })
               
                })
            }
       
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

