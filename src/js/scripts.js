// Menu mobile
$(document).ready(function(){
	var m_width = $(window).width();
	// Delete wow animation in mobile menu
	if(m_width <= 768){ 
		$('.navbar-nav.navbar-right > li').removeClass('wow'); 
		$('#myBtnCollapseMenu').slideUp();

		$('#myBtnCollapse').on({
			'click': function(){
				$('#myBtnCollapseMenu').slideToggle();
			}
		});
	} 
});

// Add scroll animation
$(document).ready(function() {
  $("a.scrollto").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });
});

// Add wow animation
$(document).ready(function(){
	wow = new WOW();
  wow.init();
});

//Portfolio script restiling
$(document).ready(function(){

	$('.item:not(.last)').addClass('hidden');

	$('.portfolio-controls > button').on({
		'click' : function(){
			$('.last').slideUp();
			$('.item').removeClass('hidden');
			$('button.control').removeClass('portfolio-control-active');
			$('button.control').removeClass('mixitup-control-active');
			$(this).addClass('portfolio-control-active');
			$(this).addClass('mixitup-control-active');
		}
	});
	$('#allBtn').on({
		'click' : function(){
			$('.last').slideUp();
		}
	});
	$('#lastBtn').on({
		'click' : function(){

			$('.last').slideDown();
		}
	});



});

//Portfolio script start
$(document).ready(function(){
	var containerEl = document.querySelector('[data-ref~="mixitup-container"]');
	var mixer = mixitup(containerEl, {
    selectors: {
      target: '[data-ref~="mixitup-target"]'
    }
  });
});

//Portfolio counter number
$(document).ready(function(){
    var show = true;
    var countbox = ".portfolio__products-list-progress";

    $(window).on("scroll load resize", function(){
      if(!show) return false;                   
        var w_top = $(window).scrollTop();       
        var e_top = $(countbox).offset().top;     
        var w_height = $(window).height();        
        var d_height = $(document).height();      
        var e_height = $(countbox).outerHeight(); 
        if(w_top + w_height - 400 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
          $(".spincrement").spincrement();
        	show = false;
        }
    });
});

// our teeame activator
$(document).ready(function(){
	$('#navTabs > div').on({'click' : function(){
      $('#navTabs > div').removeClass('activator');
      $(this).addClass('activator');
  }});
});




