
import { world } from "mojang-minecraft"

const GAMERULES = [
	"commandBlocksEnabled",
	"commandBlockOutput",
	"doDaylightCycle",
	"doEntityDrops",
	"doFireTick",
	"doInsomnia",
	"doImmediateRespawn",
	"doMobLoot",
	"doMobSpawning",
	"doTileDrops",
	"doWeatherCycle",
	"drowningDamage",
	"fallDamage",
	"fireDamage",
	"keepInventory",
	"maxCommandChainLength",
	"mobGriefing",
	"naturalRegeneration",
	"pvp",
	"randomTickSpeed",
	"sendCommandFeedback",
	"showCoordinates",
	"showDeathMessages",
	"spawnRadius",
	"tntExplodes",
	"showTags"
]

class GameruleManager {
	static VERSION = "1.0"
	
	static #dimension = null
	static #defaults = null
	 
	static initialize () {
		
		this.#dimension = world.getDimension( "overworld" )
		this.#defaults = this.defaults
	}
	
	static get defaults () {
		if (this.#defaults) {
			return this.#defaults;
		}
		
		let data = {}
		
		GAMERULES.forEach( GAMERULE => {
			let response = this.#dimension.runCommand( "gamerule " + GAMERULE )
			
			let result = response.statusMessage
			
			let value = result.match( new RegExp(GAMERULE + "\\s+=\\s+(.*)") )[1]
			
			data[ GAMERULE ] = value
		})
		
		return data
		
	}
	
	static isGamerule (gamerule) {
		if (typeof gamerule !== "string" || gamerule in GAMERULES ) {
			throw new Error( "invalid " + gamerule )
		}
		
		return true
	}
	
	static get (gamerule) {
		this.isGamerule( gamerule )
		return this.#defaults[ gamerule ]
	}
	
	static set (gamerule, value) {
		this.isGamerule( gamerule )
		this.#defaults[ gamerule ] = String(value)
	}
	
	static reset (gamerule = null) {
		this.isGamerule( gamerule )
		
		for (let [ gamerule, value ] of this.#defaults) {
			this.set(gamerule, value)
		}
	}
}

export default GameruleManager

