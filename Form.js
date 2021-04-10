class Form {
 constructor(){
     this.nameInput = createInput("Enter your name here.");
     this.title = createElement("h2");
     this.submitButton = createButton("Submit");
     this.hello = createElement("h2");
     this.reset = createButton("Reset");
 }

 hide(){
     this.nameInput.hide();
     this.title.hide();
     this.submitButton.hide();
 }

 display(){
     this.title.html("Reality Check");
     this.nameInput.position(100,350);
     this.title.position(100,100);
     this.submitButton.position(100,400);
     this.reset.position(1250,500);
     
     this.submitButton.mousePressed(()=>{
      this.nameInput.hide();
      this.title.hide();
      this.submitButton.hide();
      player.name = this.nameInput.value();
      playerCount = playerCount + 1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.hello.html("Hello " + player.name);
      this.hello.position(1100,50);
     });

     this.reset.mousePressed(()=>{
       player.updateCount(0);
       game.update(0);
     })
 }



}