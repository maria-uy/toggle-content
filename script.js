
	/* Acordion */
	$('.read-more').click(function() {
	  if($('.content-drop-down').is(':hidden')) { 
	    $('.content-drop-down').slideDown('slow').promise().done(function(){
	    $('.read-more').css({'visibility': 'hidden', 'padding': '0'});
	    $('.read-less').css('visibility', 'visible');
	    });
	  }   
	});

 	$('.read-less').click(function() {
	    $('.content-drop-down').slideUp('slow');
	    $('.read-more').css('visibility', 'visible');
	    $('.read-less').css('visibility', 'hidden');
	 });
