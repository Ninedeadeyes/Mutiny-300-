gdjs.choice_32Code = {};
gdjs.choice_32Code.GDBlackSpaceObjects1= [];
gdjs.choice_32Code.GDBlackSpaceObjects2= [];
gdjs.choice_32Code.GDNewBBTextObjects1= [];
gdjs.choice_32Code.GDNewBBTextObjects2= [];


gdjs.choice_32Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "intro ", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "c");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "intro (easy) ", false);
}}

}


};

gdjs.choice_32Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.choice_32Code.GDBlackSpaceObjects1.length = 0;
gdjs.choice_32Code.GDBlackSpaceObjects2.length = 0;
gdjs.choice_32Code.GDNewBBTextObjects1.length = 0;
gdjs.choice_32Code.GDNewBBTextObjects2.length = 0;

gdjs.choice_32Code.eventsList0(runtimeScene);

return;

}

gdjs['choice_32Code'] = gdjs.choice_32Code;
