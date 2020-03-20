$(function () {
  $('.header__burger').on('click', function () {
    $('.menu').toggleClass('active')
  });
  $('.form-conditions').on('click', function () {
    $(this).toggleClass('active')
  });
});