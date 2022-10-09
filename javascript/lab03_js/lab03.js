const fs = require('fs');

// Init.
const FORMAT = "P3";
const WIDTH = 256;
const HEIGHT = 256;
const COLOR = 255;

const DrawInformation = `${FORMAT}\n${WIDTH} ${HEIGHT}\n${COLOR}\n`;

let DrawScript = DrawInformation;

// Draw. 
function draw() {
	for(let i = 0; i < HEIGHT; i++) {
		for(let j = 0; j < WIDTH; j++) {
			if(i === j || i === 256 - j) {
				DrawScript += `0 0 0\n`;
			} else {
				DrawScript += `255 255 255\n`;
			}
		}
	}
	return DrawScript;
}

function generate() {
	fs.writeFileSync('./lab03_js/lab03.ppm', draw());
}

generate(); 