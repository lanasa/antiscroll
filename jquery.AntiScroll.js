(function($) {
 
	$(document).ready(function() {
		// check for a scroll position fragment identifier in the URL
		if (location.href.indexOf('#sy-') !== -1) {
			var scrollPos = location.href.split('#sy-').pop();
			$(window).scrollTop(scrollPos);
		}
	});
	
	$.fn.antiScroll = function() {
 
        return this.each(function() {

        	/* hijack selected link click events */
        	$(this).click(function() {
        		/* If the link contains a fragment identifier (and it's not a scroll position frag), return */
				if ($(this).attr('href').indexOf('#') !== -1 && $(this).attr('href').indexOf('#sy-') === -1)
					return;
				
				var currentHref = $(this).attr('href');
				if (currentHref.indexOf('#sy-') !== -1) {
					// remove existing scroll position frag identifier
					currentHref = currentHref.replace(/#sy-[0-9]*/g, '');
				}
				
				/* append the scroll position in a fragment identifier */
				$(this).attr('href', currentHref + '#sy-' + $(window).scrollTop());
        	});

        });
 
	};
 
}(jQuery));
