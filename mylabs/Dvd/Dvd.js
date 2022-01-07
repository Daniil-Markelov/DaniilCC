class DVD {
	constructor(x, y, vx, vy) {
		//props
		this.pos = createVector(x,y);
		this.vx = vx;
		this.vy = vy;
		
		
	
	
}

//render the dvd img
render() {
	

		image(dvdImg,this.pos.x,this.pos.y,160,90);
	} 
	
acceleratedvd(ax,ay){
	this.vx = this.vx + ax;
	this.vy = this.vy + ay;
} 

	//move the dvd
	step() {
		if(this.pos.x < 0 || this.pos.x > 340) {
			this.vx *= -1;
		}
		if(this.pos.y < 0 || this.pos.y > 410) {
			this.vy *= -1;
		}

		this.pos.x = this.pos.x + this.vx;
		this.pos.y = this.pos.y + this.vy;
	}
} 