package main 

import (

)

const (
	format = "P3";
	width, height = 800, 600;
	color = 255;
)

func main() {
	detail := format + "\n" + width + " " + height + "\n" + color;
}