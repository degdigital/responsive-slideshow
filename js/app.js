(function($) {

	$('.presentation').after('<div class="presentation-nav" />').carouFredSel({
		responsive: true,
		auto: false,
		prev: "left",
		next: "right",
        circular: false,
		pagination: '.presentation-nav',
		scroll : { wipe: true }
	});

})(jQuery);