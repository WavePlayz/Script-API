# Gametest-API `BETA 1.18.10.24`
guide to get you started with the new scripting api, **The GameTest Framework** \!

### Prerequisites
- Basic understanding of **Javascript**,  
Some resources below to get started.
  - Crash Course by Amazing instructor [**Mosh Hamedani**](https://codewithmosh.com/) (Highly Recommended)  
१ [Javascript in 1 hour](https://youtu.be/W6NZfCO5SIk)  
२ [ES6 / Modern Javascript in 1 Hour](https://youtu.be/NCwa_xi0Uuc)  
  - [W3schools](https://www.w3schools.com/js/js_statements.asp) (Recommended)
  - [Javascript info](https://javascript.info/)

-  **Android**, **IOS** or **Win10** device with Minecraft Bedrock Edition installed.
- Code editor
  - Desktop  
१ [Visual Studio Code (Recommended)](https://code.visualstudio.com/)  
२ [Sublime Text](https://www.sublimetext.com/)  
  - Android  
१ [QuickEdit (Recommended)](https://play.google.com/store/apps/details?id=com.rhmsoft.edit)  
२ [Squircle - Code Editor](https://play.google.com/store/apps/details?id=com.blacksquircle.ui)  
- A Javascript runner for mobile users - *optional but useful*
  - Android  
१ [JS Run (Preferred)](https://play.google.com/store/apps/details?id=com.mia.jsrun)  
२ [JavaScript Editor](https://play.google.com/store/apps/details?id=com.sorincovor.javascript_editor)  
३ [Termux with quickjs]()

### Setup
##### Accessing Minecraft directory
this is the place where we will spend most of our time and work.

**Win10** users can find this at the given path
`%localappdata%\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang`


**Android** users can find this by visiting the following path
`/Android/data/com.mojang.minecraftpe/files/games/com.mojang/`

but if you are a **Android 10+** user you won't be able to access the folder directly as per android restrictions, but dont worry we got a way! no its not root :P, all you need is an external **File Manager** app which will allow you to locate those internal folders, here are some apps that you can use
- ES File Explore (Recommended) **Google it**
- [Solid Explorer](https://play.google.com/store/apps/details?id=pl.solidexplorer2)
- [Explorer](https://play.google.com/store/apps/details?id=com.speedsoftware.explorer)
- [X-plore](https://play.google.com/store/apps/details?id=com.lonelycatgames.Xplore)

> Tip: Create shortcuts to those directories for quicker access.

once done, you will see bunch of folder in the directory, mainly we are only intrested in two of them during the development process
 - `development_behavior_packs`
 - `development_resource_packs`

### Getting Started
##### Creating folder 
to start with we will first need to create the folder in the `development_behavior_packs` directory, the folder structure looks like this

```
development_behavior_packs/
┗━• sample_pack/
    ┣━• scripts/
    ┇    ┗━• script.js
    ┣━• manifest.json
    ┗━• pack_icon.png
```
[**•** Download sample pack](/sample-pack)

thats not it, the pack is not a gametest pack until we do the following changes in the `manifest.json`
1. format version needs to be 2
```json
"format_version": 2,
```
2. min version needs to be 1.17.30 or above
```json
"min_engine_version": [ 1, 17, 30 ]
```
3. modules section must contain one module object with the type javascript and an entry point to a javascript file, which will be the main file for our gametest
```json
{
	"description": "Example gametest behavior pack",
	"type": "javascript",
	"uuid": "9e896681-01d8-4a21-b1e2-e350e3c9c1ae",
	"version": [0, 0, 1],
	"entry": "scripts/script.js"
}
```
4. manifest must contain gametest dependencies to be able to import gametest modules within javascript files 
```json
"dependencies": [
	{
		// Minecraft native module - needed to use the "mojang-minecraft" module
		"uuid": "b26a4d4c-afdf-4690-88f8-931846312678",
		"version": [0, 1, 0]
	},
	{
		// GameTest native module - needed to use the "mojang-gametest" module
		"uuid": "6f4b6893-1bb6-42fd-b458-7fa3d0c89616",
		"version": [0, 1, 0]
	}
]
```

##### manifest.json
the complete `manifest.json` will look something like this
```json
{
	"format_version": 2,
	
	"header": {
		"name": "Example gametest behavior pack",
		"description": "Example gametest behavior pack",
		"uuid": "b3bc569d-3144-4473-82ae-c5704a6064e3",
		"version": [0, 0, 1],
		"min_engine_version": [1, 17, 30]
	},
	
	"modules": [
		{
			"description": "Example gametest behavior pack",
			"type": "javascript",
			"uuid": "9e896681-01d8-4a21-b1e2-e350e3c9c1ae",
			"version": [0, 0, 1],
			"entry": "scripts/script.js"
		}
	],
	
	"dependencies": [
		{
			// Minecraft native module - needed to use the "mojang-minecraft" module
			"uuid": "b26a4d4c-afdf-4690-88f8-931846312678",
			"version": [0, 1, 0]
		},
		{
			// GameTest native module - needed to use the "mojang-gametest" module
			"uuid": "6f4b6893-1bb6-42fd-b458-7fa3d0c89616",
			"version": [0, 1, 0]
		}
	]
}
```
> you can add additional properties such as metadata for additional info
> ```json
> "metadata": {
> 	"authors": ["<your-name>"],
> 	"url": "<your-github-repo-url>",
> 	"license": "TBD"
> },


##### Native modules
As of 1.18.10.20 we have two native modules to work with
- `mojang-gametest`
- `mojang-minecraft`  

the `mojang-gametest` module is not something to very excite about as its intended for game devlopers and is not very useful for us the creators plus it only works within the range of stucture blocks  
on the other side `mojang-minecraft` module is what we can consider as the "new scripting api" that the creators can utilze to create stuff and where all the intresting things exists 

##### Importing pack
once your done with the above steps, you can now load the pack into the world, lets create a new one, in the game option scroll down till you see an option with title **Enable Gametest Framework** enable it, 

![gametest-option](images/gametest-option.jpg)

then head over **Behavior Packs** button in the lower-left corner of the "Add-Ons" sub-menu. 

![addon-button](images/addon-button.jpg "Addon")

Click `Behavior Packs > My Packs`
your add-on now should show up in the list of behavior packs!

Clicking on your add-on should bring up a button titled "Activate". Click it.

![pack-section](images/pack-section.jpg "Pack")

your behavior pack now should have been moved to the "Active" section! 

now you can join the world to see everything works, but wait if you join you wont see anything diffrent its obvious since we have nothing added in the script file yet

##### `script.js`
##### creating our first script
the very first thing we need to do in the script is to import the native minecraft modules like that
```js
// importing native minecraft module
import * as Minecraft from "mojang-minecraft"
```
next we need to listen for some event, in this tutorial we will use the tick event which runs every tick, here is how you do it
```js
Minecraft.world.events.tick.subscribe(eventData => {
	const { currentTick } = eventData
	
	// your code here

})
```
##### chat spam, our first script
lets create chat spam as our first script to see if everything is all right
```js

// importing native minecraft module
import * as Minecraft from "mojang-minecraft";

// variable to track world is empty or filled
let worldHasPlayer = false 

// player join event triggered when a player joins
Minecraft.world.events.playerJoin.subscribe(player => {
	
	// as player has joined set worldHasPlayer to yes
	worldHasPlayer = true
})

const TICKS_IN_FIVE_SECONDS = 20 * 5

// world tick event that fires our function every tick - 20 time in a sec
Minecraft.world.events.tick.subscribe(eventData => {

	// current world tick count value returned by the event
	const { currentTick } = eventData
	
	// if world not has player or current tick is not divisable by TICKS_IN_FIVE_SECONDS the break the code
	if (!worldHasPlayer || currentTick % TICKS_IN_FIVE_SECONDS !== 0) return;
	
	// get all players 
	let players = Minecraft.world.getPlayers()
	
	// loop through players 
	for (let player of players) {
		// run command as player 
		player.runCommand("say Hello " + player.nameTag)
	}
})
```
save the code in your `script.js` / main file then open the world, you should now see a spam in the chat.. if not then something is wrong :( recheck what went wrong.
