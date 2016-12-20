$(document).ready(function(){
	var height = $(window).height();
	if(height<500) {
		height = 500;
	}
	$('#myCarousel').css({
		'minHeight': 0,
		'maxHeight': 'none',
		'height': height
	});

	$(function () {
		$('.tlt').textillate({
			loop: true
		});
	});

	new WOW().init();

	$('.block3').viewportChecker({
		callbackFunction: function(elem, action){
			$('.times').countTo();
		},
	});

	$(".slider").slick({
		
		autoplay: true,
		autoplaySpeed: 2000,
		dots: false,
		infinite: true,
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4
			}
		}, {
			breakpoint: 992,
			settings: {
				slidesToShow: 3
			}
		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 2
			}
		}]
	});
});

$(window).bind('scroll', function() {
	var topLine = $('.top-line').height() + 18;
	if ($(window).scrollTop() > topLine) {
		$('.top-line').addClass('off');
		$('nav').addClass('fixed');

	} else {
		$('.top-line').removeClass('off');
		$('nav').removeClass('fixed');
	}
});
