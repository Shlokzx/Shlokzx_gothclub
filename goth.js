let swipe = new Swiper('#swiper',{
    effect: "cube",
    grabCursor: true,
    cubeEffect:{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 1.2,
    },
    pagination:{
        el:'.swiper-pagination'
    },
    loop: true,
});