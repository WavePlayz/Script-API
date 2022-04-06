import { 
	world, 
	DynamicPropertiesDefinition, 
} from "mojang-minecraft"


const events = world.events

const variables = {
	string: "myString",
	boolean: "myBoolean",
	number: "myNumber"
}

const dynamicPropertiesDefinition = new DynamicPropertiesDefinition()

//  Defines a string and length
dynamicPropertiesDefinition
	.defineString(  variables.string, 1000  )

//  Defines a boolean
dynamicPropertiesDefinition
	.defineBoolean(  variables.boolean  )

// Defines a number
dynamicPropertiesDefinition
	.defineNumber(  variables.number  )
	
	


events. worldInitialize .subscribe(  worldInitializeEventData => {
	const { propertyRegistry } = worldInitializeEventData
	
	// world dynamic properties
	propertyRegistry
		.registerWorldDynamicProperties( 
			dynamicPropertiesDefinition 
		)
	
}  )


events. chat .subscribe(  eventData => {
	const { message, sender } = eventData
	
	try { 
	
	let string, boolean, number;
	
	if (message == "set") {
		world.setDynamicProperty( variables.string, "awesome" )
		world.setDynamicProperty( variables.boolean, true  )
		world.setDynamicProperty( variables.number, 108 )
	}
	
	if (message == "remove") {
		world.removeDynamicProperty( variables.string )
		world.removeDynamicProperty( variables.boolean  )
		world.removeDynamicProperty( variables.number )
	}
	
	// get variables
	string = world.getDynamicProperty( variables.string )
	boolean = world.getDynamicProperty( variables.boolean )
	number = world.getDynamicProperty( variables.number )
	
	let values = `${variables.string} = ${string} \n${variables.boolean} = ${boolean} \n${variables.number} = ${number}`
	
	sender.runCommand( "msg " + values )
	
	} catch (error) {
		console.warn(error)
	}
	
}  )
