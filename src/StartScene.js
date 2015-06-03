var StartScene = cc.Scene.extend({
	onEnter:function () {
			this._super();
			
			var mainscene = ccs.load(res.StartScene_json);
			// for testing only:
			// gm = mainscene;
			// apple = ccs.load(res.AppleNode_json).node;
			// scn = this;
			// this.addChild(apple,99);

			var children = mainscene.node.getChildByName('startLayer').getChildren();
			children.forEach(function(child){
				cc.log(child.name);
				if (typeof child.getCallbackType === 'function')
					if (child.getCallbackType() === 'Click')
						child.addTouchEventListener(this[child.getCallbackName()], this);
			}, this);
			this.addChild(mainscene.node);

	},
	
	onEasyButtonClicked: function(sender, type) {
		// ccui.Widget.TOUCH_BEGAN
		// ccui.Widget.TOUCH_MOVED
		// ccui.Widget.TOUCH_CANCELLED
		if (type === ccui.Widget.TOUCH_ENDED) {
			playMode = 0;
			cc.director.runScene(new cc.TransitionFade(0.3, new TaskScene()));
		}
	},

	onNormalButtonClicked: function(sender, type) {
		if (type === ccui.Widget.TOUCH_ENDED) {
			playMode = 1;
			cc.director.runScene(new cc.TransitionFade(0.3, new TaskScene()));
		}
	},

	onHardButtonClicked: function(sender, type) {
		if (type === ccui.Widget.TOUCH_ENDED) {
			playMode = 2;
			cc.director.runScene(new cc.TransitionFade(0.3, new TaskScene()));
		}
	},
});