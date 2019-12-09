

$(document).ready(function(){


//Automatic Photo Slideshow
var index = 0;

showPhotos();

function showPhotos() {

  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  index++;
  if (index > slides.length) {index = 1}
  slides[index-1].style.display = "block";
  setTimeout(showPhotos, 2000); // Change image every 2 seconds
}

$("#onePic7").mouseover(function(){

	$("#onePic7").css("background-image", "url('./assets/images/umiami.jpg')");
});	

$("#onePic7").mouseleave(function(){

	$("#onePic7").css("background-image", "url('./assets/images/grad.JPG')");

});

});