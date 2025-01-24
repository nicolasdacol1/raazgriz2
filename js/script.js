(function() {
  $('.wrapper section').hover((function() {
    $(this).siblings().removeClass('active').end().addClass('active');
    TweenMax.to($(this).siblings('section'), .8, {
      css: {
        width: '20%',
        opacity: '.6'
      },
      ease: Quart.easeOut
    });
    TweenMax.to($(this), .8, {
      css: {
        width: '40%'
      },
      ease: Quart.easeOut
    });
  }), function() {
    $('.wrapper section').removeClass('active');
    TweenMax.to($('.wrapper section'), .8, {
      css: {
        width: '25%',
        opacity: '1'
      },
      ease: Quart.easeOut
    });
  });

}).call(this);


