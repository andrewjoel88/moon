function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  describe('A cube you can look around by clicking and dragging');
}
function draw() {
  background(220);
 
  orbitControl();
  fill(255, 0, 0);
  sphere(50);
}