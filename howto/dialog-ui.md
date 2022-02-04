##### 1.18.20.21 Ui API Demo
![imgur-mp4](/images/20220128_165128.gif)

```javascript
import { world as World } from "mojang-minecraft"

import { 
	ActionFormData,
	MessageFormData,
	ModalFormData
} from "mojang-minecraft-ui"

/*
* Action form demo
*/

World.events.beforeItemUseOn.subscribe(eventData => {
	const { blockLocation, source } = eventData
	
	eventData.cancel = true
	
	let entity = source
	let actionForm = new ActionFormData()
	
	actionForm.title("Block Pusher")
	actionForm.body("move the block in one of the 6 cardinial directions.")
	
	actionForm.button("x+") // 0
	actionForm.button("x-") // 1
	actionForm.button("y+") // 2
	actionForm.button("y-") // 3
	actionForm.button("z+") // 4
	actionForm.button("z-") // 5
	
	actionForm.show(entity).then(actionFormResponse => {
		const { isCanceled, selection } = actionFormResponse
		
		if (isCanceled === true) {
			entity.runCommand("say you have canceled the action form.")
			return
		}
		
		let xOffset = 0
		let yOffset = 0
		let zOffset = 0
		
		switch (selection) {
			case 0: // for x+
				xOffset = 1
				break
			
			case 1: // for x-
				xOffset = -1
				break
			
			
			case 2: // for y+
				yOffset = 1
				break
			
			case 3: // for y-
				yOffset = -1
				break
				
			
			case 4: // for z+
				zOffset = 1
				break
			
			case 5: // for z-
				zOffset = -1
				break
		}
		
		let { x, y, z } = blockLocation
		
		let nx = x + xOffset
		let ny = y + yOffset
		let nz = z + zOffset
		
		entity.runCommand(`clone ${x} ${y} ${z} ${x} ${y} ${z} ${nx} ${ny} ${nz} replace move`)
		
	})
	
})


/*
* Message form demo
*/

World.events.blockPlace.subscribe(eventData => {
	const { block, player } = eventData
	
	let messageForm = new MessageFormData()
	
	messageForm.title("Confirm")
	messageForm.body("Are you sure? you want to place block in here.")
	messageForm.button1("yes")
	messageForm.button2("no")
	
	messageForm.show(player).then( messageFormResponse => {
		const { isCanceled, selection } = messageFormResponse
		
		if (isCanceled === true) {
			player.runCommand("say You have canceled the message form.")
			return
		}
		
		if (selection == 0) {
			block.setType(MinecraftBlockTypes.air)
		}
		
	} )
})


/*
* Modal form demo
*/

World.events.beforeItemUse.subscribe(eventData => {
	const { item, source } = eventData
	
	if (item.id !== "minecraft:snowball" ) return;
	
	let commands = [ "tp", "say", "kill" ]
	
	let modalForm = new ModalFormData()
	
	modalForm.title("Command executer")
	
	//modalForm.icon("./pack_icon.png") // dont know the use yet
	modalForm.dropdown("Command", commands, 1)
	modalForm.textField("Command arguement", "valid command input..")
	modalForm.toggle("Run as admin", false)
	
	modalForm.show(source).then( modalFormResponse => {
		const { formValues, isCanceled } = modalFormResponse
		
		if (isCanceled === true) {
			source.runCommand("say You have canceled the modal form.")
			return
		}
		
		let [ dropdown, input, toggle ] = formValues
		
		if (toggle == true) {
			source.dimension.runCommand(commands[dropdown] + " " + input)
		} else {
			source.runCommand(commands[dropdown] + " " + input)
		}
		
	} )
})

```
