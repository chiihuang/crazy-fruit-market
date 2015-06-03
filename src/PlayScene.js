var pickedFruitNode = null;
var chosenFruitNode = null;

var PlayScene = cc.Scene.extend({
	onEnter:function () {
			this._super();
			
			var mainscene = ccs.load(res.PlayScene_json);
			gm = mainscene;
			this.addChild(mainscene.node);

			var children = mainscene
			.node.getChildByName('menuLayer').getChildByName('menuPanel').getChildren();
			children.forEach(function(child){
				if (child.getName() === 'backBtn' || child.getName() === 'okBtn')
					child.setVisible(false);
				if (typeof child.getCallbackType === 'function')
					if (child.getCallbackType() === 'Click')
						child.addTouchEventListener(this[child.getCallbackName()], this);
			}, this);

			this.menuLayer = mainscene.node.getChildByName('menuLayer');
			this.menuLayer.getChildByName('taskHintBox').getChildByName('taskHintText')
			.setString(apples[taskNumber].vocab);

			var fruitLayer = mainscene.node.getChildByName('fruitLayer');
			this.dialogLayer = mainscene.node.getChildByName('dialogLayer');
			this.fruitBoard = fruitLayer.getChildByName('fruitBoard');
			this.cartPanel = fruitLayer.getChildByName('cartPanel');
			var boardAnchors = this.fruitBoard.getChildren();
			var positions = shuffle([0, 1, 2, 3, 4, 5, 6, 7]);
			for (var i=0; i < positions.length; i++) {
				var position = positions[i];
				if (position === -1) {
					var nonApple = cloneNode(fruitLayer.getChildByName('nonApple'));
					this.fruitBoard.addChild(nonApple);
					nonApple.setPosition(boardAnchors[i].getPosition());
					nonApple.setVisible(true);
				} else {
					var apple;
					if (playMode === 2) {
						apple = cloneNode(fruitLayer.getChildByName('apple'));
						apple._name = apple.name = apples[position].nodeName;
					} else {
						apple = cloneNode(fruitLayer.getChildByName(apples[position].nodeName));
					}
					this.fruitBoard.addChild(apple);
					apple.setPosition(boardAnchors[i].getPosition());
					apple.setVisible(true);
					apple.addClickEventListener(this.getAppleClickedCallback(position), apple);
				}
			}
			var cartAnchors = this.cartPanel.getChildren();

			// bind questions events
			this.dialogLayer.getChildByName('dialogPanel').getChildren().forEach(function(child){
				if (typeof child.getCallbackType === 'function')
					if (child.getCallbackType() === 'Click')
						child.addTouchEventListener(this[child.getCallbackName()], this);
			}, this);
	},

	getAppleClickedCallback: function(position) {
		var appleIndex = position;
		var self = this;
		return function() {
			cc.log(appleIndex);
			chosenFruit = appleIndex;
			self.dialogLayer.setVisible(true);
			self.setQuestionsVisible(true);
			self.setRepliesVisible(false);
			self.setApplesVisible(false);

			// TODO: use a anchor at characterWhiteBase instead
			var appleNodeName = playMode === 2 ? 'apple' : apples[appleIndex].nodeName;

			self.dialogLayer.getChildByName('characterWhiteBase')
			.getChildByName(appleNodeName).setVisible(true);

			self.dialogLayer.getChildByName('dialogPanel')
			.getChildByName('dialogHintText').setString('(Ask a question...)');

			self.dialogLayer.getChildByName('dialogPanel')
			.getChildByName('question1').setString(questions[0]);

			self.dialogLayer.getChildByName('dialogPanel')
			.getChildByName('question2').setString(questions[1]);

			self.dialogLayer.getChildByName('dialogPanel')
			.getChildByName('question3').setString(questions[2]);
		};
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
		}
	},

	onCheckoutBtnClicked: function(sender, type){
		if (type === ccui.Widget.TOUCH_ENDED) {
			cc.log('check clicked');
			if (pickedFruit >= 0) {
				cc.director.runScene(new cc.TransitionFade(0.3, new CounterScene()));
			}
		}
	},

	onOkBtnClicked: function(sender, type){
		if (type === ccui.Widget.TOUCH_ENDED) {
			cc.log('ok clicked');
		}
	},

	setApplesVisible: function(bool) {
		apples.forEach(function(apple){
			this.dialogLayer.getChildByName('characterWhiteBase')
			.getChildByName(apple.nodeName).setVisible(bool);
		}, this);
	},

	setQuestionsVisible: function(bool) {
		this.dialogLayer.getChildByName('dialogPanel')
		.getChildByName('dialogHintText').setVisible(bool);

		this.dialogLayer.getChildByName('dialogPanel')
		.getChildByName('question1').setVisible(bool);

		this.dialogLayer.getChildByName('dialogPanel')
		.getChildByName('question2').setVisible(bool);

		this.dialogLayer.getChildByName('dialogPanel')
		.getChildByName('question3').setVisible(bool);
	},

	setRepliesVisible: function(bool) {
		this.dialogLayer.getChildByName('dialogPanel')
		.getChildByName('replyText').setVisible(bool);

		this.dialogLayer.getChildByName('dialogPanel')
		.getChildByName('askAgainText').setVisible(bool);

		this.dialogLayer.getChildByName('dialogPanel')
		.getChildByName('skipText').setVisible(bool);

		this.dialogLayer.getChildByName('dialogPanel')
		.getChildByName('pickText').setVisible(bool);
	},

	onQuestion1Clicked: function(sender, type){
		if (type === ccui.Widget.TOUCH_ENDED) {
			cc.log('q1 clicked');
			this.setQuestionsVisible(false);
			this.setRepliesVisible(true);
			this.dialogLayer.getChildByName('dialogPanel')
			.getChildByName('replyText').setString(apples[chosenFruit].replies[0]);
		}
	},

	onQuestion2Clicked: function(sender, type){
		if (type === ccui.Widget.TOUCH_ENDED) {
			cc.log('q2 clicked');
			this.setQuestionsVisible(false);
			this.setRepliesVisible(true);
			this.dialogLayer.getChildByName('dialogPanel')
			.getChildByName('replyText').setString(apples[chosenFruit].replies[1]);
		}
	},

	onQuestion3Clicked: function(sender, type){
		if (type === ccui.Widget.TOUCH_ENDED) {
			cc.log('q3 clicked');
			this.setQuestionsVisible(false);
			this.setRepliesVisible(true);
			this.dialogLayer.getChildByName('dialogPanel')
			.getChildByName('replyText').setString(apples[chosenFruit].replies[2]);
		}
	},

	onAskAgainClicked: function(sender, type){
		if (type === ccui.Widget.TOUCH_ENDED) {
			cc.log('ask again clicked');
			this.setQuestionsVisible(true);
			this.setRepliesVisible(false);
		}
	},

	onSkipClicked: function(sender, type){
		if (type === ccui.Widget.TOUCH_ENDED) {
			cc.log('skip clicked');
			this.dialogLayer.setVisible(false);
		}
	},

	onPickClicked: function(sender, type){
		if (type === ccui.Widget.TOUCH_ENDED) {
			pickedFruit = chosenFruit;
			this.dialogLayer.setVisible(false);
			cc.log(apples[chosenFruit].nodeName);
			cc.log(this.fruitBoard);
			var target = this.fruitBoard.getChildByName(apples[chosenFruit].nodeName);
			chosenFruitNode = target;
			if (pickedFruitNode) {
				var cPos = chosenFruitNode.getPosition();
				var pPos = pickedFruitNode.getPosition();
				chosenFruitNode.removeFromParent(false);
				pickedFruitNode.removeFromParent(false);
				this.cartPanel.addChild(chosenFruitNode);
				this.fruitBoard.addChild(pickedFruitNode);
				chosenFruitNode.setPosition(pPos);
				pickedFruitNode.setPosition(cPos);
			} else {
				target.removeFromParent(false);
				this.cartPanel.addChild(target);
				target.setPosition(this.cartPanel.getChildren()[0]);
				pickedFruitNode = target;
			}
			pickedFruitNode = chosenFruitNode;
		}
	},

});