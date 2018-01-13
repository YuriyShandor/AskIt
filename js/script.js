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

  var a = 0;
  $(window).scroll(function() {
    var oTop = $('#about-us').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $('.statistic-block__amount').each(function () {
        $(this).prop('Counter',0).animate({
        Counter: $(this).text()
        },
        {
          duration: 3000,
          easing: 'swing',
          step: function (now) {
          $(this).text(Math.ceil(now));
        }
        });
      });
      a = 1;
    }
  });

  $('a[href^="#"]').on('click',function (e) {
	  e.preventDefault();

	  var target = this.hash;
	  var $target = $(target);

	  $('html, body').stop().animate({
	     'scrollTop': $target.offset().top
	    }, 700, 'swing', function () {
	      window.location.hash = target;
	  });
	});
});
