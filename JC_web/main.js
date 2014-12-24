// ////////////////
//
var $container = $('#tiles-container');
var prev_element = null;
$('.item').hover( function() {
  $(this).toggleClass('selected');
  $(prev_element).toggleClass('selected');
  $container.masonry();
  prev_element = $(this);
});
$('.item').click( function() {
  $(this).text('Clicked');
});
