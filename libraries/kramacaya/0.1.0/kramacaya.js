
const factorial = n => (n < 2)? (1) : (n * factorial(n-1))

class Kramacaya {
	static permutations (n, r, repeat = true) {
		return repeat ? n**r
	}
	
	static permutationsNoRepeat (n, r) {
		return factorial(n) / factorial(n-r)
	}
	
	
}


