var canvas;
var music;
var box1;
var box2;
var box3;
var box4;
var movingbox;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    box1=createSprite(60,590,200,20);
    box1.shapeColor="Blue";

    box2=createSprite(280,590,200,20);
    box2.shapeColor="Yellow";

    box3=createSprite(500,590,200,20);
    box3.shapeColor="green";

    box4=createSprite(720,590,200,20);
    box4.shapeColor="red";

    movingbox=createSprite(random(20,750),100,30,30);
    movingbox.shapeColor="white";
    movingbox.velocityY=5;
    movingbox.velocityX=5

    edges=createEdgeSprites();

}

function draw() {
    background(rgb(169,169,169));

    movingbox.bounceOff(edges);
    //movingbox.bounceOff(bottomEdge);
    //movingbox.bounceOff(rightEdge);

    if(box1.isTouching(movingbox) && movingbox.bounceOff(box1)){
        movingbox.shapeColor=box1.shapeColor;
        music.play();
    }

    if(box3.isTouching(movingbox) && movingbox.bounceOff(box3)){
        movingbox.shapeColor=box3.shapeColor;
    }

    if(box4.isTouching(movingbox) && movingbox.bounceOff(box4)){
        movingbox.shapeColor=box4.shapeColor;
    }

    if(box2.isTouching(movingbox)){
        movingbox.shapeColor="Yellow";
        movingbox.velocityY=0;
        movingbox.velocityX=0;
        music.stop();
    }
    
    drawSprites();


}
