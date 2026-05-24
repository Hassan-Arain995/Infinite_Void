let mangas=
JSON.parse(
localStorage.getItem(
"mangas"
)
) || [];

let sites=
JSON.parse(
localStorage.getItem(
"sites"
)
)||[

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
}

];

function save(){

localStorage.setItem(
"mangas",
JSON.stringify(
mangas
)
);

localStorage.setItem(
"sites",
JSON.stringify(
sites
)
);

}

function addManga(){

let title=
prompt(
"Manga title"
);

let link=
prompt(
"Manga link"
);

if(
title &&
link
){

mangas.push({

title:title,
link:link

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

mangas.forEach(
(m,index)=>{

list.innerHTML+=`

<div class="mangaItem">

<h3>
${m.title}
</h3>

<button onclick="
window.open(
'${m.link}'
)
">

Read

</button>

</div>

`;

});

}

function addSite(){

let name=
prompt(
"Site Name"
);

let url=
prompt(
"Site URL"
);

if(
name &&
url
){

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
(site)=>{

list.innerHTML+=`

<div class="mangaItem">

${site.name}

<button onclick="
window.open(
'${site.url}'
)
">

Open

</button>

</div>

`;

});

}

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
