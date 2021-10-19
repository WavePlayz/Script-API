import { World, Commands } from "mojang-minecraft";

const DIMENSION = World.getDimension()

const permissions = {
	view: 2,
	send: 4,
	command: 8,
	custom_commands: 16
}

let run = command = Commands.run(command, DIMENSION)



World.events.beforeChat.subscribe(eventData => {
	const { message, sender } = eventData
	
	try {
		run("scoreboard objectives add script:roles dummy")
	}
// set.perm.name wavw.view.set
	if (message.startsWith("set.perms")) {
		let [ a, b, name, ...perms ] message.split(".")
		
		let sum = perms.reduce((r,perm) => r + (permissions[perm] ?? 0), 0)
		
		run(`scoreboard players set "${name}" script:roles 0`)
	}
	/
	
})


