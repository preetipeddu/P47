var score = 0;
var option1, option2,option3,option4;
var gameState = 0;
var qno = null;

function setup(){
    createCanvas(400,400);
}

function setup(){
    createCanvas(400,400);

    option1 = createSprite(100,100,50,10);
    option2 = createSprite(100,200,50,10);
    option3 = createSprite(200,100,50,10);
    option4 = createSprite(200,200,50,10);

}

function draw(){
    background("white");

    if(gameState === 1){
        if(qno === 1){
            text("What is your name", 20,100);
            text("Preeti", 100,100);
            text("Preetie", 100,200);
            text("Preetiw", 200,100);
            text("Preetiq", 200,200);
    
            if(mousePressedOver(option1)){
                score = score +1;
                //update score for player in DB
                //increase qno
            }

            //if mouse is pressed over any other option, you can just go to the next Q without increasing the score.createCanvas
            // use ||
        }
        if(qno === 2){
            text("What is your name", 20,100);
            text("Preeti", 100,100);
            text("Preetie", 100,200);
            text("Preetiw", 200,100);
            text("Preetiq", 200,200);
    
            if(mousePressedOver(option4)){
                score = score +1;
                //update score for player in DB
                //increase qno 
            }
        }
    }
}