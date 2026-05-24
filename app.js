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

function saveSites(){

localStorage.setItem(
"sites",
JSON.stringify(sites)
);

}

function addSite(){

let site=prompt(
"Enter Site Name"
);

if(site){

sites.push(site);

saveSites();

renderSites();

}

}

function renderSites(){

let list=
document.getElementById(
"siteList"
);

if(!list) return;

list.innerHTML="";

sites.forEach((site,index)=>{

list.innerHTML+=`

<div class="mangaItem">

${site}

<button onclick="
deleteSite(${index})
">

Delete

</button>

</div>

`;

});

}

function deleteSite(index){

sites.splice(index,1);

saveSites();

renderSites();

}

function showPage(page){

document.querySelector(
".container"
).style.display=
page==="home"
?
"block"
:
"none";

document.getElementById(
"sitesPage"
).style.display=
page==="sites"
?
"block"
:
"none";

}

renderSites();
