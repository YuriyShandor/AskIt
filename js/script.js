$(document).ready(function() {
  $('.toggler-icon').on('click', function() {
    $(this).toggleClass('toggler-icon_close');
    $('.nav-bar').slideToggle('0.5s');
  });

  var partnersSlider = $('.partners-slider');
  var maxItems = Math.round(partnersSlider.parent('div').width() / 250);
  if(partnersSlider.children('div').length < maxItems) {
    maxItems = partnersSlider.children('div').length;
  }

  partnersSlider.slick({
    infinite: true,
    variableWidth: true,
    slidesToShow: maxItems,
    slidesToScroll: 1,
    nextArrow: $(".next_arrow"),
    prevArrow: $(".prev_arrow"),
    autoplay: true,
    autoplaySpeed: 5000,
  });

  $('.event:nth-child(2)').addClass('event_active');
  $('.event').on('mousemove', function() {
    $('.event').removeClass('event_active');
    $(this).addClass('event_active');
  });
});
