class Game{
    contructor(){
        this.players = []

    }
    display(object){
        if(keyDown("RIGHT_ARROW"))
        object.x += 10

       if(keyDown("LEFT_ARROW"))
       object.x -= 10



        player.x = object.x
        player.y = object.y
        
        camera.x = player.x
        camera.y = player.y
    }
    start(){
        if (gameState === 0){
        button.mousePressed(()=>{
            player.getCount()
            button.hide()
           playerCount += 1
          player.index = playerCount
            console.log(playerCount)
          player.updateCount(playerCount)
          })
        }
    }
    play(){
        console.log("hello")

        this.players = [player1, player2]
        this.display(player1)
        player.update()
    }
}