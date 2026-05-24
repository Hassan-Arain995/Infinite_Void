// ===== Manga Storage =====

let mangas = JSON.parse(
localStorage.getItem("mangas")
) || [];

// ===== Sites Storage =====

let sites = JSON.parse(
localStorage.getItem("sites")
) || [

"MangaFire",
"Comix",
"Manganato",
"ManhwaZone",
"ManhuaUS",
"KingofShojo",
"Lolobun"

];


// ===== Save Manga =====

function saveMangas(){

localStorage.setItem(
"mangas",
JSON.stringify(mangas)
);

}


// ===== Save Sites =====

function saveSites(){

localStorage.setItem(
"sites",
JSON.stringify(sites)
);

}


// ===== Add Manga =====

function addManga(){

let title = prompt(
"Enter Manga Name"
);

let link = prompt(
"Enter Manga Link"
);

let day = prompt(
"Release Day"
);

if(title && link){

mangas.push({

title:title,
link:link,
day:day

});

saveMangas();

renderMangas();

}

}


// ===== Show Manga =====

function renderMangas(){

let list = document.getElementById(
"mangaList"
);

if(!list) return;

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

<br><br>

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

let site = prompt(
"Enter Site Name"
);

if(site){

sites.push(site);

saveSites();

renderSites();

}

}


// ===== Show Sites =====

function renderSites(){

let list =
document.getElementById(
"siteList"
);

if(!list) return;

list.innerHTML="";

sites.forEach(
(site,index)=>{

list.innerHTML += `

<div class="mangaItem">

${site}

<br><br>

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


// ===== Delete Site =====

function deleteSite(index){

sites.splice(
index,
1
);

saveSites();

renderSites();

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

if(page==="home"){

home.style.display=
"block";

sitesPage.style.display=
"none";

}

if(page==="sites"){

home.style.display=
"none";

sitesPage.style.display=
"block";

}

}


// ===== Start App =====

renderMangas();

renderSites();
