// v1.18.20

import {
	world
} from "mojang-minecraft";



const GREETS = [ "hey", "hi", "hello" ]

function getRandomGreet () {
	const index = Math.floor( Math.random() * GREETS.length )
	return GREETS[ index ]
}

world.events.chat.subscribe( eventData => {
	const { entity, message } = eventData
	
	if (  GREETS.includes( message )  ) {
		let entityName = entity.nameTag ?? "what's up."
		
		entity.runCommand(`say ${ getRandomGreet() }! ${entityName}`)
	}
})



const BANNED_WORDS = [ "fuq", "fuck" ]

String.prototype.hasBannedWords = function() {
	return BANNED_WORDS.some(  word => this.toString().includes( word )  )
}

world.events.beforeChat.subscribe(eventData => {
	const { entity, message } = eventData
	
	if ( message.hasBannedWords() ) {
		let entityName = entity.nameTag ?? "Oops"
		
		entity.runCommand(`§e${entityName}! found n-word, gonna clean it`)
		
		eventData.cancel = true
		
		let regex = new RegExp( BANNED_WORDS.join("|"), "gm" )
		
		let cleanedMessage = message.replace( regex, "**" )
		
		entity.runCommand( `[Cleaned] ${cleanedMessage}` )
	}
})


