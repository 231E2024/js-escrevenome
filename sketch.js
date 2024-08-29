setup() {
    createCanvas(600, 600);
      background("lightblue");
  }
  
  function draw() {
    
    stroke("pink");
    fill("magenta");
  
    // console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  