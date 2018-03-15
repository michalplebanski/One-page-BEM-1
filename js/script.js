$('a[href^="#"]').on('click', function(event) {
	var target = $( $(this).attr('href') );
	if( target.length ) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: target.offset().top
		}, 1000);
	}
});



var fb = $('.informations-fb'),
	twitter = $('.informations-twitter'),
	google = $('.informations-google'),
	linkedin = $('.informations-linkedin');

fb.click(function() {
	window.open('https://www.facebook.com/');
});

twitter.click(function() {
	window.open('https://www.twitter.com/');
});

google.click(function() {
	window.open('https://plus.google.com/');
});

linkedin.click(function() {
	window.open('https://www.linkedin.com/');
});



var inputBtn = document.getElementById('input-btn');
var inputEmail = document.getElementById('input-email');

inputBtn.addEventListener('click', function(event) {
	event.preventDefault();
	var expression = /@/;

	if(inputEmail.value.match(expression)) {
		document.getElementById('message').innerHTML = 'Thank you!';
		document.getElementById("message").style.color = "#096d17";
	} else {
		document.getElementById('message').innerHTML = '@ is missing!';
		document.getElementById('message').style.color = '#ff0000';
	}
});