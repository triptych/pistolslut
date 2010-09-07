Engine.include("/components/component.mover2d.js");
Engine.include("/components/component.vector2d.js");
Engine.include("/components/component.collider.js");
Engine.include("/engine/engine.object2d.js");

Engine.initObject("Parallax", "Object2D", function() {

	/**
	 * @class A parallax scrolling facade in the level.
	 */
	var Parallax = Object2D.extend({

		name: null,
		field: null,
		sprite: null,
		scrollAttenuation: null,

		constructor: function(name, field, zIndex, width, levelWidth) {
			this.base(name);
			this.field = field;
			this.setZIndex(zIndex);
			this.scrollAttenuation = 1 - (width / levelWidth);

			// Add components to move and draw
			this.add(Transform2DComponent.create("move"));
			this.add(SpriteComponent.create("draw"));
			
			this.sprite = this.field.spriteLoader.getSprite(name, "main");
			this.setSprite(this.sprite);
			
			this.setPosition(Point2D.create(0,0));
		},

	  setSprite: function(sprite) {
		  this.setBoundingBox(sprite.getBoundingBox());
		  this.getComponent("draw").setSprite(sprite);
	  },

		release: function() {
			this.base();
		},

		getPosition: function() {
			return this.getComponent("move").getPosition();
		},

		setPosition: function(point) {
			this.base(point);
			this.getComponent("move").setPosition(point);
		},

		getRenderPosition: function() {
			return this.getComponent("move").getRenderPosition();
		},

		update: function(renderContext, time) {
			renderContext.pushTransform();
			this.base(renderContext, time);
			renderContext.popTransform();
		},

	}, {

		getClassName: function() { return "Parallax"; },
	});

	return Parallax;
});