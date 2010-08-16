$(window).load(function() {
	if (jQuery.browser.safari && document.readyState != "complete") {
		setTimeout( arguments.callee, 100 );
		return;
	}
	equalHeight($(".col"));
});

function tumblrNotesInserted() {
	equalHeight($(".col"));
}

function equalHeight(group) {
	var tallest = 0;
	group.each(function() {
		var thisHeight = $(this).height();
		if(thisHeight > tallest) {
			tallest = thisHeight;
		}
	});
	if ($.browser.msie && $.browser.version == 6.0) { group.css({'height': tallest}); }
	group.css({'min-height': tallest}); 
}