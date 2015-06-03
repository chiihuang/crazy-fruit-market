cc.Sprite.prototype.setTexture = function(texture) {
	if(!texture)
		return this._renderCmd._setTexture(null);

	if(cc.isString(texture)){
		this._texturePath = texture;
		texture = cc.textureCache.addImage(texture);

		if(!texture._textureLoaded){
			texture.addEventListener("load", function(){
				this._clearRect();
				this._renderCmd._setTexture(texture);
				this._changeRectWithTexture(texture.getContentSize());
				this.setColor(this._realColor);
				this._textureLoaded = true;
			}, this);
		}else{
			this._clearRect();
			this._renderCmd._setTexture(texture);
			this._changeRectWithTexture(texture.getContentSize());
			this.setColor(this._realColor);
			this._textureLoaded = true;
		}
	}else{
		// CCSprite: setTexture doesn't work when the sprite is rendered using a CCSpriteSheet
		cc.assert(texture instanceof cc.Texture2D, cc._LogInfos.Sprite_setTexture_2);
		this._clearRect();
		this._changeRectWithTexture(texture.getContentSize());
		this._renderCmd._setTexture(texture);
	}
};

cc.Sprite.prototype.addClickEventListener = function(callback, target){
	function checkEventBoundary(touch, event){
		var target = event.getCurrentTarget();
		var locationInNode = target.convertToNodeSpace(touch.getLocation());
		var s = target.getContentSize();
		var rect = cc.rect(0, 0, s.width, s.height);

		if (cc.rectContainsPoint(rect, locationInNode)) {
				return true;
		}
		return false;
	}

	var clickListener = cc.EventListener.create({
		event: cc.EventListener.TOUCH_ONE_BY_ONE,
		swallowTouches: true,

		onTouchBegan: function(touch, event){
			if (checkEventBoundary(touch, event) === true) {
				return true;
			}
			return false;
		},
		onTouchEnded: function(touch, event){
			callback.call(target);
		}
	});
	cc.eventManager.addListener(clickListener, this);
};