import {
	World,
	Commamds
} from "mojang-minecraft";

const OVERWORLD = World.getDimension("overworld")

function displayChat(content, dimension) {
	Commands.run(`say ${content}`, dimension)
}

const KEYWORDS = [ "hey", "hi", "hello" ]

World.events.chat.subscribe(eventData => {
	const { entity, message } = eventData
	
	if (KEYWORDS.includes(message)) {
		let randomIndex = Math.floor( Math.random() * KEYWORDS.length )
		let randomGreat = KEYWORDS[ randomIndex ]
		
		let entityName = entity.name ?? entity.nameTag ?? "what's up."
		
		displayChat(`${randomGreat}! ${entityName}`, OVERWORLD)
	}
})


