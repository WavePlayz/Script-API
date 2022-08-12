
class SemVer {
	static VERSION = [ 0, 1, 0 ]
	
	static validate (...semvers) {
		let regex = /\d+\.\d+\.\d+(\.\d+)?/
		
		semvers.forEach( semver => {
			if (regex.test(semver)) return;
			
			throw new Error("invalid / unsupported semver " + semver)
		} )
	}
	
	static toArray (...semvers) {
		return semvers.map( semver => {
			this.validate(semver)
			
			return semver.split(".")
		})
	}
	
	static lessThan (semver0, semver1) {
		let semvers = this.toArray(semver0, semver1)
		
		return (
			!(semvers[0][0] > semvers[1][0])  &&   
			!(semvers[0][1] > semvers[1][1])  &&  
			semvers[0][2] < semvers[1][2]
		)
	}
	
	static equals (semver0, semver1) {
		let semvers = this.toArray(semver0, semver1)
		
		return (
			semvers[0][0] == semvers[1][0]  &&  
			semvers[0][1] == semvers[1][1]  &&  
			semvers[0][2] == semvers[1][2]
		)
	}
	
	static greaterThan (semver0, semver1) {
		let semvers = this.toArray(semver0, semver1)
		
		return (
			!(semvers[0][0] < semvers[1][0])  &&   
			!(semvers[0][1] < semvers[1][1])  &&  
			semvers[0][2] > semvers[1][2]
		)
	}
	
	
	static lessThanEquals (semver0, semver1) {
		return this.lessThan(semver0, semver1) || this.equals(semver0, semver1)
	}
	
	static greaterThanEquals (semver0, semver1) {
		return this.greaterThan(semver0, semver1) || this.equals(semver0, semver1)
	}
	
	static lt = this.lessThan
	static eq = this.equals
	static gt = this.greaterThan
	static lteq = this.lessThanEquals
	static gteq = this.greaterThanEquals
}


export default Object.freeze(SemVer)


