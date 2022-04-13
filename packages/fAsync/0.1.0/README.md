# fAsync `0.1.0`

- timeouts
- intervals
- async loops

## Usage
1. Import and setup fasync
```javascript
import { world } from "mojang-minecraft"
import FAsync from "./fAsync.0.1.0.js"

// Required
world.events.tick.subscribe(() => FAsync.update() )
```

2. Initialize function and delay
```js
let func = function() {}
let delayInTicks = 10
```
3. Use
```js
// timeout / setTimeout
FAsync.timeout(func, delayInTicks)
```
```js
// interval / setInterval
FAsync.interval(func, delayInTicks)
```
```js
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

