class Dustbin extends Parent{
    constructor(x, y, height, angle) {
      super(x,y,20,height,angle)
      this.Image=loadImage("sprites/dustbingreen.png")
      Matter.Body.setAngle(this.body,angle)
    }
  }