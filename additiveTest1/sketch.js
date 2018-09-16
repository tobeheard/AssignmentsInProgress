//create 4 oscillator objects that can be added together by user
//start with sine wave.

var sphere = {

};

function setup() {
  createCanvas(800,600);
  background(0);
  sphere = new p5.SinOsc(880);
  sphere.start();
  sphere.amp(0.2);


}

function draw() {

  var p =map(mouseX,mouseY)
  sphere.pan(1);
}
