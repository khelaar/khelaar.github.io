( function( $ ) {
    // Init Skrollr
    var s = skrollr.init({
        render: function(data) {
            //Debugging - Log the current scroll position.
            //console.log(data.curTop);
        }
    });
} )( jQuery );


$(document).ready(function () {  
  var top = $('.menu-div').offset().top;
  $(window).scroll(function (event) {
    var y = $(this).scrollTop();
    if (y >= top) {
      $('.menu-div').addClass('fixed');
    } else {
      $('.menu-div').removeClass('fixed');
    }
  });
});

$(".how-it-works").click(function(){
  $(this).addClass("how-it-works-img");
  $(this).html("");
  $(this).animate({height: "420px"},  300);

});
$("#btn-submit").click(function(){
  $(this).attr("value", "Thanks, we'll be in touch.");
  $(this).css("background-color", "green");
  $(this).attr("disabled", true);
});