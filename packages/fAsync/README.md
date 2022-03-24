## Features
- timeouts
- intervals
- async loops

# Usage
```javascript
import { world as World } from "mojang-minecraft"
import FAsync from "./fAsync.0.1.0.js"

// Required
World.events.tick.subscribe(eventData => {
	FAsync.update()
})


let func = function() {}
let delayInTicks = 10

// timeout - equals to setTimeout
FAsync.timeout(func, delayInTicks)

// interval - equals to setInterval
FAsync.interval(func, delayInTicks)

// timeout - equals to for (let i; i; i++)
FAsync.forloop(
	// initialization
	{ i: 0},
	
	// condition
	v => v.i < 10,
	
	// statement
	v => v.i++,
	
	// body
	v => {}, 
	
	// iteration delay in ticks
	delayInTicks
)

```
