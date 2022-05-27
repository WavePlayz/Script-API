### BlockAreaSize
\+ `rw` x: `int32`
\+ `rw` y: `int32`
\+ `rw` z: `int32`
\+ `r-` equals ( other: `BlockAreaSize` ): `boolean`
\+ `r-` constructor ( x: `int32`, y: `int32`, z: `int32` ): `BlockAreaSize`
### BlockLocation
\+ `rw` x: `int32`
\+ `rw` y: `int32`
\+ `rw` z: `int32`
\+ `r-` equals ( other: `BlockLocation` ): `boolean`
\+ `r-` offset ( x: `int32`, y: `int32`, z: `int32` ): `BlockLocation`
\+ `r-` above (  ): `BlockLocation`
\+ `r-` blocksBetween ( other: `BlockLocation` ): `array`
\+ `r-` constructor ( x: `int32`, y: `int32`, z: `int32` ): `BlockLocation`
### BlockPermutation
\+ `r-` type: `BlockType`
\+ `r-` clone (  ): `BlockPermutation`
\+ `r-` getAllProperties (  ): `array`
\+ `r-` getProperty ( propertyName: `string` ): `IBlockProperty`
\+ `r-` getTags (  ): `array`
\+ `r-` hasTag ( tag: `string` ): `boolean`
### BlockProperties
\+ `r-` static bloom: `string`
\+ `r-` static active: `string`
\+ `r-` static itemFramePhotoBit: `string`
\+ `r-` static candles: `string`
\+ `r-` static lit: `string`
\+ `r-` static multiFaceDirectionBits: `string`
\+ `r-` static bigDripleafHead: `string`
\+ `r-` static bigDripleafTilt: `string`
\+ `r-` static growingPlantAge: `string`
\+ `r-` static dripstoneThickness: `string`
\+ `r-` static respawnAnchorCharge: `string`
\+ `r-` static twistingVinesAge: `string`
\+ `r-` static rotation: `string`
\+ `r-` static wallConnectionTypeWest: `string`
\+ `r-` static wallConnectionTypeSouth: `string`
\+ `r-` static wallConnectionTypeEast: `string`
\+ `r-` static wallConnectionTypeNorth: `string`
\+ `r-` static wallPostBit: `string`
\+ `r-` static weepingVinesAge: `string`
\+ `r-` static honeyLevel: `string`
\+ `r-` static blockLightLevel: `string`
\+ `r-` static pillarAxis: `string`
\+ `r-` static leverDirection: `string`
\+ `r-` static coralFanDirection: `string`
\+ `r-` static composterFillLevel: `string`
\+ `r-` static extinguished: `string`
\+ `r-` static structureBlockType: `string`
\+ `r-` static structureVoidType: `string`
\+ `r-` static attachment: `string`
\+ `r-` static coralHangTypeBit: `string`
\+ `r-` static strippedBit: `string`
\+ `r-` static hanging: `string`
\+ `r-` static cauldronLiquid: `string`
\+ `r-` static coralColor: `string`
\+ `r-` static seaGrassType: `string`
\+ `r-` static chemistryTableType: `string`
\+ `r-` static doublePlantType: `string`
\+ `r-` static prismarineBlockType: `string`
\+ `r-` static wallBlockType: `string`
\+ `r-` static hugeMushroomBits: `string`
\+ `r-` static stoneBrickType: `string`
\+ `r-` static monsterEggStoneType: `string`
\+ `r-` static stoneSlabType4: `string`
\+ `r-` static stoneSlabType3: `string`
\+ `r-` static stoneSlabType2: `string`
\+ `r-` static stoneSlabType: `string`
\+ `r-` static flowerType: `string`
\+ `r-` static tallGrassType: `string`
\+ `r-` static sandStoneType: `string`
\+ `r-` static spongeType: `string`
\+ `r-` static newLeafType: `string`
\+ `r-` static oldLeafType: `string`
\+ `r-` static deprecated: `string`
\+ `r-` static chiselType: `string`
\+ `r-` static newLogType: `string`
\+ `r-` static oldLogType: `string`
\+ `r-` static sandType: `string`
\+ `r-` static dirtType: `string`
\+ `r-` static stoneType: `string`
\+ `r-` static woodType: `string`
\+ `r-` static stabilityCheck: `string`
\+ `r-` static stability: `string`
\+ `r-` static bambooLeafSize: `string`
\+ `r-` static bambooStalkThickness: `string`
\+ `r-` static color: `string`
\+ `r-` static coralDirection: `string`
\+ `r-` static weirdoDirection: `string`
\+ `r-` static groundSignDirection: `string`
\+ `r-` static crackedState: `string`
\+ `r-` static turtleEggCount: `string`
\+ `r-` static dragDown: `string`
\+ `r-` static torchFacingDirection: `string`
\+ `r-` static saplingType: `string`
\+ `r-` static itemFrameMapBit: `string`
\+ `r-` static clusterCount: `string`
\+ `r-` static deadBit: `string`
\+ `r-` static colorBit: `string`
\+ `r-` static allowUnderwaterBit: `string`
\+ `r-` static vineDirectionBits: `string`
\+ `r-` static upsideDownBit: `string`
\+ `r-` static updateBit: `string`
\+ `r-` static triggeredBit: `string`
\+ `r-` static topSlotBit: `string`
\+ `r-` static toggleBit: `string`
\+ `r-` static suspendedBit: `string`
\+ `r-` static repeaterDelay: `string`
\+ `r-` static redstoneSignal: `string`
\+ `r-` static railDirection: `string`
\+ `r-` static railDataBit: `string`
\+ `r-` static poweredBit: `string`
\+ `r-` static persistentBit: `string`
\+ `r-` static outputLitBit: `string`
\+ `r-` static outputSubtractBit: `string`
\+ `r-` static openBit: `string`
\+ `r-` static occupiedBit: `string`
\+ `r-` static kelpAge: `string`
\+ `r-` static noDropBit: `string`
\+ `r-` static moisturizedAmount: `string`
\+ `r-` static liquidDepth: `string`
\+ `r-` static inWallBit: `string`
\+ `r-` static infiniburnBit: `string`
\+ `r-` static height: `string`
\+ `r-` static headPieceBit: `string`
\+ `r-` static growth: `string`
\+ `r-` static fillLevel: `string`
\+ `r-` static facingDirection: `string`
\+ `r-` static explodeBit: `string`
\+ `r-` static endPortalEyeBit: `string`
\+ `r-` static direction: `string`
\+ `r-` static upperBlockBit: `string`
\+ `r-` static doorHingeBit: `string`
\+ `r-` static disarmedBit: `string`
\+ `r-` static damage: `string`
\+ `r-` static coveredBit: `string`
\+ `r-` static conditionalBit: `string`
\+ `r-` static buttonPressedBit: `string`
\+ `r-` static brewingStandSlotCBit: `string`
\+ `r-` static brewingStandSlotBBit: `string`
\+ `r-` static brewingStandSlotABit: `string`
\+ `r-` static biteCounter: `string`
\+ `r-` static portalAxis: `string`
\+ `r-` static attachedBit: `string`
\+ `r-` static age: `string`
\+ `r-` static ageBit: `string`
### IBlockProperty
\+ `r-` name: `string`
### BlockRaycastOptions
\+ `rw` maxDistance: `int32`
\+ `rw` includePassableBlocks: `boolean`
\+ `rw` includeLiquidBlocks: `boolean`
\+ `r-` constructor (  ): `BlockRaycastOptions`
### BlockType
\+ `r-` id: `string`
\+ `r-` canBeWaterlogged: `boolean`
\+ `r-` createDefaultBlockPermutation (  ): `BlockPermutation`
### MinecraftBlockTypes
\+ `r-` static blueCandle: `BlockType`
\+ `r-` static birchStandingSign: `BlockType`
\+ `r-` static polishedBasalt: `BlockType`
\+ `r-` static netherGoldOre: `BlockType`
\+ `r-` static warpedDoor: `BlockType`
\+ `r-` static pistonArmCollision: `BlockType`
\+ `r-` static coralFanDead: `BlockType`
\+ `r-` static fenceGate: `BlockType`
\+ `r-` static powderSnow: `BlockType`
\+ `r-` static darkOakButton: `BlockType`
\+ `r-` static deepslateCopperOre: `BlockType`
\+ `r-` static netherBrickStairs: `BlockType`
\+ `r-` static blackstoneDoubleSlab: `BlockType`
\+ `r-` static jungleButton: `BlockType`
\+ `r-` static spruceStairs: `BlockType`
\+ `r-` static grayCandleCake: `BlockType`
\+ `r-` static crimsonWallSign: `BlockType`
\+ `r-` static endGateway: `BlockType`
\+ `r-` static beacon: `BlockType`
\+ `r-` static redNetherBrick: `BlockType`
\+ `r-` static cobbledDeepslateStairs: `BlockType`
\+ `r-` static snowLayer: `BlockType`
\+ `r-` static blackCandle: `BlockType`
\+ `r-` static glowFrame: `BlockType`
\+ `r-` static mudBrickDoubleSlab: `BlockType`
\+ `r-` static hangingRoots: `BlockType`
\+ `r-` static prismarineBricksStairs: `BlockType`
\+ `r-` static waxedOxidizedCutCopper: `BlockType`
\+ `r-` static calcite: `BlockType`
\+ `r-` static strippedDarkOakLog: `BlockType`
\+ `r-` static sculkShrieker: `BlockType`
\+ `r-` static limeGlazedTerracotta: `BlockType`
\+ `r-` static trapdoor: `BlockType`
\+ `r-` static infoUpdate: `BlockType`
\+ `r-` static seagrass: `BlockType`
\+ `r-` static waxedExposedCutCopperSlab: `BlockType`
\+ `r-` static stoneSlab: `BlockType`
\+ `r-` static redstoneLamp: `BlockType`
\+ `r-` static mossyCobblestone: `BlockType`
\+ `r-` static deepslate: `BlockType`
\+ `r-` static warpedPressurePlate: `BlockType`
\+ `r-` static diamondBlock: `BlockType`
\+ `r-` static oakStairs: `BlockType`
\+ `r-` static endBricks: `BlockType`
\+ `r-` static packedIce: `BlockType`
\+ `r-` static packedMud: `BlockType`
\+ `r-` static lightBlueCandleCake: `BlockType`
\+ `r-` static mossCarpet: `BlockType`
\+ `r-` static warpedFungus: `BlockType`
\+ `r-` static polishedDeepslateSlab: `BlockType`
\+ `r-` static amethystBlock: `BlockType`
\+ `r-` static goldBlock: `BlockType`
\+ `r-` static flowerPot: `BlockType`
\+ `r-` static polishedDeepslateStairs: `BlockType`
\+ `r-` static yellowFlower: `BlockType`
\+ `r-` static smallAmethystBud: `BlockType`
\+ `r-` static activatorRail: `BlockType`
\+ `r-` static ironTrapdoor: `BlockType`
\+ `r-` static potatoes: `BlockType`
\+ `r-` static noteblock: `BlockType`
\+ `r-` static tuff: `BlockType`
\+ `r-` static oxidizedCutCopperStairs: `BlockType`
\+ `r-` static deepslateTileDoubleSlab: `BlockType`
\+ `r-` static rawGoldBlock: `BlockType`
\+ `r-` static orangeCandle: `BlockType`
\+ `r-` static poweredComparator: `BlockType`
\+ `r-` static warpedWallSign: `BlockType`
\+ `r-` static melonBlock: `BlockType`
\+ `r-` static waxedCutCopperStairs: `BlockType`
\+ `r-` static mobSpawner: `BlockType`
\+ `r-` static soulFire: `BlockType`
\+ `r-` static magentaCandle: `BlockType`
\+ `r-` static obsidian: `BlockType`
\+ `r-` static deepslateBrickWall: `BlockType`
\+ `r-` static oxidizedDoubleCutCopperSlab: `BlockType`
\+ `r-` static exposedCopper: `BlockType`
\+ `r-` static polishedDeepslateDoubleSlab: `BlockType`
\+ `r-` static stoneButton: `BlockType`
\+ `r-` static lavaCauldron: `BlockType`
\+ `r-` static sponge: `BlockType`
\+ `r-` static exposedDoubleCutCopperSlab: `BlockType`
\+ `r-` static normalStoneStairs: `BlockType`
\+ `r-` static hardenedClay: `BlockType`
\+ `r-` static strippedJungleLog: `BlockType`
\+ `r-` static polishedBlackstoneDoubleSlab: `BlockType`
\+ `r-` static smoker: `BlockType`
\+ `r-` static stone: `BlockType`
\+ `r-` static concrete: `BlockType`
\+ `r-` static hardGlassPane: `BlockType`
\+ `r-` static polishedBlackstoneBrickDoubleSlab: `BlockType`
\+ `r-` static crimsonDoubleSlab: `BlockType`
\+ `r-` static respawnAnchor: `BlockType`
\+ `r-` static greenCandle: `BlockType`
\+ `r-` static waxedExposedCopper: `BlockType`
\+ `r-` static hayBlock: `BlockType`
\+ `r-` static waxedWeatheredCopper: `BlockType`
\+ `r-` static waxedOxidizedCutCopperSlab: `BlockType`
\+ `r-` static cyanCandleCake: `BlockType`
\+ `r-` static sapling: `BlockType`
\+ `r-` static torch: `BlockType`
\+ `r-` static mudBrickWall: `BlockType`
\+ `r-` static honeyBlock: `BlockType`
\+ `r-` static dripstoneBlock: `BlockType`
\+ `r-` static vine: `BlockType`
\+ `r-` static blackstoneSlab: `BlockType`
\+ `r-` static goldOre: `BlockType`
\+ `r-` static yellowGlazedTerracotta: `BlockType`
\+ `r-` static stonecutter: `BlockType`
\+ `r-` static warpedPlanks: `BlockType`
\+ `r-` static piston: `BlockType`
\+ `r-` static tallgrass: `BlockType`
\+ `r-` static stoneBrickStairs: `BlockType`
\+ `r-` static grayCandle: `BlockType`
\+ `r-` static invisibleBedrock: `BlockType`
\+ `r-` static carpet: `BlockType`
\+ `r-` static magentaGlazedTerracotta: `BlockType`
\+ `r-` static polishedBlackstoneBrickWall: `BlockType`
\+ `r-` static stainedGlass: `BlockType`
\+ `r-` static orangeGlazedTerracotta: `BlockType`
\+ `r-` static smoothBasalt: `BlockType`
\+ `r-` static waterlily: `BlockType`
\+ `r-` static emeraldBlock: `BlockType`
\+ `r-` static heavyWeightedPressurePlate: `BlockType`
\+ `r-` static lightningRod: `BlockType`
\+ `r-` static cobblestoneWall: `BlockType`
\+ `r-` static underwaterTorch: `BlockType`
\+ `r-` static deepslateBrickDoubleSlab: `BlockType`
\+ `r-` static wool: `BlockType`
\+ `r-` static wood: `BlockType`
\+ `r-` static ochreFroglight: `BlockType`
\+ `r-` static observer: `BlockType`
\+ `r-` static redstoneTorch: `BlockType`
\+ `r-` static silverGlazedTerracotta: `BlockType`
\+ `r-` static graniteStairs: `BlockType`
\+ `r-` static glowingobsidian: `BlockType`
\+ `r-` static brownMushroom: `BlockType`
\+ `r-` static brownGlazedTerracotta: `BlockType`
\+ `r-` static oxidizedCopper: `BlockType`
\+ `r-` static copperOre: `BlockType`
\+ `r-` static birchPressurePlate: `BlockType`
\+ `r-` static scaffolding: `BlockType`
\+ `r-` static sandstoneStairs: `BlockType`
\+ `r-` static greenCandleCake: `BlockType`
\+ `r-` static redMushroomBlock: `BlockType`
\+ `r-` static sculkCatalyst: `BlockType`
\+ `r-` static cobblestone: `BlockType`
\+ `r-` static redFlower: `BlockType`
\+ `r-` static smoothSandstoneStairs: `BlockType`
\+ `r-` static junglePressurePlate: `BlockType`
\+ `r-` static doubleCutCopperSlab: `BlockType`
\+ `r-` static sandstone: `BlockType`
\+ `r-` static brownCandleCake: `BlockType`
\+ `r-` static acaciaWallSign: `BlockType`
\+ `r-` static lightWeightedPressurePlate: `BlockType`
\+ `r-` static undyedShulkerBox: `BlockType`
\+ `r-` static polishedBlackstone: `BlockType`
\+ `r-` static mycelium: `BlockType`
\+ `r-` static bamboo: `BlockType`
\+ `r-` static quartzBlock: `BlockType`
\+ `r-` static stoneStairs: `BlockType`
\+ `r-` static deepslateBrickSlab: `BlockType`
\+ `r-` static warpedStairs: `BlockType`
\+ `r-` static smithingTable: `BlockType`
\+ `r-` static woodenDoor: `BlockType`
\+ `r-` static sprucePressurePlate: `BlockType`
\+ `r-` static netheriteBlock: `BlockType`
\+ `r-` static redstoneBlock: `BlockType`
\+ `r-` static birchFenceGate: `BlockType`
\+ `r-` static redstoneWire: `BlockType`
\+ `r-` static waxedExposedCutCopper: `BlockType`
\+ `r-` static lava: `BlockType`
\+ `r-` static loom: `BlockType`
\+ `r-` static log2: `BlockType`
\+ `r-` static endStone: `BlockType`
\+ `r-` static crimsonDoor: `BlockType`
\+ `r-` static glowstone: `BlockType`
\+ `r-` static stonePressurePlate: `BlockType`
\+ `r-` static waxedExposedCutCopperStairs: `BlockType`
\+ `r-` static mudBrickSlab: `BlockType`
\+ `r-` static farmland: `BlockType`
\+ `r-` static rail: `BlockType`
\+ `r-` static blackstoneWall: `BlockType`
\+ `r-` static mossyCobblestoneStairs: `BlockType`
\+ `r-` static coralFanHang2: `BlockType`
\+ `r-` static coralFanHang3: `BlockType`
\+ `r-` static detectorRail: `BlockType`
\+ `r-` static monsterEgg: `BlockType`
\+ `r-` static polishedGraniteStairs: `BlockType`
\+ `r-` static pinkCandleCake: `BlockType`
\+ `r-` static crackedDeepslateTiles: `BlockType`
\+ `r-` static redGlazedTerracotta: `BlockType`
\+ `r-` static darkOakFenceGate: `BlockType`
\+ `r-` static crimsonNylium: `BlockType`
\+ `r-` static structureVoid: `BlockType`
\+ `r-` static polishedBlackstoneBrickSlab: `BlockType`
\+ `r-` static snow: `BlockType`
\+ `r-` static sand: `BlockType`
\+ `r-` static daylightDetector: `BlockType`
\+ `r-` static conduit: `BlockType`
\+ `r-` static slime: `BlockType`
\+ `r-` static boneBlock: `BlockType`
\+ `r-` static frame: `BlockType`
\+ `r-` static lapisBlock: `BlockType`
\+ `r-` static coalOre: `BlockType`
\+ `r-` static clientRequestPlaceholderBlock: `BlockType`
\+ `r-` static redstoneOre: `BlockType`
\+ `r-` static netherBrickFence: `BlockType`
\+ `r-` static deepslateTileSlab: `BlockType`
\+ `r-` static netherWartBlock: `BlockType`
\+ `r-` static crimsonHyphae: `BlockType`
\+ `r-` static polishedBlackstoneStairs: `BlockType`
\+ `r-` static weatheredCutCopperStairs: `BlockType`
\+ `r-` static smallDripleafBlock: `BlockType`
\+ `r-` static spruceButton: `BlockType`
\+ `r-` static crimsonTrapdoor: `BlockType`
\+ `r-` static basalt: `BlockType`
\+ `r-` static litRedstoneLamp: `BlockType`
\+ `r-` static leaves2: `BlockType`
\+ `r-` static diamondOre: `BlockType`
\+ `r-` static warpedRoots: `BlockType`
\+ `r-` static stickyPiston: `BlockType`
\+ `r-` static enderChest: `BlockType`
\+ `r-` static mediumAmethystBud: `BlockType`
\+ `r-` static warpedDoubleSlab: `BlockType`
\+ `r-` static jungleWallSign: `BlockType`
\+ `r-` static sculkSensor: `BlockType`
\+ `r-` static dioriteStairs: `BlockType`
\+ `r-` static frogSpawn: `BlockType`
\+ `r-` static acaciaDoor: `BlockType`
\+ `r-` static crimsonButton: `BlockType`
\+ `r-` static ironDoor: `BlockType`
\+ `r-` static honeycombBlock: `BlockType`
\+ `r-` static polishedBlackstoneBrickStairs: `BlockType`
\+ `r-` static quartzOre: `BlockType`
\+ `r-` static daylightDetectorInverted: `BlockType`
\+ `r-` static barrel: `BlockType`
\+ `r-` static chorusFlower: `BlockType`
\+ `r-` static coralFanHang: `BlockType`
\+ `r-` static crackedNetherBricks: `BlockType`
\+ `r-` static poweredRepeater: `BlockType`
\+ `r-` static lightBlueCandle: `BlockType`
\+ `r-` static pumpkin: `BlockType`
\+ `r-` static deepslateTiles: `BlockType`
\+ `r-` static smoothStone: `BlockType`
\+ `r-` static blackCandleCake: `BlockType`
\+ `r-` static redMushroom: `BlockType`
\+ `r-` static gildedBlackstone: `BlockType`
\+ `r-` static exposedCutCopperStairs: `BlockType`
\+ `r-` static reserved6: `BlockType`
\+ `r-` static cutCopperStairs: `BlockType`
\+ `r-` static unknown: `BlockType`
\+ `r-` static coralFan: `BlockType`
\+ `r-` static mangrovePropaguleHanging: `BlockType`
\+ `r-` static yellowCandleCake: `BlockType`
\+ `r-` static infestedDeepslate: `BlockType`
\+ `r-` static soulTorch: `BlockType`
\+ `r-` static podzol: `BlockType`
\+ `r-` static copperBlock: `BlockType`
\+ `r-` static litRedstoneOre: `BlockType`
\+ `r-` static deepslateTileStairs: `BlockType`
\+ `r-` static crimsonFenceGate: `BlockType`
\+ `r-` static deadbush: `BlockType`
\+ `r-` static waxedWeatheredDoubleCutCopperSlab: `BlockType`
\+ `r-` static polishedBlackstoneBricks: `BlockType`
\+ `r-` static redCandle: `BlockType`
\+ `r-` static cutCopper: `BlockType`
\+ `r-` static ironOre: `BlockType`
\+ `r-` static spruceDoor: `BlockType`
\+ `r-` static frostedIce: `BlockType`
\+ `r-` static largeAmethystBud: `BlockType`
\+ `r-` static warpedTrapdoor: `BlockType`
\+ `r-` static flowingWater: `BlockType`
\+ `r-` static brickBlock: `BlockType`
\+ `r-` static hardGlass: `BlockType`
\+ `r-` static quartzStairs: `BlockType`
\+ `r-` static caveVines: `BlockType`
\+ `r-` static ironBars: `BlockType`
\+ `r-` static melonStem: `BlockType`
\+ `r-` static crimsonPlanks: `BlockType`
\+ `r-` static waxedWeatheredCutCopper: `BlockType`
\+ `r-` static stainedGlassPane: `BlockType`
\+ `r-` static wallSign: `BlockType`
\+ `r-` static jukebox: `BlockType`
\+ `r-` static jigsaw: `BlockType`
\+ `r-` static borderBlock: `BlockType`
\+ `r-` static shroomlight: `BlockType`
\+ `r-` static chiseledPolishedBlackstone: `BlockType`
\+ `r-` static darkOakStairs: `BlockType`
\+ `r-` static deepslateTileWall: `BlockType`
\+ `r-` static glassPane: `BlockType`
\+ `r-` static chiseledDeepslate: `BlockType`
\+ `r-` static cutCopperSlab: `BlockType`
\+ `r-` static coralBlock: `BlockType`
\+ `r-` static acaciaPressurePlate: `BlockType`
\+ `r-` static rawCopperBlock: `BlockType`
\+ `r-` static woodenSlab: `BlockType`
\+ `r-` static oxidizedCutCopperSlab: `BlockType`
\+ `r-` static beetroot: `BlockType`
\+ `r-` static skull: `BlockType`
\+ `r-` static lightGrayCandleCake: `BlockType`
\+ `r-` static whiteCandle: `BlockType`
\+ `r-` static andesiteStairs: `BlockType`
\+ `r-` static shulkerBox: `BlockType`
\+ `r-` static goldenRail: `BlockType`
\+ `r-` static darkoakWallSign: `BlockType`
\+ `r-` static redSandstoneStairs: `BlockType`
\+ `r-` static cyanGlazedTerracotta: `BlockType`
\+ `r-` static crackedDeepslateBricks: `BlockType`
\+ `r-` static jungleFenceGate: `BlockType`
\+ `r-` static jungleTrapdoor: `BlockType`
\+ `r-` static dirtWithRoots: `BlockType`
\+ `r-` static coalBlock: `BlockType`
\+ `r-` static warpedFenceGate: `BlockType`
\+ `r-` static composter: `BlockType`
\+ `r-` static waxedDoubleCutCopperSlab: `BlockType`
\+ `r-` static kelp: `BlockType`
\+ `r-` static doublePlant: `BlockType`
\+ `r-` static deepslateBricks: `BlockType`
\+ `r-` static blueGlazedTerracotta: `BlockType`
\+ `r-` static lightBlueGlazedTerracotta: `BlockType`
\+ `r-` static floweringAzalea: `BlockType`
\+ `r-` static oxidizedCutCopper: `BlockType`
\+ `r-` static weepingVines: `BlockType`
\+ `r-` static chorusPlant: `BlockType`
\+ `r-` static water: `BlockType`
\+ `r-` static mudBrickStairs: `BlockType`
\+ `r-` static unpoweredRepeater: `BlockType`
\+ `r-` static smoothRedSandstoneStairs: `BlockType`
\+ `r-` static element100: `BlockType`
\+ `r-` static element101: `BlockType`
\+ `r-` static element102: `BlockType`
\+ `r-` static element103: `BlockType`
\+ `r-` static element104: `BlockType`
\+ `r-` static element105: `BlockType`
\+ `r-` static element106: `BlockType`
\+ `r-` static element107: `BlockType`
\+ `r-` static element108: `BlockType`
\+ `r-` static element109: `BlockType`
\+ `r-` static element113: `BlockType`
\+ `r-` static element112: `BlockType`
\+ `r-` static element111: `BlockType`
\+ `r-` static element110: `BlockType`
\+ `r-` static element117: `BlockType`
\+ `r-` static element116: `BlockType`
\+ `r-` static element115: `BlockType`
\+ `r-` static element114: `BlockType`
\+ `r-` static element118: `BlockType`
\+ `r-` static whiteGlazedTerracotta: `BlockType`
\+ `r-` static strippedWarpedHyphae: `BlockType`
\+ `r-` static movingBlock: `BlockType`
\+ `r-` static trappedChest: `BlockType`
\+ `r-` static acaciaTrapdoor: `BlockType`
\+ `r-` static standingSign: `BlockType`
\+ `r-` static glowLichen: `BlockType`
\+ `r-` static wallBanner: `BlockType`
\+ `r-` static twistingVines: `BlockType`
\+ `r-` static darkOakDoor: `BlockType`
\+ `r-` static soulLantern: `BlockType`
\+ `r-` static dirt: `BlockType`
\+ `r-` static deny: `BlockType`
\+ `r-` static beeNest: `BlockType`
\+ `r-` static bubbleColumn: `BlockType`
\+ `r-` static campfire: `BlockType`
\+ `r-` static soulSoil: `BlockType`
\+ `r-` static soulSand: `BlockType`
\+ `r-` static doubleStoneSlab: `BlockType`
\+ `r-` static reinforcedDeepslate: `BlockType`
\+ `r-` static fletchingTable: `BlockType`
\+ `r-` static blackGlazedTerracotta: `BlockType`
\+ `r-` static waxedOxidizedCutCopperStairs: `BlockType`
\+ `r-` static strippedAcaciaLog: `BlockType`
\+ `r-` static cobbledDeepslateDoubleSlab: `BlockType`
\+ `r-` static warpedFence: `BlockType`
\+ `r-` static craftingTable: `BlockType`
\+ `r-` static seaPickle: `BlockType`
\+ `r-` static doubleWoodenSlab: `BlockType`
\+ `r-` static brownCandle: `BlockType`
\+ `r-` static mossyStoneBrickStairs: `BlockType`
\+ `r-` static endRod: `BlockType`
\+ `r-` static crimsonStem: `BlockType`
\+ `r-` static crimsonSlab: `BlockType`
\+ `r-` static warpedHyphae: `BlockType`
\+ `r-` static warpedWartBlock: `BlockType`
\+ `r-` static carrots: `BlockType`
\+ `r-` static tripwireHook: `BlockType`
\+ `r-` static caveVinesBodyWithBerries: `BlockType`
\+ `r-` static darkOakPressurePlate: `BlockType`
\+ `r-` static strippedBirchLog: `BlockType`
\+ `r-` static tintedGlass: `BlockType`
\+ `r-` static bigDripleaf: `BlockType`
\+ `r-` static blueCandleCake: `BlockType`
\+ `r-` static sweetBerryBush: `BlockType`
\+ `r-` static polishedBlackstoneSlab: `BlockType`
\+ `r-` static reeds: `BlockType`
\+ `r-` static barrier: `BlockType`
\+ `r-` static jungleStandingSign: `BlockType`
\+ `r-` static weatheredCutCopperSlab: `BlockType`
\+ `r-` static fire: `BlockType`
\+ `r-` static planks: `BlockType`
\+ `r-` static endPortalFrame: `BlockType`
\+ `r-` static prismarine: `BlockType`
\+ `r-` static magentaCandleCake: `BlockType`
\+ `r-` static leaves: `BlockType`
\+ `r-` static deepslateGoldOre: `BlockType`
\+ `r-` static ancientDebris: `BlockType`
\+ `r-` static beehive: `BlockType`
\+ `r-` static jungleDoor: `BlockType`
\+ `r-` static glass: `BlockType`
\+ `r-` static witherRose: `BlockType`
\+ `r-` static exposedCutCopper: `BlockType`
\+ `r-` static waxedWeatheredCutCopperStairs: `BlockType`
\+ `r-` static stainedHardenedClay: `BlockType`
\+ `r-` static yellowCandle: `BlockType`
\+ `r-` static acaciaStairs: `BlockType`
\+ `r-` static hardStainedGlass: `BlockType`
\+ `r-` static lightGrayCandle: `BlockType`
\+ `r-` static doubleStoneSlab2: `BlockType`
\+ `r-` static doubleStoneSlab3: `BlockType`
\+ `r-` static doubleStoneSlab4: `BlockType`
\+ `r-` static polishedBlackstonePressurePlate: `BlockType`
\+ `r-` static acaciaStandingSign: `BlockType`
\+ `r-` static concretePowder: `BlockType`
\+ `r-` static crimsonStairs: `BlockType`
\+ `r-` static strippedSpruceLog: `BlockType`
\+ `r-` static pumpkinStem: `BlockType`
\+ `r-` static azaleaLeavesFlowered: `BlockType`
\+ `r-` static stickyPistonArmCollision: `BlockType`
\+ `r-` static warpedNylium: `BlockType`
\+ `r-` static deepslateEmeraldOre: `BlockType`
\+ `r-` static quartzBricks: `BlockType`
\+ `r-` static unpoweredComparator: `BlockType`
\+ `r-` static limeCandle: `BlockType`
\+ `r-` static structureBlock: `BlockType`
\+ `r-` static endBrickStairs: `BlockType`
\+ `r-` static target: `BlockType`
\+ `r-` static woodenButton: `BlockType`
\+ `r-` static pearlescentFroglight: `BlockType`
\+ `r-` static netherSprouts: `BlockType`
\+ `r-` static verdantFroglight: `BlockType`
\+ `r-` static warpedSlab: `BlockType`
\+ `r-` static warpedStem: `BlockType`
\+ `r-` static coral: `BlockType`
\+ `r-` static strippedCrimsonHyphae: `BlockType`
\+ `r-` static cocoa: `BlockType`
\+ `r-` static lever: `BlockType`
\+ `r-` static brickStairs: `BlockType`
\+ `r-` static mossBlock: `BlockType`
\+ `r-` static pinkGlazedTerracotta: `BlockType`
\+ `r-` static waxedWeatheredCutCopperSlab: `BlockType`
\+ `r-` static stonebrick: `BlockType`
\+ `r-` static spruceTrapdoor: `BlockType`
\+ `r-` static chainCommandBlock: `BlockType`
\+ `r-` static redSandstone: `BlockType`
\+ `r-` static spruceFenceGate: `BlockType`
\+ `r-` static exposedCutCopperSlab: `BlockType`
\+ `r-` static redNetherBrickStairs: `BlockType`
\+ `r-` static greenGlazedTerracotta: `BlockType`
\+ `r-` static deepslateRedstoneOre: `BlockType`
\+ `r-` static anvil: `BlockType`
\+ `r-` static birchTrapdoor: `BlockType`
\+ `r-` static mangroveLeaves: `BlockType`
\+ `r-` static cobbledDeepslate: `BlockType`
\+ `r-` static bookshelf: `BlockType`
\+ `r-` static log: `BlockType`
\+ `r-` static mud: `BlockType`
\+ `r-` static litPumpkin: `BlockType`
\+ `r-` static ice: `BlockType`
\+ `r-` static air: `BlockType`
\+ `r-` static bed: `BlockType`
\+ `r-` static tnt: `BlockType`
\+ `r-` static purpleCandleCake: `BlockType`
\+ `r-` static web: `BlockType`
\+ `r-` static polishedDioriteStairs: `BlockType`
\+ `r-` static cryingObsidian: `BlockType`
\+ `r-` static enchantingTable: `BlockType`
\+ `r-` static stoneSlab2: `BlockType`
\+ `r-` static stoneSlab3: `BlockType`
\+ `r-` static stoneSlab4: `BlockType`
\+ `r-` static polishedBlackstoneWall: `BlockType`
\+ `r-` static waxedExposedDoubleCutCopperSlab: `BlockType`
\+ `r-` static azalea: `BlockType`
\+ `r-` static mudBricks: `BlockType`
\+ `r-` static birchWallSign: `BlockType`
\+ `r-` static hopper: `BlockType`
\+ `r-` static bell: `BlockType`
\+ `r-` static lectern: `BlockType`
\+ `r-` static strippedCrimsonStem: `BlockType`
\+ `r-` static standingBanner: `BlockType`
\+ `r-` static jungleStairs: `BlockType`
\+ `r-` static grass: `BlockType`
\+ `r-` static mangrovePropagule: `BlockType`
\+ `r-` static cactus: `BlockType`
\+ `r-` static buddingAmethyst: `BlockType`
\+ `r-` static birchStairs: `BlockType`
\+ `r-` static purpleGlazedTerracotta: `BlockType`
\+ `r-` static bedrock: `BlockType`
\+ `r-` static blackstoneStairs: `BlockType`
\+ `r-` static blueIce: `BlockType`
\+ `r-` static polishedAndesiteStairs: `BlockType`
\+ `r-` static sculk: `BlockType`
\+ `r-` static netherrack: `BlockType`
\+ `r-` static purpleCandle: `BlockType`
\+ `r-` static spruceStandingSign: `BlockType`
\+ `r-` static lantern: `BlockType`
\+ `r-` static litBlastFurnace: `BlockType`
\+ `r-` static allow: `BlockType`
\+ `r-` static birchDoor: `BlockType`
\+ `r-` static chest: `BlockType`
\+ `r-` static chain: `BlockType`
\+ `r-` static clay: `BlockType`
\+ `r-` static cake: `BlockType`
\+ `r-` static sculkVein: `BlockType`
\+ `r-` static deepslateCoalOre: `BlockType`
\+ `r-` static weatheredCutCopper: `BlockType`
\+ `r-` static warpedStandingSign: `BlockType`
\+ `r-` static crackedPolishedBlackstoneBricks: `BlockType`
\+ `r-` static flowingLava: `BlockType`
\+ `r-` static acaciaButton: `BlockType`
\+ `r-` static litFurnace: `BlockType`
\+ `r-` static chiseledNetherBricks: `BlockType`
\+ `r-` static warpedButton: `BlockType`
\+ `r-` static deepslateLapisOre: `BlockType`
\+ `r-` static prismarineStairs: `BlockType`
\+ `r-` static dragonEgg: `BlockType`
\+ `r-` static netherBrick: `BlockType`
\+ `r-` static deepslateIronOre: `BlockType`
\+ `r-` static element1: `BlockType`
\+ `r-` static element0: `BlockType`
\+ `r-` static element3: `BlockType`
\+ `r-` static element2: `BlockType`
\+ `r-` static element5: `BlockType`
\+ `r-` static element4: `BlockType`
\+ `r-` static element7: `BlockType`
\+ `r-` static element6: `BlockType`
\+ `r-` static element9: `BlockType`
\+ `r-` static element8: `BlockType`
\+ `r-` static camera: `BlockType`
\+ `r-` static wheat: `BlockType`
\+ `r-` static waxedCutCopper: `BlockType`
\+ `r-` static chemistryTable: `BlockType`
\+ `r-` static cobbledDeepslateSlab: `BlockType`
\+ `r-` static sporeBlossom: `BlockType`
\+ `r-` static crimsonStandingSign: `BlockType`
\+ `r-` static darkoakStandingSign: `BlockType`
\+ `r-` static weatheredDoubleCutCopperSlab: `BlockType`
\+ `r-` static emeraldOre: `BlockType`
\+ `r-` static brownMushroomBlock: `BlockType`
\+ `r-` static fence: `BlockType`
\+ `r-` static pinkCandle: `BlockType`
\+ `r-` static carvedPumpkin: `BlockType`
\+ `r-` static dropper: `BlockType`
\+ `r-` static spruceWallSign: `BlockType`
\+ `r-` static strippedWarpedStem: `BlockType`
\+ `r-` static candle: `BlockType`
\+ `r-` static pointedDripstone: `BlockType`
\+ `r-` static netherreactor: `BlockType`
\+ `r-` static deepslateBrickStairs: `BlockType`
\+ `r-` static darkPrismarineStairs: `BlockType`
\+ `r-` static chemicalHeat: `BlockType`
\+ `r-` static tripWire: `BlockType`
\+ `r-` static cauldron: `BlockType`
\+ `r-` static caveVinesHeadWithBerries: `BlockType`
\+ `r-` static darkOakTrapdoor: `BlockType`
\+ `r-` static coloredTorchBp: `BlockType`
\+ `r-` static coloredTorchRg: `BlockType`
\+ `r-` static waxedOxidizedCopper: `BlockType`
\+ `r-` static strippedOakLog: `BlockType`
\+ `r-` static seaLantern: `BlockType`
\+ `r-` static brewingStand: `BlockType`
\+ `r-` static bambooSapling: `BlockType`
\+ `r-` static blastFurnace: `BlockType`
\+ `r-` static crimsonRoots: `BlockType`
\+ `r-` static stonecutterBlock: `BlockType`
\+ `r-` static whiteCandleCake: `BlockType`
\+ `r-` static candleCake: `BlockType`
\+ `r-` static endPortal: `BlockType`
\+ `r-` static blackstone: `BlockType`
\+ `r-` static acaciaFenceGate: `BlockType`
\+ `r-` static litDeepslateRedstoneOre: `BlockType`
\+ `r-` static element10: `BlockType`
\+ `r-` static element11: `BlockType`
\+ `r-` static element12: `BlockType`
\+ `r-` static element13: `BlockType`
\+ `r-` static element14: `BlockType`
\+ `r-` static element15: `BlockType`
\+ `r-` static element16: `BlockType`
\+ `r-` static element17: `BlockType`
\+ `r-` static element18: `BlockType`
\+ `r-` static element19: `BlockType`
\+ `r-` static element36: `BlockType`
\+ `r-` static element37: `BlockType`
\+ `r-` static element34: `BlockType`
\+ `r-` static element35: `BlockType`
\+ `r-` static element32: `BlockType`
\+ `r-` static element33: `BlockType`
\+ `r-` static element30: `BlockType`
\+ `r-` static element31: `BlockType`
\+ `r-` static element38: `BlockType`
\+ `r-` static element39: `BlockType`
\+ `r-` static element29: `BlockType`
\+ `r-` static element28: `BlockType`
\+ `r-` static element21: `BlockType`
\+ `r-` static element20: `BlockType`
\+ `r-` static element23: `BlockType`
\+ `r-` static element22: `BlockType`
\+ `r-` static element25: `BlockType`
\+ `r-` static element24: `BlockType`
\+ `r-` static element27: `BlockType`
\+ `r-` static element26: `BlockType`
\+ `r-` static element58: `BlockType`
\+ `r-` static element59: `BlockType`
\+ `r-` static element54: `BlockType`
\+ `r-` static element55: `BlockType`
\+ `r-` static element56: `BlockType`
\+ `r-` static element57: `BlockType`
\+ `r-` static element50: `BlockType`
\+ `r-` static element51: `BlockType`
\+ `r-` static element52: `BlockType`
\+ `r-` static element53: `BlockType`
\+ `r-` static element49: `BlockType`
\+ `r-` static element48: `BlockType`
\+ `r-` static element47: `BlockType`
\+ `r-` static element46: `BlockType`
\+ `r-` static element45: `BlockType`
\+ `r-` static element44: `BlockType`
\+ `r-` static element43: `BlockType`
\+ `r-` static element42: `BlockType`
\+ `r-` static element41: `BlockType`
\+ `r-` static element40: `BlockType`
\+ `r-` static element72: `BlockType`
\+ `r-` static element73: `BlockType`
\+ `r-` static element70: `BlockType`
\+ `r-` static element71: `BlockType`
\+ `r-` static element76: `BlockType`
\+ `r-` static element77: `BlockType`
\+ `r-` static element74: `BlockType`
\+ `r-` static element75: `BlockType`
\+ `r-` static element78: `BlockType`
\+ `r-` static element79: `BlockType`
\+ `r-` static element65: `BlockType`
\+ `r-` static element64: `BlockType`
\+ `r-` static element67: `BlockType`
\+ `r-` static element66: `BlockType`
\+ `r-` static element61: `BlockType`
\+ `r-` static element60: `BlockType`
\+ `r-` static element63: `BlockType`
\+ `r-` static element62: `BlockType`
\+ `r-` static element69: `BlockType`
\+ `r-` static element68: `BlockType`
\+ `r-` static element98: `BlockType`
\+ `r-` static element99: `BlockType`
\+ `r-` static element90: `BlockType`
\+ `r-` static element91: `BlockType`
\+ `r-` static element92: `BlockType`
\+ `r-` static element93: `BlockType`
\+ `r-` static element94: `BlockType`
\+ `r-` static element95: `BlockType`
\+ `r-` static element96: `BlockType`
\+ `r-` static element97: `BlockType`
\+ `r-` static element89: `BlockType`
\+ `r-` static element88: `BlockType`
\+ `r-` static element83: `BlockType`
\+ `r-` static element82: `BlockType`
\+ `r-` static element81: `BlockType`
\+ `r-` static element80: `BlockType`
\+ `r-` static element87: `BlockType`
\+ `r-` static element86: `BlockType`
\+ `r-` static element85: `BlockType`
\+ `r-` static element84: `BlockType`
\+ `r-` static litSmoker: `BlockType`
\+ `r-` static lapisOre: `BlockType`
\+ `r-` static smoothQuartzStairs: `BlockType`
\+ `r-` static redCandleCake: `BlockType`
\+ `r-` static azaleaLeaves: `BlockType`
\+ `r-` static purpurBlock: `BlockType`
\+ `r-` static cyanCandle: `BlockType`
\+ `r-` static waxedCopper: `BlockType`
\+ `r-` static repeatingCommandBlock: `BlockType`
\+ `r-` static netherWart: `BlockType`
\+ `r-` static waxedOxidizedDoubleCutCopperSlab: `BlockType`
\+ `r-` static crimsonFungus: `BlockType`
\+ `r-` static polishedDeepslate: `BlockType`
\+ `r-` static purpurStairs: `BlockType`
\+ `r-` static portal: `BlockType`
\+ `r-` static birchButton: `BlockType`
\+ `r-` static commandBlock: `BlockType`
\+ `r-` static polishedBlackstoneButton: `BlockType`
\+ `r-` static furnace: `BlockType`
\+ `r-` static infoUpdate2: `BlockType`
\+ `r-` static amethystCluster: `BlockType`
\+ `r-` static waxedCutCopperSlab: `BlockType`
\+ `r-` static polishedDeepslateWall: `BlockType`
\+ `r-` static driedKelpBlock: `BlockType`
\+ `r-` static lightBlock: `BlockType`
\+ `r-` static crimsonFence: `BlockType`
\+ `r-` static turtleEgg: `BlockType`
\+ `r-` static magma: `BlockType`
\+ `r-` static dispenser: `BlockType`
\+ `r-` static hardStainedGlassPane: `BlockType`
\+ `r-` static deepslateDiamondOre: `BlockType`
\+ `r-` static grindstone: `BlockType`
\+ `r-` static soulCampfire: `BlockType`
\+ `r-` static woodenPressurePlate: `BlockType`
\+ `r-` static limeCandleCake: `BlockType`
\+ `r-` static grassPath: `BlockType`
\+ `r-` static cobbledDeepslateWall: `BlockType`
\+ `r-` static orangeCandleCake: `BlockType`
\+ `r-` static weatheredCopper: `BlockType`
\+ `r-` static unlitRedstoneTorch: `BlockType`
\+ `r-` static grayGlazedTerracotta: `BlockType`
\+ `r-` static lodestone: `BlockType`
\+ `r-` static rawIronBlock: `BlockType`
\+ `r-` static ironBlock: `BlockType`
\+ `r-` static ladder: `BlockType`
\+ `r-` static crimsonPressurePlate: `BlockType`
\+ `r-` static gravel: `BlockType`
\+ `r-` static cartographyTable: `BlockType`
\+ `r-` static getAllBlockTypes (  ): `array`
\+ `r-` static get ( typeName: `string` ): `BlockType`
### Color
\+ `rw` red: `float`
\+ `rw` green: `float`
\+ `rw` blue: `float`
\+ `rw` alpha: `float`
\+ `r-` constructor ( red: `float`, green: `float`, blue: `float`, alpha: `float` ): `Color`
### MinecraftDimensionTypes
\+ `r-` static overworld: `string`
\+ `r-` static nether: `string`
\+ `r-` static theEnd: `string`
### Location
\+ `rw` x: `float`
\+ `rw` y: `float`
\+ `rw` z: `float`
\+ `r-` equals ( other: `Location` ): `boolean`
\+ `r-` isNear ( other: `Location`, epsilon: `float` ): `boolean`
\+ `r-` constructor ( x: `float`, y: `float`, z: `float` ): `Location`
### MolangVariableMap
\+ `r-` setColorRGB ( variableName: `string`, color: `Color` ): `MolangVariableMap`
\+ `r-` setColorRGBA ( variableName: `string`, color: `Color` ): `MolangVariableMap`
\+ `r-` setSpeedAndDirection ( variableName: `string`, speed: `float`, direction: `Vector` ): `MolangVariableMap`
\+ `r-` setVector3 ( variableName: `string`, vector: `Vector` ): `MolangVariableMap`
\+ `r-` constructor (  ): `MolangVariableMap`
### Vector
\+ `r-` static forward: `Vector`
\+ `r-` static back: `Vector`
\+ `r-` static up: `Vector`
\+ `r-` static down: `Vector`
\+ `r-` static left: `Vector`
\+ `r-` static right: `Vector`
\+ `r-` static zero: `Vector`
\+ `r-` static one: `Vector`
\+ `rw` x: `float`
\+ `rw` y: `float`
\+ `rw` z: `float`
\+ `r-` equals ( other: `Vector` ): `boolean`
\+ `r-` length (  ): `float`
\+ `r-` normalized (  ): `Vector`
\+ `r-` static distance ( a: `Vector`, b: `Vector` ): `float`
\+ `r-` static lerp ( a: `Vector`, b: `Vector`, t: `float` ): `Vector`
\+ `r-` static slerp ( a: `Vector`, b: `Vector`, s: `float` ): `Vector`
\+ `r-` static cross ( a: `Vector`, b: `Vector` ): `Vector`
\+ `r-` static add ( a: `Vector`, b: `Vector` ): `Vector`
\+ `r-` static subtract ( a: `Vector`, b: `Vector` ): `Vector`
\+ `r-` static multiply ( a: `Vector`, b: `variant` ): `Vector`
\+ `r-` static divide ( a: `Vector`, b: `variant` ): `Vector`
\+ `r-` static min ( a: `Vector`, b: `Vector` ): `Vector`
\+ `r-` static max ( a: `Vector`, b: `Vector` ): `Vector`
\+ `r-` constructor ( x: `float`, y: `float`, z: `float` ): `Vector`
### NumberRange
\+ `rw` min: `float`
\+ `rw` max: `float`
\+ `r-` next (  ): `float`
### Dimension
\+ `r-` id: `string`
\+ `r-` isEmpty ( location: `BlockLocation` ): `boolean`
\+ `r-` getEntitiesAtBlockLocation ( location: `BlockLocation` ): `array`
\+ `r-` getBlock ( location: `BlockLocation` ): `Block`
\+ `r-` createExplosion ( location: `Location`, radius: `float`, explosionOptions: `ExplosionOptions` ): `void`
\+ `r-` runCommand ( commandString: `string` ): `any`
\+ `r-` getEntitiesFromRay ( location: `Location`, direction: `Vector`, options: `EntityRaycastOptions` ): `array`
\+ `r-` getBlockFromRay ( location: `Location`, direction: `Vector`, options: `BlockRaycastOptions` ): `Block`
\+ `r-` getEntities ( getEntities: `EntityQueryOptions` ): `EntityIterator`
\+ `r-` getPlayers ( getPlayers: `EntityQueryOptions` ): `PlayerIterator`
\+ `r-` spawnItem ( item: `ItemStack`, location: `variant` ): `Entity`
\+ `r-` spawnEntity ( identifier: `string`, location: `variant` ): `Entity`
\+ `r-` spawnParticle ( effectName: `string`, location: `Location`, molangVariables: `MolangVariableMap` ): `void`
### MinecraftItemTypes
\+ `r-` static air: `ItemType`
\+ `r-` static apple: `ItemType`
\+ `r-` static goldenApple: `ItemType`
\+ `r-` static enchantedGoldenApple: `ItemType`
\+ `r-` static mushroomStew: `ItemType`
\+ `r-` static bread: `ItemType`
\+ `r-` static porkchop: `ItemType`
\+ `r-` static cookedPorkchop: `ItemType`
\+ `r-` static cod: `ItemType`
\+ `r-` static salmon: `ItemType`
\+ `r-` static tropicalFish: `ItemType`
\+ `r-` static pufferfish: `ItemType`
\+ `r-` static cookedCod: `ItemType`
\+ `r-` static cookedSalmon: `ItemType`
\+ `r-` static driedKelp: `ItemType`
\+ `r-` static cookie: `ItemType`
\+ `r-` static melonSlice: `ItemType`
\+ `r-` static beef: `ItemType`
\+ `r-` static cookedBeef: `ItemType`
\+ `r-` static chicken: `ItemType`
\+ `r-` static cookedChicken: `ItemType`
\+ `r-` static rottenFlesh: `ItemType`
\+ `r-` static spiderEye: `ItemType`
\+ `r-` static carrot: `ItemType`
\+ `r-` static potato: `ItemType`
\+ `r-` static bakedPotato: `ItemType`
\+ `r-` static poisonousPotato: `ItemType`
\+ `r-` static goldenCarrot: `ItemType`
\+ `r-` static pumpkinPie: `ItemType`
\+ `r-` static beetroot: `ItemType`
\+ `r-` static beetrootSoup: `ItemType`
\+ `r-` static sweetBerries: `ItemType`
\+ `r-` static rabbit: `ItemType`
\+ `r-` static cookedRabbit: `ItemType`
\+ `r-` static rabbitStew: `ItemType`
\+ `r-` static wheatSeeds: `ItemType`
\+ `r-` static pumpkinSeeds: `ItemType`
\+ `r-` static melonSeeds: `ItemType`
\+ `r-` static netherWart: `ItemType`
\+ `r-` static beetrootSeeds: `ItemType`
\+ `r-` static ironShovel: `ItemType`
\+ `r-` static ironPickaxe: `ItemType`
\+ `r-` static ironAxe: `ItemType`
\+ `r-` static flintAndSteel: `ItemType`
\+ `r-` static bow: `ItemType`
\+ `r-` static arrow: `ItemType`
\+ `r-` static coal: `ItemType`
\+ `r-` static charcoal: `ItemType`
\+ `r-` static diamond: `ItemType`
\+ `r-` static ironIngot: `ItemType`
\+ `r-` static goldIngot: `ItemType`
\+ `r-` static ironSword: `ItemType`
\+ `r-` static woodenSword: `ItemType`
\+ `r-` static woodenShovel: `ItemType`
\+ `r-` static woodenPickaxe: `ItemType`
\+ `r-` static woodenAxe: `ItemType`
\+ `r-` static stoneSword: `ItemType`
\+ `r-` static stoneShovel: `ItemType`
\+ `r-` static stonePickaxe: `ItemType`
\+ `r-` static stoneAxe: `ItemType`
\+ `r-` static diamondSword: `ItemType`
\+ `r-` static diamondShovel: `ItemType`
\+ `r-` static diamondPickaxe: `ItemType`
\+ `r-` static diamondAxe: `ItemType`
\+ `r-` static stick: `ItemType`
\+ `r-` static bowl: `ItemType`
\+ `r-` static goldenSword: `ItemType`
\+ `r-` static goldenShovel: `ItemType`
\+ `r-` static goldenPickaxe: `ItemType`
\+ `r-` static goldenAxe: `ItemType`
\+ `r-` static string: `ItemType`
\+ `r-` static feather: `ItemType`
\+ `r-` static gunpowder: `ItemType`
\+ `r-` static woodenHoe: `ItemType`
\+ `r-` static stoneHoe: `ItemType`
\+ `r-` static ironHoe: `ItemType`
\+ `r-` static diamondHoe: `ItemType`
\+ `r-` static goldenHoe: `ItemType`
\+ `r-` static wheat: `ItemType`
\+ `r-` static leatherHelmet: `ItemType`
\+ `r-` static leatherChestplate: `ItemType`
\+ `r-` static leatherLeggings: `ItemType`
\+ `r-` static leatherBoots: `ItemType`
\+ `r-` static chainmailHelmet: `ItemType`
\+ `r-` static chainmailChestplate: `ItemType`
\+ `r-` static chainmailLeggings: `ItemType`
\+ `r-` static chainmailBoots: `ItemType`
\+ `r-` static ironHelmet: `ItemType`
\+ `r-` static ironChestplate: `ItemType`
\+ `r-` static ironLeggings: `ItemType`
\+ `r-` static ironBoots: `ItemType`
\+ `r-` static diamondHelmet: `ItemType`
\+ `r-` static diamondChestplate: `ItemType`
\+ `r-` static diamondLeggings: `ItemType`
\+ `r-` static diamondBoots: `ItemType`
\+ `r-` static goldenHelmet: `ItemType`
\+ `r-` static goldenChestplate: `ItemType`
\+ `r-` static goldenLeggings: `ItemType`
\+ `r-` static goldenBoots: `ItemType`
\+ `r-` static shield: `ItemType`
\+ `r-` static flint: `ItemType`
\+ `r-` static painting: `ItemType`
\+ `r-` static oakSign: `ItemType`
\+ `r-` static woodenDoor: `ItemType`
\+ `r-` static bucket: `ItemType`
\+ `r-` static milkBucket: `ItemType`
\+ `r-` static waterBucket: `ItemType`
\+ `r-` static lavaBucket: `ItemType`
\+ `r-` static codBucket: `ItemType`
\+ `r-` static salmonBucket: `ItemType`
\+ `r-` static tropicalFishBucket: `ItemType`
\+ `r-` static pufferfishBucket: `ItemType`
\+ `r-` static powderSnowBucket: `ItemType`
\+ `r-` static axolotlBucket: `ItemType`
\+ `r-` static minecart: `ItemType`
\+ `r-` static saddle: `ItemType`
\+ `r-` static ironDoor: `ItemType`
\+ `r-` static redstone: `ItemType`
\+ `r-` static snowball: `ItemType`
\+ `r-` static oakBoat: `ItemType`
\+ `r-` static birchBoat: `ItemType`
\+ `r-` static jungleBoat: `ItemType`
\+ `r-` static spruceBoat: `ItemType`
\+ `r-` static acaciaBoat: `ItemType`
\+ `r-` static darkOakBoat: `ItemType`
\+ `r-` static leather: `ItemType`
\+ `r-` static kelp: `ItemType`
\+ `r-` static brick: `ItemType`
\+ `r-` static clayBall: `ItemType`
\+ `r-` static sugarCane: `ItemType`
\+ `r-` static paper: `ItemType`
\+ `r-` static book: `ItemType`
\+ `r-` static slimeBall: `ItemType`
\+ `r-` static chestMinecart: `ItemType`
\+ `r-` static egg: `ItemType`
\+ `r-` static compass: `ItemType`
\+ `r-` static fishingRod: `ItemType`
\+ `r-` static clock: `ItemType`
\+ `r-` static glowstoneDust: `ItemType`
\+ `r-` static blackDye: `ItemType`
\+ `r-` static redDye: `ItemType`
\+ `r-` static greenDye: `ItemType`
\+ `r-` static brownDye: `ItemType`
\+ `r-` static blueDye: `ItemType`
\+ `r-` static purpleDye: `ItemType`
\+ `r-` static cyanDye: `ItemType`
\+ `r-` static lightGrayDye: `ItemType`
\+ `r-` static grayDye: `ItemType`
\+ `r-` static pinkDye: `ItemType`
\+ `r-` static limeDye: `ItemType`
\+ `r-` static yellowDye: `ItemType`
\+ `r-` static lightBlueDye: `ItemType`
\+ `r-` static magentaDye: `ItemType`
\+ `r-` static orangeDye: `ItemType`
\+ `r-` static whiteDye: `ItemType`
\+ `r-` static boneMeal: `ItemType`
\+ `r-` static cocoaBeans: `ItemType`
\+ `r-` static inkSac: `ItemType`
\+ `r-` static lapisLazuli: `ItemType`
\+ `r-` static bone: `ItemType`
\+ `r-` static sugar: `ItemType`
\+ `r-` static cake: `ItemType`
\+ `r-` static bed: `ItemType`
\+ `r-` static repeater: `ItemType`
\+ `r-` static filledMap: `ItemType`
\+ `r-` static shears: `ItemType`
\+ `r-` static enderPearl: `ItemType`
\+ `r-` static blazeRod: `ItemType`
\+ `r-` static ghastTear: `ItemType`
\+ `r-` static goldNugget: `ItemType`
\+ `r-` static potion: `ItemType`
\+ `r-` static glassBottle: `ItemType`
\+ `r-` static fermentedSpiderEye: `ItemType`
\+ `r-` static blazePowder: `ItemType`
\+ `r-` static magmaCream: `ItemType`
\+ `r-` static brewingStand: `ItemType`
\+ `r-` static cauldron: `ItemType`
\+ `r-` static enderEye: `ItemType`
\+ `r-` static glisteringMelonSlice: `ItemType`
\+ `r-` static chickenSpawnEgg: `ItemType`
\+ `r-` static cowSpawnEgg: `ItemType`
\+ `r-` static pigSpawnEgg: `ItemType`
\+ `r-` static sheepSpawnEgg: `ItemType`
\+ `r-` static wolfSpawnEgg: `ItemType`
\+ `r-` static mooshroomSpawnEgg: `ItemType`
\+ `r-` static creeperSpawnEgg: `ItemType`
\+ `r-` static endermanSpawnEgg: `ItemType`
\+ `r-` static silverfishSpawnEgg: `ItemType`
\+ `r-` static skeletonSpawnEgg: `ItemType`
\+ `r-` static slimeSpawnEgg: `ItemType`
\+ `r-` static spiderSpawnEgg: `ItemType`
\+ `r-` static zombieSpawnEgg: `ItemType`
\+ `r-` static zombiePigmanSpawnEgg: `ItemType`
\+ `r-` static villagerSpawnEgg: `ItemType`
\+ `r-` static squidSpawnEgg: `ItemType`
\+ `r-` static ocelotSpawnEgg: `ItemType`
\+ `r-` static witchSpawnEgg: `ItemType`
\+ `r-` static batSpawnEgg: `ItemType`
\+ `r-` static ghastSpawnEgg: `ItemType`
\+ `r-` static magmaCubeSpawnEgg: `ItemType`
\+ `r-` static blazeSpawnEgg: `ItemType`
\+ `r-` static caveSpiderSpawnEgg: `ItemType`
\+ `r-` static horseSpawnEgg: `ItemType`
\+ `r-` static rabbitSpawnEgg: `ItemType`
\+ `r-` static endermiteSpawnEgg: `ItemType`
\+ `r-` static guardianSpawnEgg: `ItemType`
\+ `r-` static straySpawnEgg: `ItemType`
\+ `r-` static huskSpawnEgg: `ItemType`
\+ `r-` static witherSkeletonSpawnEgg: `ItemType`
\+ `r-` static donkeySpawnEgg: `ItemType`
\+ `r-` static muleSpawnEgg: `ItemType`
\+ `r-` static skeletonHorseSpawnEgg: `ItemType`
\+ `r-` static zombieHorseSpawnEgg: `ItemType`
\+ `r-` static shulkerSpawnEgg: `ItemType`
\+ `r-` static npcSpawnEgg: `ItemType`
\+ `r-` static elderGuardianSpawnEgg: `ItemType`
\+ `r-` static polarBearSpawnEgg: `ItemType`
\+ `r-` static llamaSpawnEgg: `ItemType`
\+ `r-` static vindicatorSpawnEgg: `ItemType`
\+ `r-` static evokerSpawnEgg: `ItemType`
\+ `r-` static vexSpawnEgg: `ItemType`
\+ `r-` static zombieVillagerSpawnEgg: `ItemType`
\+ `r-` static parrotSpawnEgg: `ItemType`
\+ `r-` static tropicalFishSpawnEgg: `ItemType`
\+ `r-` static codSpawnEgg: `ItemType`
\+ `r-` static pufferfishSpawnEgg: `ItemType`
\+ `r-` static salmonSpawnEgg: `ItemType`
\+ `r-` static drownedSpawnEgg: `ItemType`
\+ `r-` static dolphinSpawnEgg: `ItemType`
\+ `r-` static turtleSpawnEgg: `ItemType`
\+ `r-` static phantomSpawnEgg: `ItemType`
\+ `r-` static agentSpawnEgg: `ItemType`
\+ `r-` static catSpawnEgg: `ItemType`
\+ `r-` static pandaSpawnEgg: `ItemType`
\+ `r-` static foxSpawnEgg: `ItemType`
\+ `r-` static pillagerSpawnEgg: `ItemType`
\+ `r-` static wanderingTraderSpawnEgg: `ItemType`
\+ `r-` static ravagerSpawnEgg: `ItemType`
\+ `r-` static beeSpawnEgg: `ItemType`
\+ `r-` static striderSpawnEgg: `ItemType`
\+ `r-` static hoglinSpawnEgg: `ItemType`
\+ `r-` static piglinSpawnEgg: `ItemType`
\+ `r-` static zoglinSpawnEgg: `ItemType`
\+ `r-` static piglinBruteSpawnEgg: `ItemType`
\+ `r-` static axolotlSpawnEgg: `ItemType`
\+ `r-` static goatSpawnEgg: `ItemType`
\+ `r-` static glowSquidSpawnEgg: `ItemType`
\+ `r-` static glowInkSac: `ItemType`
\+ `r-` static copperIngot: `ItemType`
\+ `r-` static copperBlock: `ItemType`
\+ `r-` static cutCopper: `ItemType`
\+ `r-` static cutCopperStairs: `ItemType`
\+ `r-` static cutCopperSlab: `ItemType`
\+ `r-` static exposedCutCopperSlab: `ItemType`
\+ `r-` static weatheredCutCopperSlab: `ItemType`
\+ `r-` static oxidizedCutCopperSlab: `ItemType`
\+ `r-` static waxedCutCopperSlab: `ItemType`
\+ `r-` static waxedExposedCutCopperSlab: `ItemType`
\+ `r-` static waxedWeatheredCutCopperSlab: `ItemType`
\+ `r-` static waxedOxidizedCutCopperSlab: `ItemType`
\+ `r-` static rawIron: `ItemType`
\+ `r-` static rawGold: `ItemType`
\+ `r-` static rawCopper: `ItemType`
\+ `r-` static experienceBottle: `ItemType`
\+ `r-` static fireCharge: `ItemType`
\+ `r-` static writableBook: `ItemType`
\+ `r-` static writtenBook: `ItemType`
\+ `r-` static emerald: `ItemType`
\+ `r-` static frame: `ItemType`
\+ `r-` static flowerPot: `ItemType`
\+ `r-` static emptyMap: `ItemType`
\+ `r-` static skull: `ItemType`
\+ `r-` static carrotOnAStick: `ItemType`
\+ `r-` static netherStar: `ItemType`
\+ `r-` static fireworkRocket: `ItemType`
\+ `r-` static fireworkStar: `ItemType`
\+ `r-` static enchantedBook: `ItemType`
\+ `r-` static comparator: `ItemType`
\+ `r-` static netherbrick: `ItemType`
\+ `r-` static quartz: `ItemType`
\+ `r-` static tntMinecart: `ItemType`
\+ `r-` static hopperMinecart: `ItemType`
\+ `r-` static hopper: `ItemType`
\+ `r-` static rabbitFoot: `ItemType`
\+ `r-` static rabbitHide: `ItemType`
\+ `r-` static leatherHorseArmor: `ItemType`
\+ `r-` static ironHorseArmor: `ItemType`
\+ `r-` static goldenHorseArmor: `ItemType`
\+ `r-` static diamondHorseArmor: `ItemType`
\+ `r-` static musicDisc13: `ItemType`
\+ `r-` static musicDiscCat: `ItemType`
\+ `r-` static musicDiscBlocks: `ItemType`
\+ `r-` static musicDiscChirp: `ItemType`
\+ `r-` static musicDiscFar: `ItemType`
\+ `r-` static musicDiscMall: `ItemType`
\+ `r-` static musicDiscMellohi: `ItemType`
\+ `r-` static musicDiscStal: `ItemType`
\+ `r-` static musicDiscStrad: `ItemType`
\+ `r-` static musicDiscWard: `ItemType`
\+ `r-` static musicDisc11: `ItemType`
\+ `r-` static musicDiscWait: `ItemType`
\+ `r-` static trident: `ItemType`
\+ `r-` static lead: `ItemType`
\+ `r-` static nameTag: `ItemType`
\+ `r-` static prismarineCrystals: `ItemType`
\+ `r-` static mutton: `ItemType`
\+ `r-` static cookedMutton: `ItemType`
\+ `r-` static armorStand: `ItemType`
\+ `r-` static spruceDoor: `ItemType`
\+ `r-` static birchDoor: `ItemType`
\+ `r-` static jungleDoor: `ItemType`
\+ `r-` static acaciaDoor: `ItemType`
\+ `r-` static darkOakDoor: `ItemType`
\+ `r-` static chorusFruit: `ItemType`
\+ `r-` static poppedChorusFruit: `ItemType`
\+ `r-` static dragonBreath: `ItemType`
\+ `r-` static splashPotion: `ItemType`
\+ `r-` static lingeringPotion: `ItemType`
\+ `r-` static commandBlockMinecart: `ItemType`
\+ `r-` static elytra: `ItemType`
\+ `r-` static prismarineShard: `ItemType`
\+ `r-` static shulkerShell: `ItemType`
\+ `r-` static banner: `ItemType`
\+ `r-` static totemOfUndying: `ItemType`
\+ `r-` static ironNugget: `ItemType`
\+ `r-` static nautilusShell: `ItemType`
\+ `r-` static heartOfTheSea: `ItemType`
\+ `r-` static scute: `ItemType`
\+ `r-` static turtleHelmet: `ItemType`
\+ `r-` static phantomMembrane: `ItemType`
\+ `r-` static crossbow: `ItemType`
\+ `r-` static spruceSign: `ItemType`
\+ `r-` static birchSign: `ItemType`
\+ `r-` static jungleSign: `ItemType`
\+ `r-` static acaciaSign: `ItemType`
\+ `r-` static darkOakSign: `ItemType`
\+ `r-` static flowerBannerPattern: `ItemType`
\+ `r-` static creeperBannerPattern: `ItemType`
\+ `r-` static skullBannerPattern: `ItemType`
\+ `r-` static mojangBannerPattern: `ItemType`
\+ `r-` static fieldMasonedBannerPattern: `ItemType`
\+ `r-` static bordureIndentedBannerPattern: `ItemType`
\+ `r-` static piglinBannerPattern: `ItemType`
\+ `r-` static globeBannerPattern: `ItemType`
\+ `r-` static campfire: `ItemType`
\+ `r-` static suspiciousStew: `ItemType`
\+ `r-` static debugStick: `ItemType`
\+ `r-` static honeycomb: `ItemType`
\+ `r-` static honeyBottle: `ItemType`
\+ `r-` static camera: `ItemType`
\+ `r-` static compound: `ItemType`
\+ `r-` static iceBomb: `ItemType`
\+ `r-` static bleach: `ItemType`
\+ `r-` static rapidFertilizer: `ItemType`
\+ `r-` static balloon: `ItemType`
\+ `r-` static medicine: `ItemType`
\+ `r-` static sparkler: `ItemType`
\+ `r-` static glowStick: `ItemType`
\+ `r-` static lodestoneCompass: `ItemType`
\+ `r-` static netheriteIngot: `ItemType`
\+ `r-` static netheriteSword: `ItemType`
\+ `r-` static netheriteShovel: `ItemType`
\+ `r-` static netheritePickaxe: `ItemType`
\+ `r-` static netheriteAxe: `ItemType`
\+ `r-` static netheriteHoe: `ItemType`
\+ `r-` static netheriteHelmet: `ItemType`
\+ `r-` static netheriteChestplate: `ItemType`
\+ `r-` static netheriteLeggings: `ItemType`
\+ `r-` static netheriteBoots: `ItemType`
\+ `r-` static netheriteScrap: `ItemType`
\+ `r-` static crimsonSign: `ItemType`
\+ `r-` static warpedSign: `ItemType`
\+ `r-` static crimsonDoor: `ItemType`
\+ `r-` static warpedDoor: `ItemType`
\+ `r-` static warpedFungusOnAStick: `ItemType`
\+ `r-` static chain: `ItemType`
\+ `r-` static musicDiscPigstep: `ItemType`
\+ `r-` static netherSprouts: `ItemType`
\+ `r-` static blackstoneSlab: `ItemType`
\+ `r-` static polishedBlackstoneBrickSlab: `ItemType`
\+ `r-` static polishedBlackstoneSlab: `ItemType`
\+ `r-` static soulCampfire: `ItemType`
\+ `r-` static glowFrame: `ItemType`
\+ `r-` static cobbledDeepslateSlab: `ItemType`
\+ `r-` static polishedDeepslateSlab: `ItemType`
\+ `r-` static deepslateTileSlab: `ItemType`
\+ `r-` static deepslateBrickSlab: `ItemType`
\+ `r-` static amethystShard: `ItemType`
\+ `r-` static spyglass: `ItemType`
\+ `r-` static musicDiscOtherside: `ItemType`
\+ `r-` static frogSpawnEgg: `ItemType`
\+ `r-` static tadpoleSpawnEgg: `ItemType`
\+ `r-` static frogSpawn: `ItemType`
\+ `r-` static tadpoleBucket: `ItemType`
\+ `r-` static allaySpawnEgg: `ItemType`
\+ `r-` static wardenSpawnEgg: `ItemType`
\+ `r-` static fireflySpawnEgg: `ItemType`
\+ `r-` static mudBrickSlab: `ItemType`
\+ `r-` static mangroveLeaves: `ItemType`
\+ `r-` static mangrovePropagule: `ItemType`
\+ `r-` static oakChestBoat: `ItemType`
\+ `r-` static birchChestBoat: `ItemType`
\+ `r-` static jungleChestBoat: `ItemType`
\+ `r-` static spruceChestBoat: `ItemType`
\+ `r-` static acaciaChestBoat: `ItemType`
\+ `r-` static darkOakChestBoat: `ItemType`
\+ `r-` static chestBoat: `ItemType`
\+ `r-` static stone: `ItemType`
\+ `r-` static dirt: `ItemType`
\+ `r-` static farmland: `ItemType`
\+ `r-` static sand: `ItemType`
\+ `r-` static stainedHardenedClay: `ItemType`
\+ `r-` static wool: `ItemType`
\+ `r-` static carpet: `ItemType`
\+ `r-` static log: `ItemType`
\+ `r-` static fence: `ItemType`
\+ `r-` static stonebrick: `ItemType`
\+ `r-` static coralBlock: `ItemType`
\+ `r-` static doubleStoneSlab: `ItemType`
\+ `r-` static doubleStoneSlab2: `ItemType`
\+ `r-` static doubleStoneSlab3: `ItemType`
\+ `r-` static doubleStoneSlab4: `ItemType`
\+ `r-` static realDoubleStoneSlab: `ItemType`
\+ `r-` static realDoubleStoneSlab2: `ItemType`
\+ `r-` static realDoubleStoneSlab3: `ItemType`
\+ `r-` static realDoubleStoneSlab4: `ItemType`
\+ `r-` static coralFan: `ItemType`
\+ `r-` static coralFanDead: `ItemType`
\+ `r-` static seaPickle: `ItemType`
\+ `r-` static sapling: `ItemType`
\+ `r-` static leaves: `ItemType`
\+ `r-` static leaves2: `ItemType`
\+ `r-` static azaleaLeaves: `ItemType`
\+ `r-` static azaleaLeavesFlowered: `ItemType`
\+ `r-` static sandstone: `ItemType`
\+ `r-` static redSandstone: `ItemType`
\+ `r-` static woodenSlab: `ItemType`
\+ `r-` static crimsonRoots: `ItemType`
\+ `r-` static warpedRoots: `ItemType`
\+ `r-` static yellowFlower: `ItemType`
\+ `r-` static redFlower: `ItemType`
\+ `r-` static doublePlant: `ItemType`
\+ `r-` static waterlily: `ItemType`
\+ `r-` static sponge: `ItemType`
\+ `r-` static snowLayer: `ItemType`
\+ `r-` static planks: `ItemType`
\+ `r-` static quartzBlock: `ItemType`
\+ `r-` static purpurBlock: `ItemType`
\+ `r-` static cobblestoneWall: `ItemType`
\+ `r-` static coral: `ItemType`
\+ `r-` static tallgrass: `ItemType`
\+ `r-` static seagrass: `ItemType`
\+ `r-` static brownMushroomBlock: `ItemType`
\+ `r-` static redMushroomBlock: `ItemType`
\+ `r-` static log2: `ItemType`
\+ `r-` static endPortalFrame: `ItemType`
\+ `r-` static anvil: `ItemType`
\+ `r-` static monsterEgg: `ItemType`
\+ `r-` static beacon: `ItemType`
\+ `r-` static conduit: `ItemType`
\+ `r-` static prismarine: `ItemType`
\+ `r-` static seaLantern: `ItemType`
\+ `r-` static concrete: `ItemType`
\+ `r-` static concretePowder: `ItemType`
\+ `r-` static magma: `ItemType`
\+ `r-` static stainedGlass: `ItemType`
\+ `r-` static stainedGlassPane: `ItemType`
\+ `r-` static undyedShulkerBox: `ItemType`
\+ `r-` static shulkerBox: `ItemType`
\+ `r-` static piston: `ItemType`
\+ `r-` static stickyPiston: `ItemType`
\+ `r-` static turtleEgg: `ItemType`
\+ `r-` static bamboo: `ItemType`
\+ `r-` static scaffolding: `ItemType`
\+ `r-` static blastFurnace: `ItemType`
\+ `r-` static smoker: `ItemType`
\+ `r-` static smithingTable: `ItemType`
\+ `r-` static barrel: `ItemType`
\+ `r-` static lantern: `ItemType`
\+ `r-` static loom: `ItemType`
\+ `r-` static grindstone: `ItemType`
\+ `r-` static bell: `ItemType`
\+ `r-` static cartographyTable: `ItemType`
\+ `r-` static fletchingTable: `ItemType`
\+ `r-` static wood: `ItemType`
\+ `r-` static chemistryTable: `ItemType`
\+ `r-` static tnt: `ItemType`
\+ `r-` static hardStainedGlass: `ItemType`
\+ `r-` static hardStainedGlassPane: `ItemType`
\+ `r-` static coloredTorchRg: `ItemType`
\+ `r-` static coloredTorchBp: `ItemType`
\+ `r-` static lightBlock: `ItemType`
\+ `r-` static pumpkin: `ItemType`
\+ `r-` static carvedPumpkin: `ItemType`
\+ `r-` static litPumpkin: `ItemType`
\+ `r-` static crimsonSlab: `ItemType`
\+ `r-` static warpedSlab: `ItemType`
\+ `r-` static candle: `ItemType`
\+ `r-` static whiteCandle: `ItemType`
\+ `r-` static orangeCandle: `ItemType`
\+ `r-` static magentaCandle: `ItemType`
\+ `r-` static lightBlueCandle: `ItemType`
\+ `r-` static yellowCandle: `ItemType`
\+ `r-` static limeCandle: `ItemType`
\+ `r-` static pinkCandle: `ItemType`
\+ `r-` static grayCandle: `ItemType`
\+ `r-` static lightGrayCandle: `ItemType`
\+ `r-` static cyanCandle: `ItemType`
\+ `r-` static purpleCandle: `ItemType`
\+ `r-` static blueCandle: `ItemType`
\+ `r-` static brownCandle: `ItemType`
\+ `r-` static greenCandle: `ItemType`
\+ `r-` static redCandle: `ItemType`
\+ `r-` static blackCandle: `ItemType`
\+ `r-` static element0: `ItemType`
\+ `r-` static element1: `ItemType`
\+ `r-` static element2: `ItemType`
\+ `r-` static element3: `ItemType`
\+ `r-` static element4: `ItemType`
\+ `r-` static element5: `ItemType`
\+ `r-` static element6: `ItemType`
\+ `r-` static element7: `ItemType`
\+ `r-` static element8: `ItemType`
\+ `r-` static element9: `ItemType`
\+ `r-` static element10: `ItemType`
\+ `r-` static element11: `ItemType`
\+ `r-` static element12: `ItemType`
\+ `r-` static element13: `ItemType`
\+ `r-` static element14: `ItemType`
\+ `r-` static element15: `ItemType`
\+ `r-` static element16: `ItemType`
\+ `r-` static element17: `ItemType`
\+ `r-` static element18: `ItemType`
\+ `r-` static element19: `ItemType`
\+ `r-` static element20: `ItemType`
\+ `r-` static element21: `ItemType`
\+ `r-` static element22: `ItemType`
\+ `r-` static element23: `ItemType`
\+ `r-` static element24: `ItemType`
\+ `r-` static element25: `ItemType`
\+ `r-` static element26: `ItemType`
\+ `r-` static element27: `ItemType`
\+ `r-` static element28: `ItemType`
\+ `r-` static element29: `ItemType`
\+ `r-` static element30: `ItemType`
\+ `r-` static element31: `ItemType`
\+ `r-` static element32: `ItemType`
\+ `r-` static element33: `ItemType`
\+ `r-` static element34: `ItemType`
\+ `r-` static element35: `ItemType`
\+ `r-` static element36: `ItemType`
\+ `r-` static element37: `ItemType`
\+ `r-` static element38: `ItemType`
\+ `r-` static element39: `ItemType`
\+ `r-` static element40: `ItemType`
\+ `r-` static element41: `ItemType`
\+ `r-` static element42: `ItemType`
\+ `r-` static element43: `ItemType`
\+ `r-` static element44: `ItemType`
\+ `r-` static element45: `ItemType`
\+ `r-` static element46: `ItemType`
\+ `r-` static element47: `ItemType`
\+ `r-` static element48: `ItemType`
\+ `r-` static element49: `ItemType`
\+ `r-` static element50: `ItemType`
\+ `r-` static element51: `ItemType`
\+ `r-` static element52: `ItemType`
\+ `r-` static element53: `ItemType`
\+ `r-` static element54: `ItemType`
\+ `r-` static element55: `ItemType`
\+ `r-` static element56: `ItemType`
\+ `r-` static element57: `ItemType`
\+ `r-` static element58: `ItemType`
\+ `r-` static element59: `ItemType`
\+ `r-` static element60: `ItemType`
\+ `r-` static element61: `ItemType`
\+ `r-` static element62: `ItemType`
\+ `r-` static element63: `ItemType`
\+ `r-` static element64: `ItemType`
\+ `r-` static element65: `ItemType`
\+ `r-` static element66: `ItemType`
\+ `r-` static element67: `ItemType`
\+ `r-` static element68: `ItemType`
\+ `r-` static element69: `ItemType`
\+ `r-` static element70: `ItemType`
\+ `r-` static element71: `ItemType`
\+ `r-` static element72: `ItemType`
\+ `r-` static element73: `ItemType`
\+ `r-` static element74: `ItemType`
\+ `r-` static element75: `ItemType`
\+ `r-` static element76: `ItemType`
\+ `r-` static element77: `ItemType`
\+ `r-` static element78: `ItemType`
\+ `r-` static element79: `ItemType`
\+ `r-` static element80: `ItemType`
\+ `r-` static element81: `ItemType`
\+ `r-` static element82: `ItemType`
\+ `r-` static element83: `ItemType`
\+ `r-` static element84: `ItemType`
\+ `r-` static element85: `ItemType`
\+ `r-` static element86: `ItemType`
\+ `r-` static element87: `ItemType`
\+ `r-` static element88: `ItemType`
\+ `r-` static element89: `ItemType`
\+ `r-` static element90: `ItemType`
\+ `r-` static element91: `ItemType`
\+ `r-` static element92: `ItemType`
\+ `r-` static element93: `ItemType`
\+ `r-` static element94: `ItemType`
\+ `r-` static element95: `ItemType`
\+ `r-` static element96: `ItemType`
\+ `r-` static element97: `ItemType`
\+ `r-` static element98: `ItemType`
\+ `r-` static element99: `ItemType`
\+ `r-` static element100: `ItemType`
\+ `r-` static element101: `ItemType`
\+ `r-` static element102: `ItemType`
\+ `r-` static element103: `ItemType`
\+ `r-` static element104: `ItemType`
\+ `r-` static element105: `ItemType`
\+ `r-` static element106: `ItemType`
\+ `r-` static element107: `ItemType`
\+ `r-` static element108: `ItemType`
\+ `r-` static element109: `ItemType`
\+ `r-` static element110: `ItemType`
\+ `r-` static element111: `ItemType`
\+ `r-` static element112: `ItemType`
\+ `r-` static element113: `ItemType`
\+ `r-` static element114: `ItemType`
\+ `r-` static element115: `ItemType`
\+ `r-` static element116: `ItemType`
\+ `r-` static element117: `ItemType`
\+ `r-` static element118: `ItemType`
\+ `r-` static composter: `ItemType`
\+ `r-` static netheriteBlock: `ItemType`
\+ `r-` static ancientDebris: `ItemType`
\+ `r-` static respawnAnchor: `ItemType`
\+ `r-` static cryingObsidian: `ItemType`
\+ `r-` static boat: `ItemType`
\+ `r-` static dye: `ItemType`
\+ `r-` static bannerPattern: `ItemType`
\+ `r-` static spawnEgg: `ItemType`
\+ `r-` static endCrystal: `ItemType`
\+ `r-` static glowBerries: `ItemType`
\+ `r-` static birchStandingSign: `ItemType`
\+ `r-` static polishedBasalt: `ItemType`
\+ `r-` static netherGoldOre: `ItemType`
\+ `r-` static item.warpedDoor: `ItemType`
\+ `r-` static pistonArmCollision: `ItemType`
\+ `r-` static fenceGate: `ItemType`
\+ `r-` static powderSnow: `ItemType`
\+ `r-` static darkOakButton: `ItemType`
\+ `r-` static deepslateCopperOre: `ItemType`
\+ `r-` static netherBrickStairs: `ItemType`
\+ `r-` static blackstoneDoubleSlab: `ItemType`
\+ `r-` static jungleButton: `ItemType`
\+ `r-` static spruceStairs: `ItemType`
\+ `r-` static grayCandleCake: `ItemType`
\+ `r-` static crimsonWallSign: `ItemType`
\+ `r-` static endGateway: `ItemType`
\+ `r-` static redNetherBrick: `ItemType`
\+ `r-` static cobbledDeepslateStairs: `ItemType`
\+ `r-` static item.glowFrame: `ItemType`
\+ `r-` static mudBrickDoubleSlab: `ItemType`
\+ `r-` static hangingRoots: `ItemType`
\+ `r-` static prismarineBricksStairs: `ItemType`
\+ `r-` static waxedOxidizedCutCopper: `ItemType`
\+ `r-` static calcite: `ItemType`
\+ `r-` static strippedDarkOakLog: `ItemType`
\+ `r-` static sculkShrieker: `ItemType`
\+ `r-` static limeGlazedTerracotta: `ItemType`
\+ `r-` static trapdoor: `ItemType`
\+ `r-` static infoUpdate: `ItemType`
\+ `r-` static redstoneLamp: `ItemType`
\+ `r-` static mossyCobblestone: `ItemType`
\+ `r-` static deepslate: `ItemType`
\+ `r-` static warpedPressurePlate: `ItemType`
\+ `r-` static diamondBlock: `ItemType`
\+ `r-` static oakStairs: `ItemType`
\+ `r-` static endBricks: `ItemType`
\+ `r-` static packedIce: `ItemType`
\+ `r-` static packedMud: `ItemType`
\+ `r-` static lightBlueCandleCake: `ItemType`
\+ `r-` static mossCarpet: `ItemType`
\+ `r-` static warpedFungus: `ItemType`
\+ `r-` static amethystBlock: `ItemType`
\+ `r-` static goldBlock: `ItemType`
\+ `r-` static item.flowerPot: `ItemType`
\+ `r-` static polishedDeepslateStairs: `ItemType`
\+ `r-` static smallAmethystBud: `ItemType`
\+ `r-` static activatorRail: `ItemType`
\+ `r-` static ironTrapdoor: `ItemType`
\+ `r-` static potatoes: `ItemType`
\+ `r-` static noteblock: `ItemType`
\+ `r-` static tuff: `ItemType`
\+ `r-` static oxidizedCutCopperStairs: `ItemType`
\+ `r-` static deepslateTileDoubleSlab: `ItemType`
\+ `r-` static rawGoldBlock: `ItemType`
\+ `r-` static poweredComparator: `ItemType`
\+ `r-` static warpedWallSign: `ItemType`
\+ `r-` static melonBlock: `ItemType`
\+ `r-` static waxedCutCopperStairs: `ItemType`
\+ `r-` static mobSpawner: `ItemType`
\+ `r-` static soulFire: `ItemType`
\+ `r-` static obsidian: `ItemType`
\+ `r-` static deepslateBrickWall: `ItemType`
\+ `r-` static oxidizedDoubleCutCopperSlab: `ItemType`
\+ `r-` static exposedCopper: `ItemType`
\+ `r-` static polishedDeepslateDoubleSlab: `ItemType`
\+ `r-` static stoneButton: `ItemType`
\+ `r-` static lavaCauldron: `ItemType`
\+ `r-` static exposedDoubleCutCopperSlab: `ItemType`
\+ `r-` static normalStoneStairs: `ItemType`
\+ `r-` static hardenedClay: `ItemType`
\+ `r-` static strippedJungleLog: `ItemType`
\+ `r-` static polishedBlackstoneDoubleSlab: `ItemType`
\+ `r-` static hardGlassPane: `ItemType`
\+ `r-` static polishedBlackstoneBrickDoubleSlab: `ItemType`
\+ `r-` static crimsonDoubleSlab: `ItemType`
\+ `r-` static waxedExposedCopper: `ItemType`
\+ `r-` static hayBlock: `ItemType`
\+ `r-` static waxedWeatheredCopper: `ItemType`
\+ `r-` static cyanCandleCake: `ItemType`
\+ `r-` static torch: `ItemType`
\+ `r-` static mudBrickWall: `ItemType`
\+ `r-` static honeyBlock: `ItemType`
\+ `r-` static dripstoneBlock: `ItemType`
\+ `r-` static vine: `ItemType`
\+ `r-` static goldOre: `ItemType`
\+ `r-` static yellowGlazedTerracotta: `ItemType`
\+ `r-` static stonecutter: `ItemType`
\+ `r-` static warpedPlanks: `ItemType`
\+ `r-` static stoneBrickStairs: `ItemType`
\+ `r-` static invisibleBedrock: `ItemType`
\+ `r-` static magentaGlazedTerracotta: `ItemType`
\+ `r-` static polishedBlackstoneBrickWall: `ItemType`
\+ `r-` static orangeGlazedTerracotta: `ItemType`
\+ `r-` static smoothBasalt: `ItemType`
\+ `r-` static emeraldBlock: `ItemType`
\+ `r-` static heavyWeightedPressurePlate: `ItemType`
\+ `r-` static lightningRod: `ItemType`
\+ `r-` static underwaterTorch: `ItemType`
\+ `r-` static deepslateBrickDoubleSlab: `ItemType`
\+ `r-` static ochreFroglight: `ItemType`
\+ `r-` static observer: `ItemType`
\+ `r-` static redstoneTorch: `ItemType`
\+ `r-` static silverGlazedTerracotta: `ItemType`
\+ `r-` static graniteStairs: `ItemType`
\+ `r-` static glowingobsidian: `ItemType`
\+ `r-` static brownMushroom: `ItemType`
\+ `r-` static brownGlazedTerracotta: `ItemType`
\+ `r-` static oxidizedCopper: `ItemType`
\+ `r-` static copperOre: `ItemType`
\+ `r-` static birchPressurePlate: `ItemType`
\+ `r-` static sandstoneStairs: `ItemType`
\+ `r-` static greenCandleCake: `ItemType`
\+ `r-` static sculkCatalyst: `ItemType`
\+ `r-` static cobblestone: `ItemType`
\+ `r-` static smoothSandstoneStairs: `ItemType`
\+ `r-` static junglePressurePlate: `ItemType`
\+ `r-` static doubleCutCopperSlab: `ItemType`
\+ `r-` static brownCandleCake: `ItemType`
\+ `r-` static acaciaWallSign: `ItemType`
\+ `r-` static lightWeightedPressurePlate: `ItemType`
\+ `r-` static polishedBlackstone: `ItemType`
\+ `r-` static mycelium: `ItemType`
\+ `r-` static stoneStairs: `ItemType`
\+ `r-` static warpedStairs: `ItemType`
\+ `r-` static item.woodenDoor: `ItemType`
\+ `r-` static sprucePressurePlate: `ItemType`
\+ `r-` static redstoneBlock: `ItemType`
\+ `r-` static birchFenceGate: `ItemType`
\+ `r-` static redstoneWire: `ItemType`
\+ `r-` static waxedExposedCutCopper: `ItemType`
\+ `r-` static lava: `ItemType`
\+ `r-` static endStone: `ItemType`
\+ `r-` static item.crimsonDoor: `ItemType`
\+ `r-` static glowstone: `ItemType`
\+ `r-` static stonePressurePlate: `ItemType`
\+ `r-` static waxedExposedCutCopperStairs: `ItemType`
\+ `r-` static rail: `ItemType`
\+ `r-` static blackstoneWall: `ItemType`
\+ `r-` static mossyCobblestoneStairs: `ItemType`
\+ `r-` static coralFanHang2: `ItemType`
\+ `r-` static coralFanHang3: `ItemType`
\+ `r-` static detectorRail: `ItemType`
\+ `r-` static polishedGraniteStairs: `ItemType`
\+ `r-` static pinkCandleCake: `ItemType`
\+ `r-` static crackedDeepslateTiles: `ItemType`
\+ `r-` static redGlazedTerracotta: `ItemType`
\+ `r-` static darkOakFenceGate: `ItemType`
\+ `r-` static crimsonNylium: `ItemType`
\+ `r-` static structureVoid: `ItemType`
\+ `r-` static snow: `ItemType`
\+ `r-` static daylightDetector: `ItemType`
\+ `r-` static slime: `ItemType`
\+ `r-` static boneBlock: `ItemType`
\+ `r-` static item.frame: `ItemType`
\+ `r-` static lapisBlock: `ItemType`
\+ `r-` static coalOre: `ItemType`
\+ `r-` static clientRequestPlaceholderBlock: `ItemType`
\+ `r-` static redstoneOre: `ItemType`
\+ `r-` static netherBrickFence: `ItemType`
\+ `r-` static netherWartBlock: `ItemType`
\+ `r-` static crimsonHyphae: `ItemType`
\+ `r-` static polishedBlackstoneStairs: `ItemType`
\+ `r-` static weatheredCutCopperStairs: `ItemType`
\+ `r-` static smallDripleafBlock: `ItemType`
\+ `r-` static spruceButton: `ItemType`
\+ `r-` static crimsonTrapdoor: `ItemType`
\+ `r-` static basalt: `ItemType`
\+ `r-` static litRedstoneLamp: `ItemType`
\+ `r-` static diamondOre: `ItemType`
\+ `r-` static enderChest: `ItemType`
\+ `r-` static mediumAmethystBud: `ItemType`
\+ `r-` static warpedDoubleSlab: `ItemType`
\+ `r-` static jungleWallSign: `ItemType`
\+ `r-` static sculkSensor: `ItemType`
\+ `r-` static dioriteStairs: `ItemType`
\+ `r-` static item.acaciaDoor: `ItemType`
\+ `r-` static crimsonButton: `ItemType`
\+ `r-` static item.ironDoor: `ItemType`
\+ `r-` static honeycombBlock: `ItemType`
\+ `r-` static polishedBlackstoneBrickStairs: `ItemType`
\+ `r-` static quartzOre: `ItemType`
\+ `r-` static daylightDetectorInverted: `ItemType`
\+ `r-` static chorusFlower: `ItemType`
\+ `r-` static coralFanHang: `ItemType`
\+ `r-` static crackedNetherBricks: `ItemType`
\+ `r-` static poweredRepeater: `ItemType`
\+ `r-` static deepslateTiles: `ItemType`
\+ `r-` static smoothStone: `ItemType`
\+ `r-` static blackCandleCake: `ItemType`
\+ `r-` static redMushroom: `ItemType`
\+ `r-` static gildedBlackstone: `ItemType`
\+ `r-` static exposedCutCopperStairs: `ItemType`
\+ `r-` static reserved6: `ItemType`
\+ `r-` static unknown: `ItemType`
\+ `r-` static mangrovePropaguleHanging: `ItemType`
\+ `r-` static yellowCandleCake: `ItemType`
\+ `r-` static infestedDeepslate: `ItemType`
\+ `r-` static soulTorch: `ItemType`
\+ `r-` static podzol: `ItemType`
\+ `r-` static litRedstoneOre: `ItemType`
\+ `r-` static deepslateTileStairs: `ItemType`
\+ `r-` static crimsonFenceGate: `ItemType`
\+ `r-` static deadbush: `ItemType`
\+ `r-` static waxedWeatheredDoubleCutCopperSlab: `ItemType`
\+ `r-` static polishedBlackstoneBricks: `ItemType`
\+ `r-` static ironOre: `ItemType`
\+ `r-` static item.spruceDoor: `ItemType`
\+ `r-` static frostedIce: `ItemType`
\+ `r-` static largeAmethystBud: `ItemType`
\+ `r-` static warpedTrapdoor: `ItemType`
\+ `r-` static flowingWater: `ItemType`
\+ `r-` static brickBlock: `ItemType`
\+ `r-` static hardGlass: `ItemType`
\+ `r-` static quartzStairs: `ItemType`
\+ `r-` static caveVines: `ItemType`
\+ `r-` static ironBars: `ItemType`
\+ `r-` static melonStem: `ItemType`
\+ `r-` static crimsonPlanks: `ItemType`
\+ `r-` static waxedWeatheredCutCopper: `ItemType`
\+ `r-` static wallSign: `ItemType`
\+ `r-` static jukebox: `ItemType`
\+ `r-` static jigsaw: `ItemType`
\+ `r-` static borderBlock: `ItemType`
\+ `r-` static shroomlight: `ItemType`
\+ `r-` static chiseledPolishedBlackstone: `ItemType`
\+ `r-` static darkOakStairs: `ItemType`
\+ `r-` static deepslateTileWall: `ItemType`
\+ `r-` static glassPane: `ItemType`
\+ `r-` static chiseledDeepslate: `ItemType`
\+ `r-` static acaciaPressurePlate: `ItemType`
\+ `r-` static rawCopperBlock: `ItemType`
\+ `r-` static item.beetroot: `ItemType`
\+ `r-` static item.skull: `ItemType`
\+ `r-` static lightGrayCandleCake: `ItemType`
\+ `r-` static andesiteStairs: `ItemType`
\+ `r-` static goldenRail: `ItemType`
\+ `r-` static darkoakWallSign: `ItemType`
\+ `r-` static redSandstoneStairs: `ItemType`
\+ `r-` static cyanGlazedTerracotta: `ItemType`
\+ `r-` static crackedDeepslateBricks: `ItemType`
\+ `r-` static jungleFenceGate: `ItemType`
\+ `r-` static jungleTrapdoor: `ItemType`
\+ `r-` static dirtWithRoots: `ItemType`
\+ `r-` static coalBlock: `ItemType`
\+ `r-` static warpedFenceGate: `ItemType`
\+ `r-` static waxedDoubleCutCopperSlab: `ItemType`
\+ `r-` static item.kelp: `ItemType`
\+ `r-` static deepslateBricks: `ItemType`
\+ `r-` static blueGlazedTerracotta: `ItemType`
\+ `r-` static lightBlueGlazedTerracotta: `ItemType`
\+ `r-` static floweringAzalea: `ItemType`
\+ `r-` static oxidizedCutCopper: `ItemType`
\+ `r-` static weepingVines: `ItemType`
\+ `r-` static chorusPlant: `ItemType`
\+ `r-` static water: `ItemType`
\+ `r-` static mudBrickStairs: `ItemType`
\+ `r-` static unpoweredRepeater: `ItemType`
\+ `r-` static smoothRedSandstoneStairs: `ItemType`
\+ `r-` static whiteGlazedTerracotta: `ItemType`
\+ `r-` static strippedWarpedHyphae: `ItemType`
\+ `r-` static movingBlock: `ItemType`
\+ `r-` static trappedChest: `ItemType`
\+ `r-` static acaciaTrapdoor: `ItemType`
\+ `r-` static standingSign: `ItemType`
\+ `r-` static glowLichen: `ItemType`
\+ `r-` static wallBanner: `ItemType`
\+ `r-` static twistingVines: `ItemType`
\+ `r-` static item.darkOakDoor: `ItemType`
\+ `r-` static soulLantern: `ItemType`
\+ `r-` static deny: `ItemType`
\+ `r-` static beeNest: `ItemType`
\+ `r-` static bubbleColumn: `ItemType`
\+ `r-` static item.campfire: `ItemType`
\+ `r-` static soulSoil: `ItemType`
\+ `r-` static soulSand: `ItemType`
\+ `r-` static reinforcedDeepslate: `ItemType`
\+ `r-` static blackGlazedTerracotta: `ItemType`
\+ `r-` static waxedOxidizedCutCopperStairs: `ItemType`
\+ `r-` static strippedAcaciaLog: `ItemType`
\+ `r-` static cobbledDeepslateDoubleSlab: `ItemType`
\+ `r-` static warpedFence: `ItemType`
\+ `r-` static craftingTable: `ItemType`
\+ `r-` static doubleWoodenSlab: `ItemType`
\+ `r-` static mossyStoneBrickStairs: `ItemType`
\+ `r-` static endRod: `ItemType`
\+ `r-` static crimsonStem: `ItemType`
\+ `r-` static warpedHyphae: `ItemType`
\+ `r-` static warpedWartBlock: `ItemType`
\+ `r-` static carrots: `ItemType`
\+ `r-` static tripwireHook: `ItemType`
\+ `r-` static caveVinesBodyWithBerries: `ItemType`
\+ `r-` static darkOakPressurePlate: `ItemType`
\+ `r-` static strippedBirchLog: `ItemType`
\+ `r-` static tintedGlass: `ItemType`
\+ `r-` static bigDripleaf: `ItemType`
\+ `r-` static blueCandleCake: `ItemType`
\+ `r-` static sweetBerryBush: `ItemType`
\+ `r-` static item.reeds: `ItemType`
\+ `r-` static barrier: `ItemType`
\+ `r-` static jungleStandingSign: `ItemType`
\+ `r-` static fire: `ItemType`
\+ `r-` static magentaCandleCake: `ItemType`
\+ `r-` static deepslateGoldOre: `ItemType`
\+ `r-` static beehive: `ItemType`
\+ `r-` static item.jungleDoor: `ItemType`
\+ `r-` static glass: `ItemType`
\+ `r-` static witherRose: `ItemType`
\+ `r-` static exposedCutCopper: `ItemType`
\+ `r-` static waxedWeatheredCutCopperStairs: `ItemType`
\+ `r-` static acaciaStairs: `ItemType`
\+ `r-` static polishedBlackstonePressurePlate: `ItemType`
\+ `r-` static acaciaStandingSign: `ItemType`
\+ `r-` static crimsonStairs: `ItemType`
\+ `r-` static strippedSpruceLog: `ItemType`
\+ `r-` static pumpkinStem: `ItemType`
\+ `r-` static stickyPistonArmCollision: `ItemType`
\+ `r-` static warpedNylium: `ItemType`
\+ `r-` static deepslateEmeraldOre: `ItemType`
\+ `r-` static quartzBricks: `ItemType`
\+ `r-` static unpoweredComparator: `ItemType`
\+ `r-` static structureBlock: `ItemType`
\+ `r-` static endBrickStairs: `ItemType`
\+ `r-` static target: `ItemType`
\+ `r-` static woodenButton: `ItemType`
\+ `r-` static pearlescentFroglight: `ItemType`
\+ `r-` static item.netherSprouts: `ItemType`
\+ `r-` static verdantFroglight: `ItemType`
\+ `r-` static warpedStem: `ItemType`
\+ `r-` static strippedCrimsonHyphae: `ItemType`
\+ `r-` static cocoa: `ItemType`
\+ `r-` static lever: `ItemType`
\+ `r-` static brickStairs: `ItemType`
\+ `r-` static mossBlock: `ItemType`
\+ `r-` static pinkGlazedTerracotta: `ItemType`
\+ `r-` static spruceTrapdoor: `ItemType`
\+ `r-` static chainCommandBlock: `ItemType`
\+ `r-` static spruceFenceGate: `ItemType`
\+ `r-` static redNetherBrickStairs: `ItemType`
\+ `r-` static greenGlazedTerracotta: `ItemType`
\+ `r-` static deepslateRedstoneOre: `ItemType`
\+ `r-` static birchTrapdoor: `ItemType`
\+ `r-` static cobbledDeepslate: `ItemType`
\+ `r-` static bookshelf: `ItemType`
\+ `r-` static mud: `ItemType`
\+ `r-` static ice: `ItemType`
\+ `r-` static item.bed: `ItemType`
\+ `r-` static purpleCandleCake: `ItemType`
\+ `r-` static web: `ItemType`
\+ `r-` static polishedDioriteStairs: `ItemType`
\+ `r-` static enchantingTable: `ItemType`
\+ `r-` static polishedBlackstoneWall: `ItemType`
\+ `r-` static waxedExposedDoubleCutCopperSlab: `ItemType`
\+ `r-` static azalea: `ItemType`
\+ `r-` static mudBricks: `ItemType`
\+ `r-` static birchWallSign: `ItemType`
\+ `r-` static item.hopper: `ItemType`
\+ `r-` static lectern: `ItemType`
\+ `r-` static strippedCrimsonStem: `ItemType`
\+ `r-` static standingBanner: `ItemType`
\+ `r-` static jungleStairs: `ItemType`
\+ `r-` static grass: `ItemType`
\+ `r-` static cactus: `ItemType`
\+ `r-` static buddingAmethyst: `ItemType`
\+ `r-` static birchStairs: `ItemType`
\+ `r-` static purpleGlazedTerracotta: `ItemType`
\+ `r-` static bedrock: `ItemType`
\+ `r-` static blackstoneStairs: `ItemType`
\+ `r-` static blueIce: `ItemType`
\+ `r-` static polishedAndesiteStairs: `ItemType`
\+ `r-` static sculk: `ItemType`
\+ `r-` static netherrack: `ItemType`
\+ `r-` static spruceStandingSign: `ItemType`
\+ `r-` static litBlastFurnace: `ItemType`
\+ `r-` static allow: `ItemType`
\+ `r-` static item.birchDoor: `ItemType`
\+ `r-` static chest: `ItemType`
\+ `r-` static item.chain: `ItemType`
\+ `r-` static clay: `ItemType`
\+ `r-` static item.cake: `ItemType`
\+ `r-` static sculkVein: `ItemType`
\+ `r-` static deepslateCoalOre: `ItemType`
\+ `r-` static weatheredCutCopper: `ItemType`
\+ `r-` static warpedStandingSign: `ItemType`
\+ `r-` static crackedPolishedBlackstoneBricks: `ItemType`
\+ `r-` static flowingLava: `ItemType`
\+ `r-` static acaciaButton: `ItemType`
\+ `r-` static litFurnace: `ItemType`
\+ `r-` static chiseledNetherBricks: `ItemType`
\+ `r-` static warpedButton: `ItemType`
\+ `r-` static deepslateLapisOre: `ItemType`
\+ `r-` static prismarineStairs: `ItemType`
\+ `r-` static dragonEgg: `ItemType`
\+ `r-` static netherBrick: `ItemType`
\+ `r-` static deepslateIronOre: `ItemType`
\+ `r-` static item.camera: `ItemType`
\+ `r-` static item.wheat: `ItemType`
\+ `r-` static waxedCutCopper: `ItemType`
\+ `r-` static sporeBlossom: `ItemType`
\+ `r-` static crimsonStandingSign: `ItemType`
\+ `r-` static darkoakStandingSign: `ItemType`
\+ `r-` static weatheredDoubleCutCopperSlab: `ItemType`
\+ `r-` static emeraldOre: `ItemType`
\+ `r-` static dropper: `ItemType`
\+ `r-` static spruceWallSign: `ItemType`
\+ `r-` static strippedWarpedStem: `ItemType`
\+ `r-` static pointedDripstone: `ItemType`
\+ `r-` static netherreactor: `ItemType`
\+ `r-` static deepslateBrickStairs: `ItemType`
\+ `r-` static darkPrismarineStairs: `ItemType`
\+ `r-` static chemicalHeat: `ItemType`
\+ `r-` static tripWire: `ItemType`
\+ `r-` static item.cauldron: `ItemType`
\+ `r-` static caveVinesHeadWithBerries: `ItemType`
\+ `r-` static darkOakTrapdoor: `ItemType`
\+ `r-` static waxedOxidizedCopper: `ItemType`
\+ `r-` static strippedOakLog: `ItemType`
\+ `r-` static item.brewingStand: `ItemType`
\+ `r-` static bambooSapling: `ItemType`
\+ `r-` static stonecutterBlock: `ItemType`
\+ `r-` static whiteCandleCake: `ItemType`
\+ `r-` static candleCake: `ItemType`
\+ `r-` static endPortal: `ItemType`
\+ `r-` static blackstone: `ItemType`
\+ `r-` static acaciaFenceGate: `ItemType`
\+ `r-` static litDeepslateRedstoneOre: `ItemType`
\+ `r-` static litSmoker: `ItemType`
\+ `r-` static lapisOre: `ItemType`
\+ `r-` static smoothQuartzStairs: `ItemType`
\+ `r-` static redCandleCake: `ItemType`
\+ `r-` static waxedCopper: `ItemType`
\+ `r-` static repeatingCommandBlock: `ItemType`
\+ `r-` static item.netherWart: `ItemType`
\+ `r-` static waxedOxidizedDoubleCutCopperSlab: `ItemType`
\+ `r-` static crimsonFungus: `ItemType`
\+ `r-` static polishedDeepslate: `ItemType`
\+ `r-` static purpurStairs: `ItemType`
\+ `r-` static portal: `ItemType`
\+ `r-` static birchButton: `ItemType`
\+ `r-` static commandBlock: `ItemType`
\+ `r-` static polishedBlackstoneButton: `ItemType`
\+ `r-` static furnace: `ItemType`
\+ `r-` static infoUpdate2: `ItemType`
\+ `r-` static amethystCluster: `ItemType`
\+ `r-` static polishedDeepslateWall: `ItemType`
\+ `r-` static driedKelpBlock: `ItemType`
\+ `r-` static crimsonFence: `ItemType`
\+ `r-` static dispenser: `ItemType`
\+ `r-` static deepslateDiamondOre: `ItemType`
\+ `r-` static item.soulCampfire: `ItemType`
\+ `r-` static woodenPressurePlate: `ItemType`
\+ `r-` static limeCandleCake: `ItemType`
\+ `r-` static grassPath: `ItemType`
\+ `r-` static cobbledDeepslateWall: `ItemType`
\+ `r-` static orangeCandleCake: `ItemType`
\+ `r-` static weatheredCopper: `ItemType`
\+ `r-` static unlitRedstoneTorch: `ItemType`
\+ `r-` static grayGlazedTerracotta: `ItemType`
\+ `r-` static lodestone: `ItemType`
\+ `r-` static rawIronBlock: `ItemType`
\+ `r-` static ironBlock: `ItemType`
\+ `r-` static ladder: `ItemType`
\+ `r-` static crimsonPressurePlate: `ItemType`
\+ `r-` static gravel: `ItemType`
### Items
\+ `r-` static get ( itemId: `string` ): `ItemType`
### MinecraftEntityTypes
\+ `r-` static witch: `EntityType`
\+ `r-` static skeleton: `EntityType`
\+ `r-` static zoglin: `EntityType`
\+ `r-` static splashPotion: `EntityType`
\+ `r-` static vindicator: `EntityType`
\+ `r-` static villagerV2: `EntityType`
\+ `r-` static husk: `EntityType`
\+ `r-` static skeletonHorse: `EntityType`
\+ `r-` static smallFireball: `EntityType`
\+ `r-` static hoglin: `EntityType`
\+ `r-` static shulker: `EntityType`
\+ `r-` static ravager: `EntityType`
\+ `r-` static fishingHook: `EntityType`
\+ `r-` static wolf: `EntityType`
\+ `r-` static rabbit: `EntityType`
\+ `r-` static villager: `EntityType`
\+ `r-` static tropicalfish: `EntityType`
\+ `r-` static turtle: `EntityType`
\+ `r-` static player: `EntityType`
\+ `r-` static spider: `EntityType`
\+ `r-` static piglinBrute: `EntityType`
\+ `r-` static blaze: `EntityType`
\+ `r-` static ocelot: `EntityType`
\+ `r-` static goat: `EntityType`
\+ `r-` static magmaCube: `EntityType`
\+ `r-` static llamaSpit: `EntityType`
\+ `r-` static cat: `EntityType`
\+ `r-` static bee: `EntityType`
\+ `r-` static enderPearl: `EntityType`
\+ `r-` static strider: `EntityType`
\+ `r-` static pufferfish: `EntityType`
\+ `r-` static squid: `EntityType`
\+ `r-` static slime: `EntityType`
\+ `r-` static pillager: `EntityType`
\+ `r-` static panda: `EntityType`
\+ `r-` static polarBear: `EntityType`
\+ `r-` static parrot: `EntityType`
\+ `r-` static pig: `EntityType`
\+ `r-` static dragonFireball: `EntityType`
\+ `r-` static ghast: `EntityType`
\+ `r-` static ironGolem: `EntityType`
\+ `r-` static enderDragon: `EntityType`
\+ `r-` static glowSquid: `EntityType`
\+ `r-` static enderman: `EntityType`
\+ `r-` static dolphin: `EntityType`
\+ `r-` static boat: `EntityType`
\+ `r-` static axolotl: `EntityType`
\+ `r-` static xpBottle: `EntityType`
\+ `r-` static tnt: `EntityType`
\+ `r-` static snowball: `EntityType`
\+ `r-` static creeper: `EntityType`
\+ `r-` static salmon: `EntityType`
\+ `r-` static llama: `EntityType`
\+ `r-` static arrow: `EntityType`
\+ `r-` static evocationIllager: `EntityType`
\+ `r-` static fireball: `EntityType`
\+ `r-` static lingeringPotion: `EntityType`
\+ `r-` static cod: `EntityType`
\+ `r-` static zombieVillagerV2: `EntityType`
\+ `r-` static zombieVillager: `EntityType`
\+ `r-` static zombie: `EntityType`
\+ `r-` static witherSkullDangerous: `EntityType`
\+ `r-` static witherSkull: `EntityType`
\+ `r-` static thrownTrident: `EntityType`
\+ `r-` static shulkerBullet: `EntityType`
\+ `r-` static egg: `EntityType`
\+ `r-` static drowned: `EntityType`
\+ `r-` static enderCrystal: `EntityType`
\+ `r-` static silverfish: `EntityType`
\+ `r-` static wither: `EntityType`
\+ `r-` static guardian: `EntityType`
\+ `r-` static fox: `EntityType`
\+ `r-` static endermite: `EntityType`
\+ `r-` static elderGuardian: `EntityType`
\+ `r-` static zombiePigman: `EntityType`
\+ `r-` static zombieHorse: `EntityType`
\+ `r-` static witherSkeleton: `EntityType`
\+ `r-` static wanderingTrader: `EntityType`
\+ `r-` static vex: `EntityType`
\+ `r-` static agent: `EntityType`
\+ `r-` static stray: `EntityType`
\+ `r-` static snowGolem: `EntityType`
\+ `r-` static sheep: `EntityType`
\+ `r-` static piglin: `EntityType`
\+ `r-` static phantom: `EntityType`
\+ `r-` static mule: `EntityType`
\+ `r-` static mooshroom: `EntityType`
\+ `r-` static horse: `EntityType`
\+ `r-` static donkey: `EntityType`
\+ `r-` static cow: `EntityType`
\+ `r-` static chicken: `EntityType`
\+ `r-` static caveSpider: `EntityType`
\+ `r-` static bat: `EntityType`
\+ `r-` static lightningBolt: `EntityType`
\+ `r-` static armorStand: `EntityType`
\+ `r-` static xpOrb: `EntityType`
\+ `r-` static tripodCamera: `EntityType`
\+ `r-` static tntMinecart: `EntityType`
\+ `r-` static minecart: `EntityType`
\+ `r-` static hopperMinecart: `EntityType`
\+ `r-` static fireworksRocket: `EntityType`
\+ `r-` static eyeOfEnderSignal: `EntityType`
\+ `r-` static commandBlockMinecart: `EntityType`
\+ `r-` static chestMinecart: `EntityType`
\+ `r-` static areaEffectCloud: `EntityType`
\+ `r-` static npc: `EntityType`
### EntityTypes
\+ `r-` static get ( identifier: `string` ): `EntityType`
\+ `r-` static getAll (  ): `EntityTypeIterator`
### MinecraftEffectTypes
\+ `r-` static empty: `EffectType`
\+ `r-` static speed: `EffectType`
\+ `r-` static slowness: `EffectType`
\+ `r-` static haste: `EffectType`
\+ `r-` static miningFatigue: `EffectType`
\+ `r-` static strength: `EffectType`
\+ `r-` static instantHealth: `EffectType`
\+ `r-` static instantDamage: `EffectType`
\+ `r-` static jumpBoost: `EffectType`
\+ `r-` static nausea: `EffectType`
\+ `r-` static regeneration: `EffectType`
\+ `r-` static resistance: `EffectType`
\+ `r-` static fireResistance: `EffectType`
\+ `r-` static waterBreathing: `EffectType`
\+ `r-` static invisibility: `EffectType`
\+ `r-` static blindness: `EffectType`
\+ `r-` static nightVision: `EffectType`
\+ `r-` static hunger: `EffectType`
\+ `r-` static weakness: `EffectType`
\+ `r-` static poison: `EffectType`
\+ `r-` static wither: `EffectType`
\+ `r-` static healthBoost: `EffectType`
\+ `r-` static absorption: `EffectType`
\+ `r-` static saturation: `EffectType`
\+ `r-` static levitation: `EffectType`
\+ `r-` static fatalPoison: `EffectType`
\+ `r-` static conduitPower: `EffectType`
\+ `r-` static slowFalling: `EffectType`
\+ `r-` static badOmen: `EffectType`
\+ `r-` static villageHero: `EffectType`
### Block
\+ `r-` id: `string`
\+ `r-` permutation: `BlockPermutation`
\+ `r-` isEmpty: `boolean`
\+ `rw` isWaterlogged: `boolean`
\+ `r-` dimension: `Dimension`
\+ `r-` type: `BlockType`
\+ `r-` location: `BlockLocation`
\+ `r-` x: `int32`
\+ `r-` y: `int32`
\+ `r-` z: `int32`
\+ `r-` setPermutation ( permutation: `BlockPermutation` ): `void`
\+ `r-` setType ( blockType: `BlockType` ): `void`
\+ `r-` getTags (  ): `array`
\+ `r-` getComponent ( componentName: `string` ): `any`
\+ `r-` hasTag ( tag: `string` ): `boolean`
### BlockComponent
### BlockInventoryComponent
\+ `r-` location: `BlockLocation`
\+ `r-` container: `BlockInventoryComponentContainer`
### BlockInventoryComponentContainer
\+ `r-` size: `int32`
\+ `r-` emptySlotsCount: `int32`
\+ `r-` setItem ( slot: `int32`, itemStack: `ItemStack` ): `void`
\+ `r-` getItem ( slot: `int32` ): `ItemStack`
\+ `r-` addItem ( itemStack: `ItemStack` ): `void`
\+ `r-` transferItem ( fromSlot: `int32`, toSlot: `int32`, toContainer: `Container` ): `boolean`
\+ `r-` swapItems ( slot: `int32`, otherSlot: `int32`, otherContainer: `Container` ): `boolean`
### BlockPistonComponent
\+ `r-` location: `BlockLocation`
\+ `r-` attachedBlocks: `array`
\+ `r-` isMoving: `boolean`
\+ `r-` isExpanded: `boolean`
\+ `r-` isExpanding: `boolean`
\+ `r-` isRetracted: `boolean`
\+ `r-` isRetracting: `boolean`
### BlockLavaContainerComponent
\+ `r-` location: `BlockLocation`
\+ `rw` fillLevel: `int32`
### BlockPotionContainerComponent
\+ `r-` location: `BlockLocation`
\+ `rw` fillLevel: `int32`
\+ `r-` setPotionType ( item: `ItemStack` ): `void`
### BlockSnowContainerComponent
\+ `r-` location: `BlockLocation`
\+ `rw` fillLevel: `int32`
### BlockWaterContainerComponent
\+ `r-` location: `BlockLocation`
\+ `rw` fillLevel: `int32`
\+ `rw` customColor: `Color`
\+ `r-` addDye ( itemType: `ItemType` ): `void`
### FluidContainer
\+ `r-` static minFillLevel: `int32`
\+ `r-` static maxFillLevel: `int32`
### BlockRecordPlayerComponent
\+ `r-` setRecord ( recordItemType: `ItemType` ): `void`
\+ `r-` clearRecord (  ): `void`
\+ `r-` isPlaying (  ): `boolean`
### StringBlockProperty
\+ `r-` name: `string`
\+ `rw` value: `string`
\+ `r-` validValues: `array`
### IntBlockProperty
\+ `r-` name: `string`
\+ `rw` value: `int32`
\+ `r-` validValues: `array`
### BoolBlockProperty
\+ `r-` name: `string`
\+ `rw` value: `boolean`
\+ `r-` validValues: `array`
### EnchantmentSlot
\+ `r-` static none: `int32`
\+ `r-` static all: `int32`
\+ `r-` static gArmor: `int32`
\+ `r-` static shears: `int32`
\+ `r-` static armorHead: `int32`
\+ `r-` static armorTorso: `int32`
\+ `r-` static cosmeticHead: `int32`
\+ `r-` static armorFeet: `int32`
\+ `r-` static elytra: `int32`
\+ `r-` static armorLegs: `int32`
\+ `r-` static shovel: `int32`
\+ `r-` static sword: `int32`
\+ `r-` static bow: `int32`
\+ `r-` static spear: `int32`
\+ `r-` static crossbow: `int32`
\+ `r-` static gTool: `int32`
\+ `r-` static hoe: `int32`
\+ `r-` static fishingRod: `int32`
\+ `r-` static flintsteel: `int32`
\+ `r-` static shield: `int32`
\+ `r-` static gDigging: `int32`
\+ `r-` static axe: `int32`
\+ `r-` static pickaxe: `int32`
\+ `r-` static carrotStick: `int32`
### EntityEventOptions
\+ `rw` entities: `array`
\+ `rw` entityTypes: `array`
\+ `r-` constructor (  ): `EntityEventOptions`
### BlockEvent
\+ `r-` dimension: `Dimension`
\+ `r-` block: `Block`
### EntityDataDrivenTriggerEventOptions
\+ `rw` entities: `array`
\+ `rw` entityTypes: `array`
\+ `rw` eventTypes: `array`
\+ `r-` constructor (  ): `EntityDataDrivenTriggerEventOptions`
### WeatherChangeEvent
\+ `r-` dimension: `string`
\+ `r-` raining: `boolean`
\+ `r-` lightning: `boolean`
### WeatherChangeEventSignal
\+ `r-` subscribe ( callback: `closure` ): `closure`
\+ `r-` unsubscribe ( callback: `closure` ): `void`
### PlayerJoinEvent
\+ `rw` player: `Player`
### PlayerJoinEventSignal
\+ `r-` subscribe ( callback: `closure` ): `closure`
\+ `r-` unsubscribe ( callback: `closure` ): `void`
### PlayerLeaveEvent
\+ `r-` playerName: `string`
### PlayerLeaveEventSignal
\+ `r-` subscribe ( callback: `closure` ): `closure`
\+ `r-` unsubscribe ( callback: `closure` ): `void`
### BeforeChatEvent
\+ `rw` message: `string`
\+ `rw` sender: `Player`
\+ `rw` targets: `array`
\+ `rw` sendToTargets: `boolean`
\+ `rw` cancel: `boolean`
### BeforeChatEventSignal
\+ `r-` subscribe ( callback: `closure` ): `closure`
\+ `r-` unsubscribe ( callback: `closure` ): `void`
### ChatEvent
\+ `rw` message: `string`
\+ `rw` sender: `Player`
\+ `rw` targets: `array`
\+ `rw` sendToTargets: `boolean`
### ChatEventSignal
\+ `r-` subscribe ( callback: `closure` ): `closure`
\+ `r-` unsubscribe ( callback: `closure` ): `void`
### EffectAddEvent
\+ `rw` entity: `Entity`
\+ `rw` effect: `Effect`
\+ `rw` effectState: `int32`
### EffectAddEventSignal
\+ `r-` subscribe ( callback: `closure`, options: `EntityEventOptions` ): `closure`
\+ `r-` unsubscribe ( callback: `closure` ): `void`
### EntityCreateEvent
\+ `rw` entity: `Entity`
### EntityCreateEventSignal
\+ `r-` subscribe ( callback: `closure` ): `closure`
\+ `r-` unsubscribe ( callback: `closure` ): `void`
### EntityHitEvent
\+ `r-` entity: `Entity`
\+ `r-` hitEntity: `optional`
\+ `r-` hitBlock: `optional`
### EntityHitEventSignal
\+ `r-` subscribe ( callback: `closure`, options: `EntityEventOptions` ): `closure`
\+ `r-` unsubscribe ( callback: `closure` ): `void`
### TickEvent
\+ `r-` currentTick: `int32`
\+ `r-` deltaTime: `float`
### TickEventSignal
\+ `r-` subscribe ( callback: `closure` ): `closure`
\+ `r-` unsubscribe ( callback: `closure` ): `void`
### MessageReceiveEvent
\+ `r-` id: `string`
\+ `r-` message: `string`
\+ `r-` sourceType: `MessageSourceType`
### ServerMessageSignal
\+ `r-` subscribe ( callback: `closure` ): `closure`
\+ `r-` unsubscribe ( callback: `closure` ): `void`
### BeforeDataDrivenEntityTriggerEvent
\+ `r-` entity: `Entity`
\+ `r-` id: `string`
\+ `rw` cancel: `boolean`
\+ `rw` modifiers: `array`
### BeforeDataDrivenEntityTriggerEventSignal
\+ `r-` subscribe ( callback: `closure`, options: `EntityDataDrivenTriggerEventOptions` ): `closure`
\+ `r-` unsubscribe ( callback: `closure` ): `void`
### DataDrivenEntityTriggerEvent
\+ `r-` entity: `Entity`
\+ `r-` id: `string`
\+ `r-` modifiers: `array`
### DataDrivenEntityTriggerEventSignal
\+ `r-` subscribe ( callback: `closure`, options: `EntityDataDrivenTriggerEventOptions` ): `closure`
\+ `r-` unsubscribe ( callback: `closure` ): `void`
### EntityHurtEvent
\+ `r-` hurtEntity: `Entity`
\+ `r-` damagingEntity: `Entity`
\+ `r-` projectile: `Entity`
\+ `r-` damage: `int32`
\+ `r-` cause: `string`
### EntityHurtEventSignal
\+ `r-` subscribe ( callback: `closure`, options: `EntityEventOptions` ): `closure`
\+ `r-` unsubscribe ( callback: `closure` ): `void`
### BeforePistonActivateEvent
\+ `r-` dimension: `Dimension`
\+ `r-` block: `Block`
\+ `r-` piston: `BlockPistonComponent`
\+ `r-` isExpanding: `boolean`
\+ `rw` cancel: `boolean`
### BeforePistonActivateEventSignal
\+ `r-` subscribe ( callback: `closure` ): `closure`
\+ `r-` unsubscribe ( callback: `closure` ): `void`
### PistonActivateEvent
\+ `r-` dimension: `Dimension`
\+ `r-` block: `Block`
\+ `r-` piston: `BlockPistonComponent`
\+ `r-` isExpanding: `boolean`
### PistonActivateEventSignal
\+ `r-` subscribe ( callback: `closure` ): `closure`
\+ `r-` unsubscribe ( callback: `closure` ): `void`
### LeverActionEvent
\+ `r-` dimension: `Dimension`
\+ `r-` block: `Block`
\+ `r-` isPowered: `boolean`
### LeverActivateEventSignal
\+ `r-` subscribe ( callback: `closure` ): `closure`
\+ `r-` unsubscribe ( callback: `closure` ): `void`
### BeforeExplosionEvent
\+ `rw` impactedBlocks: `array`
\+ `r-` dimension: `Dimension`
\+ `r-` source: `Entity`
\+ `rw` cancel: `boolean`
### BeforeExplosionEventSignal
\+ `r-` subscribe ( callback: `closure` ): `closure`
\+ `r-` unsubscribe ( callback: `closure` ): `void`
### ExplosionEvent
\+ `r-` impactedBlocks: `array`
\+ `r-` dimension: `Dimension`
\+ `r-` source: `Entity`
### ExplosionEventSignal
\+ `r-` subscribe ( callback: `closure` ): `closure`
\+ `r-` unsubscribe ( callback: `closure` ): `void`
### BlockExplodeEvent
\+ `r-` dimension: `Dimension`
\+ `r-` block: `Block`
\+ `r-` source: `Entity`
### BlockExplodeEventSignal
\+ `r-` subscribe ( callback: `closure` ): `closure`
\+ `r-` unsubscribe ( callback: `closure` ): `void`
### BlockPlaceEvent
\+ `r-` dimension: `Dimension`
\+ `r-` block: `Block`
\+ `r-` player: `Player`
### BlockPlaceEventSignal
\+ `r-` subscribe ( callback: `closure` ): `closure`
\+ `r-` unsubscribe ( callback: `closure` ): `void`
### BlockBreakEvent
\+ `r-` dimension: `Dimension`
\+ `r-` block: `Block`
\+ `r-` player: `Player`
\+ `r-` brokenBlockPermutation: `BlockPermutation`
### BlockBreakEventSignal
\+ `r-` subscribe ( callback: `closure` ): `closure`
\+ `r-` unsubscribe ( callback: `closure` ): `void`
### BeforeItemDefinitionTriggeredEvent
\+ `rw` item: `ItemStack`
\+ `r-` source: `Entity`
\+ `r-` eventName: `string`
\+ `rw` cancel: `boolean`
### BeforeItemDefinitionEventSignal
\+ `r-` subscribe ( callback: `closure` ): `closure`
\+ `r-` unsubscribe ( callback: `closure` ): `void`
### ItemDefinitionTriggeredEvent
\+ `rw` item: `ItemStack`
\+ `r-` source: `Entity`
\+ `r-` eventName: `string`
### ItemDefinitionEventSignal
\+ `r-` subscribe ( callback: `closure` ): `closure`
\+ `r-` unsubscribe ( callback: `closure` ): `void`
### BeforeItemUseEvent
\+ `rw` item: `ItemStack`
\+ `r-` source: `Entity`
\+ `rw` cancel: `boolean`
### BeforeItemUseEventSignal
\+ `r-` subscribe ( callback: `closure` ): `closure`
\+ `r-` unsubscribe ( callback: `closure` ): `void`
### ItemUseEvent
\+ `rw` item: `ItemStack`
\+ `r-` source: `Entity`
### ItemUseEventSignal
\+ `r-` subscribe ( callback: `closure` ): `closure`
\+ `r-` unsubscribe ( callback: `closure` ): `void`
### BeforeItemUseOnEvent
\+ `rw` item: `ItemStack`
\+ `r-` source: `Entity`
\+ `r-` blockFace: `Direction`
\+ `r-` faceLocationX: `float`
\+ `r-` faceLocationY: `float`
\+ `r-` blockLocation: `BlockLocation`
\+ `rw` cancel: `boolean`
### BeforeItemUseOnEventSignal
\+ `r-` subscribe ( callback: `closure` ): `closure`
\+ `r-` unsubscribe ( callback: `closure` ): `void`
### ItemUseOnEvent
\+ `rw` item: `ItemStack`
\+ `r-` source: `Entity`
\+ `r-` blockFace: `Direction`
\+ `r-` faceLocationX: `float`
\+ `r-` faceLocationY: `float`
\+ `r-` blockLocation: `BlockLocation`
### ItemUseOnEventSignal
\+ `r-` subscribe ( callback: `closure` ): `closure`
\+ `r-` unsubscribe ( callback: `closure` ): `void`
### IEntityComponent
\+ `r-` id: `string`
### Entity
\+ `r-` id: `string`
\+ `r-` location: `Location`
\+ `r-` velocity: `Vector`
\+ `r-` dimension: `Dimension`
\+ `rw` nameTag: `string`
\+ `rw` isSneaking: `boolean`
\+ `rw` target: `Entity`
\+ `r-` viewVector: `Vector`
\+ `r-` headLocation: `Location`
\+ `r-` bodyRotation: `float`
\+ `r-` hasComponent ( componentId: `string` ): `boolean`
\+ `r-` getComponent ( componentId: `string` ): `IEntityComponent`
\+ `r-` getComponents (  ): `array`
\+ `r-` setVelocity ( velocity: `Vector` ): `void`
\+ `r-` teleport ( location: `Location`, dimension: `Dimension`, xRotation: `float`, yRotation: `float` ): `void`
\+ `r-` teleportFacing ( location: `Location`, dimension: `Dimension`, facingLocation: `Location` ): `void`
\+ `r-` kill (  ): `void`
\+ `r-` getEffect ( effectType: `EffectType` ): `Effect`
\+ `r-` addEffect ( effectType: `EffectType`, duration: `int32`, amplifier: `int32`, showParticles: `boolean` ): `void`
\+ `r-` triggerEvent ( eventName: `string` ): `void`
\+ `r-` runCommand ( commandString: `string` ): `any`
\+ `r-` addTag ( tag: `string` ): `boolean`
\+ `r-` removeTag ( tag: `string` ): `boolean`
\+ `r-` hasTag ( tag: `string` ): `boolean`
\+ `r-` getTags (  ): `array`
\+ `r-` getEntitiesFromViewVector ( options: `EntityRaycastOptions` ): `array`
\+ `r-` getBlockFromViewVector ( options: `BlockRaycastOptions` ): `Block`
### EntityDefinitionFeedItem
\+ `r-` growth: `float`
\+ `r-` item: `string`
### EntityAddRiderComponent
\+ `r-` id: `string`
\+ `r-` entityType: `string`
\+ `r-` spawnEvent: `string`
### EntityAgeableComponent
\+ `r-` id: `string`
\+ `r-` duration: `float`
\+ `r-` feedItems: `array`
\+ `r-` dropItems: `array`
\+ `r-` growUp: `Trigger`
### EntityBreathableComponent
\+ `r-` id: `string`
\+ `r-` totalSupply: `int32`
\+ `r-` suffocateTime: `int32`
\+ `r-` inhaleTime: `float`
\+ `r-` breathesAir: `boolean`
\+ `r-` breathesWater: `boolean`
\+ `r-` breathesLava: `boolean`
\+ `r-` breathesSolids: `boolean`
\+ `r-` generatesBubbles: `boolean`
\+ `r-` breatheBlocks: `array`
\+ `r-` nonBreatheBlocks: `array`
\+ `r-` setAirSupply ( value: `int16` ): `void`
### EntityIterator
### EntityQueryOptions
\+ `rw` location: `optional`
\+ `rw` minDistance: `optional`
\+ `rw` maxDistance: `optional`
\+ `rw` tags: `array`
\+ `rw` closest: `optional`
\+ `rw` farthest: `optional`
\+ `rw` minLevel: `optional`
\+ `rw` maxLevel: `optional`
\+ `rw` gameMode: `optional`
\+ `rw` name: `optional`
\+ `rw` minVerticalRotation: `optional`
\+ `rw` maxVerticalRotation: `optional`
\+ `rw` minHorizontalRotation: `optional`
\+ `rw` maxHorizontalRotation: `optional`
\+ `rw` type: `optional`
\+ `rw` families: `array`
\+ `rw` volume: `optional`
\+ `rw` scoreOptions: `array`
\+ `rw` excludeTypes: `array`
\+ `rw` excludeTags: `array`
\+ `rw` excludeNames: `array`
\+ `rw` excludeFamilies: `array`
\+ `rw` excludeGameModes: `array`
\+ `r-` constructor (  ): `EntityQueryOptions`
### EntityType
\+ `r-` id: `string`
### EntityTypeIterator
### Trigger
\+ `rw` eventName: `string`
\+ `r-` constructor ( eventName: `string` ): `Trigger`
### DefinitionModifier
\+ `r-` componentGroupsToAdd: `array`
\+ `r-` componentGroupsToRemove: `array`
\+ `rw` triggers: `array`
\+ `r-` constructor (  ): `DefinitionModifier`
### EffectType
\+ `r-` getName (  ): `string`
### EntityRaycastOptions
\+ `rw` maxDistance: `int32`
\+ `r-` constructor (  ): `EntityRaycastOptions`
### ExplosionOptions
\+ `rw` source: `Entity`
\+ `rw` breaksBlocks: `boolean`
\+ `rw` causesFire: `boolean`
\+ `rw` allowUnderwater: `boolean`
\+ `r-` constructor (  ): `ExplosionOptions`
### SoundOptions
\+ `rw` location: `optional`
\+ `rw` volume: `float`
\+ `rw` pitch: `float`
\+ `r-` constructor (  ): `SoundOptions`
### MusicOptions
\+ `rw` location: `optional`
\+ `rw` volume: `float`
\+ `rw` fade: `float`
\+ `rw` loop: `boolean`
\+ `r-` constructor (  ): `MusicOptions`
### Events
\+ `r-` tick: `TickEventSignal`
\+ `r-` weatherChange: `WeatherChangeEventSignal`
\+ `r-` playerJoin: `PlayerJoinEventSignal`
\+ `r-` playerLeave: `PlayerLeaveEventSignal`
\+ `r-` effectAdd: `EffectAddEventSignal`
\+ `r-` beforeChat: `BeforeChatEventSignal`
\+ `r-` chat: `ChatEventSignal`
\+ `r-` entityCreate: `EntityCreateEventSignal`
\+ `r-` entityHit: `EntityHitEventSignal`
\+ `r-` messageReceive: `ServerMessageSignal`
\+ `r-` beforeDataDrivenEntityTriggerEvent: `BeforeDataDrivenEntityTriggerEventSignal`
\+ `r-` dataDrivenEntityTriggerEvent: `DataDrivenEntityTriggerEventSignal`
\+ `r-` entityHurt: `EntityHurtEventSignal`
\+ `r-` beforePistonActivate: `BeforePistonActivateEventSignal`
\+ `r-` pistonActivate: `PistonActivateEventSignal`
\+ `r-` leverActivate: `LeverActivateEventSignal`
\+ `r-` beforeExplosion: `BeforeExplosionEventSignal`
\+ `r-` explosion: `ExplosionEventSignal`
\+ `r-` blockExplode: `BlockExplodeEventSignal`
\+ `r-` blockPlace: `BlockPlaceEventSignal`
\+ `r-` blockBreak: `BlockBreakEventSignal`
\+ `r-` beforeItemDefinitionEvent: `BeforeItemDefinitionEventSignal`
\+ `r-` itemDefinitionEvent: `ItemDefinitionEventSignal`
\+ `r-` beforeItemUse: `BeforeItemUseEventSignal`
\+ `r-` itemUse: `ItemUseEventSignal`
\+ `r-` beforeItemUseOn: `BeforeItemUseOnEventSignal`
\+ `r-` itemUseOn: `ItemUseOnEventSignal`
### FeedItem
\+ `r-` effects: `array`
\+ `r-` healAmount: `int32`
\+ `r-` item: `string`
### FeedItemEffect
\+ `r-` amplifier: `int32`
\+ `r-` chance: `float`
\+ `r-` duration: `int32`
\+ `r-` name: `string`
### FilterGroup
### EntityHealableComponent
\+ `r-` id: `string`
\+ `r-` filters: `FilterGroup`
\+ `r-` forceUse: `boolean`
\+ `r-` items: `array`
### EntityHealthComponent
\+ `r-` id: `string`
\+ `r-` value: `float`
\+ `r-` current: `float`
\+ `r-` setCurrent ( value: `float` ): `void`
\+ `r-` resetToMinValue (  ): `void`
\+ `r-` resetToMaxValue (  ): `void`
\+ `r-` resetToDefaultValue (  ): `void`
### EntityInventoryComponent
\+ `r-` id: `string`
\+ `r-` additionalSlotsPerStrength: `int32`
\+ `r-` canBeSiphonedFrom: `boolean`
\+ `r-` containerType: `string`
\+ `r-` inventorySize: `int32`
\+ `r-` private: `boolean`
\+ `r-` restrictToOwner: `boolean`
\+ `r-` container: `InventoryComponentContainer`
### InventoryComponentContainer
\+ `r-` size: `int32`
\+ `r-` emptySlotsCount: `int32`
\+ `r-` setItem ( slot: `int32`, itemStack: `ItemStack` ): `void`
\+ `r-` getItem ( slot: `int32` ): `ItemStack`
\+ `r-` addItem ( itemStack: `ItemStack` ): `void`
\+ `r-` transferItem ( fromSlot: `int32`, toSlot: `int32`, toContainer: `Container` ): `boolean`
\+ `r-` swapItems ( slot: `int32`, otherSlot: `int32`, otherContainer: `Container` ): `boolean`
### EntityItemComponent
\+ `r-` itemStack: `ItemStack`
### PlayerInventoryComponentContainer
\+ `r-` size: `int32`
\+ `r-` emptySlotsCount: `int32`
\+ `r-` setItem ( slot: `int32`, itemStack: `ItemStack` ): `void`
\+ `r-` getItem ( slot: `int32` ): `ItemStack`
\+ `r-` addItem ( itemStack: `ItemStack` ): `void`
\+ `r-` transferItem ( fromSlot: `int32`, toSlot: `int32`, toContainer: `Container` ): `boolean`
\+ `r-` swapItems ( slot: `int32`, otherSlot: `int32`, otherContainer: `Container` ): `boolean`
### Container
\+ `r-` size: `int32`
\+ `r-` emptySlotsCount: `int32`
\+ `r-` setItem ( slot: `int32`, itemStack: `ItemStack` ): `void`
\+ `r-` getItem ( slot: `int32` ): `ItemStack`
\+ `r-` addItem ( itemStack: `ItemStack` ): `void`
\+ `r-` transferItem ( fromSlot: `int32`, toSlot: `int32`, toContainer: `Container` ): `boolean`
\+ `r-` swapItems ( slot: `int32`, otherSlot: `int32`, otherContainer: `Container` ): `boolean`
### EntityLavaMovementComponent
\+ `r-` id: `string`
\+ `r-` value: `float`
\+ `r-` current: `float`
\+ `r-` setCurrent ( value: `float` ): `void`
\+ `r-` resetToMinValue (  ): `void`
\+ `r-` resetToMaxValue (  ): `void`
\+ `r-` resetToDefaultValue (  ): `void`
### EntityLeashableComponent
\+ `r-` id: `string`
\+ `r-` softDistance: `float`
\+ `r-` leash ( leashHolder: `Entity` ): `void`
\+ `r-` unleash (  ): `void`
### Effect
\+ `r-` amplifier: `int32`
\+ `r-` duration: `int32`
\+ `r-` displayName: `string`
### EntityMountTamingComponent
\+ `r-` id: `string`
\+ `r-` setTamed ( showParticles: `boolean` ): `void`
### EntityMovementAmphibiousComponent
\+ `r-` id: `string`
\+ `r-` maxTurn: `float`
### EntityMovementBasicComponent
\+ `r-` id: `string`
\+ `r-` maxTurn: `float`
### EntityMovementComponent
\+ `r-` id: `string`
\+ `r-` value: `float`
\+ `r-` current: `float`
\+ `r-` setCurrent ( value: `float` ): `void`
\+ `r-` resetToMinValue (  ): `void`
\+ `r-` resetToMaxValue (  ): `void`
\+ `r-` resetToDefaultValue (  ): `void`
### EntityMovementFlyComponent
\+ `r-` id: `string`
\+ `r-` maxTurn: `float`
### EntityMovementGenericComponent
\+ `r-` id: `string`
\+ `r-` maxTurn: `float`
### EntityMovementGlideComponent
\+ `r-` id: `string`
\+ `r-` maxTurn: `float`
\+ `r-` startSpeed: `float`
\+ `r-` speedWhenTurning: `float`
### EntityMovementHoverComponent
\+ `r-` id: `string`
\+ `r-` maxTurn: `float`
### EntityMovementJumpComponent
\+ `r-` id: `string`
\+ `r-` maxTurn: `float`
### EntityMovementSkipComponent
\+ `r-` id: `string`
\+ `r-` maxTurn: `float`
### EntityMovementSwayComponent
\+ `r-` id: `string`
\+ `r-` maxTurn: `float`
\+ `r-` swayFrequency: `float`
\+ `r-` swayAmplitude: `float`
### EntityNavigationClimbComponent
\+ `r-` id: `string`
\+ `r-` isAmphibious: `boolean`
\+ `r-` avoidSun: `boolean`
\+ `r-` canPassDoors: `boolean`
\+ `r-` canOpenDoors: `boolean`
\+ `r-` canOpenIronDoors: `boolean`
\+ `r-` canBreakDoors: `boolean`
\+ `r-` avoidWater: `boolean`
\+ `r-` avoidDamageBlocks: `boolean`
\+ `r-` canFloat: `boolean`
\+ `r-` canSink: `boolean`
\+ `r-` canPathOverWater: `boolean`
\+ `r-` canPathOverLava: `boolean`
\+ `r-` canWalkInLava: `boolean`
\+ `r-` avoidPortals: `boolean`
\+ `r-` canWalk: `boolean`
\+ `r-` canSwim: `boolean`
\+ `r-` canBreach: `boolean`
\+ `r-` canJump: `boolean`
\+ `r-` canPathFromAir: `boolean`
### EntityNavigationFloatComponent
\+ `r-` id: `string`
\+ `r-` isAmphibious: `boolean`
\+ `r-` avoidSun: `boolean`
\+ `r-` canPassDoors: `boolean`
\+ `r-` canOpenDoors: `boolean`
\+ `r-` canOpenIronDoors: `boolean`
\+ `r-` canBreakDoors: `boolean`
\+ `r-` avoidWater: `boolean`
\+ `r-` avoidDamageBlocks: `boolean`
\+ `r-` canFloat: `boolean`
\+ `r-` canSink: `boolean`
\+ `r-` canPathOverWater: `boolean`
\+ `r-` canPathOverLava: `boolean`
\+ `r-` canWalkInLava: `boolean`
\+ `r-` avoidPortals: `boolean`
\+ `r-` canWalk: `boolean`
\+ `r-` canSwim: `boolean`
\+ `r-` canBreach: `boolean`
\+ `r-` canJump: `boolean`
\+ `r-` canPathFromAir: `boolean`
### EntityNavigationFlyComponent
\+ `r-` id: `string`
\+ `r-` isAmphibious: `boolean`
\+ `r-` avoidSun: `boolean`
\+ `r-` canPassDoors: `boolean`
\+ `r-` canOpenDoors: `boolean`
\+ `r-` canOpenIronDoors: `boolean`
\+ `r-` canBreakDoors: `boolean`
\+ `r-` avoidWater: `boolean`
\+ `r-` avoidDamageBlocks: `boolean`
\+ `r-` canFloat: `boolean`
\+ `r-` canSink: `boolean`
\+ `r-` canPathOverWater: `boolean`
\+ `r-` canPathOverLava: `boolean`
\+ `r-` canWalkInLava: `boolean`
\+ `r-` avoidPortals: `boolean`
\+ `r-` canWalk: `boolean`
\+ `r-` canSwim: `boolean`
\+ `r-` canBreach: `boolean`
\+ `r-` canJump: `boolean`
\+ `r-` canPathFromAir: `boolean`
### EntityNavigationGenericComponent
\+ `r-` id: `string`
\+ `r-` isAmphibious: `boolean`
\+ `r-` avoidSun: `boolean`
\+ `r-` canPassDoors: `boolean`
\+ `r-` canOpenDoors: `boolean`
\+ `r-` canOpenIronDoors: `boolean`
\+ `r-` canBreakDoors: `boolean`
\+ `r-` avoidWater: `boolean`
\+ `r-` avoidDamageBlocks: `boolean`
\+ `r-` canFloat: `boolean`
\+ `r-` canSink: `boolean`
\+ `r-` canPathOverWater: `boolean`
\+ `r-` canPathOverLava: `boolean`
\+ `r-` canWalkInLava: `boolean`
\+ `r-` avoidPortals: `boolean`
\+ `r-` canWalk: `boolean`
\+ `r-` canSwim: `boolean`
\+ `r-` canBreach: `boolean`
\+ `r-` canJump: `boolean`
\+ `r-` canPathFromAir: `boolean`
### EntityNavigationHoverComponent
\+ `r-` id: `string`
\+ `r-` isAmphibious: `boolean`
\+ `r-` avoidSun: `boolean`
\+ `r-` canPassDoors: `boolean`
\+ `r-` canOpenDoors: `boolean`
\+ `r-` canOpenIronDoors: `boolean`
\+ `r-` canBreakDoors: `boolean`
\+ `r-` avoidWater: `boolean`
\+ `r-` avoidDamageBlocks: `boolean`
\+ `r-` canFloat: `boolean`
\+ `r-` canSink: `boolean`
\+ `r-` canPathOverWater: `boolean`
\+ `r-` canPathOverLava: `boolean`
\+ `r-` canWalkInLava: `boolean`
\+ `r-` avoidPortals: `boolean`
\+ `r-` canWalk: `boolean`
\+ `r-` canSwim: `boolean`
\+ `r-` canBreach: `boolean`
\+ `r-` canJump: `boolean`
\+ `r-` canPathFromAir: `boolean`
### EntityNavigationWalkComponent
\+ `r-` id: `string`
\+ `r-` isAmphibious: `boolean`
\+ `r-` avoidSun: `boolean`
\+ `r-` canPassDoors: `boolean`
\+ `r-` canOpenDoors: `boolean`
\+ `r-` canOpenIronDoors: `boolean`
\+ `r-` canBreakDoors: `boolean`
\+ `r-` avoidWater: `boolean`
\+ `r-` avoidDamageBlocks: `boolean`
\+ `r-` canFloat: `boolean`
\+ `r-` canSink: `boolean`
\+ `r-` canPathOverWater: `boolean`
\+ `r-` canPathOverLava: `boolean`
\+ `r-` canWalkInLava: `boolean`
\+ `r-` avoidPortals: `boolean`
\+ `r-` canWalk: `boolean`
\+ `r-` canSwim: `boolean`
\+ `r-` canBreach: `boolean`
\+ `r-` canJump: `boolean`
\+ `r-` canPathFromAir: `boolean`
### Player
\+ `r-` id: `string`
\+ `r-` location: `Location`
\+ `r-` velocity: `Vector`
\+ `r-` dimension: `Dimension`
\+ `rw` nameTag: `string`
\+ `rw` isSneaking: `boolean`
\+ `rw` target: `Entity`
\+ `r-` viewVector: `Vector`
\+ `r-` headLocation: `Location`
\+ `r-` bodyRotation: `float`
\+ `r-` name: `string`
\+ `rw` selectedSlot: `int32`
\+ `r-` hasComponent ( componentId: `string` ): `boolean`
\+ `r-` getComponent ( componentId: `string` ): `IEntityComponent`
\+ `r-` getComponents (  ): `array`
\+ `r-` setVelocity ( velocity: `Vector` ): `void`
\+ `r-` teleport ( location: `Location`, dimension: `Dimension`, xRotation: `float`, yRotation: `float` ): `void`
\+ `r-` teleportFacing ( location: `Location`, dimension: `Dimension`, facingLocation: `Location` ): `void`
\+ `r-` kill (  ): `void`
\+ `r-` getEffect ( effectType: `EffectType` ): `Effect`
\+ `r-` addEffect ( effectType: `EffectType`, duration: `int32`, amplifier: `int32`, showParticles: `boolean` ): `void`
\+ `r-` triggerEvent ( eventName: `string` ): `void`
\+ `r-` runCommand ( commandString: `string` ): `any`
\+ `r-` addTag ( tag: `string` ): `boolean`
\+ `r-` removeTag ( tag: `string` ): `boolean`
\+ `r-` hasTag ( tag: `string` ): `boolean`
\+ `r-` getTags (  ): `array`
\+ `r-` getEntitiesFromViewVector ( options: `EntityRaycastOptions` ): `array`
\+ `r-` getBlockFromViewVector ( options: `BlockRaycastOptions` ): `Block`
\+ `r-` postClientMessage ( id: `string`, value: `string` ): `void`
\+ `r-` startItemCooldown ( itemCategory: `string`, tickDuration: `int32` ): `void`
\+ `r-` getItemCooldown ( itemCategory: `string` ): `int32`
\+ `r-` playSound ( soundID: `string`, soundOptions: `SoundOptions` ): `void`
### PlayerIterator
### EntityRideableComponent
\+ `r-` id: `string`
\+ `r-` seatCount: `int32`
\+ `r-` crouchingSkipInteract: `boolean`
\+ `r-` interactText: `string`
\+ `r-` familyTypes: `array`
\+ `r-` controllingSeat: `int32`
\+ `r-` pullInEntities: `boolean`
\+ `r-` riderCanInteract: `boolean`
\+ `r-` seats: `array`
\+ `r-` addRider ( rider: `Entity` ): `boolean`
\+ `r-` ejectRider ( rider: `Entity` ): `void`
\+ `r-` ejectRiders (  ): `void`
### EntityQueryScoreOptions
\+ `rw` exclude: `boolean`
\+ `rw` minScore: `int32`
\+ `rw` maxScore: `int32`
\+ `rw` objective: `string`
\+ `r-` constructor (  ): `EntityQueryScoreOptions`
### SculkSpreader
\+ `r-` addCursorsWithOffset ( offset: `BlockLocation`, charge: `int32` ): `void`
\+ `r-` getMaxCharge (  ): `int32`
\+ `r-` getTotalCharge (  ): `int32`
\+ `r-` getNumberOfCursors (  ): `int32`
\+ `r-` getCursorPosition ( index: `int32` ): `BlockLocation`
### Seat
\+ `rw` position: `Location`
\+ `rw` minRiderCount: `int32`
\+ `rw` maxRiderCount: `int32`
\+ `rw` lockRiderRotation: `float`
### EntityStrengthComponent
\+ `r-` id: `string`
\+ `r-` value: `int32`
\+ `r-` max: `int32`
### EntityTameableComponent
\+ `r-` id: `string`
\+ `r-` probability: `float`
\+ `r-` tameItems: `array`
\+ `r-` tameEvent: `Trigger`
\+ `r-` tame (  ): `boolean`
### EntityUnderwaterMovementComponent
\+ `r-` id: `string`
\+ `r-` value: `float`
\+ `r-` current: `float`
\+ `r-` setCurrent ( value: `float` ): `void`
\+ `r-` resetToMinValue (  ): `void`
\+ `r-` resetToMaxValue (  ): `void`
\+ `r-` resetToDefaultValue (  ): `void`
### NavigationResult
\+ `r-` isFullPath: `boolean`
\+ `r-` path: `array`
### PitchYawRotation
\+ `rw` pitch: `float`
\+ `rw` yaw: `float`
### ItemStack
\+ `r-` id: `string`
\+ `rw` amount: `int32`
\+ `rw` data: `int32`
\+ `rw` nameTag: `optional`
\+ `r-` hasComponent ( componentId: `string` ): `boolean`
\+ `r-` getComponent ( componentId: `string` ): `any`
\+ `r-` getComponents (  ): `array`
\+ `r-` triggerEvent ( eventName: `string` ): `void`
\+ `r-` setLore ( loreList: `array` ): `void`
\+ `r-` getLore (  ): `array`
\+ `r-` constructor ( itemType: `ItemType`, amount: `int32`, data: `int32` ): `ItemStack`
### ItemType
\+ `r-` id: `string`
### EnchantmentType
\+ `r-` id: `string`
\+ `r-` maxLevel: `int32`
### Enchantment
\+ `r-` type: `EnchantmentType`
\+ `rw` level: `int32`
\+ `r-` constructor ( enchantmentType: `EnchantmentType`, level: `int32` ): `Enchantment`
### EnchantmentList
\+ `r-` slot: `int32`
\+ `r-` canAddEnchantment ( enchantment: `Enchantment` ): `boolean`
\+ `r-` addEnchantment ( enchantment: `Enchantment` ): `boolean`
\+ `r-` removeEnchantment ( enchantmentType: `EnchantmentType` ): `void`
\+ `r-` hasEnchantment ( enchantmentType: `EnchantmentType` ): `int32`
\+ `r-` getEnchantment ( enchantmentType: `EnchantmentType` ): `optional`
\+ `r-` constructor ( enchantmentSlot: `int32` ): `EnchantmentList`
### MinecraftEnchantmentTypes
\+ `r-` static protection: `EnchantmentType`
\+ `r-` static fireProtection: `EnchantmentType`
\+ `r-` static featherFalling: `EnchantmentType`
\+ `r-` static blastProtection: `EnchantmentType`
\+ `r-` static projectileProtection: `EnchantmentType`
\+ `r-` static thorns: `EnchantmentType`
\+ `r-` static respiration: `EnchantmentType`
\+ `r-` static depthStrider: `EnchantmentType`
\+ `r-` static aquaAffinity: `EnchantmentType`
\+ `r-` static sharpness: `EnchantmentType`
\+ `r-` static smite: `EnchantmentType`
\+ `r-` static baneOfArthropods: `EnchantmentType`
\+ `r-` static knockback: `EnchantmentType`
\+ `r-` static fireAspect: `EnchantmentType`
\+ `r-` static looting: `EnchantmentType`
\+ `r-` static efficiency: `EnchantmentType`
\+ `r-` static silkTouch: `EnchantmentType`
\+ `r-` static unbreaking: `EnchantmentType`
\+ `r-` static fortune: `EnchantmentType`
\+ `r-` static power: `EnchantmentType`
\+ `r-` static punch: `EnchantmentType`
\+ `r-` static flame: `EnchantmentType`
\+ `r-` static infinity: `EnchantmentType`
\+ `r-` static luckOfTheSea: `EnchantmentType`
\+ `r-` static lure: `EnchantmentType`
\+ `r-` static frostWalker: `EnchantmentType`
\+ `r-` static mending: `EnchantmentType`
\+ `r-` static binding: `EnchantmentType`
\+ `r-` static vanishing: `EnchantmentType`
\+ `r-` static impaling: `EnchantmentType`
\+ `r-` static riptide: `EnchantmentType`
\+ `r-` static loyalty: `EnchantmentType`
\+ `r-` static channeling: `EnchantmentType`
\+ `r-` static multishot: `EnchantmentType`
\+ `r-` static piercing: `EnchantmentType`
\+ `r-` static quickCharge: `EnchantmentType`
\+ `r-` static soulSpeed: `EnchantmentType`
### EntityCanClimbComponent
\+ `r-` id: `string`
### EntityCanFlyComponent
\+ `r-` id: `string`
### EntityCanPowerJumpComponent
\+ `r-` id: `string`
### EntityFireImmuneComponent
\+ `r-` id: `string`
### EntityFloatsInLiquidComponent
\+ `r-` id: `string`
### EntityIsDyableComponent
\+ `r-` id: `string`
### EntityIsBabyComponent
\+ `r-` id: `string`
### EntityIsChargedComponent
\+ `r-` id: `string`
### EntityIsChestedComponent
\+ `r-` id: `string`
### EntityIsHiddenWhenInvisibleComponent
\+ `r-` id: `string`
### EntityIsIgnitedComponent
\+ `r-` id: `string`
### EntityIsIllagerCaptainComponent
\+ `r-` id: `string`
### EntityIsSaddledComponent
\+ `r-` id: `string`
### EntityIsShakingComponent
\+ `r-` id: `string`
### EntityIsShearedComponent
\+ `r-` id: `string`
### EntityIsStackableComponent
\+ `r-` id: `string`
### EntityIsStunnedComponent
\+ `r-` id: `string`
### EntityIsTamedComponent
\+ `r-` id: `string`
### EntityWantsJockeyComponent
\+ `r-` id: `string`
### EntityVariantComponent
\+ `r-` id: `string`
\+ `r-` value: `int32`
### EntitySkinIdComponent
\+ `r-` id: `string`
\+ `rw` value: `int32`
### EntityMarkVariantComponent
\+ `r-` id: `string`
\+ `rw` value: `int32`
### EntityFlyingSpeedComponent
\+ `r-` id: `string`
\+ `rw` value: `float`
### EntityColorComponent
\+ `r-` id: `string`
\+ `rw` value: `int32`
### EntityFrictionModifierComponent
\+ `r-` id: `string`
\+ `rw` value: `float`
### EntityGroundOffsetComponent
\+ `r-` id: `string`
\+ `rw` value: `float`
### EntityScaleComponent
\+ `r-` id: `string`
\+ `rw` value: `float`
### EntityPushThroughComponent
\+ `r-` id: `string`
\+ `rw` value: `float`
### ItemFoodComponent
\+ `r-` id: `string`
\+ `r-` nutrition: `int32`
\+ `r-` saturationModifier: `float`
\+ `r-` canAlwaysEat: `boolean`
\+ `r-` usingConvertsTo: `string`
### ItemEnchantsComponent
\+ `r-` id: `string`
\+ `rw` enchantments: `EnchantmentList`
\+ `r-` removeAllEnchantments (  ): `void`
### ItemDurabilityComponent
\+ `r-` id: `string`
\+ `r-` maxDurability: `int32`
\+ `r-` damageRange: `NumberRange`
\+ `rw` damage: `int32`
\+ `r-` getDamageChance ( unbreaking: `int32` ): `int32`
### ItemCooldownComponent
\+ `r-` id: `string`
\+ `r-` cooldownCategory: `string`
\+ `r-` cooldownTicks: `int32`
\+ `r-` startCooldown ( player: `Player` ): `void`
### World
\+ `r-` events: `Events`
\+ `r-` getDimension ( dimensionId: `string` ): `Dimension`
\+ `r-` getPlayers ( options: `EntityQueryOptions` ): `PlayerIterator`
\+ `r-` broadcastClientMessage ( id: `string`, value: `string` ): `void`
\+ `r-` playSound ( soundID: `string`, soundOptions: `SoundOptions` ): `void`
\+ `r-` queueMusic ( trackID: `string`, musicOptions: `MusicOptions` ): `void`
\+ `r-` stopMusic (  ): `void`
\+ `r-` playMusic ( trackID: `string`, musicOptions: `MusicOptions` ): `void`
[object Object]
