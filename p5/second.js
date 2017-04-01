var x;
var y;

function setup() { 
  createCanvas(400, 400);
	x = 120;
	y= 240;
} 

function draw() { 
  background(220);
	ellipse(x, y, 50, 50);
	
	rect(10, 15, 40, 50);
}
