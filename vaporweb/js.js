var driving = false;
var element = document.querySelector('#dashbox');
var audio = new Audio('music.mp3');
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
///window.addEventListener('scroll',drive, true);
(function( $ ) {
	$(function() {
		var $output = $( "#output" ),
			scrolling = "<span id='scrolling'>Scrolling</span>",
			stopped = "<span id='stopped'>Stopped</span>";

		    $( window ).scroll(function() {
		    	drive();
    			clearTimeout( $.data( this, "scrollCheck" ) );
    			$.data( this, "scrollCheck", setTimeout(function() {
    				stopDrive();
    			}, 250) );

    		});

	});

})( jQuery );