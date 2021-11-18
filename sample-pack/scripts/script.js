// Native Modules
import * as Minecraft from "mojang-minecraft";

let worldHasPlayer = false 

Minecraft.World.events.tick.subscribe(eventData => {
    const { currentTick } = eventData
    
    if (worldHasPlayer || currentTick % 20 * 5 !== 0) return;
    
    let players = Minecraft.world.getPlayers()
    
    players.forEach(
        player => player.runCommand("say Hello " + player.nameTag)
    )
    
    worldHasPlayer = true
})


/**
* Your code here
**/
