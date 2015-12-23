$( document ).ready(function() {

  /*
  *SWITCH
  */
  var count = 0;
  $('#switch').click(function(){
    var skip = count % 2;
    if (skip == 0) {
      $('.image-container img').fadeIn(200);
      count++;
    } else {
      $('.image-container img').fadeOut(200);
      count++;
    }
  });

  /*
  *SLICK SLIDER
  */
  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    appendArrows: $('#target')
  });

});
