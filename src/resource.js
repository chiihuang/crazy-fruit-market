var res = {
	HelloWorld_png : "res/HelloWorld.png",
	MainScene_json : "res/MainScene.json",
	StartScene_json : "res/StartScene.json",
	StartLayer_json : "res/StartLayer.json",
	BackgroundLayer_json : "res/BackgroundLayer.json",
	TaskScene_json : "res/TaskScene.json",
	TaskLayer_json : "res/TaskLayer.json",
	CongratScene_json : "res/CongratScene.json",
	CounterLayer_json : "res/CounterLayer.json",
	CounterScene_json : "res/CounterScene.json",
	DialogLayer_json : "res/DialogLayer.json",
	FruitLayer_json : "res/FruitLayer.json",
	MenuLayer_json : "res/MenuLayer.json",
	PlayScene_json : "res/PlayScene.json",
	AppleNode_json : "res/AppleNode.json",
};

var g_resources = [];
for (var i in res) {
	g_resources.push(res[i]);
}
