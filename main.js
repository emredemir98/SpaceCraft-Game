
var ball;
var kb = [];
var enemy =[];
var k=0;
var l=0;
var mouse;
var particle = [];
var gameover=false;
let point = 0;
function preload(){
  laserSound = new Sound('Sounds/laser.wav',10,0.01);
  EnemyhitSound1 = new Sound('Sounds/Enemyhit.wav',5,0.01);
  EnemyhitSound2 = new Sound('Sounds/Enemyhit2.wav',5,0.01);
  popSound = new Sound('Sounds/popSound.wav',3,0.1);
  popSound2 = new Sound('Sounds/popSound2.wav',3,0.1);
  backsound = new Sound('Sounds/BackSound.mp3',1,0.02);

  img = loadImage('Photos/Ship.png');
  img2 = loadImage('Photos/fire.png');
  img3 = loadImage('Photos/enemyship.png');
  backimg = loadImage('Photos/milkyway.jpg');


}
function setup() {
  createCanvas(windowWidth,windowHeight);
  ball = new Ball();
  angleMode(DEGREES);
  setInterval(createEnemy,1000);
  setInterval(Fire,100);
}

function draw() {
  backsound.play();
  background(backimg);
  for(var i=0;i<kb.length;i++){
  kb[i].render();
  kb[i].update();
  k=i;
  }
  textSize(30);
  text('Point = ',10,height-10);
  text(point,110,height-10);
  
  if (!gameover){
  ball.fire();
  ball.render();
  ball.update();
  ball.move();
  ball.area();
  ball.slow();
  Lose();
  }
  çarpışma();
  for(var i=0;i<particle.length;i++){
  particle[i].update();
  particle[i].render();
  }
  for(var i=0;i<enemy.length;i++){
    if (!gameover){
  enemy[i].update();
  }
  enemy[i].render();
  }
  if(gameover){
    textSize(64);
    text('GAMEOVER ',400,400);
    textSize(32);
    text('Press Enter to play again ',400,500);
    if(keyIsDown(13))
    {
    gameover=false;
    point = 0;
    ball = new Ball();
    while(enemy.length>0){
      var i=0;
     enemy.splice(i,1);
    
    }
    }

  }
 
}
function Sound(src,maxStreams = 1 ,vol =1.0){
  this.streamNum = 0;
  this.streams = [];
  for(var i = 0;i<maxStreams;i++){

      this.streams.push(new Audio(src));
      this.streams[i].volume = vol;
  }
    this.play=function(){
      this.streamNum =(this.streamNum+1)% maxStreams;
      this.streams[this.streamNum].play();
    }


}
function Fire(){
 if(!gameover&&mouseIsPressed){
  laserSound.play();
  let angle = atan2((ball.pos.y-mouseY),(ball.pos.x-mouseX))+180;
    ball.vel.x-=cos(angle)*0.1;
    ball.vel.y-=sin(angle)*0.1;
   kb.push(new kball(ball.pos,angle));
 }
}
function createEnemy(){
  if (!gameover){
enemy.push(new Enemy());
}
}
function çarpışma(){
for(var j=0;j<kb.length;j++){
for(var i=0;i<enemy.length;i++){
var d2=dist(enemy[i].pos.x,enemy[i].pos.y,kb[j].pos.x,kb[j].pos.y);

if(d2<=enemy[i].r+kb[j].r){
  if(enemy[i].r>30){
    EnemyhitSound1.play();
  }
  else {
    EnemyhitSound2.play();
  }
    let dx = kb[j].pos.x - enemy[i].pos.x;
      let dy = kb[j].pos.y - enemy[i].pos.y;
    let angle3 = atan2(dy, dx);
    let targetX = kb[j].pos.x + cos(angle3)*(enemy[i].r+kb[j].r);
        let targetY = kb[j].pos.y + sin(angle3)*(enemy[i].r+kb[j].r);
        let ax = (targetX - enemy[i].pos.x);
        let ay = (targetY - enemy[i].pos.y);
        enemy[i].vel.x -= ax*0.005;
        enemy[i].vel.y -= ay*0.005;
        enemy[i].c+=50;
        if(enemy[i].c==300){
          if(enemy[i].r>30){
        popSound.play();
         }
      else {
           popSound2.play();
         }
          enemy.splice(i,1);
          point+=10;
          
        }

        kb[j].vel.x += ax*0.2;
        kb[j].vel.y += ay*0.2;     
} 
if(kb[j].x<0||kb[j].y<0||kb[j].x>0||kb[j].y>0){
  kb.splice(j,1);
}
}
}

}
function Lose(){
for(var i=0;i<enemy.length;i++){
var d3=dist(enemy[i].pos.x,enemy[i].pos.y,ball.pos.x,ball.pos.y);
if(d3<=enemy[i].r+ball.r){
  gameover=true;
}

}

}
