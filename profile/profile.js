document.getElementById("postBtn").addEventListener("click", postPost)

function postPost(){
    console.log("button work good")
    let postText = document.getElementById("postBox").value
    console.log(postText)
}
username="Slagathor"
function getUsername(){
    for (let i = 0; i < 2; i++) {
    document.getElementById("username").innerHTML = username;
    }
}
window.onload=getUsername()