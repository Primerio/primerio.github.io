$(document).ready(function() {
/*tag menu*/
  $(".open-tag-menu").click(function () {
      $(".tag-menu-list").slideToggle();
  });
    /*open form*/
  $(".open-farcom-form").click(function () {
      $(".form-fields").slideToggle();
  });
    /*open menu*/
      $(".menu-btn").click(function () {
      $(".main-menu").toggleClass("main-menu-open");
  });
    /*close menu by btn*/
    $(".close-menu").click(function () {
      $(".main-menu").removeClass("main-menu-open");
  });

/*accordion*/
   ! function(i) {
      var o, n;
      i(".title_block").on("click", function() {
        o = i(this).parents(".accordion_item"), n = o.find(".info"),
          o.hasClass("active_block") ? (o.removeClass("active_block"),
            n.slideUp()) : (o.addClass("active_block"), n.stop(!0, !0).slideDown(),
            o.siblings(".active_block").removeClass("active_block").children(
              ".info").stop(!0, !0).slideUp())
      })
    }(jQuery);


/*slider*/
 var deg=0;

 /* Storing all the images into a variable */

 var images = $('#stage img').removeClass('default').addClass('animationReady');
 var dim  = { width:images.width(),height:images.height()};

 var cnt = images.length;

 /* Finding the centers of the animation container: */
 var centerX = $('#stage').width()/2;
 var centerY = $('#stage').height()/2 - dim.height/2;

 function rotate(step,total){
  // This function will loop through all the phone images, and rotate them
  // with "step" degrees (10 in this implementation) till total > 0

  /* Increment the degrees: */
  deg+=step;

  var eSin,eCos,newWidth,newHeight,q;

  /* Loop through all the images: */
  for(var i=0;i<cnt;i++){

   /* Calculate the sine and cosine for the i-th image */

   q = ((360/cnt)*i+deg)*Math.PI/180;
   eSin  = Math.sin(q);
   eCos  = Math.cos(q);

   /*
   / With the sine value, we can calculate the vertical movement,
   / and the cosine will give us the horizontal movement.
   */

   q = (0.6+eSin*0.4);
   newWidth = q*dim.width;
   newHeight = q*dim.height;

   /*
   / We are using the calculated sine value (which is in the range
   / of -1 to 1) to calculate the opacity and z-index. The
    / frontmost image has a sine value of 1, while the backmost
   / one has a sine value of -1.
   */

   // eq() extracts the image at the i-th position:

   images.eq(i).css({
    top   : centerY+15*eSin,
    left  : centerX+110*eCos,
    opacity  : 0.8+eSin*0.8,
    marginLeft : -newWidth/2,
    zIndex  : Math.round(80+eSin*20)
   }).width(newWidth).height(newHeight);
       if (window.innerWidth >= 360) {
        images.eq(i).css({
    left  : centerX+140*eCos
   })
    }
  }

  total-=Math.abs(step);
  if(total<=0) return false;

  // Setting the function to be run again in 40 milliseconds (equals to 25 frames per second):
  setTimeout(function(){rotate(step,total)},40);

 }

 // Running the animation once at load time (and moving the iPhone into view):
 rotate(10,360/cnt);

 $('.main-slider .previous').click(function(){
  // 360/cnt lets us distribute the phones evenly in a circle
  rotate(-10,360/cnt);
 });

 $('.main-slider .next').click(function(){
  rotate(10,360/cnt);
 });

});
