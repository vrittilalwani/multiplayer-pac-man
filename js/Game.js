class Game {
  constructor(){
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start() {
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    car1 = createSprite(400,200);
    car2 = createSprite(600,200);
    car3 = createSprite(800,200);
    car4 = createSprite(1000,200);
    cars = [car1, car2, car3, car4];

    car1.addAnimation("rightB", carRight1);
    car2.addAnimation("rightG", carRight2);
    car3.addAnimation("rightO", carRight3);
    car4.addAnimation("rightY", carRight4);

    car1.addAnimation("leftB", carLeft1);
    car2.addAnimation("leftG", carLeft2);
    car3.addAnimation("leftO", carLeft3);
    car4.addAnimation("leftY", carLeft4);

    car1.addAnimation("upB", carUp1);
    car2.addAnimation("upG", carUp2);
    car3.addAnimation("upO", carUp3);
    car4.addAnimation("upY", carUp4);

    car1.addAnimation("downB", carDown1);
    car2.addAnimation("downG", carDown2);
    car3.addAnimation("downO", carDown3);
    car4.addAnimation("downY", carDown4);

    /*var r = Math.round(random(1,4));

    //r1 = red
    //r2 = blue
    //r3 = yellow
    //r4 = green
*/
    
  }

  play() {
    form.hide();

    Player.getPlayerInfo();

    player.getCarsAtEnd();
    
    if(allPlayers !== undefined) {

      background("black");

      var index = 0;

      //x and y position of the cars
      var x = 430;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;
        
        //position the cars a little away from each other in x direction
        //var x = x + 260;
        x = allPlayers[plr].distanceX;
        //use data form the database to display the cars in y direction
        y = allPlayers[plr].distanceY;
        //cars[index-1].x = player.readX();
        //cars[index-1].y = player.readY();

        if (index === player.index){
          cars[index - 1].shapeColor = "red";
        }
       
        textSize(15);
        textAlign(CENTER);
        fill("white");
        text(allPlayers[plr].name , cars[index-1].x, cars[index-1].y - 55)
      }
    }

    /*if(keyDown(UP_ARROW) && player.index !== null) {
      player.y = player.y - 2

      player.addAnimation("up", carUp+player.index);
      
    }

    if(keyDown(DOWN_ARROW) && player.index !== null){
      player.y = player.y + 2

      player.addAnimation("down", carDown+player.index);
    }

    if(keyDown(LEFT_ARROW) && player.index !== null){
      player.x = player.x - 2

      player.addAnimation("left", carLeft+player.index);
    }

    if(keyDown(RIGHT_ARROW) && player.index !== null){
      player.x = player.x - 2

      player.addAnimation("right", carRight+player.index);
    }
*/
    console.log(player.index);

  if(player.index!=null){
    for(var i =0;i<greenGroup.length;i++){
      if(greenGroup.get(i).isTouching(cars)){
        player.points=player.points+1;
        player.update();
        greenGroup.get(i).destroy();
      }
    }

    for(var i =0;i<redGroup.length;i++){
      if(redGroup.get(i).isTouching(cars)){
        player.points=player.points+1;
        player.update();
        redGroup.get(i).destroy();
      }
    }

    for(var i =0;i<blueGroup.length;i++){
      if(blueGroup.get(i).isTouching(cars)){
        player.points=player.points+1;
        player.update();
        blueGroup.get(i).destroy();
      }
    }
    console.log(player.points)
    for(var i =0;i<yellowGroup.length;i++){
      if(yellowGroup.get(i).isTouching(cars)){
        player.points=player.points+1;
        player.update();
        yellowGroup.get(i).destroy();
      }
    }
  }
    switch(player.index) {
      case 1: {
        if(keyDown(UP_ARROW)) {
          car1.y = car1.y - 10
          allPlayers[0].distanceY = car1.y
         // player.updateDistance(1);
    
          car1.changeAnimation("upB", carUp1);
        }

        if(car1.y > displayHeight - 10){
          car1.position.y = 0
          //allPlayers[player.index].distanceX = car1.x;
          car1.changeAnimation("downB",carDown1)
        }

        if(car1.y < 0){
          car1.y = displayHeight - 10
          allPlayers[player.index].distanceX = car1.x;
          car1.changeAnimation("upB",carUp1)
        }
    
        if(keyDown(DOWN_ARROW)){
          car1.y = car1.y + 10
          allPlayers[player.index].distanceY = car1.y;
    
          car1.changeAnimation("downB", carDown1);

          //car1.update();
        }
    
        if(keyDown(LEFT_ARROW)){
          car1.x = car1.x - 10
          allPlayers[player.index].distanceX = car1.x;
    
          car1.changeAnimation("leftB", carLeft1);

          //car1.update();
        }

        if(car1.x > displayWidth - 5){
          car1.x = 0
          allPlayers[player.index].distanceX = car1.x;
          car1.changeAnimation("rightB", carRight1)
        }

        if (car1.x < 0) {
          car1.x = displayWidth - 5;
          allPlayers[player.index].distanceX = car1.x;
          car1.changeAnimation("leftB", carLeft1);
        }
    
        if(keyDown(RIGHT_ARROW)){
          car1.x = car1.x + 10
          allPlayers[player.index].distanceX = car1.x;
    
          car1.changeAnimation("rightB", carRight1);

          //car1.update();
        }

        player.update();

        break;
      }

      case 2: {
        if(keyDown(UP_ARROW)) {
          car2.y = car2.y - 10
    
          car2.changeAnimation("upG", carUp2);

          //car2.update();
        }

        if(car2.y > displayHeight - 10){
          car2.position.y = 0
          car2.changeAnimation("downG",carDown2)
        }

        if(car2.y < 0){
          car2.y = displayHeight - 10
          car2.changeAnimation("upG",carUp2)
        }
    
        if(keyDown(DOWN_ARROW)){
          car2.y = car2.y + 10
    
          car2.changeAnimation("downG", carDown2);

          //car2.update();
        }
    
        if(keyDown(LEFT_ARROW)){
          car2.x = car2.x - 10
    
          car2.changeAnimation("leftG", carLeft2);

          //car2.update();
        }

        if (car2.x > displayWidth - 10) {
          car2.x = 0;
          car2.changeAnimation("rightG", carRight2);
        }

        if(car2.x < 0){
          car2.x = displayWidth - 10
          car2.changeAnimation("leftG",carLeft2);
        }
    
        if(keyDown(RIGHT_ARROW)){
          car2.x = car2.x + 10
    
          car2.changeAnimation("rightG", carRight2);
          
         // car2.update();
        }

        break;
      }

      case 3: {
        if(keyDown(UP_ARROW)) {
          car3.y = car3.y - 10
    
          car3.changeAnimation("upO", carUp3);

          //car3.update();
        }

        if(car3.y > displayHeight - 10){
          car3.position.y = 0
          car3.changeAnimation("downO",carDown3)
        }

        if(car3.y < 0){
          car3.y = displayHeight - 10
          car3.changeAnimation("upO",carUp3)
        }
    
        if(keyDown(DOWN_ARROW)){
          car3.y = car3.y + 10
    
          car3.changeAnimation("downO", carDown3);
          
          //car3.update();
        }
    
        if(keyDown(LEFT_ARROW)){
          car3.x = car3.x - 10
    
          car3.changeAnimation("leftO", carLeft3);

          //car3.update();
        }

        if(car3.x > displayWidth - 10){
          car3.position.x = 0
          car3.changeAnimation("leftO",carLeft3)
        }

        if(car3.x < 0){
          car3.y = displayHeight - 10
          car3.changeAnimation("rightO",carUp3)
        }
    
        if(keyDown(RIGHT_ARROW)){
          car3.x = car3.x + 10
    
          car3.changeAnimation("rightO", carRight3);

          //car3.update();
        }

        break;
      }

      case 4: {
        if(keyDown(UP_ARROW)) {
          car4.y = car4.y - 10
    
          car4.changeAnimation("upY", carUp4);

          //car4.update();
        }else if(keyDown(DOWN_ARROW)){
          car4.y = car4.y + 10
    
          car4.changeAnimation("downY", carDown4);

          //car4.update();
        }else if(keyDown(LEFT_ARROW)){
          car4.x = car4.x - 10
    
          car4.changeAnimation("leftY", carLeft4);

          //car4.update();
        }else if (keyDown(RIGHT_ARROW)){
          car4.x = car4.x + 10
    
          car4.changeAnimation("rightY", carRight4);

          //car4.update();
        }

        break;
      }
    }

    if(player.points === 3) {
      player.rank = player.rank + 1;

      Player.updateCarsAtEnd(player.rank);
    }

    //if(player.distance >= 5150) {
      //gameState = 2;

      //textSize(30);
      //stroke("white");
      //text("Your rank is: " + player.rank, displayWidth/2, y - 100);
      
    //}

    if(isTouching(car1, point1)) {
      player.points = player.points + 1;

      point1.destroy();

      player.update();

      console.log(player.points);
    }

    if (isTouching(car1, point2)) {
      player.points = player.points + 1;

      point2.destroy();

      player.update();

      console.log(player.points);
    }

    if (isTouching(car1, point3)) {
      player.points = player.points + 1;

      point3.destroy();

      player.update();

      console.log(player.points);
    }

    if(isTouching(car2, point1)) {
      player2.points = player2.points + 1;

      point1.destroy();

      player.update();

      console.log(player2.points);
    }

    if (isTouching(car2, point2)) {
      player2.points = player2.points + 1;

      point2.destroy();

      player2.update();

      console.log(player2.points);
    }

    if (isTouching(car2, point3)) {
      player2.points = player2.points + 1;

      point3.destroy();

      player.update();

      console.log(player.points);
    }

    if(isTouching(car2, point1)) {
      player3.points = player3.points + 1;

      point1.destroy();

      player.update();

      console.log(player3.points);
    }

    if (isTouching(car3, point2)) {
      player3.points = player3.points + 1;

      point3.destroy();

      player.update();

      console.log(player3.points);
    }

    if (isTouching(car3, point3)) {
      player3.points = player3.points + 1;

      point3.destroy();

      player3.update();

      console.log(player3.points);
    }


    if(isTouching(car4, point1)) {
      player4.points = player4.points + 1;

      point1.destroy();

      player4.update();

      console.log(player4.points);
    }

    if (isTouching(car4, point2)) {
      player4.points = player4.points + 1;

      point2.destroy();

      player4.update();

      console.log(player4.points);
    }

    if (isTouching(car4, point3)) {
      player4.points = player4.points + 1;

      point3.destroy();

      player4.update();

      console.log(player.points);
    }


    if(player.points > 1) {
      game.update(3);
    }

    /*if(car1.x < 0) {
      car1.x = displayWidth - 80;
      car1.changeImage(carLeft1);
    }

    if(car1.x < displayWidth - 20) {
      car1.x = 80;
      car1.changeImage(carRight1);
    }
*/
 car1.bounce(wall);
 car1.bounce(wall2);
 car1.bounce(wall3);
 car1.bounce(wall4);
 car1.bounce(wall5);
 car1.bounce(wall6);
 car1.bounce(wall7);
 car1.bounce(wall8);
 car1.bounce(wall9);
 car1.bounce(wall10);
 car1.bounce(wall11);
 car1.bounce(wall12);
 car1.bounce(wall13);
 car1.bounce(wall14);
 car1.bounce(wall15);
 car1.bounce(wall16);
 car1.bounce(wall17);
 car1.bounce(wall18);
 car1.bounce(wall19);
 car1.bounce(wall20);
 car1.bounce(wall22);
 car1.bounce(wall23);

 car2.bounce(wall);
 car2.bounce(wall2);
 car2.bounce(wall3);
 car2.bounce(wall4);
 car2.bounce(wall5);
 car2.bounce(wall6);
 car2.bounce(wall7);
 car2.bounce(wall8);
 car2.bounce(wall9);
 car2.bounce(wall10);
 car2.bounce(wall11);
 car2.bounce(wall12);
 car2.bounce(wall13);
 car2.bounce(wall14);
 car2.bounce(wall15);
 car2.bounce(wall16);
 car2.bounce(wall17);
 car2.bounce(wall18);
 car2.bounce(wall19);
 car2.bounce(wall20);
 car2.bounce(wall22);
 car2.bounce(wall23);

 car3.bounce(wall);
 car3.bounce(wall2);
 car3.bounce(wall3);
 car3.bounce(wall4);
 car3.bounce(wall5);
 car3.bounce(wall6);
 car3.bounce(wall7);
 car3.bounce(wall8);
 car3.bounce(wall9);
 car3.bounce(wall10);
 car3.bounce(wall11);
 car3.bounce(wall12);
 car3.bounce(wall13);
 car3.bounce(wall14);
 car3.bounce(wall15);
 car3.bounce(wall16);
 car3.bounce(wall17);
 car3.bounce(wall18);
 car3.bounce(wall19);
 car3.bounce(wall20);
 car3.bounce(wall22);
 car3.bounce(wall23);

 car4.bounce(wall);
 car4.bounce(wall2);
 car4.bounce(wall3);
 car4.bounce(wall4);
 car4.bounce(wall5);
 car4.bounce(wall6);
 car4.bounce(wall7);
 car4.bounce(wall8);
 car4.bounce(wall9);
 car4.bounce(wall10);
 car4.bounce(wall11);
 car4.bounce(wall12);
 car4.bounce(wall13);
 car4.bounce(wall14);
 car4.bounce(wall15);
 car4.bounce(wall16);
 car4.bounce(wall17);
 car4.bounce(wall18);
 car4.bounce(wall19);
 car4.bounce(wall20);
 car4.bounce(wall22);
 car4.bounce(wall23);

 /*if (player.position.x > displayWidth - 5 ) {
   player.position.x = 0;

 }*/



    drawSprites();
    
    textSize(20);
    fill("white");
    text("Points:" + player.points, displayWidth/2, player.y - 60);
    
  }

  end() {
    game.update(2);
  }
}
