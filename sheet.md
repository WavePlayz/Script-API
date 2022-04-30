### Events
###### 1.19.0.28/29-Events
- \+ **buttonPushEvent**

---

### Entity
###### 1.19.0.26/27-Entity
- \+ **scoreboard** : `ScoreboardIdentity`

###### 1.19.0.28/29-Entity
- \+ **setRotation** (degreesX: `number`, degreesY: `number`)

- \+ *readonly* **rotation**: `XYRotation`

- \- **bodyRotation**

---

### Scoreboard 1.19.0.26/27
- \+ **getObjective** (objectiveId : `String`) : `ScoreboardObjective`

- \+ **getObjectives** : `ScoreboardObjective[]`

- \+ **getParticipants** : `ScoreboardIdentity[]`


### ScoreboardObjective 1.19.0.26/27
- \+ *readonly* **id** : `String` 

- \+ *readonly* **displayName** : `String`

- \+ **getParticipants** : `ScoreboardIdentity[]`

- \+ **getScores** : `ScoreboardScoreInfo[]`

- \+ **getScore** (participant : `ScoreboardIdentity`) : `Int`


### ScoreboardIdentity 1.19.0.26/27
- \+ *readonly* **type** : `ScoreboardIdentityType`

- \+ *readonly* **id** : `Int` 

- \+ *readonly* **displayName** : `String`

- \+ **getEntity** : `ScriptActor` 


### ScoreboardIdentityType 1.19.0.26/27
- .Entity 
- .FakePlayer 
- .Player 

### ScoreboardScoreInfo 1.19.0.26/27
- \+ *readonly* **participant** : `ScoreboardIdentity`

- \+ *readonly* **score** : `Int`

---

### XYRotation 1.19.0.28/29
###### 1.19.0.28/29-XYRotation
- +- `PitchYawRotation` to `XYRotation`

- +- **pitch** to **x**

- +- **yaw** to **y**

---

### World
###### 1.19.0.26/27-Events
- \+ **scoreboard** : `Scoreboard`


