jQuery(document).ready(function($){
	var modalTrigger = $('#modal-trigger'),
			userModal    = $('#user-modal'),
			quoteBlock   = $('.quote-container');

	var seaTrigger   = $('.sea-trigger'),
			spaceTrigger = $('.space-trigger'),
			farmTrigger  = $('.farm-trigger');



	//Modal animation 

	modalTrigger.on('click', function(){
		if(userModal.hasClass('show')){
			userModal.removeClass('show');
		} else {
			userModal.addClass('show');
		}
	});

	//Remove theme classes 
	var removeThemes = function(){
		if(quoteBlock.hasClass('farm')){
			quoteBlock.removeClass('farm');
		} else if(quoteBlock.hasClass('space')){
			quoteBlock.removeClass('space');
		}
	};

	//Add theme
	seaTrigger.on('click', function(){
		if(localStorage.theme){
			localStorage.setItem('theme', null);
		}
		localStorage.setItem('theme', 'sea')
		removeThemes();
		quoteBlock.addClass(localStorage.theme);
		userModal.removeClass('show');
	});

	spaceTrigger.on('click', function(){
		if(localStorage.theme){
			localStorage.setItem('theme', null);
		}
		localStorage.setItem('theme', 'space')
		removeThemes();
		quoteBlock.addClass(localStorage.theme)
		userModal.removeClass('show');
	});

	farmTrigger.on('click', function(){
		if(localStorage.theme != null){
			localStorage.setItem('theme', null);
		}
		localStorage.setItem('theme', 'farm')
		quoteBlock.addClass(localStorage.theme)
		userModal.removeClass('show');
	});


	//Add theme from local storage if user has chosen theme

	window.onload = function() {
		if(localStorage.theme) {
			quoteBlock.addClass(localStorage.theme)
		} else {
			console.log('nothing in local storage')
		}
	}

});