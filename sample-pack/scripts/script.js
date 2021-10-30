// Native Modules
import * as Minecraft from "mojang-minecraft";
import * as Gametest from "mojang-gametest";

const OVERWORLD = Minecraft.World.getDimension("overworld");

Minecraft.Commands.run("say Hello World", OVERWORLD)

/**
* Your code here
**/
