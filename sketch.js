var backgroundImg,background1;
var catImg,cat1,mouseImg,mouse1;
var mouse2,mouse3,mouseSprite;
var catimg;
var cat2,cat3;

function preload() {

    //load the images here
    backgroundImg = loadImage("images/garden.png")
    catImg = loadImage("images/cat2.png")
    catimg = loadImage("images/cat1.png");
    cat2 = loadImage("images/cat3.png");
    cat3 = loadImage("images/cat4.png")

    mouseImg = loadImage("images/mouse1.png");
    mouse1 = loadImage("images/mouse2.png");
    mouse2 = loadImage("images/mouse3.png");
    mouse3 = loadImage("images/mouse4.png");
   
   
}

function setup(){

    createCanvas(950,700);
    //create tom and jerry sprites here

    background1 = createSprite(480,350,20,30);
    background1.addImage(backgroundImg);

    cat1 = createSprite(850,350,10,10);
    cat1.addImage(catimg);
    cat1.scale = 0.10;

    mouseSprite = createSprite(150,580,5,5);
    mouseSprite.addImage(mouseImg);
    mouseSprite.scale = 0.10;

    mouseSprite.setCollider("circle",0,0,50);
    mouseSprite.debug = true;
}

function draw() {

    background("black");
    //Write condition here to evalute if tom and jerry collide

    

    if(keyDown("left")){

        //cat1.addImage(catImg);
        cat1.addImage(catImg,cat2);
        cat1.velocityX = cat1.velocityX - 0.5;
        cat1.velocityY = 0;
        mouseSprite.addImage(mouse2);
    }
    if(keyDown("up")){

        cat1.addImage(cat2);
        cat1.velocityY = cat1.velocityY - 0.5;
        cat1.velocityX = 0;
        mouseSprite.addImage(mouse1);  
    }
    if(keyDown("down")){

        cat1.addImage(cat2);
        cat1.velocityY = cat1.velocityY + 0.5;
        cat1.velocityX = 0;
        mouseSprite.addImage(mouse1);   

    }
    if(keyDown("right")){

        cat1.addImage(catImg,cat2);
        cat1.velocityX = cat1.velocityX + 0.5;
        cat1.velocityY = 0;
        mouseSprite.addImage(mouse2);
    }
    if(cat1.isTouching(mouseSprite)){

        cat1.setVelocity(0,0);
        cat1.addImage(cat3);
        mouseSprite.addImage(mouse3);
        cat1.x = 160;
        
    }




    drawSprites();
}



