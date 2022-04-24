


class FormHelperField {
	
}


class FormHelper {
	constructor (form, title, parent) {
		this.form = form
		form.title(title)
		this.child = null
		this.parent = parent
		parent.child = this
		
		this.player = null
	}
	
	addField (name) {
		
		return this
	}
	
	show (player) {
		this.player = player
		
		this.form
				.show(  player  )
				.then(  response => this.#onResponse( response )  )
	}
	
	#onResponse (response) {
		
	}
	
	onStart
	onError
	onCancel
	onFinish
	onResponse
}


