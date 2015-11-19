jQuery(document).ready(function($){
	var modalTrigger = $('#modal-trigger'),
			userModal    = $('#user-modal');




	modalTrigger.on('click', function(){
		if(userModal.hasClass('show')){
			userModal.removeClass('show');
		} else {
			userModal.addClass('show');
		}
	});








});