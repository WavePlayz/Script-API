// by WavePlayz
// v5.0

const EXECUTION_KEY = Symbol()

String.prototype.toArguments = function(doTypeConversion = true, spliters = /[\s\b]/) {
	const content = this.toString()
	const contentLength = content.length
	
	let _arguments = []
	let currentArgument = ""
	
	let SINGLE_QUOTE = "'"
	let DOUBLE_QUOTE = '"'
	
	let quotes = {
		[SINGLE_QUOTE]: false,
		[DOUBLE_QUOTE]: false,
		get isOpen() {
			return this[SINGLE_QUOTE] || this[DOUBLE_QUOTE]
		}
	}
	
	let shouldIgnoreCharacter = false
	
	for (let i = 0; i <= contentLength; i++) {
		const currentCharacter = content[ i ]
		
		if (shouldIgnoreCharacter) {
			currentArgument += currentCharacter
			shouldIgnoreCharacter = false
		}
		
		else if ( currentCharacter == "\\" ) {
			shouldIgnoreCharacter = true
		}
		
		else if ( currentCharacter in quotes && (!quotes.isOpen || quotes[currentCharacter] )) {
			quotes[currentCharacter] = !quotes[currentCharacter]
		}
		
		else if (
			!quotes.isOpen && 
			spliters.test( currentCharacter ) || 
			currentCharacter === undefined
		) {
			if (doTypeConversion) {
				try {
					currentArgument = JSON.parse(currentArgument)
				} catch (error) {}
			}
			
			currentArgument && _arguments.push(currentArgument)
			
			currentArgument = ""
		} 
		
		else {
			currentArgument += currentCharacter
		}
	}
	
	return _arguments
}

function getTellrawString (string) {
	return `tellraw @s { "rawtext": [{ "text": "${string}" }] }`
}

class ChatCommand {
	static #data = new Map()
	
	static #createCommand(prefix, configuration0, namespaces, callback, configuration1 ) {
		if (typeof namespaces !== "string") {
			throw new Error("<TypeError> command name must be string")
		}
		
		if (!this.#data.has( prefix )) {
			this.#data.set( prefix, new Map() )
		}
		
		let configuration = {...configuration0, ...configuration1}
		
		let commandGroup = this.#data.get( prefix )
		let commandData = { callback, configuration, lastCalled: {} }
		
		if (Array.isArray( namespaces )) {
			namespaces.forEach( 
				namespace => commandGroup.set(namespace, commandData)
			)
		} else {
			commandGroup.set(namespaces, commandData)
		}
	}
	
	static createCommandGroup(groupPrefix, configuration) {
		if (typeof groupPrefix !== "string") {
			throw new Error("<TypeError> group prefix must be string")
		}
		
		const context = this
		
		return { // anonymous command group object
			addCommand(...args) {
				context.#createCommand(groupPrefix, configuration, ...args)
				return this
			}
		}
	}
	
	static onChatTrigger (chatData, key) {
		const { message, sender } = chatData
		
		let { 
			location = {}, 
			velocity = {}, 
			name, 
			nameTag, 
			isSneaking
		} = sender ?? {}
		
		location = { ...location }
		velocity = { ...velocity }
		
		const context = this
		
		let status = false
		
		this.#data.forEach( (commandGroup, prefix ) => {
			if ( ! message.startsWith( prefix ) ) return;
			
			chatData.cancel = true
			
			let content = message.replace( prefix, "" )
			
			let [ command, ...commandArguments ] = content.toArguments()
			
			if (! commandGroup.has( command )) return;
			
			let currentTime = Date.now()
			
			let commandData = commandGroup.get( command )
			let { callback, configuration } = commandData
			let { requires, requiresAny, cooldown, whitelist } = configuration ?? {}
			
			if (Array.isArray(whitelist) && whitelist.includes(nameTag)) {}
			
			else if (cooldown && commandData.lastCalled[nameTag] && currentTime - commandData.lastCalled[nameTag] < cooldown) {
				sender.runCommand(getTellrawString(`You are on cooldown of ${cooldown}ms`))
				return
			}
			
			else if (Array.isArray(requires) && requires.length) {
				if (requires.some(tag => !sender.hasTag(tag))) {
					sender.runCommand(getTellrawString(`You dont have permissions to use this command`))
					return
				}
			} 
			
			else if (Array.isArray(requiresAny) && requiresAny.length) {
				if (!requiresAny.some(tag => sender.hasTag(tag))) {
					sender.runCommand(getTellrawString(`You dont have permissions to use this command`))
					return
				}
			}
			
			let data = {
				sender,
				player: {
					name, nameTag, 
					location, velocity,
					isSneaking
				},
				prefix,
				message,
				content,
				command,
				commandArguments,
				body: content.substr( content.indexOf( commandArguments[0] ) )
			}
			
			callback && callback.call(context, data)
			
			commandData.lastCalled[nameTag] = currentTime
			
			status = true
		})
		
		return status
	
	}
}


export default ChatCommand
