const density = "Ñ@#W$9876543210?!abc;:+=-,._                    ";

function preload() {
  img = loadImage("me.jpg")
}

function setup() {
  createCanvas(1280, 720);
}

function draw() {
  background(220);
  image(img, 0, 0, width, height)
}
