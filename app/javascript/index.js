const mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true'
    },
  })

  new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    scrollHorizontally: true,
    navigationPosition: "left",

    licenseKey: 'A6A15E2A-A878434B-923220E7-19CA75B0'
  });