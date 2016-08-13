$(function () {
	// body...
	$('#i-nav').click(function () {
		console.log("heloo nav");
		//$('.topUL').css({"display":"block"});
		/* 
		if($('.header, .nav > ul').hasClass("topUL")) {
			$('.header, .nav > ul').removeClass("topUL")
		} else {
			$('.header, .nav > ul').addClass("topUL")
		 }*/
		//$('.header .nav').css("display","block");
		$('body').toggleClass('show');
		
	})
})