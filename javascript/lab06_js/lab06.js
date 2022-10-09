// Bresenham's Line Algorithm 

const fs = require('fs');

const FORMAT = "P3";
const WIDTH = 256;
const HEIGHT = 256;
const COLOR = 255;

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

function draw(m, c) {
	for(let y = 0; y < HEIGHT; y++) {
		for(let x = 0; x < WIDTH; x++) {
			if(y === m * x + c) {
				DrawScript += `0 0 0\n`;
			} else {
				DrawScript += `255 255 255\n`;
			}
		}
	}
	return DrawScript;
}

function generate() {
	fs.writeFileSync('./javascript/lab06_js/lab06.ppm', draw());
}

generate();
