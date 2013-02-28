(function($) {

	$('.presentation').after('<div class="presentation-nav" />').carouFredSel({
		responsive: true,
		auto: false,
		prev: "left",
		next: "right",
        circular: false,
        infinite: false,
		pagination: '.presentation-nav',
        cookie: 'true',
		scroll : { wipe: true }
	});

    $(window).load(function() {
        $('body').addClass('loaded');        
    });

})(jQuery);