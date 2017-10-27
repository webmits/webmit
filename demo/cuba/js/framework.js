$(document).ready(function() {
	$('ul#filter li a').click(function() {
		$(this).css('outline','none');
		$('ul#filter li a.current').removeClass('current');
		$(this).addClass('current');
		
		var filterVal = $(this).text().toLowerCase().replace(' ','-');
				
		if(filterVal == 'all') {
			$('ul#ul_portfolio li.hidden').fadeIn('slow').removeClass('hidden');
		} else {
			
			$('ul#ul_portfolio li').each(function() {
				if(!$(this).hasClass(filterVal)) {
					$(this).fadeOut('normal').addClass('hidden');
				} else {
					$(this).fadeIn('slow').removeClass('hidden');
				}
			});
		}
		
		return false;
	});
});