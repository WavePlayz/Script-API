v1.18.20

```js
const OVERWORLD = World.getDimension("overworld")
const confirms = new Map()

function confirm(player, title, callback) {
	let playerName = player.nameTag
	
	player.dimension.runCommand( `msg "${playerName}" ${title}` )
	
	confirms.set( playerName, callback )
}

world.events.beforeChat.subscribe(eventData => {
	const { message, sender } = eventData
	
	if ( confirms.has(nameTag) ) {
		eventData.cancel = true
		
		confirms.get(nameTag)?.(message)
		
		confirms.delete(nameTag)
	} 
})
```

## Usage
```js
// usage
confirm("Steve", "Are ypu sure?", response => {
	if (response == "yes") {
		// do stuff
	}
}) 
```
