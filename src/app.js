var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        
        var mainscene = ccs.load(res.StartScene_json);
        gm = mainscene;

        var children = mainscene.node.getChildByName('ProjectNode_2').getChildren();
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
    		cc.director.runScene(new cc.TransitionFade(0.3, new TaskScene()));
    	}
    },
});

