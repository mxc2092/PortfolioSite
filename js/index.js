//Add random background color to button on index page when moused over

function getRandomColor() {

  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function assignRandomColor() {

  $("#viewbutton").css("background-color", getRandomColor());

}

document.getElementById('viewbutton').addEventListener("mouseover", assignRandomColor);
