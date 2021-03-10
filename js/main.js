const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  // Управление слайдами с помощью клавиатуры
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
  
});
