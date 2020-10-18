(function ($) {
	$('.navbar-toggler').on('click', function () {
		console.log('Test');
		$('.main-menu').stop().slideToggle();
	});

	if ($('.datepicker-input').length) {
		$('.input-group.date, input.date').datepicker({
			startDate: '0d',
			language: window.navigator.language,
			maxViewMode: 2,
			todayHighlight: true,
		});
	}

	if ($('.slider, .slider-nav').length) {
		$('.slider').slick({
			autoplay: true,
			arrows: false,
			dots: false,
			focusOnSelect: true,
			slidesToShow: 1,
			asNavFor: '.slider-nav',
		});
		$('.slider-nav').slick({
			infinite: true,
			autoplay: true,
			centerMode: true,
			arrows: false,
			dots: false,
			slidesToShow: 5,
			slidesToScroll: 1,
			asNavFor: '.slider',
			focusOnSelect: true,
		});

		$('.slider, .slider-nav').removeClass('visually-hidden');
		$('.slider-spinner').hide();
	}

	var backToTopBtnHandler = function () {
		if ($(window).scrollTop() > 500) {
			$('.back-to-top').fadeIn('slow');
		} else {
			$('.back-to-top').fadeOut('slow');
		}
	};

	$(window).on('scroll', backToTopBtnHandler);

	var backToTopBtnClickHandler = function () {
		$('html, body').animate({ scrollTop: 0 }, 1500, 'swing');
		return false;
	};

	$('.back-to-top').on('click', backToTopBtnClickHandler);
})(jQuery);
