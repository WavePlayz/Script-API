
- [x] 1.19.10.20
- [x] 1.19.0.xx

### Enumerations
#### Direction
#### GameMode
#### ScoreboardIdentityType
\+ in 1.19.0.26/27
| ::| 1.19.0.26/27| | |
|:-:|:-:|:-:|:-:|
|+sr|Entity||||
|+sr|Player||||
|+sr|FakePlayer||||
---

### Classes
#### BeforeChatEvent
#### BeforeChatEventSignal
#### BeforeDataDrivenEntityTriggerEvent
#### BeforeDataDrivenEntityTriggerEventSignal
#### BeforeExplosionEvent
#### BeforeExplosionEventSignal
#### BeforeItemDefinitionEventSignal
#### BeforeItemDefinitionTriggeredEvent
#### BeforeItemUseEvent
#### BeforeItemUseEventSignal
#### BeforeItemUseOnEvent
#### BeforeItemUseOnEventSignal
#### BeforePistonActivateEvent
#### BeforePistonActivateEventSignal
#### Block
#### BlockAreaSize
#### BlockBreakEvent
#### BlockBreakEventSignal
#### BlockComponent
#### BlockEvent
#### BlockExplodeEvent

|::|1.18.30.20/21|||
|:-:|:-:|:-:|:-:|
|-r| destroyedBlockPermutation | | [`BlockPermutation`](#BlockPermutation) |

#### BlockExplodeEventSignal
#### BlockHitInformation
#### BlockInventoryComponent
#### BlockInventoryComponentContainer
#### BlockLavaContainerComponent
#### BlockLocation
#### BlockPermutation
#### BlockPistonComponent
#### BlockPlaceEvent
#### BlockPlaceEventSignal
#### BlockPotionContainerComponent
#### BlockProperties
#### BlockRaycastOptions
#### BlockRecordPlayerComponent
#### BlockSnowContainerComponent
#### BlockType
#### BlockWaterContainerComponent
#### BoolBlockProperty
#### ButtonPushEvent
#### ButtonPushEventSignal
#### ChatEvent
#### ChatEventSignal
#### Color
#### CommandResult
#### Container
#### DataDrivenEntityTriggerEvent
#### DataDrivenEntityTriggerEventSignal
#### DefinitionModifier
#### Dimension
#### DynamicPropertiesDefinition
|::|1.19.0.20/21|||
|:-:|:-:|:-:|:-:|
|+r| defineNumber | (identifier: `string`) | void|
|+r| defineString | (identifier: `string`, maxLength: `number`) | void|
|+r| defineBoolean | (identifier: `string`)| void|

#### Effect
#### EffectAddEvent
#### EffectAddEventSignal
#### EffectType
#### Enchantment
#### EnchantmentList
#### EnchantmentSlot
#### EnchantmentType
#### Entity
|::|1.19.0.20/21|||
|:-:|:-:|:-:|:-:|
|+r| setDynamicProperty | (identifier: `string`, value: `boolean \| string \| number`) | `void` |
|+r| getDynamicProperty | (identifier: `string`) | `boolean \| string \| number` |
|+r| removeDynamicProperty | (identifier: `string`) | boolean |


| ::| 1.19.0.26/27| | |
|:-:|:-:|:-:|:-:|
|+r| scoreboard || [`ScoreboardIdentity`](#ScoreboardIdentity) |

| ::|1.19.0.28/29| ||
|:-:|:-:|:-:|:-:|
|-r|bodyRotation|||
|+r|rotation||[`XYRotation`](#XYRotation)|
|+r|setRotation|(degreesX: number, degreesY: number)| void|

| ::|1.19.10.20| ||
|:-:|:-:|:-:|:-:|
|+r |teleport |(location: [`Location`](#Location), dimension: [`Dimension`](#Dimension), xRotation: `number`, yRotation: `number`, keepVelocity?: `boolean`)| `void`|


#### EntityAddRiderComponent
#### EntityAgeableComponent
#### EntityBreathableComponent
#### EntityCanClimbComponent
#### EntityCanFlyComponent
#### EntityCanPowerJumpComponent
#### EntityColorComponent
#### EntityCreateEvent
#### EntityCreateEventSignal
#### EntityDataDrivenTriggerEventOptions
#### EntityDefinitionFeedItem
#### EntityEventOptions
#### EntityFireImmuneComponent
#### EntityFloatsInLiquidComponent
#### EntityFlyingSpeedComponent
#### EntityFrictionModifierComponent
#### EntityGroundOffsetComponent
#### EntityHealableComponent
#### EntityHealthComponent
#### EntityHitEvent
#### EntityHitEventSignal
#### EntityHitInformation
#### EntityHurtEvent
#### EntityHurtEventSignal
#### EntityInventoryComponent
#### EntityIsBabyComponent
#### EntityIsChargedComponent
#### EntityIsChestedComponent
#### EntityIsDyableComponent
#### EntityIsHiddenWhenInvisibleComponent
#### EntityIsIgnitedComponent
#### EntityIsIllagerCaptainComponent
#### EntityIsSaddledComponent
#### EntityIsShakingComponent
#### EntityIsShearedComponent
#### EntityIsStackableComponent
#### EntityIsStunnedComponent
#### EntityIsTamedComponent
#### EntityItemComponent
#### EntityIterator
#### EntityLavaMovementComponent
#### EntityLeashableComponent
#### EntityMarkVariantComponent
#### EntityMountTamingComponent
#### EntityMovementAmphibiousComponent
#### EntityMovementBasicComponent
#### EntityMovementComponent
#### EntityMovementFlyComponent
#### EntityMovementGenericComponent
#### EntityMovementGlideComponent
#### EntityMovementHoverComponent
#### EntityMovementJumpComponent
#### EntityMovementSkipComponent
#### EntityMovementSwayComponent
#### EntityNavigationClimbComponent
#### EntityNavigationFloatComponent
#### EntityNavigationFlyComponent
#### EntityNavigationGenericComponent
#### EntityNavigationHoverComponent
#### EntityNavigationWalkComponent
#### EntityPushThroughComponent
#### EntityQueryOptions
#### EntityQueryScoreOptions
#### EntityRaycastOptions
#### EntityRideableComponent
#### EntityScaleComponent
#### EntitySkinIdComponent
#### EntityStrengthComponent
#### EntityTameableComponent
#### EntityType
|::|1.18.30.22/33|||
|:-:|:-:|:-:|:-:|
|+r| id| |`string` |

#### EntityTypeIterator
#### EntityTypes
|::|1.18.30.22/33|||
|:-:|:-:|:-:|:-:|
|+r|get|(identifier: `string`)| [`EntityType`](#EntityType) |
|+r|getAll|()| [`EntityTypeIterator`](#EntityTypeIterator) |

#### EntityUnderwaterMovementComponent
#### EntityVariantComponent
#### EntityWantsJockeyComponent
#### Events
|::|1.18.30.20/21|||
|:-:|:-:|:-:|:-:|
|+r| entityHurt | | [`EntityHurtEvent`](#EntityHurtEvent) |

|::|1.19.0.20/21|||
|:-:|:-:|:-:|:-:|
|+r| projectileHit |||
|+r| itemStartUseOn |||
|+r| itemStopUseOn |||
|+r| itemStartCharge |||
|+r| itemCompleteCharge |||
|+r| itemReleaseCharge |||
|+r| itemStopCharge |||
|+r| worldInitialize || [`WorldInitializeEvent`](#WorldInitializeEvent) |


| ::|1.19.0.28/29| ||
|:-:|:-:|:-:|:-:|
|-r||||
|+r|buttonPush|| [`ButtonPushEventSignal`](#ButtonPushEventSignal) |



#### ExplosionEvent
#### ExplosionEventSignal
#### ExplosionOptions
#### FeedItem
#### FeedItemEffect
#### FilterGroup
#### FluidContainer
#### IBlockProperty
#### IEntityComponent
#### IntBlockProperty
#### InventoryComponentContainer
#### ItemCompleteChargeEvent
#### ItemCompleteChargeEventSignal
#### ItemCooldownComponent
#### ItemDefinitionEventSignal
#### ItemDefinitionTriggeredEvent
#### ItemDurabilityComponent
#### ItemEnchantsComponent
#### ItemFoodComponent
#### ItemReleaseChargeEvent
#### ItemReleaseChargeEventSignal
#### Items
#### ItemStack
#### ItemStartChargeEvent
#### ItemStartChargeEventSignal
#### ItemStartUseOnEvent
|::|1.19.0.20/21|||
|:-:|:-:|:-:|:-:|
|+r| buildBlockLocation|| [`BlockLocation`](#BlockLocation) |

#### ItemStartUseOnEventSignal
#### ItemStopChargeEvent
#### ItemStopChargeEventSignal
#### ItemStopUseOnEvent
#### ItemStopUseOnEventSignal
#### ItemType
#### ItemUseEvent
#### ItemUseEventSignal
#### ItemUseOnEvent
#### ItemUseOnEventSignal
#### LeverActionEvent
|::|1.19.0.20/21|||
|:-:|:-:|:-:|:-:|
|+r|player|| [`Player`](#Player)

#### LeverActionEventSignal
#### Location
#### MinecraftBlockTypes
#### MinecraftDimensionTypes
#### MinecraftEffectTypes
#### MinecraftEnchantmentTypes
#### MinecraftEntityTypes
\+ in 1.18.30.22/33
#### MinecraftItemTypes
#### MolangVariableMap
#### MusicOptions


|+r| volume || 
|+r| fadeSeconds ||
|+r| loop ||

#### NavigationResult
#### NumberRange
#### PistonActivateEvent
#### PistonActivateEventSignal
#### PitchYawRotation
\- in 1.19.0.28/29
#### Player
|::|1.19.0.20/21|||
|:-:|:-:|:-:|:-:|
|+r|onScreenDisplay || [`ScreenDisplay`](#ScreenDisplay) |


#### PlayerInventoryComponentContainer
#### PlayerIterator
#### PlayerJoinEvent
#### PlayerJoinEventSignal
#### PlayerLeaveEvent
#### PlayerLeaveEventSignal
#### ProjectileHitEvent
#### ProjectileHitEventSignal
#### PropertyRegistry
|::|1.19.0.20/21|||
|:-:|:-:|:-:|:-:|
|+r| registerEntityTypeDynamicProperties | (propertiesDefinition: [`DynamicPropertiesDefinition`](#DynamicPropertiesDefinition), entityType: [`EntityType`](#EntityType)) |`void`|
|+r| registerWorldDynamicProperties | (propertiesDefinition: [`DynamicPropertiesDefinition`](#DynamicPropertiesDefinition) ) |`void`|

#### Scoreboard
\+ in 1.19.0.26/27
| ::| 1.19.0.26/27| | |
|:-:|:-:|:-:|:-:|
|+r| getObjective | (objectiveId : `String`) | [`ScoreboardObjective`](#ScoreboardObjective) 
|+r| getObjectives |()| [`ScoreboardObjective[]`](#ScoreboardObjective) |
|+r| getParticipants | ()| [`ScoreboardIdentity[]`](#ScoreboardIdentity) |

#### ScoreboardIdentity
\+ in 1.19.0.26/27

| ::| 1.19.0.26/27| | |
|:-:|:-:|:-:|:-:|
|+r|type || [`ScoreboardIdentityType`](#ScoreboardIdentityType) |
|+r|id || `Int` |
|+r|displayName || `String` |
|+r|getEntity || `ScriptActor` |

#### ScoreboardObjective
\+ in 1.19.0.26/27

| ::| 1.19.0.26/27| | |
|:-:|:-:|:-:|:-:|
|+r|id || `String` |
|+r|displayName || `String` |
|+r|getParticipants |()| [`ScoreboardIdentity[]`](#ScoreboardIdentity) |
|+r|getScores |()| [`ScoreboardScoreInfo[]`](#ScoreboardScoreInfo) |
|+r|getScore | (participant : [`ScoreboardIdentity`](#ScoreboardIdentity)) | Int | 

#### ScoreboardScoreInfo
\+ in 1.19.0.26/27

| ::| 1.19.0.26/27| | |
|:-:|:-:|:-:|:-:|
|+r|participant || [`ScoreboardIdentity`](#ScoreboardIdentity) |
|+r|score || `Int`

#### ScreenDisplay
|::|1.19.0.20/21|||
|:-:|:-:|:-:|:-:|
|+r| setTitle | (title : `String`, options? : [`TitleDisplayOptions`](#TitleDisplayOptions)) 
|+r| clearTitle | () | |
|+r| updateSubtitle | (subtitle : `String`) | |
|+r| setActionBar|(text : `String`) ||

#### Seat
#### SoundOptions
#### StringBlockProperty
#### TickEvent
#### TickEventSignal
#### TitleDisplayOptions
|::|1.19.0.20/21|||
|:-:|:-:|:-:|:-:|
|+r| subtitle? || `String` |
|+r| fadeInSeconds || `Int` |
|+r| staySeconds || `Int`|
|+r| fadeOutSeconds || `Int`|

#### Trigger
#### Vector
#### WeatherChangeEvent
#### WeatherChangeEventSignal
#### World
|::|1.18.30.20/21|||
|:-:|:-:|:-:|:-:|
|+r|queueMusic | (trackName : `string`, musicOptions : [`MusicOptions`](#MusicOptions) ) ||
|+r|playMusic | (trackName : string, musicOptions : [`MusicOptions`](#MusicOptions) ) ||
|+r|stopMusic | () ||

|::|1.19.0.20/21|||
|:-:|:-:|:-:|:-:|
|+r| setDynamicProperty | (identifier: `string`, value: `boolean \| string \| number`) | `void` |
|+r| getDynamicProperty | (identifier: `string`) | `boolean \| string \| number` |
|+r| removeDynamicProperty | (identifier: `string`) | `boolean` |


| ::| 1.19.0.26/27| | |
|:-:|:-:|:-:|:-:|
|+r| scoreboard || [`Scoreboard`](#Scoreboard) |

#### WorldInitializeEvent
#### WorldInitializeEventSignal
#### XYRotation
\+ in 1.19.0.28/29

---

### Constants
| ::| | | |
|:-:|:-:|:-:|:-:|
|sr | TicksPerSecond | | 20 |

---

### Objects
| ::| | | |
|:-:|:-:|:-:|:-:|
|sr | world | | [`World`](#World) |

