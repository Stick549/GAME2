class Player{
    contructor(){
this.index = null
this.x = 0
this.y = 0

    }
    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",(data)=>{
          playerCount = data.val();
        })
      }

    updateCount(count){
        database.ref('/').update({
          playerCount: count
        });
    }
    static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value",(data)=>{
          allPlayers = data.val();
        })
    }
    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
          x:this.x,
          y:this.y,
        });
      }
}