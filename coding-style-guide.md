## STRUCTURE
`root/libraries/` for general utilities  
`root/packages/` for gametest utilities  
`root/modules/` for project utilities  

## NAMING
#### Folders
`camaleCase`
  
#### Files
`spinal-case` / `kebab-case`

#### Main file
`PascalCase`

## Imports
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

## Exports
everything as class
```js
export default class {
	static variable = ""
	static function() {}
}
```



