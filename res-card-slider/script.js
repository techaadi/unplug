var swiper = new Swiper('.wolv-slider', {
      spaceBetween: 30,
      effect: 'fade',
      loop: true,
      mousewheel: {
        invert: false,
      },
      // autoHeight: true,
      pagination: {
        el: '.wolv-slider__pagination',
        clickable: true,
      }
    });
