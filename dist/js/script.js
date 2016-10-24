console.log('loaded');

//navbar links color code: red selected tab.
var allLinks = $('.links');
allLinks.on('click', function(){
  console.log('clicked')
  allLinks.removeClass('activeLink');
  $(this).addClass('activeLink');
});

//slider controlers
var dots = $('.dot');
var arrows = $('.arrow');

dots.on('mouseenter', function (e) {
  $(this).attr('src', 'assets/hover-dot.png');
})
dots.on('mouseout', function (e) {
  $(this).attr('src', 'assets/base-dot.png');
})

arrows.on('mouseenter', function (e) {
  $(this).attr('src', 'assets/hover-arrow.png');
})
arrows.on('mouseout', function (e) {
  $(this).attr('src', 'assets/base-arrow.png');
})

//slider
var allSlides = $('.slide');
var slide1 = $('#slide-1');
var slide2 = $('#slide-2');
var slide3 = $('#slide-3');
var slide4 = $('#slide-4');

// Next-Prev buttons for slider
$('#next').on('click', function(e) {
  e.preventDefault();
  console.log('next');

// Dots movement
  var nextSlideDot = $('.active-slide.slide-dot').next('div');
  if (nextSlideDot.length == 0) {
    nextSlideDot = $('.slide-dot:first');
  }
  nextSlideDot.siblings().removeClass('active-slide');
  nextSlideDot.siblings().children().children().attr('src', 'assets/base-dot.png');
  nextSlideDot.addClass('active-slide');
  nextSlideDot.children().children().attr('src', 'assets/selected-dot.png');

// Slides
  var currentSlide = $('.active-slide.slide');
  currentSlide.addClass('recent-slide');

  nextSlide = $('.active-slide.slide').next('.slide');
  if (nextSlide.length == 0) {
    nextSlide = $('.slide:first')
  }

  allSlides.removeClass('active-slide');
  nextSlide.removeClass('.move-right move-left').addClass('active-slide');

  setTimeout(function() {
    currentSlide.removeClass('recent-slide');
  }, 610);
});

$('#prev').on('click', function(e) {
  e.preventDefault();
  console.log('prev');

// Dots movement
  var prevSlideDot = $('.active-slide.slide-dot').prev('div');
  if (prevSlideDot.length == 0) {
    prevSlideDot = $('.slide-dot:last');
  }

  prevSlideDot.siblings().removeClass('active-slide');
  prevSlideDot.siblings().children().children().attr('src', 'assets/base-dot.png');
  prevSlideDot.addClass('active-slide');
  prevSlideDot.children().children().attr('src', 'assets/selected-dot.png');

// Slides
  currentSlide = $('.active-slide.slide');
  currentSlide.addClass('recent-slide');

  var prevSlide = $('.active-slide.slide').prev('.slide');
  if (prevSlide.length == 0) {
    prevSlide = $('.slide:last');
  }

  allSlides.removeClass('active-slide');
  prevSlide.removeClass('move-right move-left').addClass('active-slide');

  setTimeout(function() {
    $(prevSlide).prevAll('.slide').removeClass('move-right').addClass('move-left');
    $(prevSlide).nextAll('.slide').removeClass('move-left').addClass('move-right');
  }, 250);

  setTimeout(function() {
    currentSlide.removeClass('recent-slide');
  }, 610);
});

// Sub-nav for slider
$('#one').on('click', function(e) {
  e.preventDefault();

// Sub-nav
  var currentSlideDot = $(this).closest('div');
  currentSlideDot.siblings().removeClass('active-slide');
  currentSlideDot.addClass('active-slide');

  //  Slides
  currentSlide = $('.active-slide.slide');
  currentSlide.addClass('recent-slide');

  $(allSlides).removeClass('active-slide');
  $(slide1).removeClass('move-left').addClass('active-slide');

  setTimeout(function() {
      $(slide1).nextAll('.slide').removeClass('move-left').addClass('move-right');
  }, 250);

  setTimeout(function() {
      currentSlide.removeClass('recent-slide');
  }, 610);

});







