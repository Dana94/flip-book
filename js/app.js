
let images = ["<img class=\"img-responsive center-block\" src=\"images/new-up.png\">",
			  "<img class=\"img-responsive center-block\" src=\"images/new-down.png\">"];
//first part

let button1 = document.getElementById('start-stop-1');

let spot1 = document.getElementById('img-place-1');

function change1(){
	
	if (spot1.innerHTML == images[0]){
		spot1.innerHTML = images[1];
	}
	else{
		spot1.innerHTML = images[0];
	}
	
} 


button1.addEventListener('click', change1);


//second part

let start = document.getElementById('start');

let stop = document.getElementById('stop');

let spot2 = document.getElementById('img-place-2');

function change2(){
	
	if (spot2.innerHTML == images[0]){
		spot2.innerHTML = images[1];
	}
	else{
		spot2.innerHTML = images[0];
	}
	
} 

let timer;

function startTimer(){
	timer = window.setInterval(change2, 300);
}

function stopTimer(){
	window.clearInterval(timer);
}



start.addEventListener('click', startTimer);

stop.addEventListener('click', stopTimer);