const body = document.querySelector("body");
const img = document.querySelector("img");

var imglength = 5;

function changeImg(imglength){
  img.src = `img/${imglength+1}.jpg`;
}

function genRandom(){
  var number = Math.floor(Math.random() * imglength);
  return number;
}

function init(){
  setInterval(function(){
    var random = genRandom();
    changeImg(random)
  }, 3000);
}
init();
