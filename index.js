const dogbtn = document.getElementById("dogbtn");

async function getDog(){
    const resp = await fetch("https://dog.ceo/api/breeds/image/random");
    const data =  await resp.json();
    console.log(data);
    showdata(data.message);
}
getDog();

function showdata(dogimage){
    document.getElementById("dog").innerHTML = `<img src="${dogimage}">`
}

dogbtn.addEventListener("mouseover",() => {
getDog();
});

const post = document.getElementById("post");
post.addEventListener("click", function() {
    const commentBoxValue = document.getElementById("comment-box").value;
    const li = document.createElement("li");
    const text = document.createTextNode(commentBoxValue);
    li.appendChild(text);
    document.getElementById("unordered").appendChild(li);
});

document.getElementById('dogbtn').addEventListener('mouseover', () => {
  alert('Woof!')
})
