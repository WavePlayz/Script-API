
// #1 step
import * as server from "@minecraft/server"


// #2 step
const system = server.system

function tickEvent (eventData) {
    const { currentTick } = eventData
    
    
    // #3 step
    server.world.say( "hello world" )
}

system.run( function run (eventData) {
    try {
        tickEvent( eventData )
    } catch {}
    
    system.run(run)
} )
