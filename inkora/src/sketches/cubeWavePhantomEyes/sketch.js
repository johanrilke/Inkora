
let angle = 0;
let w = 40;
let ma;
let maxD;

let frames = 300;
let speed;

function setup() {
  createCanvas(400, 400, WEBGL);
  ma = atan(cos(QUARTER_PI));
  maxD = dist(0, 0, 200, 200);
  
  
  spinX = -HALF_PI;
  spinY = QUARTER_PI;
  
}

function keyPressed() {
  if (key == " ") {
    const options = {
      units: "frames",
      delay: 0
    }
    saveGif("phantomeye.gif", frames, options);
  }
}

function draw() {
  background(0);
  ortho(-400, 400, 400, -400, 0, 1000);
  rotateX(-ma);
  rotateY(-QUARTER_PI);

  fill(125, 213, 143);
  for (let z = 0; z < height; z += w) {
    for (let x = 0; x < width; x += w) {
      push();
      let d = dist(x, z, width / 2, height / 2);
      let offset = map(d, 0, maxD, -PI, PI);
      let a = angle + offset;
      let h = floor(map(sin(a), -1, 1, 100, 400));
      translate(x - width / 2, 0, z - height / 2);
      ambientLight(255);
      rotateX(speed * frameCount * 0.01 + spinX % TAU + spinX / 282 % TAU);
      rotateY(speed * frameCount * 0.01 + 2 * spinY % TAU + spinY / 202 % TAU);
       
      ambientMaterial(255);
      cylinder(w/2, h/3, 3, 12); 
      pop();
    }
  }
  speed = random(1, 1.15);
  angle -= TWO_PI / frames;
}
