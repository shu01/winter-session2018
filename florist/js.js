var mathCanvas = document.getElementById("matharea");
var ctx = mathCanvas.getContext("2d");
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;

var img = new Image();
var imgW = (img.clientWidth);
var imgH = (img.clientHeight);
img.src = "flowers/0.png"


function genImgLoc(){
	var randNum = Math.floor(Math.random() * 7);
	img.src = String("flowers/"+String(randNum)+".png");
}

function placeFlower(event){
	var x = event.clientX - 25;
	var y = event.clientY - 10;
    ctx.drawImage(img,x,y);
    console.log(img);
    console.log("works");
}

mathCanvas.onclick = function(event){
	imgLoc = genImgLoc();
    placeFlower(event);
};
