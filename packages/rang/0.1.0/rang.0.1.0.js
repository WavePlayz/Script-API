export default class Rang {
	constructor(colors, text) {
		this.colors = colors
		this.rootColor = this.colors[0]
		this.letters = text.split("")
		
		this.totalLength = this.colors.length + this.letters.length
		
		this.rang = this.colors.padStart( this.totalLength, this.rootColor ).split('')
	}
	
	get string () {
		return this.letters.map( 
			(value, index) => `§${ this.rang[ index ] }${ value }§r` 
		).join("")
	}
	
	get value() {
		let text = this.string
		
		this.rang.unshift( this.rang.pop() )
		
		return text
	}
}