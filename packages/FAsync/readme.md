# Features
- timeouts
- intervals
- async loops

# Usage
```javascript
import FAsync from <PATH-TO-FILE>
import { World } from "mojang-minecraft"

// Required step
World.events.tick.subscribe(eventData => {
	FAsync.update()
})

// you can use this from anywhere in the script like

let func = function() {}
let delayInTicks = 10

FAsync.timeout(func, delayInTicks)
FAsync.interval(func, delayInTicks)

// extras - a async forloop
FAsync.forloop(
	{ i: 0}, //initialization
	v => v.i < 10, //condition
	v => v.i++, //statement
	v => {}, //body
	delayInTicks //iteration delay in ticks
)

```