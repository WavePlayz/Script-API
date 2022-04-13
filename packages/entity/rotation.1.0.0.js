Number.prototype.DEGREES_IN_RADIAN = 180 / Math.PI

function getEntityRotation (entity) {
	const { x, y, z } = entity.viewVector
	
	let pitch = Math.asin(-y) * Number.DEGREES_IN_RADIAN
	let yaw = Math.atan2(-x, z) * Number.DEGREES_IN_RADIAN
	
	return { pitch, yaw }
}

export default class CEntity {
static getRotation = getEntityRotation
}

