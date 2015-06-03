function cloneNode (source) {
	var clone;

	//only cc.Sprites are copied, add other subclasses if you need to
	if (source._className == 'Sprite') {
		clone = new cc.Sprite();
		if (!source.getTexture()) {
			clone.setTexture(source._texturePath);
		} else {
			clone.setTexture(source.getTexture());
		}
		clone.setSpriteFrame(source.getSpriteFrame());
	} else {
		clone = new cc.Node();
	}

	clone.name = source.name;
	clone._name = source._name;
	clone.setRotation(source.getRotation());
	clone.setPosition(source.getPosition());
	clone.setAnchorPoint(source.getAnchorPoint());
	clone.setLocalZOrder(source.getLocalZOrder());

	var children = source.getChildren();
	for (var i = 0; i < children.length; i++) {
		var subnode = cloneNode(children[i]);
		clone.addChild(subnode);
	}

	return clone;
}

function uniform (i, m){
	var room = m - i;
	return i + Math.floor(Math.random() * (room + 1));
}

function shuffle (permutation) {
	var length = permutation.length;
	for (var i=0; i < length; i++) {
		var j = uniform(i, length - 1);
		var swap = permutation[i];
		permutation[i] = permutation[j];
		permutation[j] = swap;
	}
	return permutation;
}