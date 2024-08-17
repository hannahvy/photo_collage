let img;
let grid = [];
let cols = 10; let rows = 10;
let gridWidth, gridHeight;
let x0, y0; let margin = 100; 

function preload() {
  img = loadImage("bridge.jpg");
}

function setup() {
  img.resize(600, 0);
  createCanvas(img.width, img.height);
  noLoop();
  
  x0 = margin;
  y0 = margin;
  gridWidth = (width - margin*2)/cols; 
  gridHeight = (height - margin*2)/rows;
  
  for (let i=0; i<cols; i++) {
    for (let j=0; j<rows; j++) {
      let x = x0 + i*gridWidth;
      let y = y0 + j*gridHeight;
      grid.push(img.get(x, y, gridWidth, gridHeight));
    }
  }
}

function draw() {
  background(0);
  image(img, 0, 0);
  
  let shuffledGrid = shuffle(grid);
  
  let x = x0;
  let y = y0;
  
  for (let i=0; i<grid.length; i++) {
      image(shuffledGrid[i], x, y);
    
      x += gridWidth;
      if (x >= width - margin) {
        x = x0;
        y += gridHeight;
      }
  }
  
  // save('img.png');
  
}