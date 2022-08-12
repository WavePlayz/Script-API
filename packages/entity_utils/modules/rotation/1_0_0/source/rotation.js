
Math.prototype._DEGREES_IN_RADIAN = 180 / Math.PI

export default function getEntityRotation (entity) {
	const { x, y, z } = entity.viewVector
	
	let pitch = Math.asin(-y) * Math._DEGREES_IN_RADIAN
	let yaw = Math.atan2(-x, z) * Math._DEGREES_IN_RADIAN
	
	return { pitch, yaw }
}


