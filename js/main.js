
$(function(){
  
  $(".header__nav-burger").on('click', function () {
    $(".header__nav-burger").toggleClass("active");
  });

  $(".hot__tours-cards").slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    rows: 2,
    responsive: [
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          rows: 2,
        },
      },
        {
          breakpoint: 585,
          settings: "unslick",
        }
      ]},
  );
});

$(function () {
  $(".popular__tours-cards").slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          rows: 1,
        },
      },
    ],
  });
})

$('.header__nav-burger').on('click', function (params) {
  $('.header__nav').toggleClass('menu--active');
  $(".overlay").toggleClass("overlay--active");
  $('body').toggleClass('lock')

})

$('.load-btn').on('click', function (params) {
  $('.load-btn').toggleClass('btn-hide');
  $('.card-hide').removeClass('card-hide');
}) 

$('.country-sel').on('click', function (params) {
  $(".country__menu").fadeIn();
})

$(document).mouseup(function (e) {
  if (
    !$(".country__menu").is(e.target) &&
    $(".country__menu").has(e.target).length === 0
  ) {
    $(".country__menu").fadeOut();
  }
});

$(".type-sel").on("click", function (params) {
  $(".type-menu").fadeIn();
});

$(document).mouseup(function (e) {
  if (
    !$(".type-menu").is(e.target) &&
    $(".type-menu").has(e.target).length === 0
  ) {
    $(".type-menu").fadeOut();
  }
});

$(".accept-checkbox").on("click", function (params) {
  $(".accept").fadeIn();
});

$(document).mouseup(function (e) {
  if (
    (!$(".accept").is(e.target) &&
    $(".accept").has(e.target).length === 0) ||
    ($(".accept").has(e.target).length > 0)
    
  ) {
    $(".accept").fadeOut();
  }
});



