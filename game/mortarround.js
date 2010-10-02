Engine.include("/components/component.mover2d.js");
Engine.include("/components/component.vector2d.js");
Engine.include("/components/component.collider.js");
Engine.include("/engine/engine.object2d.js");

Engine.initObject("MortarRound", "Object2D", function() {
	var MortarRound = Object2D.extend({
		// shooter: null,
		// weapon: null,
		// field: null,
		// 
		// baseSpeed: 15,
		// damage: 1,
		// safeDistance: 20,
		// 
		// constructor: function(weapon, projectileVelocityVariability) {
		// 	this.base("MortarRound");
		// 
		// 	// This is a hack!
		// 	this.field = PistolSlut;
		// 
		// 	// Track the shooting weapon
		// 	this.weapon = weapon;
		// 	this.shooter = weapon.owner;
		// 
		// 	// Add components to move and draw the mortar round
		// 	this.add(Mover2DComponent.create("move"));
		// 	this.add(Vector2DComponent.create("draw"));
		// 	this.add(ColliderComponent.create("collide", this.field.collisionModel));
		// 	
		// 	// Get the player's position and rotation,
		// 	// then position this at the tip of the ship
		// 	// moving away from it
		// 	var p_mover = this.weapon.owner.getComponent("move");
		// 	var c_mover = this.getComponent("move");
		// 	var c_draw = this.getComponent("draw");
		// 
		// 	c_draw.setPoints(MortarRound.shape);
		// 	c_draw.setLineStyle("white");
		// 	c_draw.setFillStyle("white");
		// 	
		// 	var ownerPosition = Point2D.create(p_mover.getPosition());
		// 	var gunTipPosition = this.weapon.getGunTip();
		// 	var speed = this.baseSpeed + (Math.random() * projectileVelocityVariability * this.baseSpeed);
		// 	
		// 	c_mover.setPosition(gunTipPosition);
		// 	c_mover.setVelocity(this.weapon.bulletPhysics.call(this.weapon).mul(speed));
		// 	c_mover.setCheckLag(false);
		// },
		// 
		// release: function() {
		// 	this.base();
		// 	this.weapon = null;
		// },
		// 
		// destroy: function() {
		// 	if (this.ModelData.lastNode) {
		// 		this.ModelData.lastNode.removeObject(this);
		// 	}
		// 	this.base();
		// },
		// 
		// getPosition: function() { return this.getComponent("move").getPosition(); },
		// getRenderPosition: function() { return this.getComponent("move").getRenderPosition(); },
		// getVelocity: function() { return this.getComponent("move").getVelocity(); },
		// setVelocity: function(vector) { return this.getComponent("move").setVelocity(vector); },
		// getLastPosition: function() { return this.getComponent("move").getLastPosition(); },
		// setPosition: function(point) {
		// 	this.base(point);
		// 	this.getComponent("move").setPosition(point);
		// },
		// 
		// update: function(renderContext, time) {
		// 	if (!this.field.inView(this)) // remove if not in field
		// 	{
		// 		this.destroy();
		// 		return;
		// 	}
		// 
		// 	renderContext.pushTransform();
		// 	this.base(renderContext, time);
		// 	renderContext.popTransform();
		// },
		// 
		// onCollide: function(obj) {
		// 	if(obj instanceof Furniture) {
		// 		if(new CheapRect(this).isIntersecting(new CheapRect(obj)))
		// 	  {
		// 			obj.shot(this);
		// 			this.destroy();
		// 			return ColliderComponent.STOP;
		// 		}
		// 	}
		// 	else if(obj instanceof Human) {
		// 		if(obj.isAlive())
		// 		{	
		// 			if(new CheapRect(this).isIntersecting(new CheapRect(obj)))
		// 		  {
		// 				this.field.notifier.post(Human.SHOT, this);
		// 				obj.shot(this);
		// 				this.destroy();
		// 				return ColliderComponent.STOP;
		// 			}
		// 		}
		// 	}
		// 	return ColliderComponent.CONTINUE;
		// },

	}, {
		getClassName: function() { return "MortarRound"; },
		
		shape: [ new Point2D(-1, 0), new Point2D(0, 0), new Point2D(0,  1), new Point2D(0,  1)],
		tip: new Point2D(0, -1),
	});

	return MortarRound;
});