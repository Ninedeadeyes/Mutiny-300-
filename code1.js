gdjs.intro_32Code = {};
gdjs.intro_32Code.GDWoodBackgroundObjects1= [];
gdjs.intro_32Code.GDWoodBackgroundObjects2= [];
gdjs.intro_32Code.GDWoodBackgroundObjects3= [];
gdjs.intro_32Code.GDCannonObjects1= [];
gdjs.intro_32Code.GDCannonObjects2= [];
gdjs.intro_32Code.GDCannonObjects3= [];
gdjs.intro_32Code.GDCannonBallObjects1= [];
gdjs.intro_32Code.GDCannonBallObjects2= [];
gdjs.intro_32Code.GDCannonBallObjects3= [];
gdjs.intro_32Code.GDBombGuyObjects1= [];
gdjs.intro_32Code.GDBombGuyObjects2= [];
gdjs.intro_32Code.GDBombGuyObjects3= [];
gdjs.intro_32Code.GDSpawn_9595PointObjects1= [];
gdjs.intro_32Code.GDSpawn_9595PointObjects2= [];
gdjs.intro_32Code.GDSpawn_9595PointObjects3= [];
gdjs.intro_32Code.GDCaptainObjects1= [];
gdjs.intro_32Code.GDCaptainObjects2= [];
gdjs.intro_32Code.GDCaptainObjects3= [];
gdjs.intro_32Code.GDCaptain2Objects1= [];
gdjs.intro_32Code.GDCaptain2Objects2= [];
gdjs.intro_32Code.GDCaptain2Objects3= [];
gdjs.intro_32Code.GDScoreObjects1= [];
gdjs.intro_32Code.GDScoreObjects2= [];
gdjs.intro_32Code.GDScoreObjects3= [];
gdjs.intro_32Code.GDBigGuyObjects1= [];
gdjs.intro_32Code.GDBigGuyObjects2= [];
gdjs.intro_32Code.GDBigGuyObjects3= [];
gdjs.intro_32Code.GDWhaleObjects1= [];
gdjs.intro_32Code.GDWhaleObjects2= [];
gdjs.intro_32Code.GDWhaleObjects3= [];
gdjs.intro_32Code.GDNewBitmapTextObjects1= [];
gdjs.intro_32Code.GDNewBitmapTextObjects2= [];
gdjs.intro_32Code.GDNewBitmapTextObjects3= [];
gdjs.intro_32Code.GDNewBBTextObjects1= [];
gdjs.intro_32Code.GDNewBBTextObjects2= [];
gdjs.intro_32Code.GDNewBBTextObjects3= [];
gdjs.intro_32Code.GDNewBitmapText2Objects1= [];
gdjs.intro_32Code.GDNewBitmapText2Objects2= [];
gdjs.intro_32Code.GDNewBitmapText2Objects3= [];
gdjs.intro_32Code.GDWaterFlatBrightObjects1= [];
gdjs.intro_32Code.GDWaterFlatBrightObjects2= [];
gdjs.intro_32Code.GDWaterFlatBrightObjects3= [];
gdjs.intro_32Code.GDNewBBText2Objects1= [];
gdjs.intro_32Code.GDNewBBText2Objects2= [];
gdjs.intro_32Code.GDNewBBText2Objects3= [];
gdjs.intro_32Code.GDspacebarObjects1= [];
gdjs.intro_32Code.GDspacebarObjects2= [];
gdjs.intro_32Code.GDspacebarObjects3= [];


