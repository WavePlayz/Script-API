import { 
	world, 
	MinecraftEntityTypes,
	DynamicPropertiesDefinition, 
} from "mojang-minecraft"



const properties = new DynamicPropertiesDefinition()

//  Defines a boolean
properties .defineBoolean(  "myBoolean"  )

// Defines a number
properties .defineNumber(  "myNumber"  )

//  Defines a string and length
properties .defineString(  "myString", 1000  )

	

const Events = world.events

Events. worldInitialize .subscribe(  worldInitializeEventData => {
	const { propertyRegistry } = worldInitializeEventData
	
	// world dynamic properties
	propertyRegistry
		.registerWorldDynamicProperties( 
			dynamicPropertiesDefinition 
		)
	
	// entities dynamic properties
	propertyRegistry
		.registerEntityTypeDynamicProperties( 
			dynamicPropertiesDefinition, MinecraftEntityTypes.player
		)
	
}  )


function setProperty (key, value, source) {
	(source ?? world) .setDynamicProperty( key, value  )
}

function getProperty (key, source) {
	(source ?? world) .getDynamicProperty( key  )
}

function removeProperty (key, source) {
	(source ?? world) .setDynamicProperty( key  )
}

Events. chat .subscribe(  eventData => {
	const { message, sender } = eventData
	
	let string, boolean, number;
	
	try { 
	
	
	
	if (message == "set") {
		setProperty( "myBoolean", true  )
		setProperty( "myString", "awesome" )
		setProperty( "myNumber", 108 )
	}
	
	else if (message == "remove") {
		removeProperty( "myBoolean" )
		removeProperty( "myString" )
		removeProperty( "myNumber" )
	}
	
	else if (message == "get") {
		let myBoolean = getProperty( "myBoolean" )
		let myString = getProperty( "myString" )
		let myNumber = getProperty( "myNumber" )
		
		let values = [
			"myBoolean", myBoolean,
			"myString", myString,
			"myNumber", myNumber
		].join("\n")
		
		sender.runCommand( "msg world properties:- " + values )
	}
	
}  )
