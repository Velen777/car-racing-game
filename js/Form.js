class Form {
  constructor() {
    this.reset = createButton("reset")
    this.greeting = createElement('h2');
    this.input = createInput("Name");
    this.button = createButton('Play');
  }
  hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
  }
  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(displayWidth/2-50, 0);
    
    
    
    this.input.position(displayWidth/2-50, displayHeight/2-80);
    this.button.position(displayWidth/2+20, displayHeight/2);
    this.reset.position(displayWidth-100,20);
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      
      playerCount=playerCount+1;
      player.index=playerCount;
      player.update()
      player.updateCount(playerCount);
    
      this.greeting.html("Hello " + player.name )
      this.greeting.position(displayWidth/2-50, displayHeight/2-80)
    });

  }
  this.reset.mousePressed(()=>{
    player.updateCount(0);
    game.update(0);
  })
}
