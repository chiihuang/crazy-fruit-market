var TaskScene = cc.Scene.extend({
	onEnter:function () {
			this._super();

			// assign task number here
			assignTaskNumber();
			
			var mainscene = ccs.load(res.TaskScene_json);
			// gm = mainscene;

			var children = mainscene
			.node.getChildByName('taskLayer').getChildByName('taskPanel').getChildren();
			children.forEach(function(child){
				cc.log(child.name);
				if (typeof child.getCallbackType === 'function')
					if (child.getCallbackType() === 'Click')
						child.addTouchEventListener(this[child.getCallbackName()], this);
			}, this);

			if (playMode > 0) {
				mainscene.node.getChildByName('taskLayer')
				.getChildByName('taskPanel').getChildByName('hintBtn').setVisible(false);
			}

			mainscene
			.node.getChildByName('taskLayer')
			.getChildByName('taskPanel')
			.getChildByName('materialPanel')
			.getChildByName('vocabText')
			.setString(apples[taskNumber].vocab);
			this.addChild(mainscene.node);
	},
	
	onGoBtnClicked: function(sender, type) {
		// ccui.Widget.TOUCH_BEGAN
		// ccui.Widget.TOUCH_MOVED
		// ccui.Widget.TOUCH_CANCELLED
		if (type === ccui.Widget.TOUCH_ENDED) {
			cc.director.runScene(new cc.TransitionFade(0.3, new PlayScene()));
		}
	},

	onHintBtnClicked: function(sender, type) {
		if (type === ccui.Widget.TOUCH_ENDED) {
			window.open('https://www.wordnik.com/words/' + apples[taskNumber].vocab);
		}
	},
});