gdjs.intro_32Code.eventsList0 = function(runtimeScene) {

};gdjs.intro_32Code.mapOfGDgdjs_9546intro_959532Code_9546GDCannonBallObjects1Objects = Hashtable.newFrom({"CannonBall": gdjs.intro_32Code.GDCannonBallObjects1});
gdjs.intro_32Code.mapOfGDgdjs_9546intro_959532Code_9546GDCannonBallObjects1Objects = Hashtable.newFrom({"CannonBall": gdjs.intro_32Code.GDCannonBallObjects1});
gdjs.intro_32Code.mapOfGDgdjs_9546intro_959532Code_9546GDBombGuyObjects1Objects = Hashtable.newFrom({"BombGuy": gdjs.intro_32Code.GDBombGuyObjects1});
gdjs.intro_32Code.mapOfGDgdjs_9546intro_959532Code_9546GDCannonBallObjects1Objects = Hashtable.newFrom({"CannonBall": gdjs.intro_32Code.GDCannonBallObjects1});
gdjs.intro_32Code.mapOfGDgdjs_9546intro_959532Code_9546GDBigGuyObjects1Objects = Hashtable.newFrom({"BigGuy": gdjs.intro_32Code.GDBigGuyObjects1});
gdjs.intro_32Code.mapOfGDgdjs_9546intro_959532Code_9546GDCannonBallObjects1Objects = Hashtable.newFrom({"CannonBall": gdjs.intro_32Code.GDCannonBallObjects1});
gdjs.intro_32Code.mapOfGDgdjs_9546intro_959532Code_9546GDWhaleObjects1Objects = Hashtable.newFrom({"Whale": gdjs.intro_32Code.GDWhaleObjects1});
gdjs.intro_32Code.mapOfGDgdjs_9546intro_959532Code_9546GDSpawn_95959595PointObjects2Objects = Hashtable.newFrom({"Spawn_Point": gdjs.intro_32Code.GDSpawn_9595PointObjects2});
gdjs.intro_32Code.mapOfGDgdjs_9546intro_959532Code_9546GDBombGuyObjects2Objects = Hashtable.newFrom({"BombGuy": gdjs.intro_32Code.GDBombGuyObjects2});
gdjs.intro_32Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Spawn_Point"), gdjs.intro_32Code.GDSpawn_9595PointObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") > 0.4;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickRandomObject((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.intro_32Code.mapOfGDgdjs_9546intro_959532Code_9546GDSpawn_95959595PointObjects2Objects);
}
if (isConditionTrue_0) {
/* Reuse gdjs.intro_32Code.GDSpawn_9595PointObjects2 */
gdjs.intro_32Code.GDBombGuyObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.intro_32Code.mapOfGDgdjs_9546intro_959532Code_9546GDBombGuyObjects2Objects, (( gdjs.intro_32Code.GDSpawn_9595PointObjects2.length === 0 ) ? 0 :gdjs.intro_32Code.GDSpawn_9595PointObjects2[0].getPointX("")), (( gdjs.intro_32Code.GDSpawn_9595PointObjects2.length === 0 ) ? 0 :gdjs.intro_32Code.GDSpawn_9595PointObjects2[0].getPointY("")), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}{for(var i = 0, len = gdjs.intro_32Code.GDBombGuyObjects2.length ;i < len;++i) {
    gdjs.intro_32Code.GDBombGuyObjects2[i].addForce(200, 0, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BombGuy"), gdjs.intro_32Code.GDBombGuyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.intro_32Code.GDBombGuyObjects2.length;i<l;++i) {
    if ( gdjs.intro_32Code.GDBombGuyObjects2[i].getX() > 1500 ) {
        isConditionTrue_0 = true;
        gdjs.intro_32Code.GDBombGuyObjects2[k] = gdjs.intro_32Code.GDBombGuyObjects2[i];
        ++k;
    }
}
gdjs.intro_32Code.GDBombGuyObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.intro_32Code.GDBombGuyObjects2 */
{for(var i = 0, len = gdjs.intro_32Code.GDBombGuyObjects2.length ;i < len;++i) {
    gdjs.intro_32Code.GDBombGuyObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BombGuy"), gdjs.intro_32Code.GDBombGuyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.intro_32Code.GDBombGuyObjects1.length;i<l;++i) {
    if ( !(gdjs.intro_32Code.GDBombGuyObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.intro_32Code.GDBombGuyObjects1[k] = gdjs.intro_32Code.GDBombGuyObjects1[i];
        ++k;
    }
}
gdjs.intro_32Code.GDBombGuyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.intro_32Code.GDBombGuyObjects1 */
{for(var i = 0, len = gdjs.intro_32Code.GDBombGuyObjects1.length ;i < len;++i) {
    gdjs.intro_32Code.GDBombGuyObjects1[i].getBehavior("Animation").setAnimationName("Run");
}
}}

}


};gdjs.intro_32Code.eventsList2 = function(runtimeScene) {

};gdjs.intro_32Code.mapOfGDgdjs_9546intro_959532Code_9546GDSpawn_95959595PointObjects1Objects = Hashtable.newFrom({"Spawn_Point": gdjs.intro_32Code.GDSpawn_9595PointObjects1});
gdjs.intro_32Code.mapOfGDgdjs_9546intro_959532Code_9546GDBigGuyObjects1Objects = Hashtable.newFrom({"BigGuy": gdjs.intro_32Code.GDBigGuyObjects1});
gdjs.intro_32Code.eventsList3 = function(runtimeScene) {

};gdjs.intro_32Code.mapOfGDgdjs_9546intro_959532Code_9546GDSpawn_95959595PointObjects1Objects = Hashtable.newFrom({"Spawn_Point": gdjs.intro_32Code.GDSpawn_9595PointObjects1});
gdjs.intro_32Code.mapOfGDgdjs_9546intro_959532Code_9546GDWhaleObjects1Objects = Hashtable.newFrom({"Whale": gdjs.intro_32Code.GDWhaleObjects1});
gdjs.intro_32Code.eventsList4 = function(runtimeScene) {

};gdjs.intro_32Code.mapOfGDgdjs_9546intro_959532Code_9546GDCannonObjects1Objects = Hashtable.newFrom({"Cannon": gdjs.intro_32Code.GDCannonObjects1});
gdjs.intro_32Code.mapOfGDgdjs_9546intro_959532Code_9546GDBombGuyObjects1Objects = Hashtable.newFrom({"BombGuy": gdjs.intro_32Code.GDBombGuyObjects1});
gdjs.intro_32Code.mapOfGDgdjs_9546intro_959532Code_9546GDCannonObjects1Objects = Hashtable.newFrom({"Cannon": gdjs.intro_32Code.GDCannonObjects1});
gdjs.intro_32Code.mapOfGDgdjs_9546intro_959532Code_9546GDWhaleObjects1Objects = Hashtable.newFrom({"Whale": gdjs.intro_32Code.GDWhaleObjects1});
gdjs.intro_32Code.mapOfGDgdjs_9546intro_959532Code_9546GDCannonObjects1Objects = Hashtable.newFrom({"Cannon": gdjs.intro_32Code.GDCannonObjects1});
gdjs.intro_32Code.mapOfGDgdjs_9546intro_959532Code_9546GDBigGuyObjects1Objects = Hashtable.newFrom({"BigGuy": gdjs.intro_32Code.GDBigGuyObjects1});
gdjs.intro_32Code.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(26107436);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "97acd74005413b4d938c885c54ad6d10fdaf5e3869bb8016b2f1117ee07dc29e_Land of Pirates.aac", true, 30, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{


gdjs.intro_32Code.eventsList0(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Cannon"), gdjs.intro_32Code.GDCannonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.intro_32Code.GDCannonObjects1.length;i<l;++i) {
    if ( !(gdjs.intro_32Code.GDCannonObjects1[i].getBehavior("PlatformerObject").isFalling()) ) {
        isConditionTrue_0 = true;
        gdjs.intro_32Code.GDCannonObjects1[k] = gdjs.intro_32Code.GDCannonObjects1[i];
        ++k;
    }
}
gdjs.intro_32Code.GDCannonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.intro_32Code.GDCannonObjects1 */
gdjs.intro_32Code.GDCannonBallObjects1.length = 0;

{for(var i = 0, len = gdjs.intro_32Code.GDCannonObjects1.length ;i < len;++i) {
    gdjs.intro_32Code.GDCannonObjects1[i].getBehavior("FireBullet").Fire((gdjs.intro_32Code.GDCannonObjects1[i].getPointX("POINT")), (gdjs.intro_32Code.GDCannonObjects1[i].getPointY("POINT")), gdjs.intro_32Code.mapOfGDgdjs_9546intro_959532Code_9546GDCannonBallObjects1Objects, (gdjs.intro_32Code.GDCannonObjects1[i].getAngle()), -(500), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BombGuy"), gdjs.intro_32Code.GDBombGuyObjects1);
gdjs.copyArray(runtimeScene.getObjects("CannonBall"), gdjs.intro_32Code.GDCannonBallObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.intro_32Code.mapOfGDgdjs_9546intro_959532Code_9546GDCannonBallObjects1Objects, gdjs.intro_32Code.mapOfGDgdjs_9546intro_959532Code_9546GDBombGuyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.intro_32Code.GDBombGuyObjects1 */
/* Reuse gdjs.intro_32Code.GDCannonBallObjects1 */
{for(var i = 0, len = gdjs.intro_32Code.GDBombGuyObjects1.length ;i < len;++i) {
    gdjs.intro_32Code.GDBombGuyObjects1[i].getBehavior("Health").Hit(1, true, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.intro_32Code.GDCannonBallObjects1.length ;i < len;++i) {
    gdjs.intro_32Code.GDCannonBallObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.intro_32Code.GDBigGuyObjects1);
gdjs.copyArray(runtimeScene.getObjects("CannonBall"), gdjs.intro_32Code.GDCannonBallObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.intro_32Code.mapOfGDgdjs_9546intro_959532Code_9546GDCannonBallObjects1Objects, gdjs.intro_32Code.mapOfGDgdjs_9546intro_959532Code_9546GDBigGuyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.intro_32Code.GDBigGuyObjects1 */
/* Reuse gdjs.intro_32Code.GDCannonBallObjects1 */
{for(var i = 0, len = gdjs.intro_32Code.GDBigGuyObjects1.length ;i < len;++i) {
    gdjs.intro_32Code.GDBigGuyObjects1[i].getBehavior("Health").Hit(1, true, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.intro_32Code.GDCannonBallObjects1.length ;i < len;++i) {
    gdjs.intro_32Code.GDCannonBallObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CannonBall"), gdjs.intro_32Code.GDCannonBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Whale"), gdjs.intro_32Code.GDWhaleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.intro_32Code.mapOfGDgdjs_9546intro_959532Code_9546GDCannonBallObjects1Objects, gdjs.intro_32Code.mapOfGDgdjs_9546intro_959532Code_9546GDWhaleObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.intro_32Code.GDCannonBallObjects1 */
/* Reuse gdjs.intro_32Code.GDWhaleObjects1 */
{for(var i = 0, len = gdjs.intro_32Code.GDWhaleObjects1.length ;i < len;++i) {
    gdjs.intro_32Code.GDWhaleObjects1[i].getBehavior("Health").Hit(1, true, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.intro_32Code.GDCannonBallObjects1.length ;i < len;++i) {
    gdjs.intro_32Code.GDCannonBallObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BombGuy"), gdjs.intro_32Code.GDBombGuyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.intro_32Code.GDBombGuyObjects1.length;i<l;++i) {
    if ( gdjs.intro_32Code.GDBombGuyObjects1[i].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.intro_32Code.GDBombGuyObjects1[k] = gdjs.intro_32Code.GDBombGuyObjects1[i];
        ++k;
    }
}
gdjs.intro_32Code.GDBombGuyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.intro_32Code.GDBombGuyObjects1 */
{for(var i = 0, len = gdjs.intro_32Code.GDBombGuyObjects1.length ;i < len;++i) {
    gdjs.intro_32Code.GDBombGuyObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.intro_32Code.GDBigGuyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.intro_32Code.GDBigGuyObjects1.length;i<l;++i) {
    if ( gdjs.intro_32Code.GDBigGuyObjects1[i].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.intro_32Code.GDBigGuyObjects1[k] = gdjs.intro_32Code.GDBigGuyObjects1[i];
        ++k;
    }
}
gdjs.intro_32Code.GDBigGuyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.intro_32Code.GDBigGuyObjects1 */
{for(var i = 0, len = gdjs.intro_32Code.GDBigGuyObjects1.length ;i < len;++i) {
    gdjs.intro_32Code.GDBigGuyObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Whale"), gdjs.intro_32Code.GDWhaleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.intro_32Code.GDWhaleObjects1.length;i<l;++i) {
    if ( gdjs.intro_32Code.GDWhaleObjects1[i].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.intro_32Code.GDWhaleObjects1[k] = gdjs.intro_32Code.GDWhaleObjects1[i];
        ++k;
    }
}
gdjs.intro_32Code.GDWhaleObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.intro_32Code.GDWhaleObjects1 */
{for(var i = 0, len = gdjs.intro_32Code.GDWhaleObjects1.length ;i < len;++i) {
    gdjs.intro_32Code.GDWhaleObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.intro_32Code.eventsList1(runtimeScene);
}


{


gdjs.intro_32Code.eventsList2(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer2");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Spawn_Point"), gdjs.intro_32Code.GDSpawn_9595PointObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer2") >= 0.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickRandomObject((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.intro_32Code.mapOfGDgdjs_9546intro_959532Code_9546GDSpawn_95959595PointObjects1Objects);
}
if (isConditionTrue_0) {
/* Reuse gdjs.intro_32Code.GDSpawn_9595PointObjects1 */
gdjs.intro_32Code.GDBigGuyObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.intro_32Code.mapOfGDgdjs_9546intro_959532Code_9546GDBigGuyObjects1Objects, (( gdjs.intro_32Code.GDSpawn_9595PointObjects1.length === 0 ) ? 0 :gdjs.intro_32Code.GDSpawn_9595PointObjects1[0].getPointX("")), (( gdjs.intro_32Code.GDSpawn_9595PointObjects1.length === 0 ) ? 0 :gdjs.intro_32Code.GDSpawn_9595PointObjects1[0].getPointY("")), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer2");
}{for(var i = 0, len = gdjs.intro_32Code.GDBigGuyObjects1.length ;i < len;++i) {
    gdjs.intro_32Code.GDBigGuyObjects1[i].addForce(150, 0, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.intro_32Code.GDBigGuyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.intro_32Code.GDBigGuyObjects1.length;i<l;++i) {
    if ( gdjs.intro_32Code.GDBigGuyObjects1[i].getX() > 1500 ) {
        isConditionTrue_0 = true;
        gdjs.intro_32Code.GDBigGuyObjects1[k] = gdjs.intro_32Code.GDBigGuyObjects1[i];
        ++k;
    }
}
gdjs.intro_32Code.GDBigGuyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.intro_32Code.GDBigGuyObjects1 */
{for(var i = 0, len = gdjs.intro_32Code.GDBigGuyObjects1.length ;i < len;++i) {
    gdjs.intro_32Code.GDBigGuyObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.intro_32Code.GDBigGuyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.intro_32Code.GDBigGuyObjects1.length;i<l;++i) {
    if ( !(gdjs.intro_32Code.GDBigGuyObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.intro_32Code.GDBigGuyObjects1[k] = gdjs.intro_32Code.GDBigGuyObjects1[i];
        ++k;
    }
}
gdjs.intro_32Code.GDBigGuyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.intro_32Code.GDBigGuyObjects1 */
{for(var i = 0, len = gdjs.intro_32Code.GDBigGuyObjects1.length ;i < len;++i) {
    gdjs.intro_32Code.GDBigGuyObjects1[i].getBehavior("Animation").setAnimationName("Run");
}
}}

}


{


gdjs.intro_32Code.eventsList3(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer3");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Spawn_Point"), gdjs.intro_32Code.GDSpawn_9595PointObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer3") >= 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickRandomObject((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.intro_32Code.mapOfGDgdjs_9546intro_959532Code_9546GDSpawn_95959595PointObjects1Objects);
}
if (isConditionTrue_0) {
/* Reuse gdjs.intro_32Code.GDSpawn_9595PointObjects1 */
gdjs.intro_32Code.GDWhaleObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.intro_32Code.mapOfGDgdjs_9546intro_959532Code_9546GDWhaleObjects1Objects, (( gdjs.intro_32Code.GDSpawn_9595PointObjects1.length === 0 ) ? 0 :gdjs.intro_32Code.GDSpawn_9595PointObjects1[0].getPointX("")), (( gdjs.intro_32Code.GDSpawn_9595PointObjects1.length === 0 ) ? 0 :gdjs.intro_32Code.GDSpawn_9595PointObjects1[0].getPointY("")), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer3");
}{for(var i = 0, len = gdjs.intro_32Code.GDWhaleObjects1.length ;i < len;++i) {
    gdjs.intro_32Code.GDWhaleObjects1[i].addForce(150, 0, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Whale"), gdjs.intro_32Code.GDWhaleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.intro_32Code.GDWhaleObjects1.length;i<l;++i) {
    if ( !(gdjs.intro_32Code.GDWhaleObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.intro_32Code.GDWhaleObjects1[k] = gdjs.intro_32Code.GDWhaleObjects1[i];
        ++k;
    }
}
gdjs.intro_32Code.GDWhaleObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.intro_32Code.GDWhaleObjects1 */
{for(var i = 0, len = gdjs.intro_32Code.GDWhaleObjects1.length ;i < len;++i) {
    gdjs.intro_32Code.GDWhaleObjects1[i].getBehavior("Animation").setAnimationName("Run");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Whale"), gdjs.intro_32Code.GDWhaleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.intro_32Code.GDWhaleObjects1.length;i<l;++i) {
    if ( gdjs.intro_32Code.GDWhaleObjects1[i].getX() > 1500 ) {
        isConditionTrue_0 = true;
        gdjs.intro_32Code.GDWhaleObjects1[k] = gdjs.intro_32Code.GDWhaleObjects1[i];
        ++k;
    }
}
gdjs.intro_32Code.GDWhaleObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.intro_32Code.GDWhaleObjects1 */
{for(var i = 0, len = gdjs.intro_32Code.GDWhaleObjects1.length ;i < len;++i) {
    gdjs.intro_32Code.GDWhaleObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.intro_32Code.eventsList4(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Cannon"), gdjs.intro_32Code.GDCannonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.intro_32Code.GDCannonObjects1.length;i<l;++i) {
    if ( gdjs.intro_32Code.GDCannonObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.intro_32Code.GDCannonObjects1[k] = gdjs.intro_32Code.GDCannonObjects1[i];
        ++k;
    }
}
gdjs.intro_32Code.GDCannonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Captain"), gdjs.intro_32Code.GDCaptainObjects1);
{for(var i = 0, len = gdjs.intro_32Code.GDCaptainObjects1.length ;i < len;++i) {
    gdjs.intro_32Code.GDCaptainObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BombGuy"), gdjs.intro_32Code.GDBombGuyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cannon"), gdjs.intro_32Code.GDCannonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.intro_32Code.mapOfGDgdjs_9546intro_959532Code_9546GDCannonObjects1Objects, gdjs.intro_32Code.mapOfGDgdjs_9546intro_959532Code_9546GDBombGuyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.intro_32Code.GDCannonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Captain"), gdjs.intro_32Code.GDCaptainObjects1);
{for(var i = 0, len = gdjs.intro_32Code.GDCaptainObjects1.length ;i < len;++i) {
    gdjs.intro_32Code.GDCaptainObjects1[i].getBehavior("Flippable").flipX(false);
}
}{for(var i = 0, len = gdjs.intro_32Code.GDCaptainObjects1.length ;i < len;++i) {
    gdjs.intro_32Code.GDCaptainObjects1[i].addForce(100, 0, 1);
}
}{for(var i = 0, len = gdjs.intro_32Code.GDCaptainObjects1.length ;i < len;++i) {
    gdjs.intro_32Code.GDCaptainObjects1[i].getBehavior("Animation").setAnimationName("Run");
}
}{for(var i = 0, len = gdjs.intro_32Code.GDCannonObjects1.length ;i < len;++i) {
    gdjs.intro_32Code.GDCannonObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cannon"), gdjs.intro_32Code.GDCannonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Whale"), gdjs.intro_32Code.GDWhaleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.intro_32Code.mapOfGDgdjs_9546intro_959532Code_9546GDCannonObjects1Objects, gdjs.intro_32Code.mapOfGDgdjs_9546intro_959532Code_9546GDWhaleObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.intro_32Code.GDCannonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Captain"), gdjs.intro_32Code.GDCaptainObjects1);
{for(var i = 0, len = gdjs.intro_32Code.GDCaptainObjects1.length ;i < len;++i) {
    gdjs.intro_32Code.GDCaptainObjects1[i].getBehavior("Flippable").flipX(false);
}
}{for(var i = 0, len = gdjs.intro_32Code.GDCaptainObjects1.length ;i < len;++i) {
    gdjs.intro_32Code.GDCaptainObjects1[i].addForce(100, 0, 1);
}
}{for(var i = 0, len = gdjs.intro_32Code.GDCaptainObjects1.length ;i < len;++i) {
    gdjs.intro_32Code.GDCaptainObjects1[i].getBehavior("Animation").setAnimationName("Run");
}
}{for(var i = 0, len = gdjs.intro_32Code.GDCannonObjects1.length ;i < len;++i) {
    gdjs.intro_32Code.GDCannonObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.intro_32Code.GDBigGuyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cannon"), gdjs.intro_32Code.GDCannonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.intro_32Code.mapOfGDgdjs_9546intro_959532Code_9546GDCannonObjects1Objects, gdjs.intro_32Code.mapOfGDgdjs_9546intro_959532Code_9546GDBigGuyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.intro_32Code.GDCannonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Captain"), gdjs.intro_32Code.GDCaptainObjects1);
{for(var i = 0, len = gdjs.intro_32Code.GDCaptainObjects1.length ;i < len;++i) {
    gdjs.intro_32Code.GDCaptainObjects1[i].getBehavior("Flippable").flipX(false);
}
}{for(var i = 0, len = gdjs.intro_32Code.GDCaptainObjects1.length ;i < len;++i) {
    gdjs.intro_32Code.GDCaptainObjects1[i].addForce(100, 0, 1);
}
}{for(var i = 0, len = gdjs.intro_32Code.GDCaptainObjects1.length ;i < len;++i) {
    gdjs.intro_32Code.GDCaptainObjects1[i].getBehavior("Animation").setAnimationName("Run");
}
}{for(var i = 0, len = gdjs.intro_32Code.GDCannonObjects1.length ;i < len;++i) {
    gdjs.intro_32Code.GDCannonObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Captain"), gdjs.intro_32Code.GDCaptainObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.intro_32Code.GDCaptainObjects1.length;i<l;++i) {
    if ( gdjs.intro_32Code.GDCaptainObjects1[i].getX() > 1500 ) {
        isConditionTrue_0 = true;
        gdjs.intro_32Code.GDCaptainObjects1[k] = gdjs.intro_32Code.GDCaptainObjects1[i];
        ++k;
    }
}
gdjs.intro_32Code.GDCaptainObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.intro_32Code.GDCaptainObjects1 */
{for(var i = 0, len = gdjs.intro_32Code.GDCaptainObjects1.length ;i < len;++i) {
    gdjs.intro_32Code.GDCaptainObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.intro_32Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.intro_32Code.GDWoodBackgroundObjects1.length = 0;
gdjs.intro_32Code.GDWoodBackgroundObjects2.length = 0;
gdjs.intro_32Code.GDWoodBackgroundObjects3.length = 0;
gdjs.intro_32Code.GDCannonObjects1.length = 0;
gdjs.intro_32Code.GDCannonObjects2.length = 0;
gdjs.intro_32Code.GDCannonObjects3.length = 0;
gdjs.intro_32Code.GDCannonBallObjects1.length = 0;
gdjs.intro_32Code.GDCannonBallObjects2.length = 0;
gdjs.intro_32Code.GDCannonBallObjects3.length = 0;
gdjs.intro_32Code.GDBombGuyObjects1.length = 0;
gdjs.intro_32Code.GDBombGuyObjects2.length = 0;
gdjs.intro_32Code.GDBombGuyObjects3.length = 0;
gdjs.intro_32Code.GDSpawn_9595PointObjects1.length = 0;
gdjs.intro_32Code.GDSpawn_9595PointObjects2.length = 0;
gdjs.intro_32Code.GDSpawn_9595PointObjects3.length = 0;
gdjs.intro_32Code.GDCaptainObjects1.length = 0;
gdjs.intro_32Code.GDCaptainObjects2.length = 0;
gdjs.intro_32Code.GDCaptainObjects3.length = 0;
gdjs.intro_32Code.GDCaptain2Objects1.length = 0;
gdjs.intro_32Code.GDCaptain2Objects2.length = 0;
gdjs.intro_32Code.GDCaptain2Objects3.length = 0;
gdjs.intro_32Code.GDScoreObjects1.length = 0;
gdjs.intro_32Code.GDScoreObjects2.length = 0;
gdjs.intro_32Code.GDScoreObjects3.length = 0;
gdjs.intro_32Code.GDBigGuyObjects1.length = 0;
gdjs.intro_32Code.GDBigGuyObjects2.length = 0;
gdjs.intro_32Code.GDBigGuyObjects3.length = 0;
gdjs.intro_32Code.GDWhaleObjects1.length = 0;
gdjs.intro_32Code.GDWhaleObjects2.length = 0;
gdjs.intro_32Code.GDWhaleObjects3.length = 0;
gdjs.intro_32Code.GDNewBitmapTextObjects1.length = 0;
gdjs.intro_32Code.GDNewBitmapTextObjects2.length = 0;
gdjs.intro_32Code.GDNewBitmapTextObjects3.length = 0;
gdjs.intro_32Code.GDNewBBTextObjects1.length = 0;
gdjs.intro_32Code.GDNewBBTextObjects2.length = 0;
gdjs.intro_32Code.GDNewBBTextObjects3.length = 0;
gdjs.intro_32Code.GDNewBitmapText2Objects1.length = 0;
gdjs.intro_32Code.GDNewBitmapText2Objects2.length = 0;
gdjs.intro_32Code.GDNewBitmapText2Objects3.length = 0;
gdjs.intro_32Code.GDWaterFlatBrightObjects1.length = 0;
gdjs.intro_32Code.GDWaterFlatBrightObjects2.length = 0;
gdjs.intro_32Code.GDWaterFlatBrightObjects3.length = 0;
gdjs.intro_32Code.GDNewBBText2Objects1.length = 0;
gdjs.intro_32Code.GDNewBBText2Objects2.length = 0;
gdjs.intro_32Code.GDNewBBText2Objects3.length = 0;
gdjs.intro_32Code.GDspacebarObjects1.length = 0;
gdjs.intro_32Code.GDspacebarObjects2.length = 0;
gdjs.intro_32Code.GDspacebarObjects3.length = 0;

gdjs.intro_32Code.eventsList5(runtimeScene);

return;

}

gdjs['intro_32Code'] = gdjs.intro_32Code;
