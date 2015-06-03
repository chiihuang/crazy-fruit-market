var CounterScene = cc.Scene.extend({
	onEnter:function () {
			this._super();
			
			var mainscene = ccs.load(res.CounterScene_json);
			gm = mainscene;

			var children = mainscene
			.node.getChildByName('menuLayer').getChildByName('menuPanel').getChildren();
			children.forEach(function(child){
				if (child.getName() === 'checkoutBtn')
					child.setVisible(false);
				if (child.getName() === 'okBtn' && pickedFruit !== taskNumber)
					child.setVisible(false);

				if (typeof child.getCallbackType === 'function')
					if (child.getCallbackType() === 'Click')
						child.addTouchEventListener(this[child.getCallbackName()], this);
			}, this);

			var appleNode = ccs.load(res.AppleNode_json).node;
			var pickedApple = cloneNode(appleNode.getChildByName(apples[pickedFruit].nodeName));
			this.counterLayer = mainscene.node.getChildByName('counterLayer');
			this.counterLayer.addChild(pickedApple);
			pickedApple.setPosition(this.counterLayer.getChildByName('itemAnchor').getPosition());
			pickedApple.setVisible(true);
			this.counterLayer.getChildByName('monitor').getChildByName('itemName').setString(apples[pickedFruit].vocab);

			this.menuLayer = mainscene.node.getChildByName('menuLayer');
			this.menuLayer.getChildByName('taskHintBox').getChildByName('taskHintText')
			.setString(apples[taskNumber].vocab);

			this.addChild(mainscene.node);
	},

	onTaskBtnClicked: function(sender, type){
		if (type === ccui.Widget.TOUCH_BEGAN) {
			cc.log('task clicked down');
			this.menuLayer.getChildByName('taskHintBox').setVisible(true);
		}

		if (type === ccui.Widget.TOUCH_ENDED) {
			cc.log('task clicked up');
			this.menuLayer.getChildByName('taskHintBox').setVisible(false);
		}
	},

	onBackBtnClicked: function(sender, type){
		if (type === ccui.Widget.TOUCH_ENDED) {
			cc.log('back clicked');
			cc.director.runScene(new cc.TransitionFade(0.3, new PlayScene()));
		}
	},

	onOkBtnClicked: function(sender, type){
		if (type === ccui.Widget.TOUCH_ENDED) {
			cc.log('ok clicked');
			cc.director.runScene(new cc.TransitionFade(0.3, new CongratScene()));
		}
	},

});