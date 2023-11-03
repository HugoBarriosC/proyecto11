var sea, seaImage;
var ship, shipAnimation;

function preload() {
  shipAnimation = loadAnimation("ship1.png", "ship2.png", "ship3.png", "ship4.png");
  seaImage = loadImage("sea.png");
}

function setup() {
  createCanvas(400, 400);

  sea = createSprite(200, 200, 400, 400);
  sea.addImage(seaImage);
  sea.velocityX = -5;

  ship = createSprite(100, 300, 50, 50);
  ship.addAnimation("moving", shipAnimation);
  ship.scale = 0.2;
}

function draw() {
  background("blue");

  if (sea.x < 0) {
    sea.x = sea.width / 2;
  }
}
drawSprites();