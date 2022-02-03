# Prefered Style Guide

### STRUCTURE
`root/libraries/` for general utilities  
`root/packages/` for gametest utilities  
`root/modules/` for project utilities  

### NAMING
`camaleCase` for folders  
`spinal-case` / `kebab-case` for files  
`PascalCase` for main file  

### Imports
less than 2
```js
import { one, two } from <file>
```  
greater than 2
```js
import {
	one,
	two,
	three
} from <file>
```

### Exports
everything as class
```js
export default class {
	static variable = ""
	static function() {}
}
```



