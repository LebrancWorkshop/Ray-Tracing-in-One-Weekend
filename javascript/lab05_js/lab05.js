const fs = require('fs');

const FORMAT = "P3";
const WIDTH = 256;
const HEIGHT = 256;
const COLOR = 255;

const DrawInformation = `${FORMAT}\n${WIDTH} ${HEIGHT}\n${COLOR}\n`;

let DrawScript = DrawInformation;

function draw() {
	for(let y = 0; y < HEIGHT; y++) {
		for(let x = 0; x < WIDTH; x++) {
			if(x >= HEIGHT / 2 || x >= y) {
				DrawScript += `0 0 0\n`;
			} else {
				DrawScript += `255 255 255\n`;
			}
		}
	}
	return DrawScript;
}

function generate() {
	fs.writeFileSync('./javascript/lab05_js/lab05.ppm', draw());
}

generate(); 