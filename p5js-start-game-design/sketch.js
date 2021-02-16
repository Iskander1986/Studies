let background_game,
  player1,
  player2,
  sound,
  screen_size = {
    width: 800,
    heigth: 600
  };

function setup() {
  createCanvas(screen_size.width, screen_size.heigth);
  background_game = new GameBackground(screen_size.width, screen_size.heigth);
  player1 = new Character('Abobrinha',
    '/images/background/mage.png',
    new Position(screen_size.width / 3, screen_size.heigth - 50),
    new BaseAttribtute(0.23, 0.23, 0.23, 15, 200, 12, 45, 33),
    new BaseAttribtute(0, 0, 0, 0, 0, 0, 0, 0),
    new BaseAttribtute(0, 0, 0, 0, 0, 0, 0, 0),
    true);
  sound = createAudio('audio/guile_stage.mp3', () => {
    sound.volume(0.1);
    sound.play();
    sound.loop();
  });
  
  player2 = new Character('Zezinho',
    '/images/background/mage.png',
    new Position(screen_size.width / 2, screen_size.heigth - 50),
    new BaseAttribtute(0.23, 0.23, 0.23, 15, 200, 12, 45, 33),
    new BaseAttribtute(0, 0, 0, 0, 0, 0, 0, 0),
    new BaseAttribtute(0, 0, 0, 0, 0, 0, 0, 0),
    true);
}

function draw() {
  //background(200);
  background_game.drawBackground();
  background_game.drawFarMountain();
  background_game.drawNearMountain();
  background_game.drawGround();
      
  if (keyIsDown(RIGHT_ARROW) || keyIsDown(LEFT_ARROW))
    player1.walk(keyCode);

  if (player1.isJumping())
    player1.jump(keyCode, 0.8);

  player1.draw();
  
  player2.draw();
}

function keyPressed() {
  if (keyCode == RIGHT_ARROW || keyCode == LEFT_ARROW)
    player1.walk(keyCode);
  if (keyCode == 32)
    player1.jump(keyCode, 0.8);

  return false;
}