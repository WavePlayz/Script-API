# Preferred Style Guide `4.0.0`

## Pack structure  
```py
+ <addonName>
  + libraries/
  + packages/
  + globals/
  + source/
    + <M.M.M.M?>/
      + <MAJOR.MINOR.PATCH>
        + locals/*
        - script.js
  - vinyaas.js
  - initialize.js
- manifest.json
```

### STRUCTURE
 
`libraries/` for general utils  
`packages/` for gametest utils  
`M.M.M` game version eg. 1.18.30
`X.X.X` file/folder version eg. 1.3.0
`M.M.M-X.X.X` addon version eg. 1.80.30-1.3.0
`utilities/` for project utils  
`modules/` for code utils 

<img align="center" src="/guide/Screenshot_2022-04-21-08-18-07-30_f9ee0578fe1cc94de7482bd41accb329.jpg"></img>

### NAMING
Folders
- `snake_case`
- `camaleCase`

Files
- `spinal-case`
- `kebab-case`

Main / entry file
- `snake_case`
- `spinal-case`


### Exports
as defualt in class
```js
export default class {
	static variable = ""
	static function() {}
}
```



