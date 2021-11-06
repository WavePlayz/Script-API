//by WavePlayz
//v3.4

import { World, Commands } from "mojang-minecraft"

const EXECUTION_KEY = Symbol()

String.prototype.toArguments = function(shouldTypeConvert = true) {
	const content = this.toString()
	const contentLength = content.length
	
	let _arguments = []
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
	
	let ignoreCharacter = false
	
	for (let i = 0; i <= contentLength; i++) {
		const character = content[ i ]
		
		if (ignoreCharacter) {
			currentArgument += character
			ignoreCharacter = false
		}
		
		if ( character == "\\" ) {
			ignoreCharacter = true
		}
		
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
				_arguments.push( currentArgument )
			}
			
			currentArgument = ""
			continue
		}
		
		currentArgument += character
	}
	
	return _arguments
}

class ChatCommand {
	static #data = new Map()
	
	static #create(prefix, namespaces, callback) {
		if (!this.#data.has( prefix )) {
			this.#data.set( prefix, new Map());
		}
		
		let group = this.#data.get( prefix )
		
		if (Array.isArray( namespaces )) {
			namespaces.forEach( value => group.set(value, callback) )
		} else {
			group.set( namespaces, callback)
		}
	}
	
	static group (prefix) {
		const classContext = this
		return {
			add( ...args ) {
				classContext.#create( prefix, ...args )
				return this
			}
		}
	}
	
	static onChat(chatData, key) {
		if (key != EXECUTION_KEY) return;
		
		const { message, sender } = chatData
		const { location, velocity, name, nameTag, isSneaking } = sender ?? {}
		const { x, y, z } = location ?? {}
		const { x: vx, y: vy, z: vz } = velocity ?? {}
		 
		const context = this
		
		let status = false
		
		this.#data.forEach( (commands, prefix ) => {
			if ( !message.startsWith( prefix ) ) return;
			
			let content = message.replace( prefix, "")
			
			let [ command, ...args ] = content.toArguments()
			
			let body = content.substr( content.indexOf(args[0]) )
			
			if (!commands.has( command )) return;
			
			let data = {
				message,
				player: {
					x, y, z, 
					vx, vy, vz,
					name, nameTag, 
					isSneaking
				},
				prefix,
				content,
				command,
				arguments: args,
				body
			}
			
			commands.get( command ).call(context, data)
			
			status = true
		})
		
		return { isCommand: status }
	}
}


const TAG = "[ChatCommand]"


World.events.beforeChat.subscribe(eventData => {
	try {
		if (ChatCommand.onChat( eventData, EXECUTION_KEY ).isCommand ) {
			eventData.cancel = true
		}
	} catch (error) {
		console.warn(TAG + error)
		console.warn(TAG + error.stack)
	}
})



export default ChatCommand

