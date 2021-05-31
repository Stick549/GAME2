var gameState = 0
var player;
var game;
var button;
var player1, player2, playerCount
var database, backgroundimg, b
function preload() {
 
backgroundimg = loadAnimation("background/1.gif", "background/2.gif", "background/3.gif", "background/4.gif", "background/5.gif", "background/6.gif", "background/7.gif", "background/8.gif")
  
}

function setup() {
  createCanvas(1000, 700)
  database = firebase.database()
  game = new Game()
  player = new Player()
 
b = createSprite(350, 350, 10, 10)
b.addAnimation("img", backgroundimg)
b.scale = 3
player1 = createSprite(100, 750, 50, 50)
player2 = createSprite(200, 750, 50, 50)
playerCount = 0
button = createButton("play")
button.position(350, 350)
  game.start()
}

function draw() {
  background("black");

  

/*if(gameState === 0 && mousePressedOver(button)){
  player.getCount()
  button.destroy()
 playerCount += 1

  console.log(playerCount)
player.updateCount(playerCount)*/
//}
if(playerCount === 1){
  gameState = 1
}
if(gameState === 1){
  button.hide()
  game.play()
}
  drawSprites()
}