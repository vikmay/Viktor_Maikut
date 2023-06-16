const BURGERMENU = document.querySelector(".burger__menu");
const OVERLAYMENU = document.querySelector(".overlay_menu")

BURGERMENU.addEventListener("click", () => {
    BURGERMENU.classList.toggle("active");
    if (BURGERMENU.classList.contains('active')) {
        OVERLAYMENU.classList.remove('d-none')
    }
    else OVERLAYMENU.classList.add('d-none');
});
document.addEventListener('DOMContentLoaded',  () => {
    const swiper1 = new Swiper(".swiper1", {
        slidesPerView: 3,
        loop: true,
        speed: 2000,
        spaceBetween: 20,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        on: {
            slideChangeTransitionStart: function () {
                this.slides[1].classList.add("slide-scale");
            },
            slideChangeTransitionEnd: function () {
                this.slides[1].classList.remove("slide-scale");
            },
        },
        breakpoints: {
            1400: {
                slidesPerView: 3,
                on: {
                    slideChangeTransitionStart: function () {
                        this.slides[0].classList.add("slide-scale");
                    },
                    slideChangeTransitionEnd: function () {
                        this.slides[0].classList.remove("slide-scale");
                    },
                },
            },
            992: {
                slidesPerView: 2,
                centeredSlides: false,
                on: {
                    slideChangeTransitionStart: function () {
                        this.slides[1].classList.add("slide-scale");
                    },
                    slideChangeTransitionEnd: function () {
                        this.slides[1].classList.remove("slide-scale");
                    },
                },
            },
            430: {
                slidesPerView: 1,
            },
            320: {
                slidesPerView: false,
            },
        },
    });
    // patron Swiper
    const swiper2 = new Swiper('.swiper2', {
        direction: 'horizontal',
        slidesPerView: 2,
        spaceBetween:450,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: "#right_arrow_btn",
            prevEl: "#left_arrow_btn",
        },
        // breakpoints: {
            
        //     1400: {
        //         slidesPerView: 1,
                
        //     },
        //     320: {
        //         slidesPerView: false,
        //     },
        // },
        
        
    });
});
