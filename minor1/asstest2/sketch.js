// This will allow user paint sound with shapes
//1 draw ellipse where mouse is.
//quad(400,400,445,400,475,475,375,475); //polygon
//rect(100,400,45,35); //rectangle
//triangle(400,200,425,225,375,225); //triangle
  function setup(){
    createCanvas(windowWidth,windowHeight);
    background(150); //draw grey canvas width and height of window.
  }

  function draw(){
    
    if(mouseIsPressed){
      fill(0);
    }else {
      fill(255);
    }
    ellipse(mouseX, mouseY, 25, 25); //draw circle where mouse is.



  }
