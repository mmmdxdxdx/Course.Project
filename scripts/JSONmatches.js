let requestURL = 'http://localhost:3000/Matches?current_like=future'
let request = new XMLHttpRequest()
request.open('GET', requestURL)
request.responseType = 'json'
request.send()
request.onload = function() {
let future_matches = request.response;
populateFuruteMatches(future_matches);
}
function populateFuruteMatches(array) {
let gamecontainer = document.getElementsByClassName("game_logo");
let datecontainer = document.getElementsByClassName("date");
let timecontainer = document.getElementsByClassName("time");
let team1container = document.getElementsByClassName("match_team_logo1");
let team2container = document.getElementsByClassName("match_team_logo2");
for (let i = 0; i < array.length; i++){
let gameimg = array[i].game;
let date = array[i].when;
let time = array[i].time;
let team1 = array[i].team_logo1;
let team2 = array[i].team_logo2;
gamecontainer[i].src = gameimg;
datecontainer[i].innerHTML = date;
timecontainer[i].innerHTML = time;
team1container[i].src = team1;
team2container[i].src = team2;
}
}

let requestURL2 = 'http://localhost:3000/Matches?current_like=recent'
let request2 = new XMLHttpRequest()
request2.open ('GET', requestURL2)
request2.responseType = 'json'
request2.send()
request2.onload = function() {
let r_matches = request2.response;
populateRecentMatches(r_matches);
}

let ax = 12;
function populateRecentMatches(array) {
for (let i = 0; i < array.length; i++) {
let bo = array[i].bestof;
let bocontainer = document.getElementsByClassName("bestof");
bocontainer[i].innerHTML = bo;
let resultcontainer = document.getElementsByClassName("score");
let score = array[i].result;
resultcontainer[i].innerHTML = score;
if (Number(array[i].result[0]) > Number(array[i].result[2])) {
resultcontainer[i].innerHTML = "<span class=\"winner\">" + array[i].result[0] + "</span>" + ":" +  array[i].result[2];
}
else if (Number(array[i].result[0]) < Number(array[i].result[2])) {
resultcontainer[i].innerHTML = array[i].result[0] + ":" +  "<span class=\"winner\">" + array[i].result[2] + "</span>" ;
}
else if (Number(array[i].result[0]) == Number(array[i].result[2])) {
resultcontainer[i].innerHTML =  "<span class=\"winner\">" + array[i].result[0] + "</span>:" +  "<span class=\"winner\">" + array[i].result[2] + "</span>" ;
}
let gamecontainer = document.getElementsByClassName("game_logo");
let game = array[i].game;
gamecontainer[i + ax].src = game;
let datecontainer = document.getElementsByClassName("date");
let date = array[i].when;
datecontainer[i + ax].innerHTML = date;
let team1container = document.getElementsByClassName("match_team_logo1");
let team2container = document.getElementsByClassName("match_team_logo2");
let team1 = array[i].team_logo1;
let team2 = array[i].team_logo2;
team1container[i + ax].src = team1;
team2container[i + ax].src = team2;
}
}