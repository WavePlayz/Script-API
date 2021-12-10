// Native Modules
import * as Minecraft from "mojang-minecraft";

let worldHasPlayer = false 

Minecraft.world.events.playerJoin(player => {
    worldHasPlayer = true
})

const TICKS_IN_FIVE_SECONDS = 20 * 5

Minecraft.world.events.tick.subscribe(eventData => {
    const { currentTick } = eventData
    
    if (!worldHasPlayer || currentTick % TICKS_IN_FIVE_SECONDS !== 0) return;
    
    let players = Minecraft.world.getPlayers()
    
    players.forEach(
        player => player.runCommand("say Hello " + player.nameTag)
    )
})


/**
* Your code here
**/
