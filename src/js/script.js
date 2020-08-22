$(document).ready(function(){
    $('.carousel__inner').slick({
      speed: 1500,
      adaptiveHeight: true,
      dots:true,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
    });
  });

//tiny  
// const slider = tns({
//   container: '.carousel__inner',
//   items: 1,
//   slideBy: 'page',
//   autoplay: false,
//   controls:false,
//   nav:true,
//   navPosition:'bottom',
// });

// document.querySelector('.prev').onclick = function () {
//   slider.goTo('prev');
// };
// document.querySelector('.next').onclick = function () {
//   slider.goTo('next');
// };