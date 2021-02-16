let UP = 1,
  DOWN = 2,
  IDLE = 0;

class Character {
  constructor(name = '',
    image = '',
    position = new Position(),
    base_attributes = new BaseAttribtute(),
    debufs = new BaseAttribtute(),
    bufs = new BaseAttribtute(),
    life_status = true) {
    this.position = position;
    this.name = name;
    this.imagesize = 50;
    this.imagelength = 50;
    this.image = loadImage(image);
    this.debufs = debufs;
    this.bufs = bufs;
    this.base_attributes = base_attributes;
    this.actual_attributes = new BaseAttribtute();
    this.life_status = life_status;
    this.speed = 5;
    this.jump_movement = IDLE;
    this.max_jump = 0.0;
    this.start_jump_position = this.position.y;
  }

  addBuf(buf_name, value) {
    if (Object.prototype.hasOwnProperty(buf_name))
      this.bufs[buf_name] = value;
  }

  getBufs() {
    return this.bufs;
  }

  addDebuf(debuf_name, value) {
    if (Object.prototype.hasOwnProperty(debuf_name))
      this.debufs[debuf_name] = value;
  }

  getDebufs() {
    return this.debufs;
  }

  getActualAttributes() {

    this.actual_attributes.setFireResistance(
      this.attributes.getFireResistance() - this.debufs.getFireResistance() + this.bufs.getFireResistance()
    );

    this.actual_attributes.setWaterResistance(
      this.attributes.getWaterResistance() - this.debufs.getWaterResistance() + this.bufs.getWaterResistance()
    );

    this.actual_attributes.setWindResistance(
      this.attributes.getWindResistance() - this.debufs.getWindResistance() + this.bufs.getWindResistance()
    );

    this.actual_attributes.setStrenght(
      this.attributes.getStrength() - this.debufs.getStrength() + this.bufs.getStrength()
    );

    this.actual_attributes.setSpeed(
      this.attributes.getSpeed() - this.debufs.getSpeed() + this.bufs.getSpeed()
    );

    this.actual_attributes.setAttack(
      this.attributes.getAttack() - this.debufs.getAttack() + this.bufs.getAttack()
    );

    return this.actual_attributes;
  }

  draw() {
    if (this.life_status) {      
      fill(50, 175, 50, 191);
      rect(this.position.x, this.position.y - 5, 50, 5);
      textSize(15);      
      textAlign(CENTER);
      fill(0, 102, 153);
      text(this.name, this.position.x + 25, this.position.y - 10);
      image(this.image, this.position.x, this.position.y, 50, 55);
    }
  }

  walk(direction) {
    if (this.life_status) {
      if (direction === RIGHT_ARROW)
        this.position.x += this.speed;
      else if (direction === LEFT_ARROW)
        this.position.x -= this.speed;      
    }
  }

  isJumping(){
     return this.jump_movement != IDLE;
  }
  
  jump(command, gravity) {
    if (!this.life_status) return;
    
    if (command === 32 && this.jump_movement == IDLE) {
      this.jump_movement = UP;
      //max heigth of jump
      this.max_jump = (this.speed ^ 2 / gravity * 2);
      this.start_jump_position = this.position.y;
    }

    var h = this.max_jump + this.imagesize;
    // up movement
    if (this.jump_movement == UP) {
      if (this.position.y > this.start_jump_position - h) {
        this.position.y -= gravity * this.speed;        
      } else this.jump_movement = DOWN;
    }
    // down movement
    if (this.jump_movement == DOWN) {
      if (this.position.y+this.imagesize < this.start_jump_position + h) {
        this.position.y += gravity * this.speed;        
      } else this.jump_movement = IDLE;              
    }
  }
}