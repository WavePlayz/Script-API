import {
	world
} from "mojang-minecraft";

const OVERWORLD = world.getDimension("overworld")

function displayChat(content, dimension) {
	OVERWORLD.runCommand(`say ${content}`)
}

world.events.tick.subscribe(eventData => {
	displayChat("hi", OVERWORLD)
})
