const BURGERMENU = document.querySelector(".burger__menu");
const OVERLAYMENU = document.querySelector(".overlay_menu")

document.addEventListener('DOMContentLoaded', () => {
    sliderVisitors();
    animalsSlide();
    tabsAnimals();
    newsSlide();
});

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

function animalsSlide() {
    const swiper = new Swiper('.swiper-container2', {
        // Optional parameters
        slidesPerView: 4,
        slidesPerGroup: 2,
        spaceBetween: 90,
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.next',
            prevEl: '.prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },

        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 60,
                slidesPerGroup: 1,
            },
            600: {
                slidesPerView: 2,
                spaceBetween: 30,
                slidesPerGroup: 1,
            },

            1000: {
                slidesPerView: 6,
                spaceBetween: 60,
                slidesPerGroup: 2,
            },
        }
    });
};
function tabsAnimals() {
    const TABS = document.querySelectorAll('.tabs-items');
    const CONTENT = document.querySelectorAll('.swiper-container2');

    TABS.forEach((tab) => {
        tab.addEventListener('click', () => {
            TABS.forEach((tab) => {
                tab.classList.remove('selected');
            })
            tab.classList.add('selected');
            // get data-atribute
            const DATA_ATRIBUTE = tab.getAttribute('data-products');
            CONTENT.forEach((item) => {
                item.classList.add('d-none');
                if (item.getAttribute('data-products') == DATA_ATRIBUTE) {
                    item.classList.remove('d-none');
                }
            });
        })
    })
};

function sliderVisitors() {
    const myswiper = new Swiper('.swiper1', {
        // Optional parameters
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 60,
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.next-slide',
            prevEl: '.prev-slide',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },

        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 60,
                slidesPerGroup: 1,
            },

            1000: {
                slidesPerView: 2,
                spaceBetween: 60,
                slidesPerGroup: 2,
            },
        }
    });
};

function newsSlide() {
    const swiper = new Swiper('.swiper-container3', {
        // Optional parameters
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 80,
        centeredSlides: true,
        loop: true,


        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.next',
            prevEl: '.prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },

        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 60,
                slidesPerGroup: 1,
            },
            950: {
                slidesPerView: 2,
                spaceBetween: 20,
                slidesPerGroup: 1,
            },
        1300: {
                slidesPerView: 3,
                spaceBetween: 20,
                slidesPerGroup: 1,
            },

            1500: {
                slidesPerView: 4,
                spaceBetween: 30,
                slidesPerGroup: 1,
            },
           
        }
    });
};
