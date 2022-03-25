
import { world } from "mojang-minecraft"

let hasPlayers = false

world.events.tick.subscribe(eventData => {
	if (!hasPlayers) {
		let players = world.getPlayers()
		
		for (let player of players) {
			hasPlayers = true
			FEvent.onWorldLoad?.(player)
			break
		}
	}
})


class FEvent {
	
	static onWorldLoad() {
		console.warn("fevent-world-loaded")
	}
	
}

export default FEvent

