document.getElementById("postBtn").addEventListener("click", postPost)

function postPost(){
    console.log("button work good")
    let postText = document.getElementById("postBox").value
    console.log(postText)
}
username="Slagathor"
function getUsername(){
    document.getElementById("username").innerHTML = username;
}
window.onload=getUsername()

let loginData = JSON.parse(window.localStorage.getItem("login-data"))
console.log(`login token ${loginData}`)
fetch('https://microbloglite.herokuapp.com/api/posts', {
    method: "POST",
    headers: {authorization: `bearing ${loginData.token}`}
})

userPosts()
function userPosts(){
   let shownPosts = document.getElementById('shownPosts')
   for (let i = 0; i < 5; i++) {
   let showingPosts = document.createElement('th')
   shownPosts.appendChild(showingPosts).innerText = "The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal. [beep] A single lap should be completed each time you hear this sound. [ding] Remember to run in a straight line, and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start.";
   }
}