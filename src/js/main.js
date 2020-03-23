$(function () {
  $('.header__burger').on('click', function () {
    $('.menu').toggleClass('active')
  });
  $('.form-conditions').on('click', function () {
    $(this).toggleClass('active')
  });
  $('.ourWorks__examples-slider-left').slick({
    arrows: false,
    asNavFor: '.ourWorks__examples-slider-preview-left',
    slidesToScroll: 1,
    slidesToShow: 1,
    fade: true,
  });
  $('.ourWorks__examples-slider-preview-left').slick({
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.ourWorks__examples-slider-left',
    focusOnSelect: true
  });
  $('.ourWorks__examples-slider-right').slick({
    arrows: false,
    asNavFor: '.ourWorks__examples-slider-preview-right',
    slidesToScroll: 1,
    slidesToShow: 1,
    fade: true,
  });
  $('.ourWorks__examples-slider-preview-right').slick({
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.ourWorks__examples-slider-right',
    focusOnSelect: true
  });
});