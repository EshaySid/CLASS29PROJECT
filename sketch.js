const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

//g=ground
var g;

//l-link
var l;

//b=new bridge
var b;

var leftWall;
var rightWall;

var jointPoint;

var stones=[];
var world;

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  g=new Base(windowWidth/2,windowHeight-30,windowWidth,20);

  jointpoint=new Base(1325,windowHeight/2);

  leftWall=new Base(100,windowHeight/2,600,100);
  rightWall= new Base(1600,windowHeight/2,600,100);

  b =new Bridge(15,{x:width/2-400, y:height/2});

  Matter.Composite.add(b.body,jointpoint);

  l =new Link(b,jointpoint);

  for(var i=0; i<=8; i++){
    var x=random(width/2-200, width/2+300);
    var y=random(-10, 140);
    var stone=new Stone(x,y,80,80);
    stones.push(stone);
  }

}

function draw() {
  background(51);
  Engine.update(engine);
  
  g.Display();
  leftWall.Display();
  rightWall.Display();
  jointpoint.Display();

  b.show();
}


