// Each shape is a 4x4 grid
function Shape() {
	this.form = [];
	this.orientation = 0;
	this.x = 4;
	this.y = -3;
}

Shape.prototype.moveDown = function() {
	this.y += 1;
};

Shape.prototype.moveRight = function() {
	this.x += 1;
};

Shape.prototype.moveLeft = function() {
	this.x -= 1;
};

Shape.prototype.rotateClockwise = function() {
	this.orientation = (this.orientation + 1) % 4;
};

Shape.prototype.rotateCounterClockwise = function() {
	this.orientation = (this.orientation + 3) % 4;
};

Shape.prototype.getBlocks = function(o) {
	o = o || this.orientation;
	var blocks = [];
	var currentForm = this.form[o];
	for (var i = 0; i < 4; i++) { 
		var row = currentForm[i].split(" ");
    	for (var j = 0; j < 4; j++) {
    		if (row[j] == '0') blocks.push({x: j + this.x, y: i + this.y});
		}
	}
	return blocks;
};

Shape.prototype.getBlocksRotatedClockwise = function() {
	return this.getBlocks((this.orientation + 1) % 4);
};

Shape.prototype.getBlocksRotatedCounterClockwise = function() {
	return this.getBlocks((this.orientation + 3) % 4);
};

Shape.prototype.getBlocksMovedRight = function() {
	return this.getBlocks((this.orientation + 3) % 4);
};

Shape.prototype.getBlocksMovedLeft = function() {
	return this.getBlocks((this.orientation + 3) % 4);
};

Shape.prototype.getBlocksMovedDown = function() {
	return this.getBlocks((this.orientation + 3) % 4);
};

function I() {
	Shape.call(this);
	this.color = "#007889";

	this.form[0] = ['. . 0 .',
					'. . 0 .',
					'. . 0 .',
					'. . 0 .'];

	this.form[1] = ['. . . .',
					'. . . .',
					'0 0 0 0',
					'. . . .'];

	this.form[2] = ['. . 0 .',
					'. . 0 .',
					'. . 0 .',
					'. . 0 .'];

	this.form[3] = ['. . . .',
					'. . . .',
					'0 0 0 0',
					'. . . .'];
}
I.prototype = Object.create(Shape.prototype);

function J() {
	Shape.call(this);
	this.color = "#f4901e";

	this.form[0] = ['. 0 . .',
					'. 0 . .',
					'0 0 . .',
					'. . . .'];

	this.form[1] = ['0 . . .',
					'0 0 0 .',
					'. . . .',
					'. . . .'];

	this.form[2] = ['0 0 . .',
					'0 . . .',
					'0 . . .',
					'. . . .'];

	this.form[3] = ['0 0 0 .',
					'. . 0 .',
					'. . . .',
					'. . . .'];
}
J.prototype = Object.create(Shape.prototype);

function L() {
	Shape.call(this);
	this.color = "#f4901e";

	this.form[0] = ['0 . . .',
					'0 . . .',
					'0 0 . .',
					'. . . .'];

	this.form[1] = ['. . . .',
					'0 0 0 .',
					'0 . . .',
					'. . . .'];

	this.form[2] = ['0 0 . .',
					'. 0 . .',
					'. 0 . .',
					'. . . .'];

	this.form[3] = ['. . . .',
					'. . 0 .',
					'0 0 0 .',
					'. . . .'];
}
L.prototype = Object.create(Shape.prototype);

function O() {
	Shape.call(this);
	this.color = "#004852";

	this.form[0] = ['0 0 . .',
					'0 0 . .',
					'. . . .',
					'. . . .'];

	this.form[1] = ['0 0 . .',
					'0 0 . .',
					'. . . .',
					'. . . .'];

	this.form[2] = ['0 0 . .',
					'0 0 . .',
					'. . . .',
					'. . . .'];

	this.form[3] = ['0 0 . .',
					'0 0 . .',
					'. . . .',
					'. . . .'];
}
O.prototype = Object.create(Shape.prototype);

function S() {
	Shape.call(this);
	this.color = "#6b8085";

	this.form[0] = ['. 0 0 .',
					'0 0 . .',
					'. . . .',
					'. . . .'];

	this.form[1] = ['0 . . .',
					'0 0 . .',
					'. 0 . .',
					'. . . .'];

	this.form[2] = ['. 0 0 .',
					'0 0 . .',
					'. . . .',
					'. . . .'];

	this.form[3] = ['0 . . .',
					'0 0 . .',
					'. 0 . .',
					'. . . .'];
}
S.prototype = Object.create(Shape.prototype);

function T() {
	Shape.call(this);
	this.color = "#febabb";

	this.form[0] = ['. 0 . .',
					'0 0 0 .',
					'. . . .',
					'. . . .'];

	this.form[1] = ['. 0 . .',
					'. 0 0 .',
					'. 0 . .',
					'. . . .'];

	this.form[2] = ['. . . .',
					'0 0 0 .',
					'. 0 . .',
					'. . . .'];

	this.form[3] = ['. 0 . .',
					'0 0 . .',
					'. 0 . .',
					'. . . .'];	
}
T.prototype = Object.create(Shape.prototype);

function Z() {
	Shape.call(this);
	this.color = "#2f0d0d";

	this.form[0] = ['0 0 . .',
					'. 0 0 .',
					'. . . .',
					'. . . .'];

	this.form[1] = ['. 0 . .',
					'0 0 . .',
					'0 . . .',
					'. . . .'];

	this.form[2] = ['0 0 . .',
					'. 0 0 .',
					'. . . .',
					'. . . .'];

	this.form[3] = ['. 0 . .',
					'0 0 . .',
					'0 . . .',
					'. . . .'];	
}
Z.prototype = Object.create(Shape.prototype);
