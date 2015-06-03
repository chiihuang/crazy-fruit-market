var CongratScene = cc.Scene.extend({
	onEnter:function () {
			this._super();
			
			var mainscene = ccs.load(res.CongratScene_json);
			gm = mainscene;

			var restartBtn = mainscene.node.getChildByName('restartBtn');
			restartBtn.addTouchEventListener(this[restartBtn.getCallbackName()], this);
			this.addChild(mainscene.node);
	},

	onRestartBtnClicked: function (sender, type) {
		if (type === ccui.Widget.TOUCH_ENDED) {
			cc.director.runScene(new cc.TransitionFade(0.3, new StartScene()));
		}
	},
});