class Game {
 constructor(){

 }

 getGameState(){
     var gameStateRef = database.ref('gameState');
     gameStateRef.on("value", function(data){
         gameState = data.val();
     })
 }

 update(state){
     database.ref('/').update({
         gameState: state
     });
     }

async start(){
  if(gameState ===0){
      player = new Player();
      var playerCountRef = await database.ref("playerCount").once("value");
      if(playerCountRef.exists()){
       playerCount = playerCountRef.val();
       player.getPlayerCount();
      }
      form = new Form();
      form.display();
      
      
  }


}

play(){
    form.hide();
    question = createSprite(215,100,100,10);
    question.shapeColor = "purple";
    question.addImage(question1Image);
    yes = createSprite(130,485,60,10);
    yes.shapeColor = "green";
    yes.addImage(yesImage);
    no = createSprite(330,485,60,10);
    no.shapeColor = "red";
    no.addImage(noImage);

    if(mousePressedOver(yes)){
        question.destroy();
        yes.destroy();
        no.destroy();
    }

}

 }


