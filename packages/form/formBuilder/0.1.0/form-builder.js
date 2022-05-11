
import { Player } from "mojang-minecraft"

import {
	ActionFormData,
	MessageFormData,
	ModalFormData
}

const VERSION = "0.1.0"


function validateType (value, type, typeString) {
	let isValid = typeof type == "object"
		? value instanceof type
		: typeof value == type
		
	if (isValid) return true;
	
	throw new Error(`invalid-type at ${value}, required ${typeString ?? type}`)
}


class FormBuilder {
	static get VERSION() { return VERSION }
	
	static #getFormType (form) {
		if ( form instanceof ActionFormData )
			return ActionFormData;
		
		if ( form instanceof MessageFormData )
			return MessageFormData;

		if ( form instanceof ModalFormData )
			return ModalFormData;
	}
	
	
	constructor () {
		this.form = form
		this.formType = this.constructor .#getFormType( form )
		this.player = null
	}
	
	setPlayer (player) {
		this.player = player
	}
	
	
	show (toPlayer) {
		const player = toPlayer ?? this.player
		
		validateType(player, Player, "mojang-minecraft.Player")
		
		this.form.show( player )
			.then( (...args) => this.#onResponse(...args) )
	}
	
	#onResponse (response) {
		
	}
}






