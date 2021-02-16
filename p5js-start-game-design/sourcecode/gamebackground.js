class GameBackground {
  
  constructor(width, heigth) {
    this.width = width;
    this.heigth = heigth;
    this.tree_y_position = new Array(5);
    for (var i = this.tree_y_position.length-1; i >= 0; i--)      
       this.tree_y_position[i] = random(0, width);
    this.static_bg = loadImage('./images/background/parallax-mountain-bg.png');
    this.far_mountain = loadImage('./images/background/parallax-mountain-far.png');
    this.near_mountain = loadImage('./images/background/parallax-mountain-near.png');
    this.ground = loadImage('./images/background/parallax-foreground-trees.png');    
  }

  drawBackground() {
    image(this.static_bg, 0, 0, this.width, this.heigth);
  }

  drawFarMountain(){
    image(this.far_mountain, this.width/2, this.heigth-195, this.width, 160);
  }
  
  drawNearMountain(){
    image(this.near_mountain, 0, this.heigth-160, this.width, 160);
  }
  
  drawGround() {    
    for (var i = this.tree_y_position.length-1; i >= 0; i--){
      image(this.ground, this.tree_y_position[i], this.heigth - 450, 200, 450, 20, 0, 50, 450);
    }    
  }
}