$(document).ready(function(){

	//css animate effects when you scroll down
    $('.scroll-effect').viewportChecker({
        classToAdd: 'visible animated bounce',
        offset: 100
    });

	//navbar text turns blue when you hover over it
    $(".hov-effect").hover(function(){
    	$(this).css("color", "skyblue").css("transition", "all 0.3s ease");
   	}, function(){
    	$(this).css("color", "#777777");
	});

    //home page arrow turns blue on hover
	$(".arrow-effect").hover(function(){
    	$(this).css("color", "skyblue");
   	}, function(){
    	$(this).css("color", "white");
	});

	//skills icons hover blue
	$(".skill-icon-effect").hover(function(){
	    $(this).find("i").css("color", "skyblue").css("transition", "all 0.3s ease");
	    $(this).find("h4").css("color", "skyblue").css("transition", "all 0.3s ease");
	    $(this).find("a").css("color", "skyblue").css("transition", "all 0.3s ease");
	}, function(){
		$(this).find("i").css("color", "#333");
	    $(this).find("h4").css("color", "#333");
	    $(this).find("a").css("color", "#333");
	});

	//contact icons hover blue
	$(".contact-icon-effect").hover(function(){
	    $(this).find("i").fadeTo("fast", 1).css("color", "skyblue").css("transition", "all 0.3s ease");
	    $(this).find("a").fadeTo("fast", 1).css("color", "skyblue").css("transition", "all 0.3s ease");
	}, function(){
		$(this).find("i").css("color", "#eee");
	    $(this).find("a").css("color", "#eee");
	});

	//resume icon hover blue
	$("#resume-effect").hover(function(){
		$(this).fadeTo("slow", 0.75).css("color", "skyblue").css("transition", "all 0.3s ease");
	}, function(){
	    $(this).css("color", "#333");
	});


});