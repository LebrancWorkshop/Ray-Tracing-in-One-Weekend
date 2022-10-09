// Lab: Naive Line Algorithm. 

const fs = require('fs');

// Init.
const FORMAT = "P3";
const WIDTH = 256;
const HEIGHT = 256;
const COLOR = 255;

let DrawScript = `${FORMAT}\n${WIDTH} ${HEIGHT}\n${COLOR}\n`;

// Draw.
const Slope = 5; 
const Intercept = 9;
for(let y = 0; y < HEIGHT; y++) {
	for(let x = 0; x < WIDTH; x++) {
		if(y === Slope * x + Intercept) {
			DrawScript += `0 0 0\n`;
		} else {
			DrawScript += `255 255 255\n`;
		}
	}
}

// Generate. 
fs.writeFileSync('./javascript/line_drawing/naive.ppm', DrawScript);
