var driving = false;
var element = document.querySelector('#dashbox');
var audio = new Audio('music.mp3');

function genNum() {
    var x = Math.floor((Math.random() * 10) + 1);
    return x;
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
	///setTimeout(stopDrive, 10000);
}
function newImg(){
	var rl = randLoc()
	var elem = document.createElement("img");
	elem.setAttribute("src", rl);
	elem.setAttribute("id", "image");
	document.getElementById("dashbox").appendChild(elem);
}
function fadeInInc(opacity){
	var elem = document.getElementById("image");
	opacity = opacity +.10;
	return opacity;
}
function fadeIn(){
	var elem = document.getElementById("image");
	var opacity = 0; 
	while (opacity <= 1){
	var newOp = setTimeout(fadeInInc(opacity), 3000);}
	opacity = newOp
	elem.style.opacity = newOp;
}

///window.addEventListener('scroll',drive, true);
(function( $ ) {
	$(function() {
		var $output = $( "#output" ),
			scrolling = "<span id='scrolling'>Scrolling</span>",
			stopped = "<span id='stopped'>Stopped</span>";

		    $( window ).scroll(function() {
		    	drive();
		    	newImg();
		    	fadeIn();
    			clearTimeout( $.data( this, "scrollCheck" ) );
    			$.data( this, "scrollCheck", setTimeout(function() {
    				stopDrive();
    			}, 250) );

    		});
	});
})( jQuery );