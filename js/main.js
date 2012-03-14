$(function() {
	var canvas = $("#c");
	var canvasHeight;
	var canvasWidth;
	var ctx;
	var dt = 0.1;
	var a = 200;
	var b =-150;
	
	var pointCollection;
	
	function init() {
		updateCanvasDimensions();
		
		//M
		var g = [new Point(0-a, 200+b, 0.0, 17, "#0B0BB8"),
		new Point(0-a, 165+b, 0.0, 12, "#6379DB"),
		new Point(0-a, 130+b, 0.0, 14, "#0B0BB8"),
		new Point(0-a, 100+b, 0.0, 12, "#6379DB"),
		new Point(0-a, 75+b, 0.0, 11, "#0B0BB8"),
		new Point(0-a, 55+b, 0.0, 13, "#6379DB"),
		new Point(0-a, 35+b, 0.0, 12, "#0B0BB8"),
		new Point(0-a, 5+b, 0.0, 18, "#6379DB"),
		
		new Point(20-a, 35+b, 0.0, 10, "#0B0BB8"),
		new Point(30-a, 55+b, 0.0, 13, "#6379DB"),
		new Point(35-a, 75+b, 0.0, 11, "#0B0BB8"),
		new Point(45-a, 100+b, 0.0, 12, "#6379DB"),
		new Point(55-a, 130+b, 0.0, 13, "#0B0BB8"),
		new Point(65-a, 160+b, 0.0, 11, "#6379DB"),
		new Point(75-a, 185+b, 0.0, 13, "#0B0BB8"),
		
		new Point(95-a, 165+b, 0.0, 10, "#6379DB"),
		new Point(100-a, 145+b, 0.0, 13, "#0B0BB8"),
		new Point(110-a, 125+b, 0.0, 11, "#6379DB"),
		new Point(120-a, 100+b, 0.0, 12, "#0B0BB8"),
		new Point(130-a, 70+b, 0.0, 13, "#6379DB"),
		new Point(140-a, 40+b, 0.0, 11, "#0B0BB8"),
		new Point(150-a, 5+b, 0.0, 18, "#6379DB"),
		
		new Point(0-a, 170+b, 0.0, 10, "#0B0BB8"),
		new Point(0-a, 130+b, 0.0, 14, "#6379DB"),
		new Point(0-a, 100+b, 0.0, 12, "#0B0BB8"),
		new Point(0-a, 75+b, 0.0, 11, "#6379DB"),
		new Point(0-a, 55+b, 0.0, 12, "#0B0BB8"),
		new Point(0-a, 35+b, 0.0, 14, "#6379DB"),
		new Point(0-a, 5+b, 0.0, 18, "#0B0BB8"),
		
		new Point(165-a, 200+b, 0.0, 18, "#6379DB"),
		new Point(165-a, 160+b, 0.0, 14, "#0B0BB8"),
		new Point(165-a, 130+b, 0.0, 12, "#6379DB"),
		new Point(165-a, 100+b, 0.0, 11, "#0B0BB8"),
		new Point(165-a, 75+b, 0.0, 13, "#6379DB"),
		new Point(165-a, 55+b, 0.0, 10, "#0B0BB8"),
		new Point(165-a, 35+b, 0.0, 12, "#6379DB"),
		
		//A
		
		new Point(210-a, 100+b, 0.0, 15, "#0B7306"),
		new Point(235-a, 100+b, 0.0, 10, "#FFEA00"),
		new Point(260-a, 100+b, 0.0, 10, "#0B7306"),
		new Point(275-a, 120+b, 0.0, 11, "#FFEA00"),
		new Point(275-a, 145+b, 0.0, 11, "#0B7306"),
		new Point(275-a, 170+b, 0.0, 11, "#FFEA00"),
		new Point(275-a, 185+b, 0.0, 11, "#0B7306"),
		new Point(275-a, 200+b, 0.0, 14, "#FFEA00"),
		
		new Point(255-a, 145+b, 0.0, 12, "#0B7306"),
		new Point(235-a, 145+b, 0.0, 12, "#FFEA00"),
		new Point(215-a, 165+b, 0.0, 12, "#0B7306"),
		new Point(215-a, 185+b, 0.0, 12, "#FFEA00"),
		new Point(215-a, 200+b, 0.0, 12, "#0B7306"),
		new Point(235-a, 210+b, 0.0, 12, "#FFEA00"),
		new Point(255-a, 200+b, 0.0, 12, "#0B7306"),
		
		//C
		
		new Point(355-a, 200+b, 0.0, 13, "#FFEA00"),
		new Point(330-a, 200+b, 0.0, 11, "#0B7306"),
		new Point(320-a, 180+b, 0.0, 11, "#FFEA00"),
		new Point(320-a, 160+b, 0.0, 10, "#0B7306"),
		new Point(320-a, 140+b, 0.0, 11, "#FFEA00"),
		new Point(330-a, 120+b, 0.0, 11, "#0B7306"),
		new Point(345-a, 100+b, 0.0, 12, "#FFEA00"),
		new Point(365-a, 110+b, 0.0, 13, "#0B7306"),
		
		//J
		new Point(370-a, 240+b, 0.0, 12, "#ED0909"),
		new Point(380-a, 255+b, 0.0, 12, "#ed9d33"),
		new Point(390-a, 260+b, 0.0, 12, "#ED0909"),
		new Point(400-a, 260+b, 0.0, 12, "#ed9d33"),
		new Point(420-a, 245+b, 0.0, 12, "#ED0909"),
		new Point(420-a, 220+b, 0.0, 12, "#ed9d33"),
		
		
		
		
		new Point(420-a, 200+b, 0.0, 12, "#ED0909"),
		new Point(420-a, 180+b, 0.0, 11, "#ed9d33"),
		new Point(420-a, 165+b, 0.0, 12, "#ED0909"),
		new Point(420-a, 145+b, 0.0, 11, "#ed9d33"),
		new Point(420-a, 125+b, 0.0, 12, "#ED0909"),
		new Point(420-a, 100+b, 0.0, 11, "#ed9d33"),
		new Point(420-a, 30+b, 0.0, 30, "#ED0909"),
		
		//O
		
		new Point(530-a, 200+b, 0.0, 13, "#ed9d33"),
		new Point(510-a, 200+b, 0.0, 11, "#ED0909"),
		new Point(490-a, 200+b, 0.0, 13, "#ed9d33"),
		new Point(480-a, 180+b, 0.0, 12, "#ED0909"),
		new Point(480-a, 160+b, 0.0, 14, "#ed9d33"),
		new Point(480-a, 145+b, 0.0, 11, "#ED0909"),
		new Point(480-a, 125+b, 0.0, 13, "#ed9d33"),
		new Point(490-a, 100+b, 0.0, 11, "#ED0909"),
		new Point(510-a, 100+b, 0.0, 13, "#ed9d33"),		
		new Point(530-a, 100+b, 0.0, 11, "#ED0909"),
		new Point(545-a, 120+b, 0.0, 12, "#ed9d33"),
		new Point(545-a, 140+b, 0.0, 14, "#ED0909"),
		new Point(545-a, 165+b, 0.0, 11, "#ed9d33"),
		new Point(545-a, 175+b, 0.0, 12, "#ED0909"),
		new Point(545-a, 190+b, 0.0, 14, "#ed9d33"),
		
		//P
		
		
		
		
		new Point(580-a, 200+b, 0.0, 14, "#ED0909"),
		new Point(580-a, 220+b, 0.0, 14, "#ed9d33"),
		new Point(580-a, 235+b, 0.0, 14, "#ED0909"),
		new Point(580-a, 255+b, 0.0, 14, "#ed9d33"),
		new Point(580-a, 270+b, 0.0, 14, "#ED0909"),
		
		new Point(630-a, 200+b, 0.0, 14, "#ed9d33"),
		new Point(610-a, 200+b, 0.0, 14, "#ED0909"),
		new Point(580-a, 200+b, 0.0, 14, "#ed9d33"),
		new Point(580-a, 180+b, 0.0, 14, "#ED0909"),
		new Point(580-a, 160+b, 0.0, 14, "#ed9d33"),
		new Point(580-a, 145+b, 0.0, 14, "#ED0909"),
		new Point(580-a, 125+b, 0.0, 14, "#ed9d33"),
		new Point(590-a, 100+b, 0.0, 14, "#ED0909"),
		new Point(610-a, 100+b, 0.0, 14, "#ed9d33"),		
		new Point(630-a, 100+b, 0.0, 14, "#ED0909"),
		new Point(645-a, 120+b, 0.0, 14, "#ed9d33"),
		new Point(645-a, 140+b, 0.0, 14, "#ED0909"),
		new Point(645-a, 165+b, 0.0, 14, "#ed9d33"),
		new Point(645-a, 175+b, 0.0, 14, "#ED0909"),
		new Point(645-a, 190+b, 0.0, 14, "#ed9d33"),
	
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		];
		
		gLength = g.length;
		for (var i = 0; i < gLength; i++) {
			g[i].curPos.x = (canvasWidth/2 - 180) + g[i].curPos.x;
			g[i].curPos.y = (canvasHeight/2 - 65) + g[i].curPos.y;
			
			g[i].originalPos.x = (canvasWidth/2 - 180) + g[i].originalPos.x;
			g[i].originalPos.y = (canvasHeight/2 - 65) + g[i].originalPos.y;
		};
		
		pointCollection = new PointCollection();
		pointCollection.points = g;
		
		initEventListeners();
		timeout();
	};
	
	function initEventListeners() {
		$(window).bind('resize', updateCanvasDimensions).bind('mousemove', onMove);
		
		canvas.get(0).ontouchmove = function(e) {
			e.preventDefault();
			onTouchMove(e);
		};
		
		canvas.get(0).ontouchstart = function(e) {
			e.preventDefault();
		};
	};
	
	function updateCanvasDimensions() {
		canvas.attr({height: $(window).height(), width: $(window).width()});
		canvasWidth = canvas.width();
		canvasHeight = canvas.height();

		draw();
	};
	
	function onMove(e) {
		if (pointCollection)
			pointCollection.mousePos.set(e.pageX, e.pageY);
	};
	
	function onTouchMove(e) {
		if (pointCollection)
			pointCollection.mousePos.set(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
	};
	
	function timeout() {
		draw();
		update();
		
		setTimeout(function() { timeout() }, 30);
	};
	
	function draw() {
		var tmpCanvas = canvas.get(0);

		if (tmpCanvas.getContext == null) {
			return; 
		};
		
		ctx = tmpCanvas.getContext('2d');
		ctx.clearRect(0, 0, canvasWidth, canvasHeight);
		
		if (pointCollection)
			pointCollection.draw();
	};
	
	function update() {		
		if (pointCollection)
			pointCollection.update();
	};
	
	function Vector(x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;
 
		this.addX = function(x) {
			this.x += x;
		};
		
		this.addY = function(y) {
			this.y += y;
		};
		
		this.addZ = function(z) {
			this.z += z;
		};
 
		this.set = function(x, y, z) {
			this.x = x; 
			this.y = y;
			this.z = z;
		};
	};
	
	function PointCollection() {
		this.mousePos = new Vector(0, 0);
		this.points = new Array();
		
		this.newPoint = function(x, y, z) {
			var point = new Point(x, y, z);
			this.points.push(point);
			return point;
		};
		
		this.update = function() {		
			var pointsLength = this.points.length;
			
			for (var i = 0; i < pointsLength; i++) {
				var point = this.points[i];
				
				if (point == null)
					continue;
				
				var dx = this.mousePos.x - point.curPos.x;
				var dy = this.mousePos.y - point.curPos.y;
				var dd = (dx * dx) + (dy * dy);
				var d = Math.sqrt(dd);
				
				if (d < 150) {
					point.targetPos.x = (this.mousePos.x < point.curPos.x) ? point.curPos.x - dx : point.curPos.x - dx;
					point.targetPos.y = (this.mousePos.y < point.curPos.y) ? point.curPos.y - dy : point.curPos.y - dy;
				} else {
					point.targetPos.x = point.originalPos.x;
					point.targetPos.y = point.originalPos.y;
				};
				
				point.update();
			};
		};
		
		this.draw = function() {
			var pointsLength = this.points.length;
			for (var i = 0; i < pointsLength; i++) {
				var point = this.points[i];
				
				if (point == null)
					continue;

				point.draw();
			};
		};
	};
	
	function Point(x, y, z, size, colour) {
		this.colour = colour;
		this.curPos = new Vector(x, y, z);
		this.friction = 0.8;
		this.originalPos = new Vector(x, y, z);
		this.radius = size;
		this.size = size;
		this.springStrength = 0.1;
		this.targetPos = new Vector(x, y, z);
		this.velocity = new Vector(0.0, 0.0, 0.0);
		
		this.update = function() {
			var dx = this.targetPos.x - this.curPos.x;
			var ax = dx * this.springStrength;
			this.velocity.x += ax;
			this.velocity.x *= this.friction;
			this.curPos.x += this.velocity.x;
			
			var dy = this.targetPos.y - this.curPos.y;
			var ay = dy * this.springStrength;
			this.velocity.y += ay;
			this.velocity.y *= this.friction;
			this.curPos.y += this.velocity.y;
			
			var dox = this.originalPos.x - this.curPos.x;
			var doy = this.originalPos.y - this.curPos.y;
			var dd = (dox * dox) + (doy * doy);
			var d = Math.sqrt(dd);
			
			this.targetPos.z = d/100 + 1;
			var dz = this.targetPos.z - this.curPos.z;
			var az = dz * this.springStrength;
			this.velocity.z += az;
			this.velocity.z *= this.friction;
			this.curPos.z += this.velocity.z;
			
			this.radius = this.size*this.curPos.z;
			if (this.radius < 1) this.radius = 1;
		};
		
		this.draw = function() {
			ctx.fillStyle = this.colour;
			ctx.beginPath();
			ctx.arc(this.curPos.x, this.curPos.y, this.radius, 0, Math.PI*2, true);
			ctx.fill();
		};
	};
	
	init();
});