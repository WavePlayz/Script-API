
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
- [ ] 1.18.20.27
- [ ] 1.18.20.21

`1.18.30.x/x`
- [x] 1.18.30.20/21
- [x] 1.18.30.22/23
- [x] 1.18.30.26/27

`1.19.0.x/x`
- [x] 1.19.0.20/21
- [x] 1.19.0.26/27
- [x] 1.19.0.28/29

---

### 1.18.30.20/21
- +- `"Minecraft"` to `"mojang-minecraft"`
- +- `"GameTest"` to `"mojang-gametest"`

---

### BlockExplodeEvent
###### 1.18.30.20/21-BlockExplodeEvent
- \- destroyedBlockPermutation

---

### DynamicPropertiesDefinition 1.19.0.20/21
- \+ **defineNumber** (identifier: `string`)

- \+ **defineString** (identifier: `string`, maxLength: `number`)

- \+ **defineBoolean** (identifier: `string`)

---

### EntityType
###### 1.18.30.22/23-EntityType
- \+ *readonly* **id** : `string`

### EntityTypes
###### 1.18.30.22/23-EntityTypes
- \+ **get** (identifier: `string`): `EntityType`
- \+ **getAll()** : `EntityTypeIterator`


---

### Events
###### 1.18.30.20/21-Events
- \+ **entityHurt** : `EntityHurtEvent` 

###### 1.18.30.26/27-Events
- \+ **leverActivate** : 

###### 1.19.0.20/21-Events
- \+ **projectileHit**

- \+ **itemStartUseOn**

- \+ **itemStopUseOn**

- \+ **itemStartCharge**

- \+ **itemCompleteCharge**

- \+ **itemReleaseCharge**

- \+ **itemStopCharge**

- \+ **worldInitialize** : `WorldInitializeEvent`

###### 1.19.0.28/29-Events
- \+ **buttonPush** : `ButtonPushEvent`

---

### Entity
###### 1.18.30.26/27-Entity
- \+ **addEffect** (effectType: `EffectType`, duration: `number`, amplifier?: `number`, showParticles?: `boolean`)

###### 1.19.0.20/21-Entity
- \+ **setDynamicProperty** (identifier: `string`, value: `boolean | string | number`)

- \+ **getDynamicProperty** (identifier: string): `boolean | string | number`

- \+ **removeDynamicProperty** (identifier: `string`): `boolean`

###### 1.19.0.26/27-Entity
- \+ **scoreboard** : `ScoreboardIdentity`

###### 1.19.0.28/29-Entity
- \+ **setRotation** (degreesX: `number`, degreesY: `number`)

- \+ *readonly* **rotation**: `XYRotation`

- \- bodyRotation

---

### ItemStartUseOnEvent 
###### 1.19.0.20/21-ItemStartUseOnEvent
- \+ *readonly* **buildBlockLocation** : `BlockLocation`

---

### LeverActivateEvent 
###### 1.19.0.20/21-LeverActivateEvent
- \+ **player**: `Player`

---

### MinecraftEntityTypes 1.18.30.22/23
> Provides EntityType constants for each standard Minecraft entity type

---

### MusicOptions 1.18.30.20/21
- \+ **volume** : `Int`
- \+ **fadeSeconds** : `Int`
- \+ **loop** : `boolean`

---

### Player : `Entity`
###### 1.19.0.20/21-Player
- \+ **onScreenDisplay** : `ScreenDisplay`

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
- \+ *readonly* **id** : `String` 

- \+ *readonly* **displayName** : `String`

- \+ **getParticipants()** : `ScoreboardIdentity[]`

- \+ **getScores()** : `ScoreboardScoreInfo[]`

- \+ **getScore()** (participant : `ScoreboardIdentity`) : `Int`


### ScoreboardIdentity 1.19.0.26/27
- \+ *readonly* **type** : `ScoreboardIdentityType`

- \+ *readonly* **id** : `Int` 

- \+ *readonly* **displayName** : `String`

- \+ **getEntity()** : `ScriptActor` 


### ScoreboardIdentityType 1.19.0.26/27
- \+ **Entity**
- \+ **FakePlayer** 
- \+ **Player** 

### ScoreboardScoreInfo 1.19.0.26/27
- \+ *readonly* **participant** : `ScoreboardIdentity`

- \+ *readonly* **score** : `Int`

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

### XYRotation 1.19.0.28/29
###### 1.19.0.28/29-XYRotation
- +- `PitchYawRotation` to `XYRotation`

- +- **pitch** to **x**

- +- **yaw** to **y**

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
- \+ **scoreboard** : `Scoreboard`


