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

  for (let i = 0; i < img.height; i++) {
    for (let j = 0; j < img.width; j++) {
      const pixelIndex = (i + j * img.width) * 4

      const r = img.pixels[pixelIndex + 0]
      const g = img.pixels[pixelIndex + 1]
      const b = img.pixels[pixelIndex + 2]
    }
    
  }
}
