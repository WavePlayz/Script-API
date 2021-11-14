// Native Modules
import * as Minecraft from "mojang-minecraft";
import * as Gametest from "mojang-gametest";

const OVERWORLD = Minecraft.World.getDimension("overworld");

let playerJoined = false 
let tick = 0

Minecraft.World.events.tick.subscribe(eventData => {
    if (playerJoined || tick < 20 * 5) return;
    
    Minecraft.Commands.run("say Hello World", OVERWORLD)
})


/**
* Your code here
**/
