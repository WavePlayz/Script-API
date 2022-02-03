```js
// function to get entity's rotation. by taking entity object as arguement

Number.prototype.DEGREES_IN_RADIAN = 180 / Math.PI


function getEntityRotation(entity) {
	let { location: { x, y, z } } = entity
	
	entity.runCommand(`tp ^ ^ ^1` )
	
	let dx = entity.location.x - x
	let dy = entity.location.y - y
	let dz = entity.location.z - z
	
	entity.runCommand(`tp ${x} ${y} ${z}` )
	
	let magnitude = Math.sqrt( dx*dx + dy*dy + dz*dz );
	
	dx /= magnitude
	dy /= magnitude
	dz /= magnitude
	
	let pitch = Math.asin(-y) * Number.DEGREES_IN_RADIAN
	let yaw = Math.atan2(-x, z) * Number.DEGREES_IN_RADIAN
	
	return { pitch, yaw }
}
```
