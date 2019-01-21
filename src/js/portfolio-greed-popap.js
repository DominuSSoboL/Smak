$(document).ready(function(){
	
	$("a.popap-link").lightBox({
	overlayBgColor: '#000',
	overlayOpacity: 0.9,
	imageLoading: 'img/portfolio-greed/popup-icons/loading.gif',
	imageBtnClose: 'img/portfolio-greed/popup-icons/close.gif',
	imageBtnPrev: 'img/portfolio-greed/popup-icons/prev.gif',
	imageBtnNext: 'img/portfolio-greed/popup-icons/next.gif',
	containerResizeSpeed: 350
   });

	$('#lightbox-container-image-data-box').hide();

});


// Do not let go of the empty links. To prevent getting on top. 
$(document).ready(function(){
	$(document).off('click').on('click','a[href="#"]',function(e){
	  e.preventDefault();
	});
});