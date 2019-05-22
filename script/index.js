// AOS Settings

window.onload = function() {
	AOS.init({
		duration: 2000,
	});
}

// TASK CARDS TOGGLER

$( '.task__solution' ).hide();
$( '.task__solution-btn').click(function() {
	$(this).next().toggle('slow');
});
