$(document).ready(function(){
	$('.top-modal, .action-contact-button').click(function(){
		$('.contact-modal.top-modal').slideDown();
		$('.overlay-contact-section').fadeIn();
	});

	$('.overlay-contact-section').click(function(){
		$('.contact-modal.top-modal').slideUp();
		$('.overlay-contact-section').fadeOut();
	});


});