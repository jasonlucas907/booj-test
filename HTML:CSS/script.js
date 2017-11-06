
// functions

// Open and close the drop menu on menu icon click
const displayMenu = () => {
  $('.outer-slider-nav-con').toggleClass('drop-menu')
}

// Remove selected class from all realtor navigation accordion tabs
const clearRealtorNav = () => {
  $('.realtor-nav').removeClass('realtor-nav-selected');
  $('.realtor-info-nav').removeClass('realtor-info-nav-selected');
}


// Selected realtor navigations functions
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


// Event Listeners

// Open and close the drop menu on menu icon click
$('.menu-nav-con').on('click', displayMenu)

// Selected realtor navigations listeners 
$('.about-me-nav').on('click', aboutMe)

$('.my-listings-nav').on('click', myListings)

$('.my-solds-nav').on('click', mySolds)

$('.testimonials-nav').on('click', testimonials)
