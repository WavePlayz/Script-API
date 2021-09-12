// by WavePlayz

import { World, Commands } from "mojang-minecraft";

const EVENT_KEY = Symbol()

class Event {
	#key
	#id
	#callback
	
	constructor(name, description, key = globalThis.EVENT_KEY) {
		this.name = name
		this.description = description
		this.#key = key
		this.#id = Symbol.for(name)
	}
	
	trigger(key, ...args) {
		if (key != this.#key) {
			throw new Error(`Failed to trigger the event ( ${this.name} ): symbols does not match`)
		}
		
		this.#callback?.apply(null, args)
	}
	
	subscribe(callback) {
		this.#callback = callback
	}
	
	unsubscribe() {
		this.#callback = null
	}
}

class EventGroup {
	#closed = false
	
	constructor(name, description) {
		this.name = name
		this.description = description
	}
	
	createEvent(name, description, key) {
		if (this.#closed) {
			throw new Error("EventGroup has been closed")
		}
		
		this[name] = new Event(name, description, key)
		return this
	}
	
	get close() {
		this.#closed = true
		return this
	}
}

export default class CustomEvents {
	static world = new EventGroup("World events")
		.createEvent("onLoad")
		.createEvent("onActive")
		.createEvent("onInactive")
		.close
		
	static player = new EventGroup("Player events")
		.createEvent("onJoin")
		.createEvent("onLeave")
		.createEvent("onSneak")
		.close
	
	createGroup(name, description) {
		if (name in this) {
			throw new Error("Failed to create EventGroup: name in use")
		}
		
		this[name] = new EventGroup(name, description)
		return this[name]
	}
}

let previousPlayers = World.getPlayers()

class EventTriggerers {
	static eventKey = globalThis.EVENT_KEY
	static worldLoaded = false
	
	static onLoad (players) {
		if (this.worldLoaded || !players.length) return;
		
		let { x, z } = players[0].velocity
		let magnitude = Math.sqrt(x*x + z*z)
		
		if (magnitude == 0) return;
		
		this.worldLoaded = true
		
		CustomEvents.world.onLoad.trigger(this.eventKey)
	}
	
	static onActive () {
		if (previousPlayers.length != 0 || !this.worldLoaded) return;
		
		CustomEvents.world.onActive.trigger(this.eventKey)
	}
	
	static onInactive (players) {
		if (players.length != 0) return;
		
		CustomEvents.world.onInactive.trigger(this.eventKey)
	}
	
	static onJoin (players) {
		const playersJoined = players.slice( previousPlayers.length )
		
		playersJoined.forEach(player =>
			CustomEvents.player.onJoin.trigger(this.eventKey, player)
		)
		
		this.onActive()
	}
	
	static onLeave (players) {
		let playersLeft = previousPlayers.slice( players.length )
		
		playersLeft.forEach(player =>
			CustomEvents.player.onLeave.trigger(this.eventKey, player)
		)
		
		this.onInactive(players)
	}
	
	static onSneak (players) {
		let sneakingPlayers = players.filter( player => {
			let name = player.name ?? player.nameTag
			let isSneaking = player.isSneaking
			
			return previousPlayers.some( player => 
				((player.name ?? player.nameTag) == name) && 
				player.isSneaking != isSneaking
			)
		})
		
		sneakingPlayers.forEach(player =>
			CustomEvents.player.onSneak.trigger(this.eventKey, player)
		)
	}
}

World.events.tick.subscribe(eventData => {
	let currentPlayers = World.getPlayers()
	
	let currentPlayersCount = currentPlayers.length
	let previousPlayersCount = previousPlayers.length
	
	EventTriggerers.onLoad(currentPlayers)
	
	if (currentPlayersCount > previousPlayersCount) {
		EventTriggerers.onJoin(currentPlayers)
	}
	
	else if (currentPlayersCount < previousPlayersCount) {
		EventTriggerers.onLeave(currentPlayers)
	} 
	
	EventTriggerers.onSneak(currentPlayers)
	
	previousPlayers = currentPlayers
})
