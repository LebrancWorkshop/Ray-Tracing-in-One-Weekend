// Lab: Naive Line Algorithm. 

const fs = require('fs');

// Init.
const FORMAT = "P3";
const WIDTH = 256;
const HEIGHT = 256;
const COLOR = 255;

let DrawScript = `${FORMAT}\n${WIDTH} ${HEIGHT}\n${COLOR}\n`;

// Draw. 
const Slope = 0.5;
let expectedY = 0;

for(let y = 0; y < HEIGHT; y++) {
	for(let x = 0; x < WIDTH; x++) {
		let actualY = Math.ceil(expectedY);
		if(y === actualY) {
			DrawScript += `0 0 0\n`;
		} else {
			DrawScript += `255 255 255\n`;
		}
	}
	expectedY += Slope;
}

// Generate. 
fs.writeFileSync('./javascript/line_drawing/dda.ppm', DrawScript);