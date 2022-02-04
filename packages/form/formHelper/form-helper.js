const NULLS = [ "", null, undefined ]

export default class FormHelper {
	constructor(form) {
		this.form = form
		this.callbacks = []
	}
	
	add(field, ...args) {
		const context = this
		
		return {
			onInteract(callback) {
				context.form[field]?.(...args)
				context.callbacks.push(callback)
				return context
			}
		}
	}
	
	show(player, onCancel) {
		const context = this
		this.form
				.show(player)
				.then( formResponse => {
					
					if (formResponse.isCanceled) {
						typeof onCancel == "function" && onCancel(formResponse)
					}
					
					else if (formResponse.selection != null) {
						context.callbacks[ formResponse.selection ]()
					}
					
					else if (formResponse.formValues != null) {
						formResponse
								.formValues
								.forEach( (value, index) => {
									if ( NULLS.includes(value) ) return;
									
									context.callbacks[ index ](value)
								} )
					}
					
				})
	}
	
}