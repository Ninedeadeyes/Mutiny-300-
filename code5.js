gdjs.Game_32Over_32Code = {};
gdjs.Game_32Over_32Code.GDWoodBackgroundObjects1= [];
gdjs.Game_32Over_32Code.GDWoodBackgroundObjects2= [];
gdjs.Game_32Over_32Code.GDWoodBackground2Objects1= [];
gdjs.Game_32Over_32Code.GDWoodBackground2Objects2= [];
gdjs.Game_32Over_32Code.GDCannonObjects1= [];
gdjs.Game_32Over_32Code.GDCannonObjects2= [];
gdjs.Game_32Over_32Code.GDgameOverObjects1= [];
gdjs.Game_32Over_32Code.GDgameOverObjects2= [];


gdjs.Game_32Over_32Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("gameOver"), gdjs.Game_32Over_32Code.GDgameOverObjects1);
{for(var i = 0, len = gdjs.Game_32Over_32Code.GDgameOverObjects1.length ;i < len;++i) {
    gdjs.Game_32Over_32Code.GDgameOverObjects1[i].setString("GAME OVER. Your score is " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))) + ("/300"));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(26949620);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "dfcdb6ef0ded864b301b5cc57940b190e803b1ea53d057338043f3b8bcd2a138_04 - Castle Nosferatu (Sega-style FM Synth Remix).aac", true, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Game_32Over_32Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32Over_32Code.GDWoodBackgroundObjects1.length = 0;
gdjs.Game_32Over_32Code.GDWoodBackgroundObjects2.length = 0;
gdjs.Game_32Over_32Code.GDWoodBackground2Objects1.length = 0;
gdjs.Game_32Over_32Code.GDWoodBackground2Objects2.length = 0;
gdjs.Game_32Over_32Code.GDCannonObjects1.length = 0;
gdjs.Game_32Over_32Code.GDCannonObjects2.length = 0;
gdjs.Game_32Over_32Code.GDgameOverObjects1.length = 0;
gdjs.Game_32Over_32Code.GDgameOverObjects2.length = 0;

gdjs.Game_32Over_32Code.eventsList0(runtimeScene);

return;

}

gdjs['Game_32Over_32Code'] = gdjs.Game_32Over_32Code;
