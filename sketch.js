var canvas;
var block1,block2,block3,block4;
var ball, edges;
var musicSound;

function preload(){    
    musicSound = loadSound("music.mp3")

}

function setup(){
    canvas = createCanvas(825,600);

    block1 = createSprite(105,580,200,30);
    block1.shapeColor = "blue";

    block2 = createSprite(310,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(515,580,200,30);
    block3.shapeColor = "red";

    block4 = createSprite(720,580,200,30);
    block4.shapeColor = "green";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 6;
    ball.velocityY = 8;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
            
    if(BounceOff(block1, ball)){
        ball.shapeColor = "blue"
    }

    if(IsTouching(block2, ball)){
        musicSound.play()
    }

    if(BounceOff(block3, ball)){
        ball.shapeColor = "red"
    }

    if(BounceOff(block4, ball)){
        ball.shapeColor = "green"
    }

    drawSprites();
}
