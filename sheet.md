
### DynamicPropertiesDefinition 1.19.0.20/21
- \+ **defineNumber** (identifier: `string`)

- \+ **defineString** (identifier: `string`, maxLength: `number`)

- \+ **defineBoolean** (identifier: `string`)

---

### Events
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
###### 1.19.0.20/21-Entity
- \+ **setDynamicProperty** (identifier: `string`, value: `boolean | string | number`)

- \+ **getDynamicProperty** (identifier: string): `boolean | string | number`

- \+ **removeDynamicProperty** (identifier: `string`): `boolean`

###### 1.19.0.26/27-Entity
- \+ **scoreboard** : `ScoreboardIdentity`

###### 1.19.0.28/29-Entity
- \+ **setRotation** (degreesX: `number`, degreesY: `number`)

- \+ *readonly* **rotation**: `XYRotation`

- \- **bodyRotation**

---

### ItemStartUseOnEvent 
###### 1.19.0.20/21-ItemStartUseOnEvent
- \+ *readonly* **buildBlockLocation** : `BlockLocation`

---

### LeverActivateEvent 
###### 1.19.0.20/21-LeverActivateEvent
- \+ **player**: `Player`

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
###### 1.19.0.20/21-World
- \+ **setDynamicProperty** (identifier: `string`, value: `boolean | string | number`)

- \+ **getDynamicProperty** (identifier: string): `boolean | string | number`

- \+ **removeDynamicProperty** (identifier: `string`): `boolean`

###### 1.19.0.26/27-World
- \+ **scoreboard** : `Scoreboard`


