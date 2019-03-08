const body = document.querySelector("body");
const img = document.querySelector("img");

function changeImg(imglength){
  img.src = `img/${imglength+1}.jpg`;
}
var imglength = 5;
function genRandom(){
  var number = Math.floor(Math.random() * imglength);
  return number;
}




function init(){
  setInterval(function(){
  var random = genRandom();
  changeImg(random);
}, 3000);
}

init();
