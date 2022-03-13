export default class {
	static get (string, { p = 153, m = 1e11 + 9 } = {}) {
		let powerOfP = 1
		let hash = 0
		
		let aCharCode = " ".charCodeAt()
		
		for (let i = 0; i < string.length; i++) {
			let charCode = string[ i ].charCodeAt()
			
			hash = (hash + (charCode - aCharCode + 1) * powerOfP) % m
			
			powerOfP = (powerOfP * p) % m
		}
	
		return hash
	}
}
