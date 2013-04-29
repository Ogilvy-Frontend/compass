Reveal.initialize({
	controls: false,
	progress: false,
	history: false,
	center: false,
});

var INIT = {
	init : function(){
		$('section > code:odd').css('margin-left', '50px');
		$('#slide16 > code:even, #slide18 > code:even').css('margin-left', '135px')
	}
};

$(document).ready(function(){
	INIT.init();
});
