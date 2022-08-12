export default class {
	static get (string, { p = 157, m = 1e18 + 9 } = {}) {
		let powerOfP = 1n
		let hash = 0n
		
		let aCharCode = BigInt(" ".charCodeAt())
		
		for (let i = 0; i < string.length; i++) {
			let charCode = BigInt( string[ i ].charCodeAt() )
			
			hash = (hash + (charCode - aCharCode + 1) * powerOfP) % BigInt(m)
			
			powerOfP = (powerOfP * BigInt(p)) % BigInt(m)
		}
	
		return hash
	}
}
