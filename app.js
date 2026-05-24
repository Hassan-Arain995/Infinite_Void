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
url:"https://manganato.gg"
},

{
name:"ManhuaUS",
url:"https://manhuaus.com"
},

{
name:"ManhwaZone",
url:"https://manhwazone.com"
}

];

function save(){

localStorage.setItem(
"mangas",
JSON.stringify(mangas)
);

localStorage.setItem(
"sites",
JSON.stringify(sites)
);

}


// ===== Manga =====

function addManga(){

let title=
prompt("Manga Title");

let link=
prompt("Reading Link");

let cover=
prompt("Cover Image URL");

let day=
prompt("Release Day");

if(title && link){

mangas.push({

title:title,
link:link,
cover:cover,
day:day,
read:false

});

save();

renderManga();

}

}


function renderManga(){

let list=
document.getElementById(
"mangaList"
);

list.innerHTML="";

if(mangas.length===0){

list.innerHTML=
"No Manga Yet";

return;

}

mangas.forEach(
(m,index)=>{

list.innerHTML +=`

<div class="mangaItem">

<img
src="${
m.cover||
'https://placehold.co/300x400'
}"
style="
width:100%;
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

<p>

${
m.read
?
"✅ Read"
:
"📖 Continue"
}

</p>

<button onclick="
window.open(
'${m.link}'
)
">
Read
</button>

<button onclick="
toggleRead(
${index}
)
">
Toggle Read
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

function toggleRead(index){

mangas[index].read=
!mangas[index].read;

save();

renderManga();

}

function deleteManga(index){

mangas.splice(
index,
1
);

save();

renderManga();

}



// ===== Sites =====

function addSite(){

let name=
prompt(
"Site Name"
);

let url=
prompt(
"Site URL"
);

if(name&&url){

sites.push({

name:name,
url:url

});

save();

renderSites();

}

}

function renderSites(){

let list=
document.getElementById(
"siteList"
);

list.innerHTML="";

sites.forEach(
(site,index)=>{

list.innerHTML+=`

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

<button onclick="
deleteSite(
${index}
)
">

Delete

</button>

</div>

`;

});

}

function moveUp(index){

if(index>0){

[
sites[index],
sites[index-1]

]=[

sites[index-1],
sites[index]

];

save();

renderSites();

}

}

function moveDown(index){

if(
index<
sites.length-1
){

[
sites[index],
sites[index+1]

]=[

sites[index+1],
sites[index]

];

save();

renderSites();

}

}

function deleteSite(index){

sites.splice(
index,
1
);

save();

renderSites();

}



// ===== Navigation =====

function showPage(id){

document
.querySelectorAll(
".page"
)
.forEach(
p=>p.classList.add(
"hidden"
)
);

document
.getElementById(
id
)
.classList.remove(
"hidden"
);

}

function clearData(){

localStorage.clear();

location.reload();

}

renderManga();

renderSites();
