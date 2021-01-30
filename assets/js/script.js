$(document).ready(function(){

	$(".mobile-nav").hide();

	// Mobile nav collapse
	$(".mobile-collapse").on("click", function(){
		$(".mobile-nav").slideToggle();
	})

	$(".nav-item").on("click", function(){
		var tujuan = $(this).attr("href");
		var elemenTujuan = $(tujuan);

		$("html , body").animate({
			scrollTop : elemenTujuan.offset().top -100
		}, 2100, "swing");

		$(".mobile-nav").slideUp();

	});

	// Mindow smooth scroll
	$(window).scroll(function(){
		let scroll = $(this).scrollTop();

		if (scroll > 300) {
			$(".navbar").addClass("navbar-rise");
		}else if(scroll < 300){
			$(".navbar").removeClass("navbar-rise");
		}

	})

})