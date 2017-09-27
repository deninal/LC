(function($){
	'use strict';



    // Fillo funksionet kur doc. eshte gati
	$(document).ready(function(){

		initNavbar();
		initScroller();
		initCountNbr();
		initAnimation();
		initVideoBg();	
		
	});

	// Fillo funksionet pasi jane ngarkuar elementet.
	$(window).load(function() {

		// Preloader
		$('.preloader img').fadeOut(); // ne fillim shuhet preloader.
		$('.preloader').delay(350).fadeOut('slow', function() {

		});

		

	});


/* --------------------------------------------------
	Navigation
-------------------------------------------------- */
	
	function initNavbar(){

		// Sticked Navbar & Transparent Background
		$(window).scroll(function(){
			
			if ($(window).scrollTop() > 20) {
				$('nav').removeClass('navbar-trans', 300);
				$('nav').removeClass('navbar-trans-dark');
				$('nav').addClass('navbar-small', 300);
			}
			else {
				$('nav:not(.mobile-nav)').addClass('navbar-trans', 300);
				$('nav').removeClass('navbar-small', 300);

				if ($('nav').hasClass('trans-helper')) {
					$('nav:not(.mobile-nav)').addClass('navbar-trans-dark');
				}
			}

			$('nav:not(.navbar-fixed-top)').removeClass('navbar-trans navbar-small');

		});


		// Navbar on mobile screens
		$(window).resize(function() {
	        if ($(window).width() <= 1259) {
				$('nav').addClass('mobile-nav');		        
		    } else {
		    	$('nav').removeClass('mobile-nav');
		    }

    		if ($('nav').hasClass('mobile-nav')) {
    			$('nav').removeClass('navbar-trans');
    			
    		} else {
    			if ($(window).width() >= 1259 && $(window).top) {
    				$('nav').addClass('navbar-trans');
    			}
    		}

    		

    		// Mbyll mobile menu kur klikohet linku

    		if (!$('.nav a').hasClass('dropdown-toggle')) {

    			$('.nav a').on('click', function(){ 
			        if($('.navbar-toggle').css('display') !='none'){
			            $(".navbar-toggle").trigger( "click" );
			        }
			    });

    		}

	    }).resize();

		


	} 





/* --------------------------------------------------
	Number Counters
-------------------------------------------------- */

	function initCountNbr () {

		var hasCounters = $('#counters').hasClass('count-wrapper');

		if (hasCounters) {

			var waypoint = new Waypoint({
			  element: document.getElementById('counters'),
			  handler: function() {

			    	var options = {
						useEasing : true,
						useGrouping : true, 
						separator : ','
					};
					// Counter 1
					var counter1 = new CountUp('count-1', 0, 100, 0, 3, options);
					counter1.start();
					// Counter 2
					var counter2 = new CountUp('count-2', 0, 1500, 0, 3, options);
					counter2.start();
					// Counter 3
					var counter3 = new CountUp('count-3', 0, 36900, 0, 3, options);
					counter3.start();
					// Counter 4
					var counter4 = new CountUp('count-4', 0, 96100, 0, 3, options);
					counter4.start();
					// init only once
					this.destroy();
				},
				offset: '80%',
			});

		}
		

	} 


/* --------------------------------------------------
	Scroll Nav
-------------------------------------------------- */

	function initScroller () {

		$('#navbar').localScroll({
			easing: 'easeInOutExpo'
		});

		$('#page-top').localScroll({
			easing: 'easeInOutExpo'
		});	
	} 





/* --------------------------------------------------
	Animation
-------------------------------------------------- */

	function initAnimation () {
		
		new WOW().init();

	}




/* --------------------------------------------------
	Video Background
-------------------------------------------------- */

	function initVideoBg () {

		var hasBgVideo = $('#fs-video-one-bg').hasClass('player');

		if (hasBgVideo) {

			$('.player').YTPlayer();
			} 
	}

/*
				$(function() {

				if (!jQuery.browser.mobile)
				
				$(".player").mb_YTPlayer();
				
				});*/



})(jQuery);


