class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset=createButton('Reset');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Car Racing Game");
    this.title.position(window.innerWidth/2 - 50, 0);

    this.input.position(window.innerWidth/2 - 40 , window.innerHeight/2 - 80);
    this.button.position(window.innerWidth/2 + 30, window.innerHeight/2);
    this.reset.position(window.innerWidth-100,20)

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(window.innerWidth/2 - 70, window.innerHeight/4);
      
    });
    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    })

  }
}
