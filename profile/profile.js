// document.getElementById("postBtn").addEventListener("click", postPost)
const postsEnd = 'https://microbloglite.herokuapp.com/api/posts';

let userPost = document.querySelector('#postBtn');
console.log(loginData.token)
const options = {
    method: "GET",
    headers: {
        Authorization: `Bearer ${loginData.token}`,
    }
};
let postJSON;

userPost.onclick = function sendPost() {
    let postText = document.getElementById("postBox").value;
    console.log(postText)
    if (postText == "") {
        alert('Error. Empty post.');
    }
    else {

        fetch(postsEnd, options, {
            method: "POST",
            headers: { "Authorization":`Bearer ${loginData.token}`,"Content-type": "application/json" },
            body: JSON.stringify({ text : `${postText}`})
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));

        // fetch('http://127.0.0.1:5500/posts', auth)
        // .then(response => response.json())
        // .then(data => data)
        // .catch(err => console.log(err));
        
    }

}
// function postPost() {
//     console.log("button work good")
//     let postText = document.getElementById("postBox").value
//     console.log(postText)
// }
// username = "RickyBobby"
// function getUsername() {
//     document.getElementById("username").innerHTML = username;
// }
// window.onload = getUsername()

// const loginData = getLoginData();

// const options = {
//     method: "GET",
//     headers: {
//         Authorization: `Bearer ${loginData.token}`,
//     },
// };


// console.log(options)

userPosts()
function userPosts() {
    //    let shownPosts = document.getElementById('shownPosts')
    //    for (let i = 0; i < 20; i++) {
    //    let showingPosts = document.createElement('th')
    //    shownPosts.appendChild(showingPosts).innerText = "The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal. [beep] A single lap should be completed each time you hear this sound. [ding] Remember to run in a straight line, and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start.";
    //    }

    let showPost = document.getElementById('showPosts');

    fetch(`${postsEnd}?username=${loginData.username}`, options)
        .then(response => response.json())
        .then(data => {

            //Display Data 
            for (let i = 0; i < data.length; i++) {
                // console.log('hey')
                let likes = data[i].likes.length;

                let post = document.createElement('li');
                post.innerText = `"${data[i].text}", created @ ${data[i].createdAt}, Likes: ${likes}`;
                showPost.appendChild(post);

            }
        })
}

// Function to get all users via fetch()
// function getAllUsers() {
//     // GET /api/users
//     const loginData = getLoginData();
//     const options = {
//         method: "GET",
//         headers: {
//             Authorization: `Bearer ${loginData.token}`,
//         },
//     };
//     // note: the api variable is defined in auth.js
//     fetch(api + "/api/users", options)
//         .then(response => response.json())
//         .then(users => {
//             // Do something with the users array...
//             console.log(users);
//         });
//     console.log("work")
// }
// getAllUsers()
// function logout() {
//     const loginData = getLoginData();
//     const options = {
//         method: "GET",
//         headers: {
//             Authorization: `Bearer ${loginData.token}`,
//         },
//     };
//     fetch(api + "/auth/logout", options)
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .finally(() => {
//             window.localStorage.removeItem("login-data");
//             window.location.assign("../index.html");
//         });
// }