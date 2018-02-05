var ss = [];
var oss = [];

///bg = new Audio('noise/ambience.mp3');
///bg.loop = true;
///bg.play();

a0 = new Audio('noise/0.mp3');
a1 = new Audio('noise/1.mp3');
a2 = new Audio('noise/2.mp3');
a3 = new Audio('noise/3.mp3');
a4 = new Audio('noise/4.mp3');
a5 = new Audio('noise/5.mp3');
a6 = new Audio('noise/6.mp3');
a7 = new Audio('noise/7.mp3');

var sounds = [a0,a1,a2,a3,a4,a5,a6,a7];

function checkFile(index){
	var num = index.charAt(3);
	var indexNum = parseInt(num);
	var selected = sounds[indexNum];
	selected.play();
	selected.loop = false;
	console.log("index")
}

function loadlink(){
    $('#data').load('data.txt',function () {
        $(this).unwrap();
        var str = $( "p:first" ).text();
        ss = str.split(",");
        last = (ss[ss.length-1]);
        console.log("done")
        if (ss.length != oss.length){
            checkFile(last);
            oss = ss;
        }
    });
}

loadlink(); // This will run on page load
setInterval(function(){
    loadlink() // this will run after every 5 seconds
}, 50);