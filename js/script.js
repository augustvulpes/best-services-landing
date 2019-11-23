$(function() {
	let extended = false;

	$(document).scroll(function() {
		if (extended) return;

		let $nav = $("header");
		$nav.toggleClass("scrolled", $(this).scrollTop() > 55);
	});

	$('.navbar-toggler').on('click', function(){
		extended = !extended;
		
		let $nav = $("header");
		$nav.toggleClass("scrolled", extended || $(document).scrollTop() > 55);
	});
});