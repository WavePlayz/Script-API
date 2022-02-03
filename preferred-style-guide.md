# Wave's Preferred Style Guide

### STRUCTURE
`root/libraries/` for general utilities  
`root/packages/` for gametest utilities  
`root/modules/` for project utilities  

### NAMING
`snake_case` or `camaleCase` for folders  
`spinal-case` / `kebab-case` for files  
`PascalCase` for main file  

### Imports
for less imports
```js
import { one, two } from <file>
```  
for large imports
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



