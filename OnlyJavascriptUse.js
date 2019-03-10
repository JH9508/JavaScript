const body = document.querySelector("body");
var div = document.createElement("div");
var img = document.createElement("img");

div.id = 'divcss';
img.src = `img/1.jpg`;
img.id = 'imgsize';


function divInImg() {
  document.body.appendChild(div);
  div.appendChild(img);
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
  divInImg();
  clearInterval();
  imgCss();
  divCss();
}

init();
