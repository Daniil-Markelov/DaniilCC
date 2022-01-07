class Bounce {
    constructor() {
        this.pos = createVector(Math.round(Math.random() * 500), Math.round(Math.random() * 500));
        this.speed = createVector(4,6);
        this.inc = createVector(0,0);
        this.size = 50;

    }


    updateVals(xInc, yInc) {
        this.inc.x = xInc;
        this.inc.y = yInc;
    }
   


	move() {
        if(this.pos.x < 0 || this.pos.x > 500) {
            this.speed.x *= -1;
        }
        if(this.pos.y < 0 || this.pos.y > 500) {
            this.speed.y *= -1;
        }

        this.pos.x += this.speed.x * this.inc.x;
        this.pos.y += this.speed.y * this.inc.y;
	} 
    
 
   render() {
	  
        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.speed.heading())
        noStroke();
        let shape = createVector(params.Thickness, params.Length); 
        fill(255);
        rect(0, 0,shape.x,shape.y,params.increaseRadius);
        
        pop();
		
	} 
}