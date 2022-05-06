
- [ ] 1.17.x.x/x
- [ ] 1.18.x.x/x

`1.18.10.x`
- [ ] 1.18.10.20
- [ ] 1.18.10.21
- [ ] 1.18.10.22
- [ ] 1.18.10.24
- [ ] 1.18.10.26
- [ ] 1.18.10.27
- [ ] 1.18.10.28

`1.18.20.x`
- [ ] 1.18.20.21
- [ ] 1.18.20.23
- [ ] 1.18.20.25
- [x] 1.18.20.27

`1.18.30.x/x`
- [x] 1.18.30.20/21
- [x] 1.18.30.22/23
- [x] 1.18.30.26/27

`1.19.0.x/x`
- [x] 1.19.0.20/21
- [x] 1.19.0.26/27
- [x] 1.19.0.28/29

---

### BlockExplodeEvent
###### 1.18.30.20/21-BlockExplodeEvent
|::|`1.18.30.20/21` |
|:-:|:-|
|-r| destroyedBlockPermutation |


---

### BlockInventoryComponent

---

### DynamicPropertiesDefinition `+1.19.0.20/21`
|::|`1.19.0.20/21` |
|:-:|:-|
|+| **defineNumber** ( identifier: `string`) |
|+| **defineString** ( identifier: `string`, maxLength: `number`) |
|+| **defineBoolean** ( identifier: `string`) |

---

# Entity Components 
### EntityFrictionModifierComponent `+1.18.20.27`
|::|`1.18.20.27` |
|:-:|:-|
|+r|**id**: `string`|
|+r|**value**: `number`|


### EntityGroundOffsetComponent `+1.18.20.27`
|::|`1.18.20.27` |
|:-:|:-|
|+r|**id**: `string`|
|+r|**value**: `number`|


### EntityMarkVariantComponent `+1.18.20.27`
|::|`1.18.20.27` |
|:-:|:-|
|+r|**id**: `string`|
|+r|**value**: `number`|


### EntityPushThroughComponent `+1.18.20.27`
|::|`1.18.20.27` |
|:-:|:-|
|+r|**id**: `string`|
|+r|**value**: `number`|


### EntityScaleComponent `+1.18.20.27`
|::|`1.18.20.27` |
|:-:|:-|
|+r|**id**: `string`|
|+r|**value**: `number`|


### EntitySkinIdComponent `+1.18.20.27`
|::|`1.18.20.27` |
|:-:|:-|
|+r|**id**: `string`|
|+r|**value**: `number`|


### EntityVariantComponent `+1.18.20.27`
|::|`1.18.20.27` |
|:-:|:-|
|+r|**id**: `string`|
|+r|**value**: `number`|

---

### EntityType
###### 1.18.30.22/23-EntityType
- \+ *r* **id** : `string`

### EntityTypes
###### 1.18.30.22/23-EntityTypes
- \+ **get** (identifier: `string`): `EntityType`

- \+ **getAll()** : `EntityTypeIterator`


---

### Events
###### 1.18.20.27-Events
- \+ *r* **entityHit** : `EntityHitEvent`

###### 1.18.30.20/21-Events
- \+ *r* **entityHurt** : `EntityHurtEvent` 

###### 1.18.30.26/27-Events
- \+ *r* **leverActivate** : 

###### 1.19.0.20/21-Events
- \+ *r* **projectileHit**

- \+ *r* **itemStartUseOn**

- \+ *r* **itemStopUseOn**

- \+ *r* **itemStartCharge**

- \+ *r* **itemCompleteCharge**

- \+ *r* **itemReleaseCharge**

- \+ *r* **itemStopCharge**

- \+ *r* **worldInitialize** : `WorldInitializeEvent`

###### 1.19.0.28/29-Events
- \+ *r* **buttonPush** : `ButtonPushEvent`

---

### Entity
###### 1.18.30.26/27-Entity
- \+ **addEffect** (effectType: `EffectType`, duration: `number`, amplifier?: `number`, showParticles?: `boolean`)

###### 1.19.0.20/21-Entity
- \+ **setDynamicProperty** (identifier: `string`, value: `boolean | string | number`)

- \+ **getDynamicProperty** (identifier: string): `boolean | string | number`

- \+ **removeDynamicProperty** (identifier: `string`): `boolean`

###### 1.19.0.26/27-Entity
- \+ *r* **scoreboard** : `ScoreboardIdentity`

