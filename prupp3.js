var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");


canvas.onclick = function(e) {
  var pos = getMousePos(canvas, e);     
  context.fillStyle = randomColor();    

  // fill a circle
  context.beginPath();                  
  context.arc(pos.x, pos.y, 30, 0, 2 * Math.PI); 
  context.fill();
  
}

function randomColor() {
  var color = [];
  for (var i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return 'rgb(' + color.join(',') + ')';
}

function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}