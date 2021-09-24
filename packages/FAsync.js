// by WavePlayz
// v1

class Queray {
	#data = []
	#nulls = 0
	
	get length() {
		return this.#data.length
	}
	
	get(index) {
		return this.#data[index]
	}
	
	push(element) {
		this.#data.push(element)
	}
	
	remove(index = this.#data.length) {
		this.#data[index] = null
		
		if (++this.#nulls != this.#data.length) return;
		
		this.clear()
	}
	
	clear() {
		this.#data = []
	}
}

export default class FAsync {
	static #tasks = new Queray()
	
	static #appendTask(callback, tickDelay = 0, options = {}) {
		let id = this.#tasks.length
		
		this.#tasks.push({
			tickDelay,
			tickCount: 0, 
			func: callback,
			...options
		})
		
		return id
	}
	
	static #executeTask(task) {
		let context = task.context ?? task
		let statusCode = task.func.apply(context, task.arguments)
		return statusCode
	}
	
	static update() {
		const length = this.#tasks.length
	
		for (let i = 0; i < length; i++) {
			let currentTask = this.#tasks.get(i)
			
			if (!currentTask || ++currentTask.tickCount !== currentTask.tickDelay) {
				continue;
			}
			
			currentTask.tickCount = 0
			
			let statusCode = this.#executeTask(currentTask)
			
			if (statusCode == 0) this.#tasks.remove(i);
		}
	}
	
	static timeout(callback, ...args) {
		this.#appendTask(function() {
			callback.apply(this, arguments)
			return 0
		}, ...args)
	}
	
	static interval() {
		this.#appendTask(...arguments)
	}
	
	static forloop (initialization, condition, statement, body, tickDelay = 1) {
		function test() {
			if ( !condition(initialization) ) return 0;
			
			body?.(initialization)
			
			statement(initialization)
		}
		this.#appendTask(test, tickDelay)
	}
}