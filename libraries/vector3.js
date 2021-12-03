
class Vector3 {
	static RADIANS_IN_DEGREE = Math.PI / 180
	static DEGREES_IN_RADIAN = 180 / Math.PI
	
	static degreeToRadians (degrees) {
		return degrees * this.RADIANS_IN_DEGREE
	}
	
	static radianToDegrees (radians) {
		return radians * this.DEGREES_IN_RADIAN
	}
	
	static fromAngle (pitch, yaw, distance = 1) {
		let pitchRad = this.degreeToRadians(pitch)
		let yawRad = this.degreeToRadians(yaw)
		
		let sinYaw = Math.sin(yawRad)
		let sinPitch = Math.sin(pitchRad)
		let cosYaw = Math.cos(yawRad)
		let cosPitch = Math.cos(pitchRad)
		
		return {
			x : distance * -sinYaw * cosPitch ,
			y : distance * -sinPitch ,
			z : distance * cosYaw * cosPitch
		};
	}
	
	static toAngle (x, y, z) {
		let magnitude = Math.sqrt(x*x + y*y + z*z)
		
		x /= magnitude
		y /= magnitude
		z /= magnitude
		
		let pitch = this.radianToDegrees(Math.asin(-y))
		let yaw = this.radianToDegrees(Math.atan2(-x, z))
		
		return { pitch, yaw }
	}
}
