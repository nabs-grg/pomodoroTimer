//variable for setInterval
var t;

/*
Start timer function consist of two parameters duration of the pomodoro time and diplay which is linked to the div id time which has a default time of "25:00"
*/
function startTimer(duration, display){

	var timer = duration, minutes, seconds;

	t = setInterval(function(){

		timer--;

		minutes = parseInt(timer / 60, 10);
		seconds = parseInt(timer % 60, 10);

		if(minutes < 10){
			minutes = "0" + minutes;
		} else {
			minutes = minutes;
		}

		if(seconds < 10){
			seconds = "0" + seconds;
		} else {
			seconds = seconds;
		}

		display.text(minutes + ":" + seconds);

		if (timer > 0) {
            timer--;
        } else {
        	clearInterval(t);
        	resetTime();
        }		

	}, 1000);
}

/*
function to reset back the time to 25:00
*/
function resetTime(){
	$("#time").html("25:00");
}

//start timer

$("#start-timer").click(function(){
	var pomodoroMinutes = 60 * 25,
    display = $('#time');
    startTimer(pomodoroMinutes, display);
});

//stop timer

$("#stop-timer").click(function(){
	
   clearInterval(t);
    
});

//reset timer

$("#reset-timer").click(function(){
	clearInterval(t);
	resetTime();
});


