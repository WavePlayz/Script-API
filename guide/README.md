# Preferred Style Guide `4.0.0`

## Pack structure  
```py
+ <addonName>
  + libraries/
  + packages/
  + globals/
  + source/
    + <MAJOR.MINOR.PATCH.BETA>/ru
      + <MAJOR.MINOR.PATCH>
        + locals/*
        - script.js
  - vinyaas.js
  - initialize.js
- manifest.json
```
`libraries` for general utilities, eg. math.js
`packages` for gametest utilities, eg. custom-command.js 
`MA.MI.PA.B?` beta / stable minecraft version, eg. 1.18.30
`X.X.X` file/folder version eg. 1.3.0
`M.M.M-X.X.X` addon version eg. 1.80.30-1.3.0
`modules/` for project utilities 

### Naming
Folders
1. `camaleCase`
2. `snake_case`

Files
1. `spinal-case`

Main / entry file
1. `spinal-case`

### Exports
everything as default / in singal object
```js
export default class {
	static variable = ""
	static function() {}
}
```
or
```js
class Acon {}

Acon.kdk = skd

export Acon

```



