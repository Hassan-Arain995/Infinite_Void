// ===== Storage =====

let mangas = JSON.parse(
localStorage.getItem("mangas")
) || [];

let sites = JSON.parse(
localStorage.getItem("sites")
) || [

{
name:"MangaFire",
url:"https://mangafire.to"
},

{
name:"Comix",
url:"https://comix.to"
},

{
name:"Manganato",
url:"https://www.manganato.gg"
},

{
name:"ManhwaZone",
url:"https://manhwazone.com"
}

];


// ===== Save =====

function saveMangas(){

localStorage.setItem(
"mangas",
JSON.stringify(mangas)
);

}

function saveSites(){

localStorage.setItem(
"sites",
JSON.stringify(sites)
);

}


// ===== Add Manga =====

function addManga(){

let title=
prompt("Manga name");

let link=
prompt("Reading link");

let cover=
prompt(
"Cover image URL"
);

let day=
prompt(
"Release day"
);

if(title && link){

mangas.push({

title:title,
link:link,
cover:cover,
day:day

});

saveMangas();

renderMangas();

}

}


// ===== Render Manga =====

function renderMangas(){

let list=
document.getElementById(
"mangaList"
);

if(!list)return;

list.innerHTML="";

if(mangas.length===0){

list.innerHTML=
"No manga yet";

return;

}

mangas.forEach(
(m,index)=>{

list.innerHTML += `

<div class="mangaItem">

<img
src="${
m.cover ||
'https://placehold.co/300x400'
}"
width="100%"
style="
border-radius:10px;
margin-bottom:10px;
">

<h3>

${m.title}

</h3>

<p>

Release:
${m.day}

</p>

<button onclick="
window.open(
'${m.link}'
)
">

Read

</button>

<button onclick="
deleteManga(
${index}
)
">

Delete

</button>

</div>

`;

});

}


// ===== Delete Manga =====

function deleteManga(index){

mangas.splice(
index,
1
);

saveMangas();

renderMangas();

}



// ===== Add Site =====

function addSite(){

let name=
prompt(
"Site Name"
);

let url=
prompt(
"Site URL"
);

if(name && url){

sites.push({

name:name,
url:url

});

saveSites();

renderSites();

}

}



// ===== Render Sites =====

function renderSites(){

let list=
document.getElementById(
"siteList"
);

if(!list)return;

list.innerHTML="";

sites.forEach(
(site,index)=>{

list.innerHTML += `

<div class="mangaItem">

<h3>

${site.name}

</h3>

<button onclick="
window.open(
'${site.url}'
)
">

Open

</button>

<button onclick="
moveUp(
${index}
)
">

↑

</button>

<button onclick="
moveDown(
${index}
)
">

↓

</button>

</div>

`;

});

}



// ===== Sorting =====

function moveUp(index){

if(index>0){

[
sites[index],
sites[index-1]

]=[

sites[index-1],
sites[index]

];

saveSites();

renderSites();

}

}


function moveDown(index){

if(index<sites.length-1){

[
sites[index],
sites[index+1]

]=[

sites[index+1],
sites[index]

];

saveSites();

renderSites();

}

}



// ===== Navigation =====

function showPage(page){

let home=
document.querySelector(
".container"
);

let sitesPage=
document.getElementById(
"sitesPage"
);

home.style.display=
page==="home"
?
"block"
:
"none";

sitesPage.style.display=
page==="sites"
?
"block"
:
"none";

}


// ===== Start =====

renderMangas();

renderSites();
