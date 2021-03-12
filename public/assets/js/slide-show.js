var slideIndex = [1, 1, 1, 1, 1];
var slideId = ["my-slides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5"];
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);

function plusSlides(n, no) {
  showSlides((slideIndex[no] += n), no);
}

// Thumbnail image controls
function currentSlide(n, no) {
  showSlides((slideIndex[no] = n), no);
}

function showSlides(n, no) {
  var i;
  var slides = document.getElementsByClassName(slideId[no]);
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex[no] - 1].style.display = "block";
  dots[slideIndex[no] - 1].className += " active";
}
