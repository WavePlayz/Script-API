
const NAME = "entityRotation"
const VERSION = "1.0.0"
const TAG = NAME + ":" + VERSION


Number.prototype.DEGREES_IN_RADIAN = 180 / Math.PI

export default function getEntityRotation (entity) {
	const { x, y, z } = entity.viewVector
	
	let pitch = Math.asin(-y) * Number.DEGREES_IN_RADIAN
	let yaw = Math.atan2(-x, z) * Number.DEGREES_IN_RADIAN
	
	return { pitch, yaw }
}


