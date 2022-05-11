
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
	
	throw new Error(`invalid-type at ${value}, required ${ typeString ?? type.name }`)
}


class FormBuilderField {
	constructor (formBuilder) {
		this.formBuilder = formBuilder
	}
	
	onFieldInput (callback) {
		validateType(callback, Function)
		
		callback( inputHandler )
		
		return formBuilder
	}
}

class FormBuilder {
	static get VERSION() { return VERSION }
	
	static VALID_ACTION_FIELDS = [ "button" ]
	static VALID_MESSAGE_FIELDS = [ "button1", "button2" ]
	static VALID_MODAL_FIELDS = [ "dropdown", "icon", "slider", "textField" "toggle" ]
	
	static VALID_FIELDS = [ this.VALID_ACTION_FIELDS, this.VALID_MESSAGE_FIELDS, this.VALID_MODAL_FIELDS ]
	
	static getFormFromFieldName (name) {
		if ( VALID_ACTION_FIELDS.includes( name ) ) {
			return ActionFormData
		}
	}
	
	constructor (title) {
		this.form = null
		this.player = null
		this.fields = new Map()
	}
	
	#validateField (name) {
		let includes = this.constructor
			.VALID_FIELDS
			.includes( name )
			
		if (includes) return true;
		
		throw new Error( `invalid-field at ${name}` )
			
	}
	
	#setField (name, ...args) {
		this.#validateField( name )
		
		if (this.form == null) {
			this.form = this.constructor
				.getFormFromFieldName(name)
		}
		
		this.form[ name ](...args)
	}
	
	add () {
		const formBuilder = this
		
		return new FormBuilderField(this, inputHandler => {
			formBuilder.#setField( ...arguments )
		})
	}
	
	
	show (toPlayer) {
		const player = toPlayer ?? this.player
		
		validateType(player, Player, "mojang-minecraft.Player")
		
		this.form.show( player )
			.then( (...args) => this.#onResponse(...args) )
	}
	
	#onResponse (response) {
		const { isCanceled } = response;
		
		if ( isCanceled ) {
			this.#onCancel( response )
		}
		
		
	}
}



new FormBuilder("hello world")
	.add("slider", 0 )
	.onFieldInput( => {

	})
	
	.add('button', "")
	.onInput()
	
	.on("error", )
	.on("can)
	.show(player)

