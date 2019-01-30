(function ($) { 

	$(document).ready(function(){
		
/*
		// external links
		$('a.external').click(function(e){			
			e.preventDefault();
			window.open(this.href, '_blank');
		});		
		
		// contact form labels to HTML5 placeholder
		$('.form-text, .form-textarea').each(function(){
				$(this).attr('placeholder', $(this).closest('.form-item').find('label').remove().text().replace(' *', ''));
		});
*/
		
		
		$('label[for="edit-submitted-room-1"]').append($('.views-row-1 .room-rate').html());	
		$('label[for="edit-submitted-room-2"]').append($('.views-row-2 .room-rate').html());	
		$('label[for="edit-submitted-room-3"]').append($('.views-row-3 .room-rate').html());	
		$('label[for="edit-submitted-room-4"]').append($('.views-row-4 .room-rate').html());	
		


		
});

})(jQuery);