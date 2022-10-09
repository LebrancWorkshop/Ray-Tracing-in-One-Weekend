const fs = require('fs');

const format = "P3";
const width = 256;
const height = 256;
const color = 255;

const DrawInformation = `${FORMAT}\n${WIDTH} ${HEIGHT}\n${COLOR}\n`;

let DrawScript = DrawInformation;

class Vector2D {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	coordinate() {
		return [this.x, this.y];
	}

	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
}

function draw() {
	
}

function generate() {
	
}