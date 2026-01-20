function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  //phaseAnimation + 0.1;
  //phaseAnimation = phaseAnimation % 30;
for(let i = 0; i < 30; i++){  
  drawMoon(phaseAnimation);
}
  //text("moonphase: " +phaseAnimation, width/2, 100);
  fill(0)
  ellipse(width/ellipse, height/2, 50, 50);
  //drawMoon(5);
  //drawMoon(mouseX, mouseY);
}

// function drawTarget(x, y) {

//   ellipse (x, y, 50, 50);
//   ellipse (x, y, 30, 30); 
// }

function drawMoon(phase) { //phase 0-30
  fill(255, 255, 0)
  let xLoc = map(phase, 0, 30, width/2-30, width/2+30);
  ellipse(xLoc, height/2, 50, 50);
}

