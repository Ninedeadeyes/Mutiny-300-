gdjs.You_32Win_32Code = {};
gdjs.You_32Win_32Code.GDWoodBackgroundObjects1= [];
gdjs.You_32Win_32Code.GDWoodBackgroundObjects2= [];
gdjs.You_32Win_32Code.GDWoodBackground2Objects1= [];
gdjs.You_32Win_32Code.GDWoodBackground2Objects2= [];
gdjs.You_32Win_32Code.GDCannonObjects1= [];
gdjs.You_32Win_32Code.GDCannonObjects2= [];
gdjs.You_32Win_32Code.GDYou_9595Win_9595Objects1= [];
gdjs.You_32Win_32Code.GDYou_9595Win_9595Objects2= [];
gdjs.You_32Win_32Code.GDCaptainObjects1= [];
gdjs.You_32Win_32Code.GDCaptainObjects2= [];
gdjs.You_32Win_32Code.GDBaldPirateObjects1= [];
gdjs.You_32Win_32Code.GDBaldPirateObjects2= [];
gdjs.You_32Win_32Code.GDBarrelObjects1= [];
gdjs.You_32Win_32Code.GDBarrelObjects2= [];
gdjs.You_32Win_32Code.GDBlueBottleObjects1= [];
gdjs.You_32Win_32Code.GDBlueBottleObjects2= [];
gdjs.You_32Win_32Code.GDTableObjects1= [];
gdjs.You_32Win_32Code.GDTableObjects2= [];
gdjs.You_32Win_32Code.GDCandleObjects1= [];
gdjs.You_32Win_32Code.GDCandleObjects2= [];


gdjs.You_32Win_32Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(26806548);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "b7fb2ac77f12fb40e933300e5acc6f183db501c0bd7006e4c2923bc2802e2ac2_River Meditation.aac", true, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Captain"), gdjs.You_32Win_32Code.GDCaptainObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.You_32Win_32Code.GDCaptainObjects1.length;i<l;++i) {
    if ( !(gdjs.You_32Win_32Code.GDCaptainObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.You_32Win_32Code.GDCaptainObjects1[k] = gdjs.You_32Win_32Code.GDCaptainObjects1[i];
        ++k;
    }
}
gdjs.You_32Win_32Code.GDCaptainObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.You_32Win_32Code.GDCaptainObjects1 */
{for(var i = 0, len = gdjs.You_32Win_32Code.GDCaptainObjects1.length ;i < len;++i) {
    gdjs.You_32Win_32Code.GDCaptainObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BaldPirate"), gdjs.You_32Win_32Code.GDBaldPirateObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.You_32Win_32Code.GDBaldPirateObjects1.length;i<l;++i) {
    if ( !(gdjs.You_32Win_32Code.GDBaldPirateObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.You_32Win_32Code.GDBaldPirateObjects1[k] = gdjs.You_32Win_32Code.GDBaldPirateObjects1[i];
        ++k;
    }
}
gdjs.You_32Win_32Code.GDBaldPirateObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.You_32Win_32Code.GDBaldPirateObjects1 */
{for(var i = 0, len = gdjs.You_32Win_32Code.GDBaldPirateObjects1.length ;i < len;++i) {
    gdjs.You_32Win_32Code.GDBaldPirateObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}}

}


};

gdjs.You_32Win_32Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.You_32Win_32Code.GDWoodBackgroundObjects1.length = 0;
gdjs.You_32Win_32Code.GDWoodBackgroundObjects2.length = 0;
gdjs.You_32Win_32Code.GDWoodBackground2Objects1.length = 0;
gdjs.You_32Win_32Code.GDWoodBackground2Objects2.length = 0;
gdjs.You_32Win_32Code.GDCannonObjects1.length = 0;
gdjs.You_32Win_32Code.GDCannonObjects2.length = 0;
gdjs.You_32Win_32Code.GDYou_9595Win_9595Objects1.length = 0;
gdjs.You_32Win_32Code.GDYou_9595Win_9595Objects2.length = 0;
gdjs.You_32Win_32Code.GDCaptainObjects1.length = 0;
gdjs.You_32Win_32Code.GDCaptainObjects2.length = 0;
gdjs.You_32Win_32Code.GDBaldPirateObjects1.length = 0;
gdjs.You_32Win_32Code.GDBaldPirateObjects2.length = 0;
gdjs.You_32Win_32Code.GDBarrelObjects1.length = 0;
gdjs.You_32Win_32Code.GDBarrelObjects2.length = 0;
gdjs.You_32Win_32Code.GDBlueBottleObjects1.length = 0;
gdjs.You_32Win_32Code.GDBlueBottleObjects2.length = 0;
gdjs.You_32Win_32Code.GDTableObjects1.length = 0;
gdjs.You_32Win_32Code.GDTableObjects2.length = 0;
gdjs.You_32Win_32Code.GDCandleObjects1.length = 0;
gdjs.You_32Win_32Code.GDCandleObjects2.length = 0;

gdjs.You_32Win_32Code.eventsList0(runtimeScene);

return;

}

gdjs['You_32Win_32Code'] = gdjs.You_32Win_32Code;
