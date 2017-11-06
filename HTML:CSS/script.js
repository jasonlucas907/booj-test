
const displayMenu = () => {
  $('.outer-slider-nav-con').toggleClass('drop-menu')
}

const clearRealtorNav = () => {
  $('.realtor-nav').removeClass('realtor-nav-selected');
  $('.realtor-info-nav').removeClass('realtor-info-nav-selected');
}

const aboutMe = () => {
  clearRealtorNav();
  $('.about-me-nav').addClass('realtor-info-nav-selected');
  $('.about-me').addClass('realtor-nav-selected');
}

const myListings = () => {
  clearRealtorNav();
  $('.my-listings-nav').addClass('realtor-info-nav-selected');
  $('.my-listings').addClass('realtor-nav-selected');
}

const mySolds = () => {
  clearRealtorNav();
  $('.my-solds-nav').addClass('realtor-info-nav-selected');
  $('.my-solds').addClass('realtor-nav-selected');
}

const testimonials = () => {
  clearRealtorNav();
  $('.testimonials-nav').addClass('realtor-info-nav-selected');
  $('.testimonials').addClass('realtor-nav-selected');
}


$('.menu-nav-con').on('click', displayMenu)

$('.about-me-nav').on('click', aboutMe)

$('.my-listings-nav').on('click', myListings)

$('.my-solds-nav').on('click', mySolds)

$('.testimonials-nav').on('click', testimonials)
