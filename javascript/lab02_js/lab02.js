const fs = require('fs');

// Init.
const FORMAT = "P3";
const WIDTH = 2;
const HEIGHT = 2;
const COLOR = 255;

const DrawInformation = `${FORMAT}\n${WIDTH} ${HEIGHT}\n${COLOR}\n`;

let DrawScript = DrawInformation;

// Draw. 
function draw() {
	let row1_col1 = "255 0 0";
	let row1_col2 = "0 255 0";
	let row2_col1 = "0 0 255";
	let row2_col2 = "255 255 255";
	DrawScript += `${row1_col1} ${row1_col2} \n ${row2_col1} ${row2_col2}\n`;
	return DrawScript;
}

function generate() {
	fs.writeFileSync('./lab02_js/lab02.ppm', draw());
}

generate(); 
