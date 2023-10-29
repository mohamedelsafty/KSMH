var head = document.getElementById('header'),
    headBtn = document.getElementById('header-btn');

headBtn.onclick = function openHead() {
    head.classList.toggle('main-header__show');
    document.querySelector('body').classList.toggle('body--overflow-hidden');
    this.classList.toggle('header-toggle-close');
};

$('#animated-thumbnails-gallery').lightGallery();

var welcomeSwiper = new Swiper('#homeSwiper', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '.home-slider__pagination',
        bulletElement: 'li',
        bulletClass: 'home-slider__navigator',
        bulletActiveClass: 'home-slider__navigator--active',
        clickable: true,
    },
    parallax: true,
    grabCursor: true,
});

const newsSlider = new Swiper('#news-slider', {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 2,
    loop: true,
    breakpoints: {
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
    },
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '#news-slider .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '#news-slider .swiper-button-next',
        prevEl: '#news-slider .swiper-button-prev',
    },
});

AOS.init({
    once: true,
});

var servicesSlider = new Swiper('#servicesSlider', {
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 5,
    // loop: true,
    breakpoints: {
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
    },
    autoplay: {
        delay: 4500,
    },
    navigation: {
        nextEl: '#servicesSlider .swiper-button-next',
        prevEl: '#servicesSlider .swiper-button-prev',
    },
});

var supportSlider = new Swiper('#supportSlider', {
    slidesPerView: 4,
    slidesPerGroup: 1,
    loop: true,
    breakpoints: {
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
    },
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: '#supportSlider .swiper-button-next',
        prevEl: '#supportSlider .swiper-button-prev',
    },
});
