// Click and drag the mouse to view the scene from different angles.
// Double-click to adjust the spotlight.

let isLit = false;

function setup() {
  createCanvas(1000, 1000, WEBGL);

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
    // Set its angle to PI / 3 radians (default).
    // Set its concentration to 1000.
    let c = color(255, 255, 255);
    let position = createVector(0, 0, 100);
    let direction = createVector(0, 0, -1);
    spotLight(c, position, direction, PI / 3, 10);
  }

  // Draw the sphere.
  sphere(200);
  noStroke();
  fill(100)
}

// Turn on the spotlight when the user double-clicks.
function mouseClickec() {
  isLit = true;
}