let mangas =
JSON.parse(
localStorage.getItem("mangas")
) || [];

function addManga(){

let title=prompt("Manga name");
let link=prompt("Reading link");
let day=prompt("Release day");

if(title && link){

mangas.push({
title:title,
link:link,
day:day
});

saveData();
renderMangas();

}

}

function saveData(){

localStorage.setItem(
"mangas",
JSON.stringify(mangas)
);

}

function renderMangas(){

let list=
document.getElementById(
"mangaList"
);

list.innerHTML="";

if(mangas.length===0){

list.innerHTML=
"No manga yet";

return;

}

mangas.forEach((m,index)=>{

list.innerHTML += `

<div class="mangaItem">

<h3>${m.title}</h3>

<p>${m.day}</p>

<button onclick=
"window.open('${m.link}')">
Read
</button>

</div>

`;

});

}

renderMangas();
