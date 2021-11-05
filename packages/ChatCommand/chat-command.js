//by WavePlayz
//v2

import { World, Commands } from "mojang-minecraft"

const DIMENSIONS = [
	World.getDimension("overworld"),
	World.getDimension("nether"),
	World.getDimension("the end")
]


const EXECUTION_KEY = Symbol()

String.prototype.toArguments = function(shouldTypeConvert = true) {
	const content = this.toString()
	const contentLength = content.length
	
	let arguments = []
	let currentArgument = ""
	
	let isSingleOpen = "'"
	let isDoubleOpen = '"'
	
	let quotes = {
		[isSingleOpen]: false,
		[isDoubleOpen]: false,
		get notOpened() {
			return !this[isSingleOpen] && !this[isDoubleOpen]
		}
	}
	
	for (let i = 0; i <= contentLength; i++) {
		const character = content[ i ]
		
		if ( character == isSingleOpen || character == isDoubleOpen ) {
			quotes[character] = !quotes[character]
			continue
		}
		
		if ( (/[\s\b]/.test( character ) && quotes.notOpened) || (i == contentLength) ) {
			if (shouldTypeConvert) {
				try {
					currentArgument = JSON.parse(currentArgument)
				} catch (error) {}
			} 
			
			if (currentArgument) {
				arguments.push( currentArgument )
			}
			
			currentArgument = ""
			continue
		}
		
		currentArgument += character
	}
	
	return arguments
}

class ChatCommand {
	static #data = new Map()
	
	static HELPER = {
		teleport (x, y, z, dimension) {
			return function({ sender: { nameTag } }) {
				Commands.run(`tp "${nameTag}" ${x} ${y} ${z}`, DIMENSIONS[dimension])
			}
		}
	}
	
	static group (prefix) {
		const classContext = this
		return {
			add( ...args ) {
				classContext.create( prefix, ...args )
				return this
			}
		}
	}
	
	static create(prefix, namespace, callback) {
		if (!this.#data.has(prefix)) {
			this.#data.set(prefix, new Map());
		}
		
		this.#data.get(prefix).set(namespace, callback)
	}
	
	static onChat(chatData, key) {
		if (key != EXECUTION_KEY) return;
		
		let status = false
		
		this.#data.forEach( (commands, prefix ) => {
			if ( !message.startsWith(prefix) ) return;
			
			let content = chatData.message.replace(prefix, "")
			
			let [ namespace, ...arguments ] = content.toArguments()
			
			if (!commands.has(namespace)) return;
			
			commands.get(namespace)(chatData, arguments, content)
			
			status = true
		})
		
		return { isCommand: status }
	}
}

World.events.beforeChat.subscribe(eventData => {
	if (ChatCommand.onChat( eventData, EXECUTION_KEY ).isCommand ) {
		eventData.cancel = true
	}
})

export default ChatCommand
