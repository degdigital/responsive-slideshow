(function($) {

	$('.presentation').after('<div class="presentation-nav" />').carouFredSel({
		responsive: true,
		auto: false,
		prev: "left",
		next: "right",
		pagination: '.presentation-nav',
		scroll : { wipe: true }
	});

})(jQuery);