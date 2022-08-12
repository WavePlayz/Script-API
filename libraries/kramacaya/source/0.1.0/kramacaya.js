
const factorial = n => (n < 2)? (1) : (n * factorial(n-1))

class Kramacaya {
	static VERSION = [0,1,0]
	
	static permutations (n, r, repeat = true) {
		return (repeat) 
			? (n**r) 
			: (factorial(n) / factorial(n-r))
	}
	
	static combinations (n, r, repeat = false) {
		return (repeat) 
			? ( this.permutations(n,r,false) * (1 / factorial(r)) )
			: ( factorial(r+n-1) / (factorial(r) * factorial(n-1)) )
	}
}

export default Object.freeze(Kramacaya)
