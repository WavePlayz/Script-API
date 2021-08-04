import { World, Commands } from "Minecraft"

let tickCount = 0

function onTick(eventData) {
	Commands.run("title @a actionbar " + tickCount++)
}

World.events.tick.subscribe(onTick)
