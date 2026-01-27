function setup() {
  createCanvas(400, 400, WEBGL);
  describe(
    'scene with sphere and spot light. The position of the light is controlled with the mouse position.'
  );
}
function draw() {
  background(0);
  // move your mouse to change light position
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
  // to set the light position,
  // think of the world's coordinate as:
  // -width/2,-height/2 ----------- width/2,-height/2
  //                   |           |
  //                   |    0,0    |
  //                   |           |
  //  -width/2,height/2 ----------- width/2,height/2
  ambientLight(0);
  spotLight(242, 232, 184, locX, locY, 255, 0, 0, -1, Math.PI / 16);
  noStroke();
  sphere(50);
}

// function setup() {
//   createCanvas(400, 400, WEBGL);
//   // Optional: Add orbitControl() to move the camera
//   orbitControl(); 
// }

// function draw() {
//   background(50); // Gray background
  
//   // Create a red spot light
//   // Color (R, G, B): 255, 0, 0
//   // Position (x, y, z): 0, 0, 100 (slightly in front of the origin)
//   // Direction (nx, ny, nz): 0, 1, 0 (pointing down along the Y-axis)
//   // Angle (optional): PI / 8 (a narrow cone)
//   // Concentration (optional): 50
//   spotLight(255, 0, 0, 0, width/2, height/2, 1, 0, 0, PI / 8, 50);

//   // Draw a sphere to show the light effect
//   specularMaterial(400); // Make material shiny to react to the light
//   sphere(100);
// }




//sphere in space supposedly rotating spotlight
// let angle = 45;
// let lightRadius = 250; // Distance of the light from the center

// function setup() {
//   createCanvas(500, 500, WEBGL);
//   angleMode(DEGREES); // Use degrees for easier understanding
// }

// function draw() {
//   background(50); // Dark background

//   // Optional: Add some ambient light so the unlit side of the box isn't completely dark
//   ambientLight(60);

//   // --- 1. Position and configure the spotlight ---
//   push();
//   // Calculate the light's X and Z position using sine and cosine for circular motion
//   let lightX = cos(angle) * lightRadius;
//   let lightZ = sin(angle) * lightRadius;
//   let lightY = 0; // Keep the light at the same height as the object

//   // Set the spotlight parameters: color, position (x, y, z), direction (x, y, z), angle, concentration
//   spotLight(
//     255, 0, 0,          // Color: Red
//     lightX, lightY, lightZ, // Position (moves in a circle)
//     -lightX, -lightY, -lightZ, // Direction (always points back toward the center/origin)
//     radians(45),        // Angle of the spotlight cone
//     10                  // Concentration (focus of the light)
//   );
//   pop();

//   // --- 2. Draw the object in the center ---
//   push();
//   // Rotate the box itself for a more dynamic look
//   rotateX(frameCount * 0.01);
//   rotateY(frameCount * 0.01);
//   // The object is drawn at the origin (0, 0, 0)
//   sphere(100);
//   pop();

//   // Update the angle for the next frame
//   angle += 1;
// }
