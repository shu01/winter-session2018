var driving = false;
var element = document.querySelector('#dashbox');
var audio = new Audio('music.mp3');
var activeImages = [];

function genNum() {
    var x = Math.floor((Math.random() * 10) + 1);
    return x;
}
function genX() {
	var x = Math.floor((Math.random() * 700) + 1);
	return x;
}
function genY() {
	var y = Math.floor((Math.random() * 1000) + 1);
	return y;
}
function randLoc(){
	var x = genNum();
	var loc = String("img/"+x+".jpg");
	return loc;
}
function hover(element) {
    element.setAttribute('src', 'active.png');
}
function unhover(element) {
    element.setAttribute('src', 'inactive.png');
}
function stopDrive() {
	var el = document.getElementById("inactive");
	el.setAttribute('src', 'active.png');
	var body = document.getElementById('dashbox');
	body.style.backgroundImage = 'url("inactivebg.png")';
	audio.pause();
}
function drive() {
	var el = document.getElementById("inactive");
	el.setAttribute('src', 'driving.png');
	var body = document.getElementById('dashbox');
	body.style.backgroundImage = 'url("activebg.gif")';
	audio.play();
}
function newImg(){
	var rl = randLoc();
	var elem = document.getElementsByClassName("imag");
	elem.backgroundImage = 'url("img/2.jpg")';
}
/*function newImg(){
	var rl = randLoc();
	var elem = document.createElement("img");
	elem.setAttribute("src", "img/1.jpg");
	elem.setAttribute("class", "image");
	setTimeout(function() {
    	document.getElementById("dashbox").appendChild(elem);
    	}, 100);
}

/*
}
function fadeInInc(opacity){
	var elem = document.getElementById("image");
	opacity = opacity +.10;
	return opacity;
}
function fadeIn(){
	var elem = document.getElementById("image");
	var opacity = 0; 
	if (opacity <= 1){
		var newOp =fadeInInc(opacity)}
	opacity = newOp
	elem.style.opacity = newOp;
}
*/
(function( $ ) {
	$(function() {
		var $output = $( "#output" );

		    $( window ).scroll(function() {
		    	drive();
		    	newImg();
		    	window.setInterval(function(){newImg()}, 5000);
    			clearTimeout( $.data( this, "scrollCheck" ) );
    			$.data( this, "scrollCheck", setTimeout(function() {
    				stopDrive();
    			}, 250) );

    		});
	});
})( jQuery );