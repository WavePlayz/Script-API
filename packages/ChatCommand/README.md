
```javascript
import { world } from "mojang-minecraft"
import ChatCommand from "./packages/chat-command.js"

ChatCommand
	.createCommandGroup(".")
	
	// basic use
	.addCommand( "hello", 
		data => data.sender.runCommand("say hello")
	)
	
	// limiting useage to people who has all the tags
	.addCommand( "hi", 
		data => data.sender.runCommand("say hello"),
		{ requires: [ "admin" ] }
	)
	
	// limiting useage to people who has one of the tags
	.addCommand( "bye", 
		data => data.sender.runCommand("say hello"),
		{ requiresAny: [ "mod", "helper" ] }
	)
	
	// cooldown in millisecs - 1 tick = 50ms
	.addCommand( "shy", 
		data => data.sender.runCommand("say hello"),
		{ cooldown:  20 * 50 }
	)
	
	// whitlist to ignore all restrictions for people
	.addCommand( "die", 
		data => data.sender.runCommand("say hello"),
		{ whitelist:  [ "Steve", "Alex" ] }
	)
	
	
world.events.beforeChat.subscribe(eventData => {
	ChatCommand.onChatTrigger( eventData )
})
	
```
	


