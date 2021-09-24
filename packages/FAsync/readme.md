# Features
- timeouts
- intervals
- async loops

# Usage
Folder structure
  - **scripts/**
    - **packages/**
      - `FAsync.js`
    - `script.js`
  - `manifest.json`
  - `pack_icon.png`
---
```javascript
import FAsync from "./packages/FAsync.js"
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