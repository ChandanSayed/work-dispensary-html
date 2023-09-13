let swiper = new Swiper('.swiper-container.lot', {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false
  },
  pagination: {
    clickable: true
  },
  navigation: false
});

let swiper2 = new Swiper('.swiper-container.share-company', {
  slidesPerView: 4,
  spaceBetween: 20,
  centeredSlides: false,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  pagination: {
    clickable: true
  },
  navigation: false
});
