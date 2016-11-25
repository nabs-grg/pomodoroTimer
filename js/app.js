//variable for setInterval
var t;

/*
Start timer function consist of two parameters duration of the pomodoro time and diplay which is linked to the div id time which has a default time of "25:00"
*/
function startTimer(duration, display){

	var timer = duration, minutes, seconds;

	console.log(duration)

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
	
	var getStopedTime = "" ;
	var getCurrentTime = $("#time");
     
    var currentTime = getCurrentTime[0].innerHTML
     
 	if(currentTime !== "25:00"){
 		getStopedTime  = currentTime;
 	}else{
 		getStopedTime  = currentTime;
 	}
	
	display = $('#time');  
    
    var hms = '00:' + getStopedTime;//00:25:00 
    var a = hms.split(':');//["00","25 ","00"] 
    var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);//1500

   	startTimer(seconds, display);

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

$("#short-break").on("click",function(){
	$("#time").html("05:00");
})

$("#long-break").on("click",function(){
	$("#time").html("10:00");
})

$("#custom-break").on("click",function(){
	$("#time").html("00:00");
})

// Get the about modal
var modal_about = document.getElementById('myModal-about');

// Get the about modal
var modal_setting = document.getElementById('myModal-setting');

// Get the button that opens the about modal
var btn_about = document.getElementById("about");

// Get the button that opens the setting modal
var btn_setting = document.getElementById("settings");

// Get the <span> element that closes the modal
var span_setting = document.getElementById("close_setting");

// Get the <span> element that closes the modal
var span_about = document.getElementById("close_about");

// When the user clicks the button, open the modal
btn_about.onclick = function() {
    modal_about.style.display = "block";
}

//When the user clicks on <span> (x), close the modal
span_about.onclick = function() {
    modal_about.style.display = "none";
    console.log("hello");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal_about) {
       modal_about.style.display = "none";
    }
}

//When the user clicks the selected modal opens
btn_setting.onclick = function() {
	modal_setting.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span_setting.onclick = function() {
   modal_setting.style.display = "none";
   console.log("hello");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal_setting) {
      	modal_setting.style.display = "none";
    }
}

$("#reset-timer").keypress(function(e){
	if(e.which == 13){
   		
   	
   		console.log("hello world")
   	}
    
});

//setting variable isAlt to false
var isAlt = false;

//when key is pressed up set the alt to false
$(document).keyup(function (e) {
  	if (e.which == 18) isAlt = false;
	}).keydown(function (e) {
	 
	//setting the ALT key to true on key down event handler
	if (e.which == 18) isAlt = true;

	//ALT + R to reset the timer
	if (e.which == 82 && isAlt == true) {
    	resetTime();
  	}

  	//ALT + P to set the pomodoro timer
  	if (e.which == 80 && isAlt == true) {
    	resetTime();
  	}

  	//ALT + S to set the timer to 5 minutes break
  	if (e.which == 83 && isAlt == true) {
    	$("#time").html("05:00");
  	}

  	//ALT + L to set the timer to 10 minutes break
  	if (e.which == 76 && isAlt == true) {
    	$("#time").html("10:00");
  	}

  	//SPACE to start the timer
  	if(e.which == 32) {
  		
  		var getStopedTime = "" ;
		var getCurrentTime = $("#time");
	     
	    var currentTime = getCurrentTime[0].innerHTML
	     
	 	if(currentTime !== "25:00"){
	 		getStopedTime  = currentTime;
	 	}else{
	 		getStopedTime  = currentTime;
	 	}
		
		display = $('#time');  
	    
	    /***************/
	     var hms = '00:' + getStopedTime;//00:25:00
	     var a = hms.split(':');//[0 , 0 ,2 ,5 ,0 ,0] console.log(a)
	     var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
		/***************/

	   	startTimer(seconds, display);

  	}

  	//ENTER to pause the timer
  	if(e.which == 13){
  		clearInterval(t);
  	}
});



