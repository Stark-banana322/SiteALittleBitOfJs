document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')

$(document).ready(function(){
	$('.bloc-3_slider').slick({
		dots: true,
		adaptiveHeigth: true,
		slidesToShow: 3,
		centerMode: true,
	})
})