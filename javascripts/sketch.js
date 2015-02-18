var i = 0;

var Img_Backtrees;

function setup() {
  // put setup code here
  var elliCanvas = createCanvas(200,200);
  var screenW = screenwidth;
  elliCanvas.parent('elliCanvasDiv')
  Img_Backtrees = loadImage("parallax-forest-back-trees.png");
}

function draw() {
  // put drawing code here
  ellipse(i, 46, 55, 55);
  Img_Backtrees(img, 10, 10);
  
}

