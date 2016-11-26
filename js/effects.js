$(document).ready(function(){

	//navbar text turns blue when you hover over it
    $(".hov-effect").hover(function(){
    	$(this).css("color", "skyblue");
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
	    $(this).find("i").fadeTo("slow", 0.75).css("color", "skyblue");
	    $(this).find("h4").fadeTo("slow", 0.75).css("color", "skyblue");
	    $(this).find("a").fadeTo("slow", 0.75).css("color", "skyblue");
	}, function(){
		$(this).find("i").fadeTo("slow", 1).css("color", "black");
	    $(this).find("h4").fadeTo("slow", 1).css("color", "black");
	    $(this).find("a").fadeTo("slow", 1).css("color", "black");
	});

	//contact icons hover blue
	$(".contact-icon-effect").hover(function(){
	    $(this).find("i").fadeTo("fast", 1).css("color", "skyblue");
	    $(this).find("a").fadeTo("fast", 1).css("color", "skyblue");
	}, function(){
		$(this).find("i").fadeTo("fast", 1).css("color", "#eee");
	    $(this).find("a").fadeTo("fast", 1).css("color", "#eee");
	});

	//resume icon hover blue
	$("#resume-effect").hover(function(){
		$(this).fadeTo("slow", 0.75).css("color", "skyblue");
	}, function(){
	    $(this).fadeTo("slow", 1).css("color", "black");
	});
});