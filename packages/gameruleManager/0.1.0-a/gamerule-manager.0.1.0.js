
import { world as World } from "mojang-minecraft"

const DIMENSION = World.getDimension( "overworld" )


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
	static VERSION = "0.1.0-a"
	
	static #defaults = this.#getDefaults()
	
	static #getDefaults() {
		let data = {}
		
		GAMERULES.forEach( GAMERULE => {
			let response = DIMENSION.runCommand( `gamerule ${ GAMERULE }` )
			let result = response.statusMessage
			let value = result.match(/=\s+(.*)/)[1]
			data[ GAMERULE ] = value 
		} ) 
		
		return data
	}
	
	static get (name) {
		return name 
			? this.#defaults[ name ] 
			: Object.freeze( this.#defaults )
	}
	
	static set (name, value) {
		let defaultValue = this.#defaults[name]
		
		if (value == defaultValue) return true;
		
		if (value == null) {
			value = defaultValue
		}
		
		try { 
			DIMENSION.runCommand( `gamerule ${ name } ${ value }` )
			this.#defaults[name] = value
			return true
		} catch (error) {
			throw new Error( `Failed to set ${name} to ${value}\n - ${error}\n - ${error.stack}` )
		}
	}
	
	static reset () {
		for (let name in this.#defaults) {
			this.set(name)
		}
	}
	
}

export default GameruleManager

