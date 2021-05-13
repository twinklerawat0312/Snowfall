const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World

var engine,world

var snow = []
function preload(){
  bgImg = loadImage("snow2.jpg")

}
function setup() {
  createCanvas(1200,600);
  engine = Engine.create()
  world=engine.world
 
}

function draw() {
  background(bgImg);  
  Engine.update(engine)

 if(frameCount%60===0){
  snow.push(new Snow())
}
for (var j = 0; j < snow.length; j++) {
  snow[j].display();   
}
  drawSprites();
}