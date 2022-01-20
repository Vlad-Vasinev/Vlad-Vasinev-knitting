
$(function () {

  $('.slider__wrapper').slick({
    dots: true,
    
    prevArrow: ('.slider__btn-prev'),
    nextArrow: ('.slider__btn-next'),
  });

  $('.reviews__slider').slick({
    dots: false,
    slidesToShow: 1,
    prevArrow: ('.reviews__btn-prev'),
    nextArrow: ('.reviews__btn-next'),
  });

});

$(function () {

  $(".rate").rateYo({
    starWidth: "14px",
    starHeight: "16px"
  });

  var starWidth = $(".reviews__rate").rateYo("option", "starWidth");
  $(".reviews__rate").rateYo("option", "starWidth", "20px");

});