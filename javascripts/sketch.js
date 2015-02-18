var i = 0;

var Img_Backtrees;

function setup() {
  // put setup code here
  var elliCanvas = createCanvas(200,200);
  elliCanvas.parent('elliCanvasDiv')
  Img_Backtrees = loadImage("javascripts/parallax-forest-back-trees.png");
}

function draw() {
  // put drawing code here
  ellipse(i, 46, 55, 55);
  
  image(Img_Backtrees, 0, 0);
  
}

