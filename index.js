const dogbtn = document.getElementById("dogbtn");
const catbtn =  document.getElementById("catbtn");

async function getDog(){
    const resp = await fetch("https://dog.ceo/api/breeds/image/random");
    const data =  await resp.json();
    console.log(data);
    showdata(data.message);
}
getDog();

function showdata(dogimage){
    document.getElementById("dog").innerHTML = `
    <img src="${dogimage}" alt="">
    `
}


dogbtn.addEventListener("click",()=>{
getDog();
});
