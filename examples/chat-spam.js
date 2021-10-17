import {
	World,
	Commamds
} from "mojang-minecraft";

const OVERWORLD = World.getDimension("overworld")

function displayChat(content, dimension) {
	Commands.run(`say ${content}`, dimension)
}

World.events.tick.subscribe(eventData => {
	displayChat("hi", OVERWORLD)
})