let requestURL1 = 'http://localhost:3000/DPC_LEADERBOARD?_sort=points&_order=desc'
let request1 = new XMLHttpRequest();
request1.open('GET', requestURL1);
request1.responseType = 'json';
request1.send();
let frstbtn = document.getElementById("DPC")
request1.onload = function() {
  let DPC_LEADERBOARD = request1.response;
  team_table(DPC_LEADERBOARD);
}
frstbtn.onclick = function() {
let DPC_LEADERBOARD = request1.response;
  team_table(DPC_LEADERBOARD);	
}
function team_table(array) {
for(let i = 0; i < array.length; i++) {
let fieldpoints = document.getElementsByClassName("points");
let fieldteam = document.getElementsByClassName("aboutteam");
let img = document.getElementsByClassName("dpc_team_logo");
let pts = array[i].points;
let team = array[i].team;
let logo = array[i].logo;
fieldpoints[i].innerHTML = "<span class=\"position\">" + pts + "</span>";
fieldteam[i].innerHTML = "<span class=\"dpc_team\">" + team + "</span>";
img[i].src = logo;
}
}
let requestURL2 = 'http://localhost:3000/HLTV_LEADERBOARD?_sort=points&_order=desc'
let request2 = new XMLHttpRequest();
request2.open('GET', requestURL2);
request2.responseType = 'json';
request2.send();
let scndbtn = document.getElementById("HLTV")
scndbtn.onclick = function() {
let HLTV_LEADERBOARD = request2.response;
team_table(HLTV_LEADERBOARD);	
}








let requestURL_America = 'http://localhost:3000/MMR_LEADERBOARD?location_like=America'
let requestA = new XMLHttpRequest();
requestA.open('GET', requestURL_America);
requestA.responseType = 'json';
requestA.send();
let A_button = document.getElementById("America");
A_button.onclick = function() {
let AmericaLead = requestA.response;
fillleaderboard(AmericaLead);	
}

let requestURL_China = 'http://localhost:3000/MMR_LEADERBOARD?location_like=China'
let requestC = new XMLHttpRequest();
requestC.open('GET', requestURL_China);
requestC.responseType = 'json';
requestC.send();
let C_button = document.getElementById("China");
C_button.onclick = function() {
let ChinaLead = requestC.response;
fillleaderboard(ChinaLead);	
}

let requestURL_EU= 'http://localhost:3000/MMR_LEADERBOARD?location_like=EU'
let request_EU = new XMLHttpRequest();
request_EU.open('GET', requestURL_EU);
request_EU.responseType = 'json';
request_EU.send();
let EUROPE_button = document.getElementById("Europe");
request_EU.onload = function() {
let EULead = request_EU.response;
fillleaderboard(EULead); 
}
EUROPE_button.onclick = function() {
let EULead = request_EU.response;
fillleaderboard(EULead);	
}

let requestURL_YVAsia= 'http://localhost:3000/MMR_LEADERBOARD?location_like=Asia'
let request_YVAsia = new XMLHttpRequest();
request_YVAsia.open('GET', requestURL_YVAsia);
request_YVAsia.responseType = 'json';
request_YVAsia.send();
let Asia_button = document.getElementById("Asia");
Asia_button.onclick = function() {
let AsiaLead = request_YVAsia.response;
fillleaderboard(AsiaLead);	
}



function fillleaderboard(array) {
for(let i = 0; i < array.length; i++) {
let player = document.getElementsByClassName("aboutplayer");
let flagcontainer = document.getElementsByClassName("player_country");
let sponsor = array[i].sponsor;
let player_nickname =  array[i].player_nickname;
let team = array[i].team;
let country = array[i].country;
let ctile = array[i].ctitle;
flagcontainer[i].src = country;
flagcontainer[i].title = ctile ;
player[i].innerHTML = " ";
if (team !== "") {
player[i].innerHTML +=  "<span class=\"modforts\">" + team + "</span>" + ".";
}
player[i].innerHTML += "<span class=\"modfornickname\">" + player_nickname + "</span>";
if (sponsor !== "") {
player[i].innerHTML += "." + "<span class=\"modforts\">" +  sponsor + "</span>";
}
}
};