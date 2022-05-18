let tournaments = ["ESL One Stockholm Dota Major 2022,", "PGL Major Antwerp 2022"]
let circle = document.getElementsByClassName("animation")
let toruText = document.getElementById("tournamtnttext")
if (tournaments.length >= 1) {
circle[0].src = "./img/svg/greencircle4.svg";
let itoG = [];
for (let i = 0; i < tournaments.length; i++) {
itoG += tournaments[i] + " ";
console.log(itoG);
}
toruText.innerHTML = "В данный момент проходят турниры: " + itoG ;
}
else {
circle[0].src = "./img/svg/nocircle.svg";
toruText.innerHTML = "В данный момент турниры не проводятся"
}












/*let future_matches = [
{
"game" : "./img/svg/dotalogo.svg",
"when": "30.04.2022",
"time": "19:00",
"team_logo1": "./img/psg.png",
"team_logo2" : "./img/beastcoast.png",
}, {
"game" : "./img/svg/csgologo.svg",
"when": "30.04.2022",
"time": "19:00",
"team_logo1": "./img/psg.png",
"team_logo2" : "./img/beastcoast.png",
}, {
"game" : "./img/svg/csgologo.svg",
"when": "30.04.2022",
"time": "19:00",
"team_logo1": "./img/psg.png",
"team_logo2" : "./img/beastcoast.png",
}, {
"game" : "./img/svg/csgologo.svg",
"when": "30.04.2022",
"time": "19:00",
"team_logo1": "./img/psg.png",
"team_logo2" : "./img/beastcoast.png",
}, {
"game" : "./img/svg/csgologo.svg",
"when":  "30.04.2022",
"time": "19:00",
"team_logo1": "./img/psg.png",
"team_logo2" : "./img/beastcoast.png",
}, {
"game" : "./img/svg/csgologo.svg",
"when":  "30.04.2022",
"time": "19:00",
"team_logo1": "./img/psg.png",
"team_logo2" : "./img/beastcoast.png",
}, {
"game" : "./img/svg/csgologo.svg",
"when":  "30.04.2022",
"time": "19:00",
"team_logo1": "./img/quincy.png",
"team_logo2" : "./img/beastcoast.png",
}, {
"game" : "./img/svg/csgologo.svg",
"when":  "30.04.2022",
"time": "19:00",
"team_logo1": "./img/psg.png",
"team_logo2" : "./img/beastcoast.png",
}, {
"game" : "./img/svg/csgologo.svg",
"when":  "30.04.2022",
"time": "19:00",
"team_logo1": "./img/psg.png",
"team_logo2" : "./img/beastcoast.png",
}, {
"game" : "./img/svg/csgologo.svg",
"when":  "30.04.2022",
"time": "19:00",
"team_logo1": "./img/psg.png",
"team_logo2" : "./img/beastcoast.png",
}, {
"game" : "./img/svg/dotalogo.svg",
"when":  "30.04.2022",
"time": "19:00",
"team_logo1": "./img/psg.png",
"team_logo2" : "./img/beastcoast.png",
}, {
"game" : "./img/svg/dotalogo.svg",
"when":  "30.04.2022",
"time": "19:00",
"team_logo1": "./img/psg.png",
"team_logo2" : "./img/beastcoast.png",
}
];


let recent_matches = [
{
"game" : "./img/svg/dotalogo.svg",
"when":  "03.11.2022",
"bestof": " BO5",
"team_logo1": "./img/quincy.png",
"team_logo2" : "./img/beastcoast.png",
"result" : "2:1",
}, {
"game" : "./img/svg/csgologo.svg",
"when":  "03.11.2022",
"bestof": "BO5",
"team_logo1": "./img/quincy.png",
"team_logo2" : "./img/beastcoast.png",
"result" : "2:3",
}, {
"game" : "./img/svg/dotalogo.svg",
"when":  "03.11.2022",
"bestof": "BO5",
"team_logo1": "./img/quincy.png",
"team_logo2" : "./img/beastcoast.png",
"result" : "2:3",
}, {
"game" : "./img/svg/csgologo.svg",
"when":  "03.11.2022",
"bestof": "BO3",
"team_logo1": "./img/quincy.png",
"team_logo2" : "./img/beastcoast.png",
"result" : "2:1",
}, {
"game" : "./img/svg/csgologo.svg",
"when":  "03.11.2022",
"bestof": "BO2",
"team_logo1": "./img/quincy.png",
"team_logo2" : "./img/beastcoast.png",
"result" : "1:1",
}, {
"game" : "./img/svg/csgologo.svg",
"when":  "03.11.2022",
"bestof": "BO2",
"team_logo1": "./img/quincy.png",
"team_logo2" : "./img/beastcoast.png",
"result" : "2:0",
}, {
"game" : "./img/svg/csgologo.svg",
"when":  "03.11.2022",
"bestof": "BO1",
"team_logo1": "./img/quincy.png",
"team_logo2" : "./img/beastcoast.png",
"result" : "0:1",
}, {
"game" : "./img/svg/csgologo.svg",
"when":  "03.11.2022",
"bestof": "BO1",
"team_logo1": "./img/quincy.png",
"team_logo2" : "./img/beastcoast.png",
"result" : "1:0",
}
]
let ax = future_matches.length;
for (let i = 0; i < future_matches.length; i++){
let gamecontainer = document.getElementsByClassName("game_logo");
let datecontainer = document.getElementsByClassName("date");
let timecontainer = document.getElementsByClassName("time");
let team1container = document.getElementsByClassName("match_team_logo1");
let team2container = document.getElementsByClassName("match_team_logo2");
let gameimg = future_matches[i].game;
let date = future_matches[i].when;
let time = future_matches[i].time;
let team1 = future_matches[i].team_logo1;
let team2 = future_matches[i].team_logo2;
gamecontainer[i].src = gameimg;
datecontainer[i].innerHTML = date;
timecontainer[i].innerHTML = time;
team1container[i].src = team1;
team2container[i].src = team2;
}
for (let i = 0; i < recent_matches.length; i++) {
let bo = recent_matches[i].bestof;
let bocontainer = document.getElementsByClassName("bestof");
bocontainer[i].innerHTML = bo;
let resultcontainer = document.getElementsByClassName("score");
let score = recent_matches[i].result;
resultcontainer[i].innerHTML = score;
if (Number(recent_matches[i].result[0]) > Number(recent_matches[i].result[2])) {
resultcontainer[i].innerHTML = "<span class=\"winner\">" + recent_matches[i].result[0] + "</span>" + ":" +  recent_matches[i].result[2];
}
else if (Number(recent_matches[i].result[0]) < Number(recent_matches[i].result[2])) {
resultcontainer[i].innerHTML = recent_matches[i].result[0] + ":" +  "<span class=\"winner\">" + recent_matches[i].result[2] + "</span>" ;
}
else if (Number(recent_matches[i].result[0]) == Number(recent_matches[i].result[2])) {
resultcontainer[i].innerHTML =  "<span class=\"winner\">" + recent_matches[i].result[0] + "</span>:" +  "<span class=\"winner\">" + recent_matches[i].result[2] + "</span>" ;
}
let gamecontainer = document.getElementsByClassName("game_logo");
let game = recent_matches[i].game;
gamecontainer[i + ax].src = game;
let datecontainer = document.getElementsByClassName("date");
let date = recent_matches[i].when;
datecontainer[i + ax].innerHTML = date;
let team1container = document.getElementsByClassName("match_team_logo1");
let team2container = document.getElementsByClassName("match_team_logo2");
let team1 = recent_matches[i].team_logo1;
let team2 = recent_matches[i].team_logo2;
team1container[i + ax].src = team1;
team2container[i + ax].src = team2;
}*/
