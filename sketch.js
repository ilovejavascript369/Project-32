const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


//function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
//}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    fill("black");
    ground = new Ground(200,300,1200,20);
    stand1 = new Ground(300, 200, 170, 15);
    stand2 = new Ground(525, 150, 170, 15);

    block1 = new Box(238,170,30,40);
    block2 = new Box(268,170,30,40);
    block3 = new Box(298,170,30,40);
    block4 = new Box(328,170,30,40);
    block5 = new Box(358,170,30,40);
    
    block6 = new Box(268,130,30,40);
    block7 = new Box(298,130,30,40);
    block8 = new Box(328,130,30,40);
    
    block9 = new Box(298,90,30,40);
    //block6 = new Box(380,170,30,40);

    block10 = new Box(463,120,30,40);
    block11 = new Box(493,120,30,40);
    block12 = new Box(523,120,30,40);
    block13 = new Box(553,120,30,40);
    block14 = new Box(583,120,30,40);
    
    block15 = new Box(493,80,30,40);
    block16 = new Box(523,80,30,40);
    block17 = new Box(553,80,30,40);
    
    block18 = new Box(523,40,30,40);

    polygon = new Bird(100,300,20,20);
}

function draw(){
    text("Text: "+score,750,40);
    Engine.update(engine);
    //strokeWeight(4);
    ground.display();
    stand1.display();
    stand2.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    polygon.display();
}

function mouseDragged(){
    if(gameState !== "launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    //slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(this.polygon);
    }
}
