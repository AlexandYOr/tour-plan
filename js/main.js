$(document).ready(function () {
  const hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,
    // Управление слайдами с помощью клавиатуры
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },
    
  });
  const reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,
    // Управление слайдами с помощью клавиатуры
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },
    
  });
  
  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener('click', function () {
    document.querySelector(".navbar-bottom")
    classList.toggle('navbar-bottom--visible')
  });
  
  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $('.modal__close');
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
    $("body").css("overflow","hidden");
  }
  function closeModal(event) {
    event.preventDefault();
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
    $("body").css("overflow","scroll");
  }
  $(document).keydown(function(e) {
    if (e.keyCode == 27) {
      modalOverlay.removeClass("modal__overlay--visible");
      modalDialog.removeClass("modal__dialog--visible");
      $("body").css("overflow","scroll");
    }
  });
  $(document).click(function (e) {
    if ($(e.target).is('.modal__overlay')) {
      modalOverlay.removeClass("modal__overlay--visible");
      modalDialog.removeClass("modal__dialog--visible");
      $("body").css("overflow","scroll")
    }
  });
})