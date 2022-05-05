function Enemy(){

this.pos=createVector(random(width),-15);
this.vel=createVector();
this.r=random(20,40);
this.c=0;


this.update = function(){
let angle2 = atan2((ball.pos.y-this.pos.y),(ball.pos.x-this.pos.x))+180;
this.vel.x=-cos(angle2)*3;
this.vel.y=-sin(angle2)*3;
this.pos.add(this.vel);
this.vel.add(this.acc);

}
this.render = function(){

	push();
	image(img3,this.pos.x-this.r,this.pos.y-this.r,this.r*2,this.r*2);
	//fill(this.c,100-this.c/3,100-this.c/3);
	//ellipse(this.pos.x,this.pos.y,this.r*2,this.r*2)
	pop();

}
}




