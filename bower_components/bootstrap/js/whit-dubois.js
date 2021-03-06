$(function () {
    
    var today = new Date();
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var hourNow = today.getHours();
    var greeting;

    if (hourNow > 18){
        greeting = "Good evening!"
    } else if (hourNow > 12){
        greeting = "Good afternoon!"
    } else if (hourNow > 0){
        greeting = "Good morning!"
    } else {
        greeting = "Welcome!"
    }
    console.log(greeting);

    var elGreet = document.getElementById('greeting');
//    elGreet.textContent = month[today.getMonth()];
    
    $(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
	});
    
    
    $(".showResume").click(function(){
        event.preventDefault();
        
        $(".resume-container").removeClass("hide");
        
        $("body").animate({
            scrollTop: $("#resume").offset().top
        }, 700);
    });
    
    $(".closeResume").click(function(){
        event.preventDefault();
        
        $("body").animate({
            scrollTop: $(".main-container").offset().top
        }, 500);
        
        setTimeout(function(){
           $(".resume-container").addClass("hide"); 
        }, 500);
    
    });
    
    
});