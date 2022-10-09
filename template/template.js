const fs = require('fs');

let DrawScript = "";

function init() {
	const FORMAT = "P3";
	const WIDTH = 256;
	const HEIGHT = 256;
	const COLOR = 255;

	const DrawInformation = `${FORMAT}\n${WIDTH} ${HEIGHT}\n${COLOR}\n`;
	DrawScript = DrawInformation;
	return DrawScript;
}

function draw() {
	
}

function generate() {

}

function main() {
	init();
	draw();
	generate();
}

main();