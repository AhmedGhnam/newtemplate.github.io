/*global console, prompt, alert, $ */


$(document).ready(function () {

	'use strict';
	
	var wind = $(window);

	// scrollit plugin 
	
	var SCROLL_SPEED = .5;

	$.scrollIt({

		easing: 'swing',      // the easing function for animation
		scrollTime: 1500,       // how long (in ms) the animation takes
		activeClass: 'active', // class given to the active nav element
		onPageChange: null    // function(pageIndex) that is called when page is changed

	});

	
	
	
	wind.on('scroll', function () {
		
		// Navbar scrolling
		
		if ($(this).scrollTop() >= 300) {
			
			$('.navbar').css({
				
				background : '#fff',
				color      : '#333',
				top        : '0px',
				paddingTop : '15px',
				paddingBottom : '15px',
				boxShadow: '0 8px 6px -9px #999'
				
			});
			
			$('.navbar .navbar-nav .nav-link').css('color', '#333');
			
		} else {
			
			$('.navbar').css({
				
				background : 'transparent',
				color      : '#f1f1f1',
				top        : '20px',
				paddingTop : '8px',
				paddingBottom : '8px',
				boxShadow: 'none'
				
			});
			
			$('.navbar .navbar-nav .nav-link').css('color', '#f1f1f1');
			
		}
	
	
		// fill Progress bar
		
		if ($(this).scrollTop() >= $('.our-skills').offset().top - 300) {
		
			$('.myprogress .bar').each(function () {
				
				var myVal = $(this).attr('data-width');
				
				$(this).css({

					width : myVal

				});
					
      });
		}
		
		if ($(this).scrollTop() >= $('.numbers').offset().top - 300) {
		
			$('.numbers .numbers-cont .counter').each(function () {
				
				var meterVal = $(this).attr('data-meter');
				
				$(this).text(meterVal);
					
      });
		}
		
	});
	
	// mixitup trigger
	
	var mixer = mixitup('#container');
	
	// mixitup active link
	
	$('.our-work .ul-container button').on('click', function () {
		
		$(this).addClass('active').parent().siblings().children().removeClass('active');
		
	});
	
	
	//Owl Carousel trigger 
	
	$('.owl-carousel').owlCarousel({
		loop : true,
		autoplay : true,
		margin : 15,
		responsive : {
			0 : {
				items : 1
			},
			600 : {
				items : 2
			},
			1000 : {
				items : 3
			}
		}
	});
	
	
	
	
});
