console.log('loaded');


//navbar links color code: red selected tab.
var allLinks = $('.links');
allLinks.on('click', function(){
  console.log('clicked')
  allLinks.removeClass('activeLink');
  $(this).addClass('activeLink');
});

//slider
var allSlides = $('.slide');
var slide1 = $('#slide-1');
var slide2 = $('#slide-2');
var slide3 = $('#slide-3');
var slide4 = $('#slide-4');

$('#next').on('click', function(e) {
  e.preventDefault();
  console.log('next');


});
