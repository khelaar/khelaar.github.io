//init parallax
( function( $ ) {
    // Init Skrollr
    var s = skrollr.init({
        render: function(data) {
        }
    });
} )( jQuery );


$(document).ready(function () {  

//pin menu bar while scrolling
  var top = $('.menu-div').offset().top;
  $(window).scroll(function (event) {
    var y = $(this).scrollTop();
    if (y >= top) {
      $('.menu-div').addClass('fixed');
    } else {
      $('.menu-div').removeClass('fixed');
    }
  });
//image preload
  $(['../img/how_solar_works.jpg']).preload();
});

//show how it works slide
$(".how-it-works").click(function(){
  $(this).addClass("how-it-works-img");
  $(this).html("");
  $(this).animate({height: "420px"},  300);

});

//disable submit button and play some animation
$("#message-form").submit(function() {   
  
    $("#btn-submit").attr("value", "Thanks, we'll be in touch.");
    $("#btn-submit").css("background-color", "green");
    $('#message-form *').attr("disabled",true);
    $('.plane').addClass("plane-fly");


//custom submit function shold be added
    return false;
});

//preload images
$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
};
