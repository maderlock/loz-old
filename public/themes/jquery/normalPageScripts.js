// JavaScript Document
function swapImages(){
  var $active = $('#rotate1 .active');
  var $next = ($('#rotate1 .active').next().length > 0) ? $('#rotate1 .active').next() : $('#rotate1 img:first');
  $next.fadeIn('slow',function(){
  	$active.fadeOut('slow').removeClass('active');
  }).addClass('active');
}
$(document).ready(function() {
	$('#topnav li a').hover(function() {
        $(this).stop(true,true);
        var elem = $(this).parent().find('ul');
        elem.stop(true).show();
		//$(this).animate(css("background-image", "url(/public/themes/css/images/circle%20select.png)"));
	}, function() {
        $(this).stop(true);
        var elem = $(this).parent().find('ul');
        elem.stop(true).fadeOut();
    	//$(this).animate(css("background-image", "none"));
	});

    $('#topnav li ul').hover(function() {
        $(this).stop(true,true);
        var elem = $(this).parent().find('ul');
        elem.stop(true).show();
    }, function() {
        $(this).stop(true);
        var elem = $(this).parent().find('ul');
        elem.stop(true).fadeOut();
    });

	$('img.circle').each(function() {
		// Place circle over the top
		var src = $(this).attr("src");
		var el = $(this);
		$(this).css("background-image", "url("+src+")");  
		$(this).attr("src","/public/images/circlehole.png");
		var classList=$(this).attr('class').split(/\s+/);
		$.each( classList, function(index, item){
			if (item==='right') {
				el.removeClass('right');
				el.wrap('<div class="imgcont right" />');
			}
			if (item==='left') {
				el.removeClass('left');
				el.wrap('<div class="imgcont left" />');
			}
		});
		// Add caption
		var captiontext = $(this).attr("title");
		if (captiontext != "") {
			$(this).after('<div class="caption">'+captiontext+'</div>');
		}
		
		$('blockquote').prepend('<div class="openquotes" \>');
		$('blockquote').append('<div class="closequotes" \>');
	});
	// Run our swapImages() function every 15secs
  	setInterval('swapImages()', 15000);
     
});