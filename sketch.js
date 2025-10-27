function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50);
  textAlign(CENTER, CENTER);
  textSize(32);
  fill(255);
  text("Test p5.js på GitHub Pages", width/2, height/2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
