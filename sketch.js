
// let phaseAnimation = 0;

// function setup() {
//   createCanvas(400, 400, WEBGL);
// }


// function draw() {
//   background(0);
//   lights();
//   phaseAnimation += 0.05;
//   phaseAnimation = phaseAnimation % 1;
//   for(let i = 0; i < 30; i++){
//     drawMoon(i, -height/2);
//   }
//   drawMoon(phaseAnimation, 0);
//   //text("moonphase: "+phaseAnimation, width/2, 100);
//   fill(100, 100, 100);
//   ellipse(0, 0, 200, 200);
  
// }

// function drawMoon(phase, h) { //phase 0-30
//   fill(0);
//   let xLoc = map(phase, 0, 30, -width/3, width/3);
//   console.log(xLoc);
//   push();
//   noStroke();
//   translate(xLoc, h, 0);
//   sphere(100, 24, 24);
//   pop();
//}
// Click and drag the mouse to view the scene from different angles.
// Double-click to adjust the spotlight.

let isLit = false;

function setup() {
  createCanvas(800, 800, WEBGL);

  describe('A white sphere drawn on a gray background. A red spotlight starts shining when the user double-clicks.');
}

function draw() {
  background(50);

  // Enable orbiting with the mouse.
  orbitControl();

  // Turn on the lights.
  lights();

  // Control the spotlight.
  if (isLit === true) {
    // Add a red spot light that shines into the screen.
    // Set its angle to PI / 32 radians.
    spotLight(255, 0, 0, 0, 0, 100, 0, 0, -1, PI / 32);
  }

  // Draw the sphere.
  sphere(100);
}

// Turn on the spotlight when the user double-clicks.
function doubleClicked() {
  isLit = true;
}