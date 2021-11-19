import {
	world
} from "mojang-minecraft";

const OVERWORLD = world.getDimension("overworld")

function displayChat(content) {
	OVERWORLD.runCommand(`say ${content}`)
}

const KEYWORDS = [ "hey", "hi", "hello" ]

world.events.chat.subscribe(eventData => {
	const { entity, message } = eventData
	
	if (KEYWORDS.includes(message)) {
		let randomIndex = Math.floor( Math.random() * KEYWORDS.length )
		let randomGreat = KEYWORDS[ randomIndex ]
		
		let entityName = entity.name ?? entity.nameTag ?? "what's up."
		
		displayChat(`${randomGreat}! ${entityName}`, OVERWORLD)
	}
})

const N_WORDS = [ "fuq", "fuck" ]

world.events.beforeChat.subscribe(eventData => {
	const { entity, message } = eventData
	
	let containsNWord = N_WORDS.some(word => message.includes(word))
	
	if (containsNWord) {
		let entityName = entity.name ?? entity.nameTag ?? "yoo"
		
		displayChat(`§e${entityName}! found a n-word mate, ima hide it.`, OVERWORLD)
		
		eventData.cancel = true
		
		let cleanedMessage
		
		N_WORDS.forEach(word => {
			cleanedMessage = message.replaceAll(word, "*beep*")
		})
		
		displayChat(`${entityName}! found n-word mate, ima hide it.`, OVERWORLD)
	}
})


