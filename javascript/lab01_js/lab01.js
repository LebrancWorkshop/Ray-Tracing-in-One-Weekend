const fs = require('fs');

const format = "P3";
const width = 256;
const height = 256;
const color = 255;

function draw() {
	let drawscript = "";

	drawscript = `${format}\n${width} ${height}\n${color}\n`;


	for(let i = 0; i <= height; i++) {
		for(let j = 0; j <= width; j++) {
			let r = i / width;
			let g = j / height;
			let b = 0.2;
			drawscript += `${Math.floor(r * 255)} ${Math.floor(g * 255)} ${Math.floor(b * 255)}\n`;
		}
	}

	return drawscript;
}

function write() {
	fs.writeFileSync('./lab01_js/lab01.ppm', draw());
}

write();