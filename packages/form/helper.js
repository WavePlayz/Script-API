export default class FormHelper {
	constructor(form) {
		this.form = form
		this.callbacks = []
	}
	
	add(field, ...args) {
		const context = this
		
		return {
			on(callback) {
				context.form[field]?.(...args)
				context.callbacks.push(callback)
				return context
			}
		}
	}
	
	show(player, onCancel) {
		this.form
				.show(player)
				.then( formResponse => {
					if (formResponse.isCanceled) {
						typeof onCancel == "function" && onCancel(formResponse)
					}
					
					else if (formResponse.selection !== null) {
						this.callbacks[ formResponse.selection ]?.(formResponse)
					}
					
					else if (formResponse.formValues !== null) {
						formResponse
								.formValues
								.forEach( (value, index) => {
									this.callbacks[ index ]?.(value)
								} )
					}
				})
	}
	
}