//init parallax
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

//disable submit button
// $("#btn-submit").click(function(){
//   $(this).form.submit();
//   // $(this).attr("value", "Thanks, we'll be in touch.");
//   // $(this).css("background-color", "green");
//   // $(this).attr("disabled", true);
// });


// $("#plane").click(function(){

// var curve = new CurveAnimator(
//   [100,94], [-41,455],
//   [193,21], [447,94]
// );

// var o = document.getElementById('#plane');
// o.style.position = 'absolute';

// curve.animate(2, function(point,angle){
//   o.style.left = point.x+"px";
//   o.style.top  = point.y+"px";
//   o.style.transform =
//     o.style.webkitTransform =
//     o.style.MozTransform =
//     "rotate("+angle+"deg)";
// });

// });

$("#message-form").submit(function() {   
  
    $("#btn-submit").attr("value", "Thanks, we'll be in touch.");
    $("#btn-submit").css("background-color", "green");
    $('#message-form *').attr("disabled",true);
    $('.plane').addClass("plane-fly");
    //$('#plane').addClass("plane-rotate");
//    animate();



//custom submit function shold be added
    return false;
});


//preload images

$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
};


// function animate()
// {
//   var path = {
//             start: {
//               x: 0,
//               y: 0,
//               angle: 315.012,
//               length: 0.707
//             },
//             end: {
//               x: 540,
//               y: 540,
//               angle: 315.012,
//               length: 0.707
//             }
//           };

//   $('.animatingDiv').animate(
//       {
//         path : new $.path.bezier(path)
//       },
//       2000,
//       animate
//     );
//     alert("s"):
// }
