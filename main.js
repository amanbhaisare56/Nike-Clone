new Swiper('.card-wrapper', {
  // Optional parameters
  loop: true,
  spaceBetween:25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },

  // Responsive breakpoint
  breakpoints:{
   0: {
    slidesPerView:1
   }, 
   851: {
    slidesPerView:2
   },
   768: {
    slidesPerView:3
   },
   1024: {
    slidesPerView:5
   },
  }
});

function ShowSidebar(event){
  event.preventDefault();
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}

function HideSidebar(event){
  event.preventDefault();
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}