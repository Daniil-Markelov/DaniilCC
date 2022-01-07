let points = 0;
let clickPointGain = 1;

class Bounce {
    constructor() {
        this.pos = createVector(Math.round(Math.random() * 500), Math.round(Math.random() * 500));
        this.speed = createVector(4,6);
        this.inc = createVector(0,0);
        this.col = color(255);
    }


    updateVals(xInc, yInc) {
        this.inc.x = xInc;
        this.inc.y = yInc;
    }
   

    clicked() {
        var d = dist(mouseX, mouseY, this.pos.x, this.pos.y)
        if (d<80) {
            points = points + clickPointGain;
        }
    }



	move () {
        if(this.pos.x < 0 || this.pos.x > 500) {
            this.speed.x *= -1;
        }
        if(this.pos.y < 0 || this.pos.y > 500) {
            this.speed.y *= -1;
        }

        this.pos.x += this.speed.x * this.inc.x;
        this.pos.y += this.speed.y * this.inc.y;
	} 
    
 
   render () {
	  
        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.speed.heading())
        noStroke(); 
        fill(this.col);
        rect(0, 0,  80 , 80);
        textSize(60);
        text(": " + points, 40, 20);
        pop();
		
	} 
}