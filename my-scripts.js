var links = document.getElementsByTagName('a');

/*document.addEventListener('DOMContentLoaded',function() {
		for (var i = 0; i < links.length; i++) {
			window.alert(links[i]);
		}
})*/

$('.collapse').on('shown.bs.collapse', function (e) {
  $('.collapse').not(this).removeClass('in');
});

$('[data-toggle=collapse]').click(function (e) {
  $('[data-toggle=collapse]').parent('li').removeClass('active');
  $(this).parent('li').toggleClass('active');
});