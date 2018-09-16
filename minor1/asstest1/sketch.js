// This program will play a soundfile that can be altered with gui elements
//and mouse movements.
// play/stop, loop, playrate, volume, pan, filter sweep.
// As the soundfile plays colour will be randomly drawn onscreen, this can be
// manipulated via the mouse press/position.

var sFile1;
var button; //start & stop the show
var buttonState = false;
var checkbox; //are you having fun?
var notesMusic1;
var stairs = 0; //playrate increase
var spiral; //loops 2 bars at current position
var backCol = 150;
var panCenterW = width/2;
var panCenterH = height/2;
var fSweep;
var vLow;
var vHigh;

// blocking function that only stops once all files have loaded
function preload(){
  soundFormats('wav','mp3','ogg');

}

function setup() {
  createCanvas(600, 600);
  background(backCol);

}

function draw() {  ///this is happeing over and over
//pan block
if(mouseX > panCenterW){
  //pan audio incrementally to right
}
if(mouseX < panCenterW){
  //pan audio incrementally to left
}
//change colour also dependent on mouseX

//vol blocking
if(mouseY > panCenterH){
  //decrease audio incrementally as goes down
}
if(mouseY < panCenterH){
  //increase audio incrementally goes up
}
//change colour also dependent on mouseY
}
