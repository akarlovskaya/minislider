$(document).ready(function(){

  var currentIndex = 0,
  items = $('.quote_container .quote_text'),
  itemAmt = items.length;

// This function will be used to display the correct image, while ensuring that the others stay hidden
  function cycleItems() {
// The eq() method returns an element with a specific index number of the selected elements
// So if currentIndex is 0, $('.container div').eq(currentIndex) will target the first image container in our image slider.
    var item = $('.quote_container .quote_text').eq(currentIndex);
    console.log(item);
    items.hide();
    item.css('display','inline-block');
  }

  var autoSlide = setInterval(function() {
    currentIndex += 1;
    if (currentIndex > itemAmt - 1) {
      currentIndex = 0;
    }
    cycleItems();
  }, 9000);

  $('.btn_next').click(function() {
    clearInterval(autoSlide);
    currentIndex += 1;
    if (currentIndex > itemAmt - 1) {
      currentIndex = 0;
    }
    cycleItems();
  });

  $('.btn_prev').click(function() {
    clearInterval(autoSlide);
    currentIndex -= 1;
    if (currentIndex < 0) {
      currentIndex = itemAmt - 1;
    }
    cycleItems();
  });
});
