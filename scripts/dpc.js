let DPC_LEADERBOARD = [
	{
"points": "550",
"team": "Team Spirit",
"logo" : "./img/spirit.png",
}, {
"points": "450",
"team": "PSG.LGD",
"logo" : "./img/psg.png",
}, {
"points": "430",
"team": "BOOM Esports",
"logo" : "./img/boom.png",
}, {
	"points": "370",
"team": "Team Liquid",
"logo" : "./img/liquid.png",

}, {
	"points": "310",
"team": "beastcoast",
"logo" : "./img/beastcoast.png",
}, {
	"points": "300",
"team": "Infamous",
"logo" : "./img/infamous.png",
}, {
	"points": "300",
"team": "Thunder Predator",
"logo" : "./img/thunder.png",
}, {
	"points": "250",
"team": "Quincy Crew",
"logo" : "./img/quincy.png",
}, {
	"points": "250",
"team": "T1",
"logo" : "./img/t1.png",
}, {
	"points": "250",
"team": "Royale Never Give Up",
"logo" : "./img/rng.png",
},
];
let HLTV_LEADERBOARD = [
	{
"points": "1000",
"team": "Natus Vincere",
"logo" : "./img/svg/navilogo.svg",
}, {
"points": "495",
"team": "Gambit",
"logo" : "./img/svg/gambitlogo.svg",
}, {
"points": "405",
"team": "G2",
"logo" : "./img/g2.webp",
}, {
"points": "368",
"team": "Vitality",
"logo" : "./img/vitality.png",

}, {
	"points": "268",
"team": "Heroic",
"logo" : "./img/svg/heroiclogo.svg",
}, {
	"points": "253",
"team": "NinjasInPyjamas",
"logo" : "./img/nip.webp",
}, {
	"points": "245",
"team": "Virtus pro",
"logo" : "./img/vp.png",
}, {
	"points": "185",
"team": "Astralis",
"logo" : "./img/svg/astralislogo.svg",
}, {
	"points": "145",
"team": "Entropic",
"logo" : "./img/entropic.png",
}, {
	"points": "142",
"team": "Furia",
"logo" : "./img/svg/furialogo.svg",
},
];

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
};

team_table(DPC_LEADERBOARD);