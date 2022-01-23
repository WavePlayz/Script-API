//by WavePlayz
//v0.1

const SCRIPT = {
	tag: "[Chat]",
	version: "0.1",
	devloper: "WavePlayz",
	key: Symbol()
}

import { World, Commands } from "mojang-minecraft"

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



/*
** Confirm...
*/

let currentWorldTick = 0

World.events.tick.subscribe(eventData => {
	currentWorldTick++
})

class Confirm {
	#message
	#responses
	#timeout
	#tick
	#callback
	#callbacks = {}
	
	constructor({ playerName, message, responses, timeout }) {
		this.target = playerName
		this.#message = message
		this.#responses = responses
		this.#timeout = timeout
		this.#tick = currentWorldTick
	}
	
	#isValidCallback (callback) {
		if (response in this.#callback || typeof callback !== "function") 
			return;
		
		return true
	}
	
	onResponse (callback) {
		if (!this.#isValidCallback(callback)) return;
		
		this.#callback = callback
	}
	
	on (response, callback) {
		if (!this.#isValidCallback(callback)) return;
		
		this.#callbacks[response] = callback
	}
	
	respond (response) {
		if (currentWorldTick - this.#tick > this.#timeout) return;
		
		this.#callback?.(response)
		
		if (! this.#responses.includes(response) ) return;
		
		this.#callbacks[response]?.()
	}
}

class ConfirmManager {
	static #confirms = {}
	
	static createConfirm (playerName, message, options) {
		const { responses, timeout } = options
		let confirm = new Confirm({ message, responses, timeout })
		
		this.#confirms[playerName] = confirm
		
		return confirm
	}
	
	static isConfirmResponse(chatEventData) {
		const { message, sender: { nameTag } } = eventData
		
		if (nameTag in this.#confirms) {
			this.#confirms[nameTag].respond(message)
			return true
		}
	}
}


class Chat {
	static display(text, target = "@a") {
		if (!target.startsWith("@") target = `"${target}"`;
		
		let rawtext = JSON.stringify({ rawtext: [{ text }] })
		try {
			Commands.run(`tellraw ${target} ${rawtext}`)
		} catch(error) {
			console.warn(error)
			console.warn(error.stack)
		}
	}
	
	static confirm(playerName, message) {
		this.display(`§f> ${message ?? "Confirm!"}§r`, playerName)
		return ConfirmManager.createConfirm(...arguments)
	}
}



/*
** ChatCommand...
*/

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
		if (key != SCRIPT.key) return;
		
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


World.events.beforeChat.subscribe(eventData => {
	try {
		let isConfirmResponse = ConfirmManager.isConfirmResponse(eventData)
		let isChatCommand = ChatCommand.onChat( eventData, SCRIPT.key ).isCommand
		
		if (isConfirmResponse || isChatCommand) {
			eventData.cancel = true
		}
	} catch (error) {
		console.warn(TAG + error)
		console.warn(TAG + error.stack)
	}
})


export Chat
export ChatCommand
