class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image2 = loadImage("sprites/smoke.png");
    //created an empty trajectory Array 
    this.trajectory = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    
    //Makes it so that the smoke only shows at the right of the sling shot and when the birds velocity is greater than 10.
    if(this.body.position.x > 250 && this.body.velocity.x > 10){
      //records the position of the bird
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position)
    }

   
    //displays the smoke
    for(var i = 0; i < this.trajectory.length; i++){
      image(this.image2, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}
