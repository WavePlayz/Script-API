const NULLS = [ "", null, undefined ]
const INVALID_FIELDS = [ "title", "body" ]
const PLAYERS_USING_DIALOG = []

function callIfFunction (variable, ...args) {
	return typeof variable == "function" && variable(...args)
}

class FormHelperField {
	#formHelper
	#callback
	
	constructor (formHelper, index, name, ...args) {
		if ( INVALID_FIELDS.includes( name ) ) throw new Error("invalid field");
		
		this.#formHelper = formHelper
		this.index = index
		this.name = name
		this.args = args
	}
	
	onInteract (callback) {
		this.#formHelper.form[ this.name ]?.( ...this.args )
		this.#formHelper.fields.push( this )
		
		this.#callback = callback
		
		return this.#formHelper
	}
	
	execute (value) {
		const { index, name, args } = this
		
		this.#callback( value, { index, name, args } )
	}
}

export default class FormHelper {
	constructor (form) {
		this.form = form
		this.isShowable = false
		this.fields = []
	}
	
	addField () {
		const index = this.fields.length
		
		this.isShowable = true
		
		return new FormHelperField(this, index, ...arguments)
	}
	
	onError() {}
	onCancel() {}
	onFinish() {}
	
	#onResponse (formResponse, player) {
		PLAYERS_USING_DIALOG.splice( player.namerTag, 1 )
		
		try {
			if ( formResponse.isCanceled ) {
				this.onCancel( formResponse )
				return
			}
			
			else if ("selection" in formResponse) {
				const index = formResponse.selection
				
				this.fields[ index ].execute(index)
			}
			
			else if ("formValues" in formResponse) {
				formResponse.formValues.forEach( (formValue, index) => {
					if ( NULLS.includes( formValue ) ) return;
					
					this.fields[ index ].execute( formValue )
				} )
			}
		} catch (error) {
			this.onError(error)
		}
		
		this.onFinish( formResponse )
	}
	
	show(player) {
		if ( ! this.isShowable || PLAYERS_USING_DIALOG.includes[ player.namerTag ] ) return;
		
		this.form
				.show( player )
				.then( formResponse => this.#onResponse(formResponse, player) )
		
		PLAYERS_USING_DIALOG.push( player.namerTag )
		
	}
}
