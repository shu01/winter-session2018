var driving = false;
var element = document.querySelector('#dashbox');
var audio = new Audio('music.mp3');
var isdriving = false;
var interval;

function genNum() {
    var x = Math.floor((Math.random() * 50) + 1);
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
}
function checkImageState(){
	if (!isdriving){
		clearInterval(interval);
		interval = setInterval(function() {
    					$( "#image" ).attr('src',randLoc());
    					console.log("looped");
		    		}, 5000);
	}
	if (isdriving){
		$( "#image" ).attr('class',"fadeInAndOut");
	}
}
function changeImg(){
	$( "#image" ).attr('src',randLoc());
}

(function( $ ) {
	$(function() {
		    $( window ).scroll(function() {
		    	drive();
		    	checkImageState();
		    	isdriving = true;
    			clearTimeout( $.data( this, "scrollCheck" ) );
    			$.data( this, "scrollCheck", 
    				setTimeout(function() {
    					$( "#image" ).removeClass("fadeInAndOut");
    					stopDrive(); 
    					isdriving = false;
		    			checkImageState();
		    		}, 250));
    		});
	});
})( jQuery );