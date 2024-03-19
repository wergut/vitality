document.addEventListener('DOMContentLoaded', function () {
  const btnMenuMobile = document.querySelector('.btn-menu-mobile');
  const headerMobileWrapper = document.querySelector('.header-mobile-wrapper');

  btnMenuMobile.addEventListener('click', function () {
    headerMobileWrapper.classList.toggle('show');

    if (headerMobileWrapper.classList.contains('show')) {
      btnMenuMobile.classList.add('cross');
    } else {
      btnMenuMobile.classList.remove('cross');
    }
  });
});




var swiper = new Swiper(".testimonial-slider", {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".testimonials-section .swiper-button-next",
    prevEl: ".testimonials-section .swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    601: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1025: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }
});


document.addEventListener('DOMContentLoaded', function() {
  const accordionItems = document.querySelectorAll('.accordion-item');

  if (accordionItems) {
    accordionItems.forEach(item => {
      const trigger = item.querySelector('.accordion-item-header');
      const content = item.querySelector('.accordion-item-content');

      trigger.addEventListener('click', function() {
        const parent = this.parentNode;

        if (parent.classList.contains('active')) {
          parent.classList.remove('active');
          content.style.height = '0';
        } else {
          document.querySelectorAll('.accordion-item').forEach(child => {
            child.classList.remove('active');
            child.querySelector('.accordion-item-content').style.height = '0';
          });
          parent.classList.add('active');
          content.style.height = content.scrollHeight + 'px';
        }
      });
    });
  }
});



