(function ($) {
	$(document).ready(function(){
		$('#btn_up').click(
			function() {
				console.log('lol');
				$('html,body').animate({scrollTop: 0}, 'slow');
			});
	});
	$(window).scroll(
		function(){
			if($(window).scrollTop()<300){
				$('#btn_up').fadeOut();
			}else{
				$('#btn_up').fadeIn();
			}
		}
	);
})(jQuery);