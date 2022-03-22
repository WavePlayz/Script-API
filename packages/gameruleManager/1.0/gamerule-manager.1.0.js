
import { Dimension } from "mojang-minecraft"

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
	 
	static initialize (dimention) {
		if (! dimention instanceof Dimension ) {
			throw new Error("Invalid argument")
		}
		
		this.#dimension = dimention
		this.#defaults = this.getDefaults()
	}
	
	static getDefaults () {
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
	
	static get (gamerule) {
		return this.#defaults[ gamerule ]
	}
	
	static set (gamerule, value) {
		this.#defaults[ gamerule ] = String(value)
	}
	
	static reset (gamerule = null) {
		if (typeof gamerule !== "string" || gamerule in defaults ) {
			throw new Error( "Reset failed for " + gamerule )
		}
		
		for (let [ gamerule, value ] of this.#defaults) {
			this.set(gamerule, value)
		}
	}
}


