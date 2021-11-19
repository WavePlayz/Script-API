
```js
const OVERWORLD = World.getDimension("overworld")
const record = {}

function confirm(playerName, title, callback) {
	OVERWORLD.runCommand(`msg "${playerName}" ${title}`, OVERWORLD )
	record[playerName] = callback
}

world.events.beforeChat.subscribe(eventData => {
	const { message, sender: { nameTag } } = eventData
	
	if (nameTag in record) {
		eventData.cancel = true
		record[nameTag]?.(message)
		delete record[nameTag]
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
