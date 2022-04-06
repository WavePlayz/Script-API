# Preferred Style Guide `2.0`


### STRUCTURE
```markdown
+  AddonName/
   +  libraries/ 
      -  math-utils.X.X.X.js
   +  packages/
      -  commands.X.X.X.js
   +  X.X.X/
      +  modules/
         -  chat.js
      -  AddonName.js
      -  .config.js

-  manifest.json
-  pack_icon.png
```

`libraries/` for general utils  
`packages/` for gametest utils  
`X.X.X` version of file/folder/addon eg. 1.3.0  
`modules/` for project utils  

### NAMING
Folders
- `snake_case`
- `camaleCase`

Files
- `spinal-case`
- `kebab-case`

Main / entry file
- `PascalCase`


### Exports
as defualt in class
```js
export default class {
	static variable = ""
	static function() {}
}
```



