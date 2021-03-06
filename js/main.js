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
    .classList.toggle('navbar-bottom--visible')
}) 
const modalButton = $("[data-toggle=modal]");
    const closeModalButton = $(".modal__close");
    const modalOverlay = $(".modal__overlay");
    const modalDialog = $(".modal__dialog");
    const openModal = () => {
      modalOverlay.addClass("modal__overlay--visible");
      modalDialog.addClass("modal__dialog--visible");
      $("body").css("overflow","hidden");
      bodyFixPosition();
    };
    const closeModal = event => {
      event.preventDefault();
      modalOverlay.removeClass("modal__overlay--visible");
      modalDialog.removeClass("modal__dialog--visible");
      $("body").css("overflow","scroll");
      bodyUnfixPosition();
    };
    const turnModal = () => {
      modalOverlay.removeClass("modal__overlay--visible");
      modalDialog.removeClass("modal__dialog--visible");
      $("body").css("overflow","scroll");
      bodyUnfixPosition();
    };
    $(document).keydown(event => {
      const key = event.key;
      if (key === "Escape") {
        turnModal();
      }
    });
    $(document).click(event => {
      if ($(event.target).is('.modal__overlay')) {
        turnModal();
      }
    });
    modalButton.on('click', openModal);
    closeModalButton.on('click', closeModal);
    const bodyFixPosition = () => {

      setTimeout(() => {
      /* Ставим необходимую задержку, чтобы не было «конфликта» в случае, если функция фиксации вызывается сразу после расфиксации (расфиксация отменяет действия расфиксации из-за одновременного действия) */
        if ( !document.body.hasAttribute('data-body-scroll-fix') ) {

          // Получаем позицию прокрутки
          let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
          // Ставим нужные стили
          document.body.setAttribute('data-body-scroll-fix', scrollPosition); // Cтавим атрибут со значением прокрутки
          document.body.style.overflow = 'hidden';
          document.body.style.position = 'fixed';
          document.body.style.top = '-' + scrollPosition + 'px';
          document.body.style.left = '0';
          document.body.style.width = '100%';
    
        }
    
      }, 15 ); /* Можно задержку ещё меньше, но у меня работало хорошо именно с этим значением на всех устройствах и браузерах */
    
    }
    
    // 2. Расфиксация <body>
    function bodyUnfixPosition() {
    
      if ( document.body.hasAttribute('data-body-scroll-fix') ) {
    
        // Получаем позицию прокрутки из атрибута
        let scrollPosition = document.body.getAttribute('data-body-scroll-fix');
    
        // Удаляем атрибут
        document.body.removeAttribute('data-body-scroll-fix');
    
        // Удаляем ненужные стили
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.width = '';
    
        // Прокручиваем страницу на полученное из атрибута значение
        window.scroll(0, scrollPosition);
      }
    }
  // обработка форм
  $(".form").each(function(){
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "The name must not be shorter than 2 letters",
        },
        email: {
          required: "Please enter your email adress",
          email: "Format for email name@domain.com"},
        phone: {
          required: "Phone is required",
          minlength: "Phone number must be at least 11 digits"
        },
      }
    });
  });
  $("#phone").mask("+7(000) 000-00-00");
  $("#phone-modal").mask("+7(000) 000-00-00");
  AOS.init({
    disable: function () {
      var maxWidth = 768;
      return window.innerWidth < maxWidth;
    }
  });
  })