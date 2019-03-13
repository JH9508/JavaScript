const body = document.querySelector("body");
var div = document.createElement("div");
var img = document.createElement("img");
var h1 = document.createElement("h1");

div.id = 'divcss';
img.src = `img/1.jpg`;
img.id = 'imgsize';


function divIn() {
  document.body.appendChild(div);
  div.appendChild(h1);
  div.appendChild(img);
  var text =document.createTextNode( 'Only use Javascript' );
  h1.appendChild(text);
}

function imgCss() {
    var imgSize = document.getElementById("imgsize");
    imgSize.style.width = "80%";
}
function divCss() {
    var divcss = document.getElementById("divcss");
    divcss.style.textAlign = "center";
}

var i=0;
var change = setInterval(function(){

  if(i++ < 5){
      img.src = "img/"+[i]+".jpg";
  }else{
    setInterval(change);
    i=0;
  }
}, 1000);

function init() {
  divIn();
  clearInterval();
  imgCss();
  divCss();
}

init();
