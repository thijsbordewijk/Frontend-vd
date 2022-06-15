// JavaScript Document
console.log("howdy");

var options = {
  direction: 'horizontal', //richting van de carousel
  loop: 'true', // van 25 naar 1 en vice versa
  speed: 500, // duur van transitie in ms
  cssMode: true, // smoother

  // pagination
  pagination: {
    el: '.swiper-pagination', // class van de paginering
    type: 'fraction' // x/xx als paginering
  },

  // navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next', // class van next button
  //   prevEl: '.swiper-button-prev' // class van prev button
  // }
};

/* het daadwerkelijk initialiseren van de carousel */
const swiper = new Swiper('.swiper-container', options);