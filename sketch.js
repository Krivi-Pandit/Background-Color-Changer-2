
function setup() {
  createCanvas(400,400);
  background ('black');
  var box = createSprite(200,200,10,10);
}

function draw() 
{
  if(keyIsDown(DOWN_ARROW))
  { 
    background('red');
  }
  if(keyIsDown(UP_ARROW))
  { 
    background('green');
  }
  if(keyIsDown(RIGHT_ARROW))
  { 
    background('blue');
  }
  if(keyIsDown(LEFT_ARROW))
  { 
    background('yellow');
  }
  drawSprites()
}



