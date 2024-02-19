//promo slider
const promoSlider = new Swiper(".main-slider", {
  slidesPerView: 1,
  loop: true,
  speed: 900,
  spaceBetween: 100,
  navigation: {
    nextEl: ".promo-slider-next",
    prevEl: ".promo-slider-prev",
  },
  breakpoints: {
    320: {
      autoHeight: true,
    },
    767: {
      autoHeight: false,
    }
  }
});


//review slider
const reviewSlider = new Swiper('.review-slider', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: '.review-pagination',
    type: 'bullets',
    clickable: true
  },
  navigation: {
    nextEl: '.review-slider-next',
    prevEl: '.review-slider-prev',
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
      spaceBetween: 20
    },
  }
});


//mask
$(document).ready(function() {
  $('.phone-mask').mask('+7(000)000-00-00');
})


//toggle mobile menu
$('.toggle-mobile-menu').click(function () {
  $(this).toggleClass('active');
  $('.mobile-menu').toggleClass('show');
  $('body').toggleClass('scroll-locked')
})


//monitoring slider
$(document).ready(function () {
  if($(window).width() < 768) {
    const monitoringSlider = new Swiper('.monitoring-slider', {
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: {
        nextEl: '.monitoring-slider-next',
        prevEl: '.monitoring-slider-prev',
      },
    });
  }
})


//toggle header nav on tablet
$('.toggle-header-nav').click(function () {
  $(this).toggleClass('active');
  $('.header-nav').toggleClass('show')
})

$(document).mouseup(function(e) {
  var container = $(".header-nav, .toggle-header-nav");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    $('.header-nav').removeClass('show');
    $('.toggle-header-nav').removeClass('active')
  }
});