var mathCanvas = document.getElementById("matharea");
var ctx = mathCanvas.getContext("2d");
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;

var img = new Image();
var imgW = (img.clientWidth);
var imgH = (img.clientHeight);


function numGen(){
	var num = Math.floor(Math.random() * 9);
	return num;
}

function placeFlower(event){
	var x = event.clientX - 25;
	var y = event.clientY - 50;
	var randnum = String(numGen());
	img.src = String("flowers/"+randnum+".png");
	var sound = new Audio('sounds/'+randnum+'.wav');
	sound.play()
    ctx.drawImage(img,x,y);
    console.log(img);
    console.log("works");
}

mathCanvas.onclick = function(event){
    placeFlower(event);
};
