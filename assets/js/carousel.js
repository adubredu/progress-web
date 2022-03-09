/*
	Dopetrope by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

var slideIndex = 1;
var timeout;
const SWITCH_DEFAULT = 5000;  // milliseconds

// Next/previous controls
function plusSlides(n) {
  clearTimeout(timeout);
  slideIndex += n;
  carousel(slideIndex);
}

// Thumbnail image controls
function currentSlide(n) {
	clearTimeout(timeout);
	slideIndex = n;
  carousel(slideIndex);
}

function carousel(n, switchTimeout = SWITCH_DEFAULT) {
  var i;
  var x = document.getElementsByClassName("slideshow");
  var dots = document.getElementsByClassName("dot");
  if (x.length === 0) {
  	return;
  }

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slideIndex = n;
  if (slideIndex > x.length) { slideIndex = 1; }
  if (slideIndex < 1) { slideIndex = x.length; }

  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

  timeout = setTimeout(function(){ carousel(slideIndex + 1) }, switchTimeout); // Change image every 5 seconds
}
