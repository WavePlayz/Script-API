
```js
const OVERWORLD = World.getDimension("overworld")
const record = {}

function conform(playerName, title, callback) {
	Commands.run(`msg "${playerName}" ${title}`, OVERWORLD )
	record[playerName] = callback
}

World.events.beforeChat.subscribe(eventData => {
	const { message, sender: { nameTag } } = eventData
	
	if (nameTag in record) {
		eventData.cancel = true
		record[nameTag]?.(message)
		delete record[nameTag]
	} 
})

// usage
conform("Steve", "Are ypu sure?", response => {
	if (response == "yes") {
		// do stuff
	}
}) 
```
