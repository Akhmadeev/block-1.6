

import Swiper, { Navigation, Pagination } from 'swiper';
let mobile = window.innerWidth;


	
if (mobile < 768) {
   Swiper.use([Navigation, Pagination]);
    var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    pagination: {
       el: '.swiper-pagination',
       clickable: true,
    },
       slidesPerView: 'auto',
   });
}