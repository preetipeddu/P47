class Player {
 constructor(){
  this.name = null;
  this.index = null;
  this.name = null;
  this.score = 0;
 }

 getPlayerCount(){
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", function(data){
       playerCount = data.val();
    })
 }

 updateCount(count){
   database.ref('/').update({
      playerCount: count
   })
 }

 update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name: this.name,
      score: this.score,
    })
 }

 getPlayerInfo(){
    var playerInfoRef = database.ref("players");
    playerInfoRef.on("value", function(data){
       allPlayers = data.val();
    })
 }


}