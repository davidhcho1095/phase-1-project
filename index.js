const dogbtn = document.getElementById("dogbtn");

async function getDog(){
    const resp = await fetch("https://dog.ceo/api/breeds/image/random");
    const data =  await resp.json();
    console.log(data);
    showdata(data.message);
}
getDog();

function showdata(dogimage){
    document.getElementById("dog").innerHTML = `<img src="${dogimage}" alt="">`
}

dogbtn.addEventListener("click",()=>{
getDog();
});

var post= document.getElementById("post");
post.addEventListener("click", function(){
    var commentBoxValue= document.getElementById("comment-box").value;
 
    var li = document.createElement("li");
    var text = document.createTextNode(commentBoxValue);
    li.appendChild(text);
    document.getElementById("unordered").appendChild(li);
 
});

const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

document.addEventListener("DOMContentLoaded", () => {

    const hearts = document.querySelectorAll("span.like-glyph")
    console.log(hearts)
  
    hearts.forEach(hearts => hearts.addEventListener("click", callB))
  
    function callB(hearts) {
      console.log(hearts.target)
      mimicServerCall()
      .then( () => {
        if (hearts.target.innerText === EMPTY_HEART) {
          hearts.target.classList.add('activated-heart')
          hearts.target.innerText = FULL_HEART
        }
        else {
          hearts.target.classList.remove('activated-heart')
            hearts.target.innerText = EMPTY_HEART
        }
      })
      .catch(() => {
        const errorMess = document.getElementById("modal")
        console.log(errorMess)
        errorMess.className = "show"
  
        setTimeout(() => {
          const errorMess = document.getElementById("modal")
          console.log(errorMess)
          errorMess.className ="hidden"}, 3000)}
      )}
    })