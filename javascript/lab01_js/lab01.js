const fs = require('fs');

const format = "P3";
const width = 500;
const height = 500;
const color = 255;

function draw() {
	let drawscript = "";

	drawscript = `${format}\n${width} ${height}\n${color}\n`;


	for(let i = 0; i <= height; i++) {
		for(let j = 0; j <= width; j++) {
			let r = i / height;
			let g = j / width;
			let b = 0.2;
			drawscript += `${Math.floor(r * 255)} ${Math.floor(g * 255)} ${Math.floor(b * 255)}\n`;
		}
	}

	return drawscript;
}

function write() {
	fs.writeFileSync('./javascript/lab01_js/lab01.ppm', draw());
}

write();