###### 1.19.0.28/29-Entity
- \+ **setRotation** (degreesX: `number`, degreesY: `number`)

- \+ *r* **rotation**: `XYRotation`

- \- *r* bodyRotation

---

### ItemStartUseOnEvent 
###### 1.19.0.20/21-ItemStartUseOnEvent
- \+ *r* **buildBlockLocation** : `BlockLocation`

---

### LeverActivateEvent 
###### 1.19.0.20/21-LeverActivateEvent
- \+ *r* **player**: `Player`

---

### MinecraftDimensionTypes 1.18.20.25
- \+ static *r* **nether** = `"minecraft:nether"`
- \+ static *r* **overworld** = `"minecraft:overworld"`
\ \+ static *r* **theEnd*8 = `"minecraft:the_end"`

---

### MinecraftEntityTypes 1.18.30.22/23
> Provides EntityType constants for each standard Minecraft entity type

---

### MusicOptions 1.18.30.20/21
- \+ **new MusicOptions()**

- \+ *rw* **volume** : `Int`

- \+ *rw* **fadeSeconds** : `Int`

- \+ *rw* **loop** : `boolean`

---

### Player : `Entity`
###### 1.18.20.37-Player
- \+ **playSound** (soundID : `String`, soundOptions : `SoundOptions`) 

###### 1.19.0.20/21-Player
- \+ *r* **onScreenDisplay** : `ScreenDisplay`

---

### PropertyRegistry 1.19.0.20/21
- \+ **registerEntityTypeDynamicProperties** (propertiesDefinition: `DynamicPropertiesDefinition`, entityType: `EntityType`)

- \+ **registerWorldDynamicProperties** (propertiesDefinition: `DynamicPropertiesDefinition`)

---

### Scoreboard 1.19.0.26/27
- \+ **getObjective** (objectiveId : `String`) : `ScoreboardObjective`

- \+ **getObjectives()** : `ScoreboardObjective[]`

- \+ **getParticipants()** : `ScoreboardIdentity[]`


### ScoreboardObjective 1.19.0.26/27
- \+ *r* **id** : `String` 

- \+ *r* **displayName** : `String`

- \+ **getParticipants()** : `ScoreboardIdentity[]`

- \+ **getScores()** : `ScoreboardScoreInfo[]`

- \+ **getScore()** (participant : `ScoreboardIdentity`) : `Int`


### ScoreboardIdentity 1.19.0.26/27
- \+ *r* **type** : `ScoreboardIdentityType`

- \+ *r* **id** : `Int` 

- \+ *r* **displayName** : `String`

- \+ **getEntity()** : `ScriptActor` 


### ScoreboardIdentityType 1.19.0.26/27
- \+ *r* **Entity**
- \+ *r* **FakePlayer** 
- \+ *r* **Player** 

### ScoreboardScoreInfo 1.19.0.26/27
- \+ *r* **participant** : `ScoreboardIdentity`

- \+ *r* **score** : `Int`

---

### ScreenDisplay 1.19.0.20/21
- \+ **setTitle** (title : `String`, options? : `TitleDisplayOptions`) 

- \+ **clearTitle()**

- \+ **updateSubtitle** (subtitle : `String`) 

- \+ **setActionBar** (text : `String`) 

---

### TitleDisplayOptions 1.19.0.20/21
- \+ **subtitle?** : `String`

- \+ **fadeInSeconds** : `Int` 

- \+ **staySeconds** : `Int` 

- \+ **fadeOutSeconds** : `Int` 


---

### XYRotation/ 1.19.0.28/29
###### 1.19.0.28/29-XYRotation
`PitchYawRotation` to `XYRotation`

- +- *r* **pitch** to **x**

- +- *r* **yaw** to **y**

---

### World
###### 1.18.30.20/21-World
- \+ **queueMusic** (trackName : `string`, musicOptions : `MusicOptions`)

- \+ **playMusic** (trackName : `string`, musicOptions : `MusicOptions`)

- \+ **stopMusic()**


###### 1.19.0.20/21-World
- \+ **setDynamicProperty** (identifier: `string`, value: `boolean | string | number`)

- \+ **getDynamicProperty** (identifier: string): `boolean | string | number`

- \+ **removeDynamicProperty** (identifier: `string`): `boolean`

###### 1.19.0.26/27-World
- \+ *r* **scoreboard** : `Scoreboard`


