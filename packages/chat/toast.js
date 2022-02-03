// v1.0

import {
	Player
} from "mojang-minecraft"

export default class {
	static display (content, target) {
		if (! target instanceof Player) return;
		
		return target.runCommand(`titleraw @s actionbar { "rawtext": [{ "text": "${content}" }] }`)
	}
}