

$(document).ready(function(){

$("#twoPic1").mouseover(function(){

  $("#twoPic1").css("background-image", "url('./assets/images/dc.jpg')");
}); 

$("#twoPic1").mouseleave(function(){

  $("#twoPic1").css("background-image", "url('./assets/images/design1.jpg')");

});

$("#twoPic5").mouseover(function(){

	$("#twoPic5").css("background-image", "url('./assets/images/fair3.jpg')");
});	

$("#twoPic5").mouseleave(function(){

	$("#twoPic5").css("background-image", "url('./assets/images/design5.png')");

});

$("#twoPic4").mouseover(function(){

  $("#twoPic4").css("background-image", "url('./assets/images/design22.jpg')");
}); 

$("#twoPic4").mouseleave(function(){

  $("#twoPic4").css("background-image", "url('./assets/images/design4.png')");

});

});