
let button1 = document.getElementById('start-stop-1');

let spot1 = document.getElementById('img-place-1');


// find an easier way to do this
button1.onclick = function(){
	
	if (spot1.innerHTML == "<img class=\"img-responsive center-block\" src=\"images/new-up.png\">"){
		spot1.innerHTML = "<img class=\"img-responsive center-block\" src=\"images/new-down.png\">";
	}
	else{
		spot1.innerHTML = "<img class=\"img-responsive center-block\" src=\"images/new-up.png\">";
	}
}


let start = document.getElementById('start');

let stop = document.getElementById('stop');

let spot2 = document.getElementById('img-place-2');

function change(){
	
	//need to have time lapse established, too fast now
	while(true){
		if (spot2.innerHTML == "<img class=\"img-responsive center-block\" src=\"images/new-up.png\">"){
			spot2.innerHTML = "<img class=\"img-responsive center-block\" src=\"images/new-down.png\">";
		}
		else{
			spot2.innerHTML = "<img class=\"img-responsive center-block\" src=\"images/new-up.png\">";
		}
	}
	
} 

start.addEventListener('click', change);


stop.onclick = function(){
	start.remove
}


