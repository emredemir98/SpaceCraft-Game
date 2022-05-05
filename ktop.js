function kball(bpos,angle){
this.pos = createVector(bpos.x,bpos.y);
this.r=8;
this.acc = createVector();
this.vel = createVector();
this.vel.x= cos(angle)*10;
this.vel.y= sin(angle)*10;
this.update = function(){

this.pos.add(this.vel);
this.vel.add(this.acc)


}
this.render = function(){
	fill(230);
	ellipse(this.pos.x,this.pos.y,this.r,this.r);
}
 
}




