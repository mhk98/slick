$(function(){

  //banner slider js
    
$('#banner').slick({
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    fade: false,
    vertical: false,
    verticalSwiping: true,
    prevArrow: '<i class="fa fa-angle-left icon left"></i>',
    nextArrow: '<i class="fa fa-angle-right icon right"></i>',
    
  });
  //main slider imag

  $('.image-slider`').slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    
  });
})