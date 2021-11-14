//by WavePlayz
//v0.1

import { World, Commands } from "mojang-minecraft"

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

World.events.beforeChat.subscribe(eventData => {
	if (ConfirmManager.isConfirmResponse(eventData)) {
		eventData.cancel = true
	}
})


export default Chat

