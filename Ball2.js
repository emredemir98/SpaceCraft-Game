function Ball() {
this.pos = createVector(width/2,height/2);
this.r=20;
this.vel = createVector();
this.acc = createVector();
this.vellimit=5;
this.slowdown=0.03;
this.angle;

this.update = function(){
this.pos.add(this.vel);
this.vel.add(this.acc);

}
this.render = function(){

	push();
	fill(230,25,24);
	//ellipse(this.pos.x,this.pos.y,this.r*2,this.r*2);
	pop();

}
this.move =function(){
	if(keyIsDown(68)&&this.vel.x<=this.vellimit){
		if(this.vel.x+0.08>this.vellimit){
			this.vel.x==this.vellimit;
		}
		this.vel.x+=0.08;
		
	}
	if(keyIsDown(65)&&this.vel.x>=-this.vellimit){
		if(this.vel.x-0.08<-this.vellimit){
			this.vel.x==-this.vellimit;
		}
		this.vel.x-=0.08;
	
	}
	if(keyIsDown(87)&&this.vel.y>=-this.vellimit){
		if(this.vel.x-0.08<-this.vellimit){
			this.vel.x==-this.vellimit;
		}
		this.vel.y-=0.08;
	
    }
	if(keyIsDown(83)&&this.vel.y<=this.vellimit){
		if(this.vel.x+0.05>this.vellimit){
			this.vel.x==this.vellimit;
		}
		this.vel.y+=0.08;	
	}
this.slow=function(){
if(this.vel.x>0){
	if(this.vel.x-this.slowdown<0){
		this.vel.x=0;
	}
	else{
		this.vel.x-=this.slowdown;
	}
	}
	if(this.vel.y>0){
	if(this.vel.y-this.slowdown<0){
		this.vel.y=0;
	}
	else{
		this.vel.y-=this.slowdown;
	}
	}
	if(this.vel.x<0){
if(this.vel.x+this.slowdown>0){
		this.vel.x=0;
	}
	else{
		this.vel.x+=this.slowdown;
	}
}
	if(this.vel.y<0){

	if(this.vel.y+this.slowdown>0){
		this.vel.y=0;
	}
	else{
		this.vel.y+=this.slowdown;
	}

	}

}	
}
this.area=function(){
if(this.pos.x-this.r<=0){

	this.pos.x=this.r;
	this.vel.x=0.05;
}
if(this.pos.y-this.r<=0){

	this.pos.y=this.r;
	this.vel.y=0.05;
}
if(this.pos.x+this.r>=width){

	this.pos.x=width-this.r;
	this.vel.x=-0.05;
}
if(this.pos.y+this.r>=height){

	this.pos.y=height-this.r;
	this.vel.y=-0.05;
}
}
this.fire=function(){
	this.angle = atan2((this.pos.y-mouseY),(this.pos.x-mouseX))+270;
 push();
 translate(this.pos.x,this.pos.y);
  rotate(this.angle);
 //fill(220);
image(img,-40,-40,this.r*4,this.r*4);
//rect(-0,-10,40,20);
pop();
push();
translate(this.pos.x,this.pos.y);
rotate(this.angle);
image(img2,-10,35,this.r,this.r*2);
pop();
}
}
