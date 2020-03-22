$(function () {
  $('.header__burger').on('click', function () {
    $('.menu').toggleClass('active')
  });
  $('.form-conditions').on('click', function () {
    $(this).toggleClass('active')
  });
  $('.ourWorks__examples-slider').slick({
    arrows: false,
    asNavFor: '.ourWorks__examples-slider-preview'
  });
  $('.ourWorks__examples-slider-preview').slick({
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    asNavFor: '.ourWorks__examples-slider',
    focusOnSelect: true
  });
});