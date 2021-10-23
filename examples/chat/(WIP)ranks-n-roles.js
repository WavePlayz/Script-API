import { World, Commands } from "mojang-minecraft";

const DIMENSION = World.getDimension()

// WIP

const permissions = {
	view: 2,
	send: 4,
	command: 8
}

let run = command = Commands.run(command, DIMENSION)



World.events.beforeChat.subscribe(eventData => {
	const { message, sender } = eventData
	
	if (message = "set.perms") {
		try {
			run("scoreboard objectives add script:roles dummy")
		}catch(e){}
	}
	
	if (message.startsWith("set.perms")) {
		let [ a, b, name, ...perms ] message.split(".")
		
		let sum = perms.reduce((r,perm) => r + (permissions[perm] ?? 0), 0)
		try {
		run(`scoreboard players set "${name}" script:roles ${sum}`)
		}catch(e){}
	}
	
	
	
})


