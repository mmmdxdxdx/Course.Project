let requestURL2 = 'http://localhost:3000/News?imgstock_like=y'
let requestNEWS2 = new XMLHttpRequest()
requestNEWS2.open('GET', requestURL2)
requestNEWS2.responseType = 'json'
requestNEWS2.send()
requestNEWS2.onload = function() {
let newsImg = requestNEWS2.response;
populateImages(newsImg);
}
function populateImages(array) {
    for (let i = 0; i < array.length; i++) {
let imgcontainer = document.getElementsByClassName("news_img");
let img = array[i].img;
imgcontainer[i].src = img;

}
}

let requestURL = 'http://localhost:3000/News?_sort=order&_order=asc'
let requestNEWS = new XMLHttpRequest()
requestNEWS.open('GET', requestURL)
requestNEWS.responseType = 'json'
requestNEWS.send()
requestNEWS.onload = function() {
let newsAX = requestNEWS.response;
populateNews(newsAX);
}
function populateNews(array) {
    for (let i = 0; i < array.length; i++) {
let titlecontainer = document.getElementsByClassName("news_title");
let contentcontainer = document.getElementsByClassName("news_text");
let title = array[i].title;
let newstext = array[i].content;
titlecontainer[i].innerHTML = title;
contentcontainer[i].innerHTML = newstext;
}
}
